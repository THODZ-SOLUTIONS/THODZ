// Japanese UI strings. Mirrors en.js key for key. Written in です・ます体,
// the register Japanese corporate sites use, with Japanese punctuation
// (、。) rather than transliterated Latin punctuation.

const ja = {
  meta: {
    title: 'THODZ SOLUTIONS：フルスタック開発スタジオ',
    template: '%s · THODZ SOLUTIONS',
    description:
      'THODZ SOLUTIONS は、一度で確実に仕上げたいチームのために、Web・モバイル・デスクトップ・インフラのシステムを設計し、構築し、運用します。アルジェリアを拠点に、フランス語・英語・アラビア語でリモート対応しています。',
    ogDescription: '技術パートナーは一社で。必要なシステムは、すべて。',
    orgDescription:
      'Web、モバイル、デスクトップ、DevOps、セキュリティ、AI/ML、自動化、UI/UX、技術コンサルティングを手がけるフルスタック開発スタジオ。',
  },

  nav: {
    problems: '解決できる課題',
    work: '実績',
    howItRuns: '進め方',
    pricing: '料金',
    faq: 'よくある質問',
    about: '私たちについて',
    bookCall: '打ち合わせを予約',
    startProject: 'プロジェクトを始める',
    openMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
    theme: {
      system: 'テーマ：ブラウザに合わせる',
      light: 'テーマ：ライト',
      dark: 'テーマ：ダーク',
    },
    languageAuto: '自動',
    languageAutoHint: 'ブラウザに合わせる',
    languageLabel: '言語',
  },

  footer: {
    blurb:
      'フルスタックの開発スタジオです。Web、モバイル、デスクトップ、インフラのシステムを、責任を持つひとつのチームが構築し、運用します。',
    locale: 'アルジェリア（UTC+1）· リモート対応',
    company: '会社',
    contact: 'お問い合わせ',
    elsewhere: 'その他',
    rights: 'All rights reserved.',
    privacy: 'プライバシー',
    terms: '利用規約',
  },

  engagementCard: {
    scoped: 'プロジェクトごとに見積',
    placeholderFlag: '参考値',
    bestFor: '向いているケース',
    billing: 'お支払い',
    includes: '含まれるもの',
  },

  notFound: {
    title: 'ページが見つかりません',
    body: 'お探しのページは存在しないか、移動しました。',
    backHome: 'ホームへ戻る',
  },

  home: {
    // --- hero
    heroEyebrow: '開発スタジオ · アルジェリア',
    heroTitle: 'ソフトウェアのすべてを、ひとつのチームで。',
    heroSub:
      '事業を支える Web、モバイル、デスクトップ、インフラのシステムを設計し、構築し、運用します。公開後も連絡がつく体制を保ちます。',
    heroCtaPrimary: '30分の打ち合わせを予約',
    heroCtaSecondary: '納品した実績を見る',
    heroAssuranceReply: '1営業日以内に返信',
    heroAssurancePrice: '着手前に固定料金',

    // --- 01 problems
    problemLabel: '課題から始める',
    problemTitle: '何が妨げになっているか教えてください。何を作るかをお見せします。',
    problemSub:
      '必要な技術が何かを知っている必要はありません。ご自身の状況に近い一文を選んでください。',
    pickerLabel: 'よくある課題',
    whatWedBuild: '私たちが作るもの',
    firstStep: '最初のステップ',
    weveShipped: '実際に納品しています',
    disciplinesNote: 'この案件に関わる領域（9分野から該当するもの）',

    // --- 02 shipped
    shippedLabel: '納品実績',
    shippedTitle: '毎日使われている、実際のシステム。',
    before: '以前',
    after: '現在',
    previous: '前のプロジェクト',
    next: '次のプロジェクト',
    readCase: '事例を読む',
    viewAllProjects: 'すべてのプロジェクトを見る',

    // --- proof (hidden until a real, approved quote exists)
    proofEyebrow: 'お客様の声',

    // --- open source
    openSourceLabel: 'オープンソース',
    openSourceTitle: '世界に向けて作ったツールが、御社のアプリの中で動きます。',
    openSourceSub:
      '私たちはアプリを作るだけではありません。ほかの開発者が頼るツールも作っています。それらは Flutter ツールの公式な配布先である pub.dev で、世界中の開発者に無償で公開しています。ご一緒するときは、初日から同じ水準の技術が手に入ります。',
    openSourceCta: 'pub.dev で見る',
    openSourceClosing: 'この細やかさで、すべてのプロジェクトに取り組みます。御社の案件も同じです。',

    // --- 03 timeline
    timelineLabel: '進め方',
    timelineTitle: '各段階で手に入るもの。想定外はありません。',
    timelineSub:
      'プロジェクトを作る本人と直接やり取りし、最後だけでなく全工程を通じて実際の進捗を確認できます。',

    // --- 04 pricing
    pricingLabel: '料金',
    pricingTitle: 'コードを一行書く前に、金額をお見せします。',
    pricingSub: 'ご一緒する形は3通り。2つの質問にお答えいただければ、合うものをお示しします。',
    qKnown: '何を作るか、はっきり決まっていますか？',
    qLive: 'そのシステムはすでに稼働していますか？',
    yes: 'はい',
    no: 'いいえ',
    notYet: 'まだです',
    fitsYourAnswers: 'ご回答に合う形',
    cardCta: 'ここから始める',
    pricingCta: 'すべての形、お支払いと契約条件',

    // --- 05 faq
    faqLabel: 'ご契約の前に',
    faqTitle: 'お客様が最初に尋ねる質問。',
    faqSub: 'ほかにご質問があれば、こちらへ',

    // --- 06 start
    startLabel: 'スタート',
    startTitle: '遅い、壊れている、足りない。その中身を教えてください。',
    preferToTalk: '話したほうが早いですか？',
    channelBookSub: 'ご都合のよい時間をお選びください',
    channelEmail: 'メール',
    startNote:
      'アルジェリア · UTC+1 · フランス語・英語・アラビア語でリモート対応しています。',
  },

  about: {
    metaTitle: '私たちについて',
    metaDescription:
      'THODZ SOLUTIONS はフルスタックの開発スタジオです。一度で確実に仕上げたいチームのための、技術パートナー。その担い手をご紹介します。',
    ogDescription: '開発スタジオを担う人たちと、その働き方。',
    headEyebrow: '私たちについて',
    heroTitle:
      'THODZ SOLUTIONS は、ロードマップに必要なシステムを構築し、公開後も対応を続けます。',
    intro1:
      '私たちはフルスタックの開発スタジオです。Web、モバイル、デスクトップ、DevOps、セキュリティ、AI/ML、自動化、UI/UX、技術コンサルティングをひとつのチームが担います。9社と付き合うのではなく、システムを一度決めれば済みます。',
    intro2:
      '時差を越えてリモートでご一緒し、案件に応じてフランス語・英語・アラビア語で納品します。どの案件にも、文書化されたアーキテクチャ、運用手順書、そして公開後も連絡がつく技術者がつきます。サポート窓口に引き継いで終わりにはしません。',
    teamEyebrow: 'ご一緒する相手',
    teamTitleSingle: 'メールに返信する本人です。',
    teamTitlePlural: 'メールに返信する本人たちです。',
    teamSub: '営業担当は間に入りません。コードを書く本人とやり取りします。',
    coverEyebrow: '対応範囲',
    ctaTitle: '作りたいシステムがありますか？',
    ctaPrimary: 'プロジェクトを始める',
    ctaSecondary: 'お支払いの仕組みを見る',
  },

  contact: {
    metaTitle: 'お問い合わせ',
    metaDescription:
      '必要なシステムについて THODZ SOLUTIONS にお聞かせください。フォーム、WhatsApp、メール、または予約した打ち合わせで承ります。1営業日以内に返信します。',
    ogDescription: '営業ではなく技術者と話せます。1営業日以内に返信します。',
    eyebrow: 'プロジェクトを始める',
    title: '必要なシステムについてお聞かせください。',
    bookingDetail: 'ご都合のよい時間をお選びください',
    whatsappLabel: 'WhatsApp',
    whatsappPrefill: 'THODZ さん、プロジェクトについて相談したいです。',
    emailLabel: 'メール',
    callLabel: '電話',
    divider: 'または詳細を送る',
    nextEyebrow: 'このあとの流れ',
    nextSteps: [
      { title: '私たちが読みます', body: 'メッセージを読むのは技術者です。振り分けツールでも営業でもありません。' },
      { title: '1営業日以内に返信します', body: '最初の確認事項、ご一緒できるかの率直な見立て、そして打ち合わせの候補日を添えて。' },
      { title: '一緒に要件を固めます', body: 'まず課題を絞り込む打ち合わせ、そのあと着手前に書面の要件と金額をお出しします。' },
    ],
  },

  form: {
    name: 'お名前',
    email: '会社のメールアドレス',
    company: '会社名',
    projectType: 'プロジェクトの種類',
    // Values are what the API receives and stay stable across locales; only
    // labels translate.
    typeOptions: [
      { value: 'Web', label: 'Web' },
      { value: 'Mobile', label: 'モバイル' },
      { value: 'Desktop', label: 'デスクトップ' },
      { value: 'DevOps', label: 'DevOps' },
      { value: 'Cybersecurity', label: 'セキュリティ' },
      { value: 'AI/ML', label: 'AI/ML' },
      { value: 'Automation', label: '自動化' },
      { value: 'UI/UX', label: 'UI/UX' },
      { value: 'Consulting', label: 'コンサルティング' },
    ],
    timeline: '希望時期',
    timelineAsap: 'できるだけ早く',
    timelineQuarter: '1〜3か月',
    timelineFlexible: '柔軟に調整可',
    details: 'プロジェクトの詳細',
    detailsPlaceholder: '何を作るのか、一言か二言で',
    nda: 'この案件は秘密保持契約の対象です',
    error:
      'メッセージの送信中に問題が発生しました。お手数ですが support@thodz.com へ直接お送りください。',
    sending: '送信中…',
    send: '送信',
    privacyPre: 'いただいた情報はご返信のためだけに使います。詳しくは',
    privacyLink: 'プライバシーポリシー',
    privacyPost: 'をご覧ください。',
    sentTitle: '送信しました',
    sentBody: 'THODZ の技術者が1営業日以内に返信します。',
  },

  pricing: {
    metaTitle: '料金とご一緒する形',
    metaDescription:
      'THODZ SOLUTIONS の案件の組み立て方とお支払い方法：固定料金のプロジェクト、月額契約、サポートプラン、コンサルティング。あわせて、コードの権利、契約の範囲、公開後の扱いについて。',
    ogDescription: 'ご一緒する4つの形と、その背後にある契約条件。',
    headEyebrow: '料金とご一緒する形',
    headTitle: 'ご一緒する形は4通り。',
    headSub:
      'どの案件も着手前に要件を固めてお見積りします。金額が積み上がるのを見ているのではなく、金額を承認していただく形です。そのお見積りが取る形が、この4つです。',
    unsure:
      'どれが合うか分からない場合は、課題をお聞かせください。この中のどれにあたるかをお伝えします。「どれでもありません。これに私たちは必要ありません」という答えになる場合も含めて。',
    faqEyebrow: '詳細',
    faqTitle: '契約の前に確かめておきたいこと。',
    faqSub: 'コードの権利、お支払い、契約、そしてシステムが動き出したあとのこと。',
    ctaTitle: 'パンフレットではなく、金額を。',
    ctaBody:
      '何を作るのかお聞かせください。1営業日以内に、合う形とその費用をお返しします。',
    ctaButton: 'プロジェクトを始める',
  },

  work: {
    metaTitle: '実績',
    metaDescription:
      'THODZ SOLUTIONS が納品した案件の一部：小売、ヘルステック、フィンテック、物流、エドテック、応用コンピュータビジョン。実際に公開されたものの画面つきで。',
    ogDescription: '納品した案件の一部を、実際の画面とともに。',
    headEyebrow: '主な実績',
    headTitle: '納品してきたもの。',
    headSub: '案件の記録です。プロジェクトが完了するたびに、ここに追加されます。',
  },

  caseStudy: {
    breadcrumbHome: 'ホーム',
    breadcrumbWork: '実績',
    back: '実績一覧へ戻る',
    clientPrefix: 'クライアント / ',
    headlineResult: '主な成果',
    challenge: '課題',
    approach: 'アプローチ',
    result: '結果',
    whatShipped: '納品したもの',
    insideBuild: '中身を見る',
    nextCase: '次の事例',
    nextArrow: '→',
    startProject: 'プロジェクトを始める',
  },

  privacy: {
    metaTitle: 'プライバシーポリシー',
    metaDescription:
      'お問い合わせの際に THODZ SOLUTIONS が取得する情報、その理由、そして削除の依頼方法について。',
    ogDescription: '取得する情報、その理由、そして削除の依頼方法。',
    title: 'プライバシーポリシー',
    updated: '最終更新：2026年8月',
    intro:
      'このサイトは、アルジェリアを拠点とする開発スタジオ THODZ SOLUTIONS が運営しています。このページでは、サイトが扱う個人情報の内容と理由、そしてそれに対してできることを説明します。要約すると、お問い合わせフォームに入力された内容を取得し、ご返信のために使い、それ以外には使いません。',
    sections: [
      {
        h: '取得する情報',
        items: [
          {
            lead: 'お問い合わせフォーム。',
            text: 'お名前、会社のメールアドレス、会社名、プロジェクトの種類、希望時期、そしてご記入いただいた詳細。フォームを送信すると、技術者が返信できるよう、これらの項目がそのままメールで私たちに届きます。',
          },
          {
            lead: '直接の連絡手段。',
            text: 'メール、電話、WhatsApp でご連絡いただいた場合、それらのサービスが表示する内容、つまりアドレスまたは番号とメッセージが私たちに見えます。',
          },
          {
            lead: 'テーマの設定。',
            text: 'ライト／ダークの切り替えは、ご自身のブラウザ（localStorage）に保存されます。端末の外に出ることはありません。',
          },
        ],
      },
      {
        h: '行わないこと',
        items: [
          { text: '広告トラッカーは使いません。第三者への販売や提供も行いません。' },
          { text: 'マーケティングリストはありません。ご連絡いただいても、何かに登録されることはありません。' },
          { text: 'プロファイリングは行いません。メッセージを読むのはツールではなく技術者です。' },
        ],
      },
      {
        h: '保存期間',
        ps: [
          'プロジェクトのお問い合わせは、そのやり取り、または後続の案件が続いているあいだ保管します。お問い合わせが形にならなかった場合、保管しておく理由はありません。',
        ],
      },
      {
        h: 'お客様の選択',
        ps: [
          '{email} までご連絡いただければ、保有している情報の開示、訂正、削除に対応します。プロジェクトのお問い合わせと同じく、1営業日以内に返信します。',
        ],
      },
      {
        h: '委託先',
        ps: [
          'サイトは Cloudflare でホスティングし、お問い合わせフォームの送信内容は Supabase がホストするデータベースに保存され、あわせてメール配信サービスを通じて私たちの受信箱にも届きます。いずれも、これらの機能を提供するために私たちに代わってデータを処理するものであり、ほかの目的には使いません。',
        ],
      },
      {
        h: '変更について',
        ps: [
          'このポリシーを変更した場合は、冒頭の日付も変わります。実質的な変更はここに明記し、黙って差し替えることはしません。',
        ],
      },
    ],
  },

  terms: {
    metaTitle: '利用規約',
    metaDescription:
      'thodz.com のご利用条件と、THODZ SOLUTIONS の案件が前提とする基本条件について。',
    ogDescription: 'サイトの利用条件と、すべての案件契約が出発点とする基本条件。',
    title: '利用規約',
    updated: '最終更新：2026年8月',
    intro:
      'この規約は、本ウェブサイトのご利用に適用されます。お客様との案件は、プロジェクトごとに締結する書面契約によって規律されます。以下の基本的な約束は、その契約が何を前提に組み立てられているかを示すものです。契約書を目にする前に、取引の形をご理解いただくためのものです。',
    sections: [
      {
        h: '本サイトのご利用',
        items: [
          { text: 'ここに掲載する内容は、私たちのサービスと過去の実績を説明するためのものです。' },
          {
            text: '事例は実際の案件を記したものです。クライアント名を出せない場合は、特定につながらない形で記述しています。',
          },
          { text: 'サイトを不正に利用しないでください。過度な頻度でのスクレイピング、探索行為、妨害を目的とした行為はご遠慮ください。' },
        ],
      },
      {
        h: '案件の基本条件',
        ps: ['私たちが締結するすべてのプロジェクト契約は、次の立場から出発します。'],
        items: [
          {
            lead: '成果物はお客様のものです。',
            text: '全額のお支払いをもって、プロジェクトのために制作したコード、デザイン、文書はお客様に移転します。',
          },
          {
            lead: '範囲と金額は着手前に書面で定めます。',
            text: '変更は変更として合意するものであり、請求書を見て初めて知るものではありません。',
          },
          {
            lead: '秘密保持は標準です。',
            text: '合理的な秘密保持契約には応じます。また、締結の有無にかかわらず、未公開のプロジェクト情報は秘密として扱います。',
          },
          {
            lead: '公開後について。',
            text: '納品には文書と運用手順書が含まれ、契約に定める範囲で不具合対応も含まれます。',
          },
        ],
      },
      {
        h: 'サイト内容に対する保証',
        ps: [
          '本サイトは現状のまま提供されます。内容は正確に保つよう努めていますが、助言でも契約でもありません。双方が要件に署名するまで、ここに記載された内容が案件を成立させることはありません。',
        ],
      },
      {
        h: '責任',
        ps: [
          '法律が認める範囲において、本ウェブサイトの利用に起因する損害について私たちは責任を負いません。案件における責任は、その案件の契約に定めます。',
        ],
      },
      {
        h: 'お問い合わせ',
        ps: ['本規約に関するご質問：{email}'],
      },
    ],
  },
};

export default ja;
