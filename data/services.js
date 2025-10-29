export const catalogData = [
  {
    id: "digital-solutions",
    name: "デジタルソリューション",
    summary: "DX推進を支援するアプリケーション開発と運用サービス",
    tags: ["DX", "アプリ開発", "運用保守"],
    services: [
      {
        id: "web-app-dev",
        name: "業務用Webアプリ開発",
        summary: "要件定義から保守までワンストップで提供するWebアプリ構築サービス",
        price: "450,000円〜",
        delivery: "約6週間 (要件に応じて変動)",
        deliveryKey: "1-month",
        scope: "要件定義 / UI設計 / 実装 / テスト / 保守",
        points: [
          "要件整理ワークショップで業務課題を可視化",
          "React/Vueなどモダンフレームワークに対応",
          "セキュリティ要件を満たすコードレビュー体制"
        ],
        tags: ["フルスクラッチ", "クラウド対応", "保守契約"],
        priceKey: "over-600k"
      },
      {
        id: "no-code-prototype",
        name: "ノーコードPoC構築",
        summary: "最短2週間でビジネス検証を行う小規模アプリ構築",
        price: "120,000円〜",
        delivery: "2週間",
        deliveryKey: "2-weeks",
        scope: "プロトタイピング / UI構築 / 連携設定",
        points: [
          "Bubble, Adaloなど主要ノーコードプラットフォームに対応",
          "要件定義サポートと運用トレーニングをセット提供",
          "PoC終了後の内製化支援資料を提供"
        ],
        tags: ["ノーコード", "短納期", "PoC"],
        priceKey: "100-300k"
      }
    ]
  },
  {
    id: "creative",
    name: "クリエイティブ制作",
    summary: "ブランド価値を高めるクリエイティブ制作メニュー",
    tags: ["デザイン", "ブランディング", "制作"],
    services: [
      {
        id: "corporate-site-refresh",
        name: "コーポレートサイト刷新",
        summary: "ブランディング設計からデザイン、CMS構築まで対応",
        price: "680,000円〜",
        delivery: "約8週間",
        deliveryKey: "1-month",
        scope: "ブランド設計 / UXリサーチ / デザイン / 実装",
        points: [
          "KPIに基づいたコンテンツ戦略を策定",
          "アクセシビリティとパフォーマンスに配慮した実装",
          "公開後1か月の改善サポート付き"
        ],
        tags: ["WordPress", "リニューアル", "UX"],
        priceKey: "over-600k"
      },
      {
        id: "lp-production",
        name: "キャンペーンLP制作",
        summary: "最短10営業日で成果に繋がるLPを制作",
        price: "180,000円〜",
        delivery: "10営業日",
        deliveryKey: "2-weeks",
        scope: "構成 / デザイン / コーディング / 計測設定",
        points: [
          "KPIに合わせたシナリオ設計",
          "レスポンシブ対応とABテスト提案",
          "広告運用チームとの連携サポート"
        ],
        tags: ["LP", "短納期", "広告連携"],
        priceKey: "100-300k"
      }
    ]
  },
  {
    id: "marketing",
    name: "マーケティング支援",
    summary: "リード獲得から育成までを支援するソリューション",
    tags: ["マーケ", "自動化", "分析"],
    services: [
      {
        id: "marketing-automation",
        name: "マーケティングオートメーション導入支援",
        summary: "MAツール選定からシナリオ設計、運用まで支援",
        price: "320,000円〜",
        delivery: "4週間",
        deliveryKey: "1-month",
        scope: "要件整理 / ツール設定 / スコアリング設計 / 教育",
        points: [
          "Salesforce, HubSpot, Marketoに対応",
          "初期シナリオ10本までテンプレート提供",
          "運用フレームワークのドキュメントを提供"
        ],
        tags: ["自動化", "SaaS連携", "育成"],
        priceKey: "300-600k"
      },
      {
        id: "seo-audit",
        name: "SEOサイト監査",
        summary: "検索順位向上のための技術・コンテンツ両面からの監査",
        price: "95,000円",
        delivery: "7営業日",
        deliveryKey: "1-week",
        scope: "技術監査 / キーワード分析 / レポート作成",
        points: [
          "200項目以上の診断チェックリスト",
          "優先度と工数を明確にした改善ロードマップ",
          "検索トレンドを踏まえたコンテンツ提案"
        ],
        tags: ["SEO", "分析", "レポート"],
        priceKey: "under-100k"
      }
    ]
  },
  {
    id: "operations",
    name: "運用・サポート",
    summary: "既存システムやサイトの安定運用を支援",
    tags: ["運用", "サポート", "保守"],
    services: [
      {
        id: "site-maintenance",
        name: "サイト保守パッケージ",
        summary: "更新作業と監視を組み合わせた月次保守プラン",
        price: "55,000円 / 月",
        delivery: "初期設定 5営業日",
        deliveryKey: "1-week",
        scope: "監視設定 / バックアップ / 月次レポート / 軽微改修",
        points: [
          "24時間監視と障害一次対応",
          "定例会での改善提案",
          "チケットベースの改修依頼に対応"
        ],
        tags: ["保守", "監視", "月額"],
        priceKey: "under-100k"
      },
      {
        id: "content-ops",
        name: "コンテンツ運用サポート",
        summary: "CMSを活用した記事・ページ更新の伴走支援",
        price: "150,000円 / 月",
        delivery: "初回キックオフまで10営業日",
        deliveryKey: "2-weeks",
        scope: "更新代行 / 編集会議 / レポート / 改善提案",
        points: [
          "SEOライティングガイドラインの整備",
          "アクセス解析に基づく改善サイクル",
          "社内オペレーションの内製化支援"
        ],
        tags: ["コンテンツ", "月額", "伴走"],
        priceKey: "100-300k"
      }
    ]
  }
];

export const lastUpdated = "2024年5月15日";
