// Centralised legal/policy content for the Vora Labs research-peptides site.

export type PolicySection = {
  heading: string;
  body?: string;
  list?: string[];
  note?: string;
};

export type PolicyContent = {
  slug: string;
  title: string;
  eyebrow: string;
  intro?: string;
  updated: string;
  sections: PolicySection[];
};

const CONTACT: PolicySection = {
  heading: "Contact Us",
  body: "For any questions regarding this policy, please reach out to our team:",
  note: "Email: research@voralabs.com · Website: voralabs.com",
};

export const PRESS_RELEASE: PolicyContent = {
  slug: "press-release",
  title: "Press Release",
  eyebrow: "Official Statement",
  updated: "July 29, 2026",
  intro:
    "Vora Labs periodically publishes official statements to clarify our research-only status, address impersonation, and reaffirm our regulatory standing. This page is updated as new statements are issued.",
  sections: [
    {
      heading: "Who We Are",
      body: "Vora Labs is an independent research and development supplier of laboratory-grade peptide compounds. We operate strictly within research-use markets and do not manufacture, market, or sell pharmaceutical products intended for human or veterinary use.",
    },
    {
      heading: "No Social Media Presence",
      body: "Vora Labs does not operate on any social media platform. Any account, page, or individual claiming to represent Vora Labs on social media is unauthorised and should be treated as a potential scam. Please verify any communication directly through research@voralabs.com before making a payment.",
    },
    {
      heading: "Research-Only Positioning",
      body: "Every compound supplied by Vora Labs carries the disclaimer \"for laboratory research and development purposes only — not for human or veterinary use,\" and is independently verified by Janoshik prior to release. This research-use positioning distinguishes our catalogue from pharmaceutical or clinical products.",
    },
    {
      heading: "Addressing Misrepresentation",
      body: "From time to time, third parties misuse the Vora Labs name, branding, or product imagery without authorisation. Such activity is not endorsed by us, and we actively monitor and act against unauthorised use of our brand. Always order through our official site.",
    },
    {
      heading: "Quality & Compliance Commitment",
      body: "Our internal standards cover:",
      list: [
        "Batch traceability and documentation on every release",
        "Independent third-party HPLC verification via Janoshik",
        "Cold-chain handling and storage guidance (2–8°C)",
        "Clear, prominent research-use-only labelling on every product",
      ],
    },
    {
      heading: "Ongoing Transparency",
      body: "We publish updated statements here as our compliance posture, product range, or public communications evolve. For press or media enquiries, please contact us directly rather than relying on third-party or social media sources.",
    },
    CONTACT,
  ],
};

export const REFUND_POLICY: PolicyContent = {
  slug: "refund-policy",
  title: "Refund Policy",
  eyebrow: "Returns & Refunds",
  updated: "July 29, 2026",
  intro:
    "Thank you for choosing Vora Labs. We take pride in delivering premium, batch-verified research compounds. Please read the following carefully to understand our returns and refund process.",
  sections: [
    {
      heading: "Research-Use Products",
      body: "All items sold by Vora Labs, including pre-filled research pens, are intended strictly for laboratory research and in-vitro study. They are not intended for human consumption, diagnosis, or treatment of any kind. By purchasing, you agree to these terms.",
    },
    {
      heading: "Returns Eligibility",
      body: "Due to the sensitive nature of our products and to protect batch integrity, we do not accept returns on opened or used items. Only unopened, unused items in their original packaging may be considered for a return.",
    },
    {
      heading: "Return Window",
      body: "Return requests must be made within 7 days of delivery. If 7 days have passed since your order was received, we are unable to offer a refund or exchange.",
    },
    {
      heading: "Non-Returnable Items",
      body: "We are unable to accept returns for:",
      list: [
        "Opened or used items",
        "Products not stored correctly (e.g. not kept refrigerated)",
        "Items not in their original packaging",
        "Return requests made after 7 days from delivery",
      ],
    },
    {
      heading: "Reporting Issues",
      body: "If your order arrives damaged, incorrect, or defective, please contact our support team at research@voralabs.com within 48 hours of delivery. Include your order number, a description of the issue, and supporting photos.",
    },
    {
      heading: "Return Approval",
      body: "Once we receive your request, we will assess it and notify you of the approval status. If approved, we will issue return instructions. Return postage is the customer's responsibility unless the error was ours.",
    },
    {
      heading: "Refund Processing",
      body: "Approved refunds are processed to your original payment method within 5–10 business days. For crypto payments, the USD equivalent at the time of refund will be issued, minus any network or transaction fees.",
    },
    {
      heading: "Delayed Refunds",
      body: "If you haven't received your refund after 10 business days:",
      list: [
        "First, check with your bank or card provider.",
        "Then contact us at research@voralabs.com for assistance.",
      ],
    },
    CONTACT,
  ],
};

