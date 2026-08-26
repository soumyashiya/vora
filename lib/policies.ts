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
  note: "Email: support@voralabs.com · Website: voralabs.com",
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
      body: "Vora Labs does not operate on any social media platform. Any account, page, or individual claiming to represent Vora Labs on social media is unauthorised and should be treated as a potential scam. Please verify any communication directly through support@voralabs.com before making a payment.",
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
      body: "If your order arrives damaged, incorrect, or defective, please contact our support team at support@voralabs.com within 48 hours of delivery. Include your order number, a description of the issue, and supporting photos.",
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
        "Then contact us at support@voralabs.com for assistance.",
      ],
    },
    CONTACT,
  ],
};

export const SHIPPING_POLICY: PolicyContent = {
  slug: "shipping-policy",
  title: "Shipping Policy",
  eyebrow: "Dispatch & Delivery",
  updated: "August 25, 2026",
  intro:
    "This Shipping Policy explains how orders placed with Vora Labs are processed, dispatched, tracked, and delivered.",
  sections: [
    {
      heading: "Dispatch Time",
      body: "Orders placed and paid for before 3 PM (US Eastern Time) on business days are typically processed for same-day dispatch. Orders received after 3 PM, on weekends, or on US public holidays are processed on the next business day.",
    },
    {
      heading: "Shipping Carriers",
      body: "We use trusted, trackable shipping services based on destination and availability. Tracking information is provided once your order has been dispatched.",
    },
    {
      heading: "Delivery Times",
      list: ["US Orders: Typically delivered within 1–3 business days after dispatch."],
      note: "Delivery estimates may vary due to carrier delays, weather, holidays, or other circumstances outside our control.",
    },
    {
      heading: "Shipping Fees",
      body: "Shipping charges are calculated and displayed at checkout based on your delivery address and selected shipping service.",
    },
    {
      heading: "Order Tracking",
      body: "All shipments include tracking. Once your package leaves our fulfillment facility, you will receive tracking information.",
    },
    {
      heading: "Failed Delivery Attempts",
      body: "If delivery cannot be completed, the carrier may attempt redelivery or provide instructions for collection. Customers should use the tracking information to coordinate directly with the carrier when necessary.",
    },
    {
      heading: "Delivery Issues",
      body: "If your package is delayed, lost, or arrives damaged, please contact us at support@voralabs.com with your order number and tracking information.",
      note: "For damaged shipments, photographs of the package and contents may be requested.",
    },
    {
      heading: "Address Accuracy",
      body: "Please ensure your shipping information is accurate and complete before placing your order. Vora Labs is not responsible for delivery issues caused by incorrect or incomplete addresses provided at checkout.",
    },
    {
      heading: "Shipping Restrictions",
      body: "Customers are responsible for ensuring that their purchase and intended research use comply with applicable federal, state, and local laws and regulations. Vora Labs reserves the right to restrict or cancel shipments where required by law.",
    },
    {
      heading: "Research Use Notice",
      body: "Vora Labs products are supplied for laboratory research and R&D use only and are not intended for human or veterinary consumption.",
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
      note: "To exercise your rights, contact support@voralabs.com.",
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
  updated: "August 25, 2026",
  intro:
    "You are using the official website of Vora Labs (“we,” “us,” “our”). By accessing or using this website, you agree to these Terms of Service. If you do not agree with any part of these Terms, please do not use our website or services.",
  sections: [
    {
      heading: "General",
      body: "These Terms govern your use of the Vora Labs website. We may update these Terms from time to time. Your continued use of the website after changes are posted constitutes acceptance of the updated Terms.",
    },
    {
      heading: "Age Requirement",
      body: "You must be at least 18 years old to access this website or place an order. By using our website, you confirm that you meet this requirement and are legally permitted to enter into a purchase agreement.",
    },
    {
      heading: "Product Use",
      body: "Vora Labs products are supplied strictly for laboratory research and R&D purposes. They are not intended for human or veterinary consumption, self-administration, diagnosis, treatment, or prevention of any disease or medical condition.",
      note: "Customers are responsible for ensuring that their intended use complies with applicable federal, state, and local laws.",
    },
    {
      heading: "Orders & Payment",
      body: "All orders are subject to product availability and acceptance. Vora Labs reserves the right to refuse, limit, or cancel an order where necessary. Payment must be completed before an order is dispatched.",
    },
    {
      heading: "Shipping & Delivery",
      body: "We aim to process and dispatch orders within our stated processing timeframe. Delivery estimates may vary due to carrier delays, weather, holidays, or circumstances beyond our control. Customers are responsible for providing accurate shipping information.",
    },
    {
      heading: "Refund Policy",
      body: "Due to the nature of our products, returns are limited to eligible items that are unopened, unused, and in their original condition. Opened, damaged, or tampered-with products may not be eligible for a refund. Please refer to our Refund Policy for additional details.",
    },
    {
      heading: "Disclaimer",
      body: "Vora Labs products are supplied solely for laboratory R&D purposes. Vora Labs does not recommend or authorize human consumption, veterinary use, self-administration, or any use outside the stated research purpose.",
    },
    {
      heading: "Limitation of Liability",
      body: "To the fullest extent permitted by applicable law, Vora Labs and its directors, employees, affiliates, and service providers are not liable for claims, damages, losses, or liabilities arising from unauthorized, improper, or unlawful use of our products or website.",
    },
    {
      heading: "Account Responsibility",
      body: "If you create an account, you are responsible for maintaining the confidentiality of your login credentials and for activity conducted through your account.",
    },
    {
      heading: "Intellectual Property",
      body: "All trademarks, logos, text, images, graphics, product information, and other content displayed on the Vora Labs website are owned by or licensed to Vora Labs. No content may be reproduced, distributed, or commercially used without prior written permission.",
    },
    {
      heading: "Governing Law",
      body: "These Terms are governed by the laws of the United States and, where applicable, the laws of the state in which Vora Labs is established. Any disputes will be handled in the appropriate courts having jurisdiction over the matter.",
    },
    {
      // The Terms tab specifies its own contact wording rather than the shared CONTACT block
      heading: "Contact",
      body: "For questions regarding these Terms, contact:",
      note: "Vora Labs · Email: support@voralabs.com",
    },
    {
      heading: "Research Use Notice",
      body: "For laboratory R&D use only. Not for human or veterinary consumption.",
    },
  ],
};
