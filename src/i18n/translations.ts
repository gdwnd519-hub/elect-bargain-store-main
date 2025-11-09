export type Language = 'jp' | 'en';

export type PageType = 'home' | 'privacy-policy';

export interface Translations {
  nav: {
    vision: string;
    business: string;
    company: string;
    contact: string;
  };
  vision: {
    title: string;
    description: string;
  };
  business: {
    title: string;
    heading: string;
    subtitle: string;
    content: string;
  };
  company: {
    title: string;
    subtitle: string;
    info: {
      name: { label: string; value: string };
      representative: { label: string; value: string };
      address: { label: string; value: string };
      capital: { label: string; value: string };
      phone: { label: string; value: string };
      fax: { label: string; value: string };
      business: { label: string; value: string };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    heading: string;
    companyName: string;
    address: string;
    form: {
      companyName: string;
      contactPerson: string;
      phone: string;
      email: string;
      message: string;
      submit: string;
      confirm: string;
      back: string;
      send: string;
      reset: string;
    };
    validation: {
      required: string;
      emailInvalid: string;
      phoneInvalid: string;
    };
    modal: {
      confirmTitle: string;
      confirmMessage: string;
      successTitle: string;
      successMessage: string;
      errorTitle: string;
      errorMessage: string;
      close: string;
    };
  };
  privacyPolicy: {
    title: string;
    intro: string;
    sections: {
      security: {
        title: string;
        content: string;
      };
      collection: {
        title: string;
        content: string;
      };
      purpose: {
        title: string;
        content: string;
        items: string[];
      };
      disclosure: {
        title: string;
        content: string;
      };
      rights: {
        title: string;
        content: string;
      };
      contact: {
        title: string;
        content: string;
        companyName: string;
        address: string;
        phone: string;
      };
    };
  };
}

export const translations: Record<Language, Translations> = {
  jp: {
    nav: {
      vision: '企業理念',
      business: '事業内容',
      company: '会社概要',
      contact: 'お問い合わせ',
    },
    vision: {
      title: 'OUR VISION',
      description:
        '私たちセレクトバーゲンストアは、「毎日の暮らしをもっと便利に、もっと豊かに」をモットーに、厳選された商品をお客様にお届けするオンラインストアです。国内外の高品質な商品を、手頃な価格でご提供します。\n\n【革新的商品の紹介】 海外のクラウドファンディングで成功した商品を、日本の皆様にいち早くお届けします。代理店として新商品のテストマーケティングを行い、お客様のニーズに合った商品を提供します。\n\n【利便性と持続可能性】\n24時間365日アクセス可能なECサイトで、簡単に必要な商品を見つけられる環境を整えています。また、環境に配慮した商品選定や配送方法を採用し、持続可能な社会づくりに貢献します。\n\n【信頼とつながり】\nお客様一人ひとりの声に耳を傾け、信頼されるパートナーであり続けます。商品の選定から配送まで、すべてのプロセスで誠実さと丁寧さを大切にします。',
    },
    business: {
      title: 'BUSINESS',
      heading: '事業内容',
      subtitle: '通販事業',
      content:
        'セレクトバーゲンストアは、食品や日用品等の商品を取り扱うオンライン通販事業を展開しています。\n\n1. 幅広い商品ラインナップ\n食品、日用品等 毎日の暮らしに欠かせない商品を豊富に取り揃えています。\n\n2. お得な価格設定\n「良いものをお得に」をコンセプトに、特別価格の商品や期間限定のセールを定期的に実施しています。\n\n3. 簡単で便利なショッピング体験\n直感的で使いやすいECサイトを通じて、スムーズなお買い物体験を提供します。\n\n4. スピーディーで安心の配送サービス\n全国どこでも迅速かつ丁寧に商品をお届けします。\n\n5. 環境への配慮\n持続可能な社会への貢献を目指し、環境負荷の少ない梱包材や配送方法を採用しています。\n\n6. お客様サポート体制\nお問い合わせ対応や購入後のフォローアップなど、万全のサポート体制を整えています。\n\n7. 海外商品の代理店ビジネス\n海外のクラウドファンディングで成功した革新的な商品を、日本市場に独占的に導入します。需要を確認し、成功した商品は一般販売へと展開します。\nセレクトバーゲンストアは、「便利さ」「お得感」「安心感」を追求し、お客様の日々の暮らしに寄り添う通販事業を目指し成長してまいります。',
    },
    company: {
      title: 'COMPANY',
      subtitle: '会社概要',
      info: {
        name: { label: '屋号', value: 'セレクトバーゲンストア' },
        representative: { label: '代表者名', value: '清水　力' },
        address: { label: '所在地', value: '〒411-0944 静岡県駿東郡長泉町竹原２３７−２' },
        capital: { label: '元入金', value: '300万円' },
        phone: { label: 'TEL', value: '055-986-3601' },
        fax: { label: 'FAX', value: '055-986-3601' },
        business: { label: '取扱いジャンル', value: '食品、日用品 他' },
      },
    },
    contact: {
      title: 'CONTACT',
      subtitle:
        'サービスや取り扱い商品に関するお問い合わせ、お見積もり、その他ご要望等ございましたら、お気軽にお問い合わせください。担当スタッフが迅速に対応いたします。',
      heading: 'お問い合わせ',
      companyName: 'セレクトバーゲンストア',
      address: '〒411-0944 静岡県駿東郡長泉町竹原２３７−２',
      form: {
        companyName: '会社名・屋号等',
        contactPerson: 'ご担当者名',
        phone: '電話番号',
        email: 'メールアドレス',
        message: 'お問い合わせ内容',
        submit: '確認する',
        confirm: '入力内容の確認',
        back: '戻る',
        send: '送信する',
        reset: 'リセット',
      },
      validation: {
        required: 'この項目は必須です',
        emailInvalid: '有効なメールアドレスを入力してください',
        phoneInvalid: '有効な電話番号を入力してください',
      },
      modal: {
        confirmTitle: '送信内容の確認',
        confirmMessage: '以下の内容で送信してよろしいですか？',
        successTitle: '送信完了',
        successMessage: 'お問い合わせありがとうございます。担当者より折り返しご連絡させていただきます。',
        errorTitle: '送信エラー',
        errorMessage: '送信中にエラーが発生しました。しばらくしてから再度お試しください。',
        close: '閉じる',
      },
    },
    privacyPolicy: {
      title: 'プライバシーポリシー',
      intro:
        'セレクトバーゲンストア（以下「当社」といいます）は、個人情報の保護に関する法律（個人情報保護法）ならびにその他の関連法規・ガイドライン（以下「法令等」といいます）を遵守するとともに、本プライバシーポリシーを策定・遵守して、個人情報の取扱いを適切に行います。',
      sections: {
        security: {
          title: '個人情報の安全管理',
          content:
            '当社は、個人情報の漏洩、紛失、毀損等を防止するために必要かつ適切な措置を講じ、個人情報を安全に管理します。',
        },
        collection: {
          title: '個人情報の取得',
          content:
            '当社は、利用目的のために必要な範囲で、個人情報を適正な手段で取得します。',
        },
        purpose: {
          title: '個人情報の利用目的',
          content:
            '当社は、当社が取得した個人情報について、法令に定める場合又は本人の同意を得た場合を除き、以下に定める利用目的の達成に必要な範囲を超えて利用することはありません。',
          items: ['各種お問い合わせへの対応', 'その他上記の利用目的に付随する目的'],
        },
        disclosure: {
          title: '個人情報の第三者提供',
          content:
            '当社は、取得した個人情報を目的の範囲内で利用しており、事前承諾なしに、目的外利用や法令に基づかない第三者への提供は行いません。',
        },
        rights: {
          title: '個人情報の開示、訂正、利用停止および消去等',
          content:
            '当社は、個人情報の開示、訂正、利用停止、消去にかかるご本人からのお申出があった場合には、本人確認の上で、個人情報保護法の定めに従い、速やかに対応します。',
        },
        contact: {
          title: '個人情報に関するお問い合わせ先',
          content:
            '個人情報の取扱に関するお問い合わせは、下記窓口までご連絡ください。',
          companyName: '【セレクトバーゲンストア】',
          address: '〒411-0944 静岡県駿東郡長泉町竹原２３７−２',
          phone: 'Tel：055-986-3601',
        },
      },
    },
  },
  en: {
    nav: {
      vision: 'Vision',
      business: 'Business',
      company: 'Company',
      contact: 'Contact',
    },
    vision: {
      title: 'OUR VISION',
      description:
        'At Select Bargain Store, we are an online store that delivers carefully selected products to our customers with the motto "Making everyday life more convenient and enriching." We offer high-quality products from Japan and abroad at affordable prices.\n\n【Introducing Innovative Products】 We bring products that have succeeded in overseas crowdfunding to Japan. As an agent, we conduct test marketing for new products and provide items that meet customer needs.\n\n【Convenience and Sustainability】\nOur EC site is accessible 24/7, making it easy to find the products you need. We also adopt environmentally friendly product selection and delivery methods, contributing to a sustainable society.\n\n【Trust and Connection】\nWe listen to each customer and continue to be a trusted partner. From product selection to delivery, we value sincerity and care in all processes.',
    },
    business: {
      title: 'BUSINESS',
      heading: 'Business Overview',
      subtitle: 'Mail-Order Business',
      content:
        'Select Bargain Store operates an online mail-order business handling products such as food and daily necessities.\n\n1. Wide Product Lineup\nWe have a rich selection of products essential for daily life, including food and daily necessities.\n\n2. Affordable Pricing\nWith the concept of "good things at great prices," we regularly offer special prices and limited-time sales.\n\n3. Easy and Convenient Shopping Experience\nWe provide a smooth shopping experience through an intuitive and easy-to-use EC site.\n\n4. Fast and Reliable Delivery Service\nWe deliver products quickly and carefully anywhere in Japan.\n\n5. Environmental Consideration\nWe adopt packaging materials and delivery methods with low environmental impact, aiming to contribute to a sustainable society.\n\n6. Customer Support System\nWe have a complete support system, including inquiry responses and post-purchase follow-ups.\n\n7. International Product Agency Business\nWe exclusively introduce innovative products that have succeeded in overseas crowdfunding to the Japanese market. After confirming demand, successful products are expanded to general sales.\nSelect Bargain Store aims to pursue "convenience," "value," and "peace of mind," growing as a mail-order business that supports customers\' daily lives.',
    },
    company: {
      title: 'COMPANY',
      subtitle: 'Company Overview',
      info: {
        name: { label: 'Business Name', value: 'Select Bargain Store' },
        representative: { label: 'Representative', value: 'Chikara Shimizu' },
        address: { label: 'Address', value: '237-2 Takehara, Nagaizumi-cho, Sunto-gun, Shizuoka 411-0944' },
        capital: { label: 'Capital', value: '3 million yen' },
        phone: { label: 'TEL', value: '055-986-3601' },
        fax: { label: 'FAX', value: '055-986-3601' },
        business: { label: 'Product Categories', value: 'Food, Daily Necessities, etc.' },
      },
    },
    contact: {
      title: 'CONTACT',
      subtitle:
        'If you have any inquiries about our services or products, requests for quotes, or other requests, please feel free to contact us. Our staff will respond promptly.',
      heading: 'Inquiry',
      companyName: 'Select Bargain Store',
      address: '237-2 Takehara, Nagaizumi-cho, Sunto-gun, Shizuoka 411-0944',
      form: {
        companyName: 'Company Name / Business Name',
        contactPerson: 'Contact Person',
        phone: 'Phone Number',
        email: 'Email Address',
        message: 'Inquiry Details',
        submit: 'Confirm',
        confirm: 'Confirm Details',
        back: 'Back',
        send: 'Send',
        reset: 'Reset',
      },
      validation: {
        required: 'This field is required',
        emailInvalid: 'Please enter a valid email address',
        phoneInvalid: 'Please enter a valid phone number',
      },
      modal: {
        confirmTitle: 'Confirm Submission',
        confirmMessage: 'Are you sure you want to submit the following information?',
        successTitle: 'Submission Complete',
        successMessage:
          'Thank you for your inquiry. Our staff will contact you shortly.',
        errorTitle: 'Submission Error',
        errorMessage: 'An error occurred during submission. Please try again later.',
        close: 'Close',
      },
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      intro:
        'Select Bargain Store (hereinafter referred to as "the Company") complies with the Act on the Protection of Personal Information (Personal Information Protection Act) and other relevant laws and regulations and guidelines (hereinafter referred to as "Laws and Regulations"), and establishes and complies with this Privacy Policy to handle personal information appropriately.',
      sections: {
        security: {
          title: 'Security Management of Personal Information',
          content:
            'The Company takes necessary and appropriate measures to prevent leakage, loss, damage, etc. of personal information, and manages personal information securely.',
        },
        collection: {
          title: 'Collection of Personal Information',
          content:
            'The Company collects personal information by appropriate means within the scope necessary for the purpose of use.',
        },
        purpose: {
          title: 'Purpose of Use of Personal Information',
          content:
            'The Company will not use personal information acquired by the Company beyond the scope necessary to achieve the purposes of use specified below, except as provided by laws and regulations or with the consent of the individual.',
          items: ['Response to various inquiries', 'Other purposes incidental to the above purposes of use'],
        },
        disclosure: {
          title: 'Provision of Personal Information to Third Parties',
          content:
            'The Company uses the acquired personal information within the scope of its purpose and does not provide it to third parties for purposes other than the purpose or without prior consent, except as required by law.',
        },
        rights: {
          title: 'Disclosure, Correction, Suspension of Use, and Deletion of Personal Information',
          content:
            'When the Company receives a request from an individual for disclosure, correction, suspension of use, or deletion of personal information, the Company will respond promptly in accordance with the provisions of the Personal Information Protection Act after verifying the identity of the individual.',
        },
        contact: {
          title: 'Inquiries Regarding Personal Information',
          content:
            'For inquiries regarding the handling of personal information, please contact the following:',
          companyName: '[Select Bargain Store]',
          address: '237-2 Takehara, Nagaizumi-cho, Sunto-gun, Shizuoka 411-0944',
          phone: 'Tel: 055-986-3601',
        },
      },
    },
  },
};