export const SHIPPING_POLICY: PolicyContent = {
  slug: "shipping-policy",
  title: "Shipping Policy",
  eyebrow: "Dispatch & Delivery",
  updated: "July 29, 2026",
  intro:
    "This Shipping Policy explains how orders placed on voralabs.com are processed, dispatched, and delivered.",
  sections: [
    {
      heading: "Dispatch Time",
      body: "Orders placed and paid for before 3pm on working days are typically dispatched the same day. Orders received after 3pm, or on weekends and public holidays, are dispatched the next working day.",
    },
    {
      heading: "Shipping Carriers",
      body: "We use tracked, signed-for courier services depending on destination, weight, and service availability. Once your order ships, you'll receive tracking information by email.",
    },
    {
      heading: "Delivery Times",
      list: [
        "Domestic Orders: typically delivered 1–3 working days after dispatch.",
        "International Orders: delivery times vary by destination and customs handling, usually 3–10 working days.",
      ],
    },
    {
      heading: "Shipping Fees",
      body: "Shipping costs are calculated at checkout based on your destination and parcel weight. We occasionally run free-shipping promotions.",
    },
    {
      heading: "Order Tracking",
      body: "Every shipment includes tracking. You'll receive a tracking number as soon as your parcel leaves our fulfilment centre.",
    },
    {
      heading: "Failed Delivery Attempts",
      body: "If no one is available to accept the parcel, the courier may leave a calling card or attempt redelivery. Please follow up with the courier directly using your tracking number.",
    },
    {
      heading: "Customs & Import Duties",
      body: "International buyers are responsible for any applicable customs duties, taxes, or import fees. These charges are not included in our product or shipping prices.",
    },
    {
      heading: "Delivery Issues",
      body: "If your parcel is delayed, lost, or arrives damaged, please contact us at research@voralabs.com within 72 hours of the expected delivery date. Include your order number and tracking details.",
    },
    {
      heading: "Address Accuracy",
      body: "Please ensure your delivery details are entered correctly at checkout. We cannot be held responsible for delivery issues resulting from incorrect or incomplete address information.",
    },
    CONTACT,
  ],
};

