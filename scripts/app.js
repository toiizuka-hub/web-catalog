import { catalogData, lastUpdated } from "../data/services.js";

const catalogContainer = document.getElementById("catalog");
const tocList = document.getElementById("toc-list");
const categoryFilter = document.getElementById("category-filter");
const deliveryFilter = document.getElementById("delivery-filter");
const priceFilter = document.getElementById("price-filter");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const lastUpdatedElement = document.getElementById("last-updated");

const categoryTemplate = document.getElementById("category-template");
const serviceTemplate = document.getElementById("service-card-template");

const priceRanges = {
  "under-100k": { label: "10万円未満", min: 0, max: 100000 },
  "100-300k": { label: "10万〜30万円", min: 100000, max: 300000 },
  "300-600k": { label: "30万〜60万円", min: 300000, max: 600000 },
  "over-600k": { label: "60万円以上", min: 600000, max: Infinity }
};

const state = {
  category: "all",
  delivery: "all",
  price: "all",
  keyword: ""
};

const normalize = (text) =>
  text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) =>
      String.fromCharCode(s.charCodeAt(0) - 0xfee0)
    );

const matchesKeyword = (service, keyword) => {
  if (!keyword) return true;
  const normalizedKeyword = normalize(keyword);
  const targetText = normalize(
    [
      service.name,
      service.summary,
      service.scope,
      service.tags.join(" ")
    ].join(" ")
  );
  return targetText.includes(normalizedKeyword);
};

const matchesDelivery = (service, delivery) => {
  if (delivery === "all") return true;
  return service.deliveryKey === delivery;
};

const priceToNumber = (priceText) => {
  const numeric = priceText
    .replace(/[^0-9.]/g, "")
    .replace(/\.(?=.*\.)/g, "");
  return Number.parseInt(numeric, 10);
};

const matchesPrice = (service, price) => {
  if (price === "all") return true;
  if (!service.priceKey) {
    const amount = priceToNumber(service.price);
    const range = priceRanges[price];
    return amount >= range.min && amount < range.max;
  }
  return service.priceKey === price;
};

const createTag = (label) => {
  const span = document.createElement("span");
  span.className = "tag";
  span.textContent = label;
  return span;
};

const createServiceCard = (service) => {
  const node = serviceTemplate.content.firstElementChild.cloneNode(true);
  node.id = service.id;
  node.querySelector(".service-name").textContent = service.name;
  node.querySelector(".service-summary").textContent = service.summary;
  node.querySelector(".service-price").textContent = service.price;
  node.querySelector(".service-delivery").textContent = service.delivery;
  node.querySelector(".service-scope").textContent = service.scope;

  const pointsList = node.querySelector(".service-points");
  pointsList.innerHTML = "";
  service.points.forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    pointsList.appendChild(li);
  });

  const tagsContainer = node.querySelector(".tags");
  tagsContainer.innerHTML = "";
  service.tags.forEach((tag) => tagsContainer.appendChild(createTag(tag)));

  return node;
};

const createCategorySection = (category) => {
  const node = categoryTemplate.content.firstElementChild.cloneNode(true);
  node.id = category.id;
  node.querySelector("h2").textContent = category.name;
  node.querySelector(".category-summary").textContent = category.summary;

  const tagsContainer = document.createElement("div");
  tagsContainer.className = "category-tags";
  category.tags.forEach((tag) => tagsContainer.appendChild(createTag(tag)));
  node.querySelector(".category-header").appendChild(tagsContainer);

  return node;
};

const updateToc = () => {
  tocList.innerHTML = "";
  catalogData.forEach((category) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${category.id}`;
    link.textContent = category.name;
    li.appendChild(link);

    const servicesList = document.createElement("ul");
    category.services.forEach((service) => {
      const serviceItem = document.createElement("li");
      const serviceLink = document.createElement("a");
      serviceLink.href = `#${service.id}`;
      serviceLink.textContent = service.name;
      serviceItem.appendChild(serviceLink);
      servicesList.appendChild(serviceItem);
    });

    li.appendChild(servicesList);
    tocList.appendChild(li);
  });
};

const populateCategoryFilter = () => {
  const fragment = document.createDocumentFragment();
  catalogData.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.name;
    fragment.appendChild(option);
  });
  categoryFilter.appendChild(fragment);
};

const filterServices = (category) => {
  const matchesCategory =
    state.category === "all" || state.category === category.id;

  if (!matchesCategory) {
    return [];
  }

  return category.services.filter(
    (service) =>
      matchesKeyword(service, state.keyword) &&
      matchesDelivery(service, state.delivery) &&
      matchesPrice(service, state.price)
  );
};

const renderCatalog = () => {
  catalogContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();

  catalogData.forEach((category) => {
    const filteredServices = filterServices(category);
    if (!filteredServices.length) {
      return;
    }

    const categoryNode = createCategorySection(category);
    const servicesContainer = categoryNode.querySelector(".services");
    filteredServices.forEach((service) => {
      servicesContainer.appendChild(createServiceCard(service));
    });

    fragment.appendChild(categoryNode);
  });

  if (!fragment.childNodes.length) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-state";
    emptyMessage.textContent =
      "条件に一致するサービスが見つかりませんでした。フィルター条件を変更してください。";
    catalogContainer.appendChild(emptyMessage);
  } else {
    catalogContainer.appendChild(fragment);
  }
};

const updateState = () => {
  state.category = categoryFilter.value;
  state.delivery = deliveryFilter.value;
  state.price = priceFilter.value;
  state.keyword = searchInput.value;
};

const handleFiltersChange = () => {
  updateState();
  renderCatalog();
};

const handleSearchSubmit = (event) => {
  event.preventDefault();
  updateState();
  renderCatalog();
};

const init = () => {
  lastUpdatedElement.textContent = lastUpdated;
  updateToc();
  populateCategoryFilter();
  updateState();
  renderCatalog();

  categoryFilter.addEventListener("change", handleFiltersChange);
  deliveryFilter.addEventListener("change", handleFiltersChange);
  priceFilter.addEventListener("change", handleFiltersChange);
  searchForm.addEventListener("submit", handleSearchSubmit);
  searchInput.addEventListener("input", () => {
    state.keyword = searchInput.value;
    renderCatalog();
  });
};

init();