export const PRIVACY_POLICY: PolicyContent = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  eyebrow: "Data Protection",
  updated: "July 29, 2026",
  sections: [
    {
      heading: "Introduction",
      body: 'This Privacy Policy explains how Vora Labs ("we", "us", "our") collects, uses, and protects your personal information when you visit or make a purchase from voralabs.com. We are committed to safeguarding your privacy and handling your data responsibly and securely.',
    },
    {
      heading: "What We Collect",
      body: "We may collect and process the following types of data:",
      list: [
        "Your name and contact details",
        "Shipping and billing addresses",
        "Email correspondence or support messages",
        "Purchase history and transaction details",
        "Technical data such as IP address, browser type, and device information",
      ],
    },
    {
      heading: "How We Use Your Information",
      body: "We use your information to:",
      list: [
        "Process and fulfil orders",
        "Provide customer service and order updates",
        "Respond to enquiries or requests",
        "Improve website functionality and experience",
        "Comply with legal or regulatory obligations",
      ],
      note: "Note: We do not sell or rent your data to third parties.",
    },
    {
      heading: "Third-Party Sharing",
      body: "We only share data with trusted third-party providers who help us operate our business, such as:",
      list: [
        "Payment processors",
        "Couriers and logistics providers",
        "Website and IT service platforms",
      ],
      note: "All third parties are required to process your data securely and only as instructed by us.",
    },
    {
      heading: "Data Security",
      body: "We implement appropriate security measures to protect your personal information, including:",
      list: [
        "SSL encryption across our website",
        "Limited access to data by authorised staff only",
        "Regular reviews of our data security practices",
      ],
    },
    {
      heading: "Your Rights",
      body: "You have the right to:",
      list: [
        "Access the personal data we hold on you",
        "Request corrections to inaccurate information",
        "Request data deletion where appropriate",
        "Object to certain processing activities",
        "Withdraw consent at any time",
      ],
      note: "To exercise your rights, contact research@voralabs.com.",
    },
    {
      heading: "Cookies",
      body: "We use cookies to enhance your browsing experience and understand usage patterns. You can manage or disable cookies at any time in your browser settings.",
    },
    {
      heading: "Data Retention",
      body: "We retain your data only for as long as necessary to fulfil the purposes outlined in this policy, including any legal, accounting, or regulatory obligations.",
    },
    {
      heading: "Policy Updates",
      body: "We may update this Privacy Policy from time to time. Any changes will be posted here with a revised effective date.",
    },
    CONTACT,
  ],
};

export const TERMS_OF_SERVICE: PolicyContent = {
  slug: "terms-of-service",
  title: "Terms of Service",
  eyebrow: "Legal",
  updated: "July 29, 2026",
  intro:
    'You are using the official website of Vora Labs ("we", "us", "our"). By using this site, you agree to comply with the following terms. Please read them carefully — if you do not agree with any part of these terms, please do not use our website or services.',
  sections: [
    {
      heading: "General",
      body: "These Terms govern your use of voralabs.com. We may update these Terms from time to time without notice. Continued use of the website constitutes acceptance of the current Terms.",
    },
    {
      heading: "Age Requirement",
      body: "By accessing this site, you confirm that you are at least 18 years old and are legally able to enter into contracts. Our products and services are intended only for individuals who meet this requirement.",
    },
    {
      heading: "Product Use",
      body: "Products sold on voralabs.com are supplied strictly for research and development purposes under controlled conditions. They are not to be used for diagnosis, treatment, or prevention of any disease or medical condition.",
    },
    {
      heading: "Orders & Payment",
      body: "All orders are subject to acceptance and availability. We reserve the right to refuse or cancel orders at our discretion. Payment must be made in full before orders are dispatched.",
    },
    {
      heading: "Dispatch & Delivery",
      body: "We aim to dispatch orders within a reasonable timeframe. Shipping timelines are estimates, not guarantees, and may be affected by factors outside our control. See our Shipping Policy for details.",
    },
    {
      heading: "Refund Policy",
      body: "Due to the nature of our products, returns are only accepted for items that are unopened, unused, and in their original condition. Opened or tampered items are non-refundable. See our Refund Policy for full details.",
    },
    {
      heading: "Disclaimer",
      body: "All products are sold solely for laboratory research and development. Vora Labs does not accept or condone misuse, including but not limited to human consumption, veterinary use, or resale.",
    },
    {
      heading: "Limitation of Liability",
      body: "By using this site, you agree to indemnify and hold harmless Vora Labs, its team, and affiliates from any claims, damages, or liabilities arising from the use or misuse of our products under these Terms.",
    },
    {
      heading: "Account Responsibility",
      body: "If you create an account on our website, you are responsible for maintaining the confidentiality of your login credentials. All activity conducted under your account is your responsibility.",
    },
    {
      heading: "Intellectual Property",
      body: "All trademarks, logos, and content displayed on voralabs.com are owned or licensed by Vora Labs. You may not reproduce, distribute, or commercially exploit any content without our prior written consent.",
    },
    {
      heading: "Governing Law",
      body: "These Terms are governed by the laws of the jurisdiction in which Vora Labs operates. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the competent courts.",
    },
    CONTACT,
  ],
};
