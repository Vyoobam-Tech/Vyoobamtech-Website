import React from "react";
import ReuseableComponent from "../Components/ReuseableComponent"
import overviewImage from "../assets/Market.jpg";
import logo from "../assets/marketproduct1.png";

const MainProduct = () => {
  const productData = {
    logo,
    title: "Market Metrics",
    tagline: "Smarter Billing. Smarter Decisions",
    description:
      "The all-in-one billing, inventory, and analytics platform designed for growing businesses.",
    overviewImage,
    overviewText:
      "Managing inventory, billing, and reports separately is time-consuming and error-prone. Market Metrics brings it all together in one seamless platform. Designed for retailers,wholesalers, and SMEs, it simplifies daily operations while providing powerful insights for better decision-making.",
      featuresTitle:"Key Features",
      featuresDescription:" Everything your growing business needs to streamline operations save time, and make smarter decisions.",
    features:[
              {
                title: "Smart Billing & Invoicing",
                description:
                  "GST-ready templates make billing faster and compliant with local tax laws.",
              },
              {
                title: "Inventory Control",
                description:
                  "Track stock in real-time, get low-stock alerts, and manage across locations.",
              },
              {
                title: "Data Analytics Dashboard",
                description:
                  "Visualize sales, expenses, and trends to make data-backed decisions.",
              },
              {
                title: "Barcode & QR Integration",
                description:
                  "Speed up checkouts and inventory updates with barcode/QR scanning.",
              },
              {
                title: "Custom Reports",
                description:
                  "Generate tailored reports that match your business requirements.",
              },
              {
                title: "Multi-location Support",
                description:
                  "Manage inventory and operations across branches seamlessly.",
              },
            ],
            benefiteSubtitle:"Reliable, Efficient, Scalable \n Built For Business Automation.",
            benefitedes:" With Market Metrics, Businesses Can Streamline Billing, Track Inventory Live, And Scale Operations Effortlessly. Our tools empower your team to make faster, smarter decisions.",
    benefits: [
      {
        title: "Minimize Errors",
        subtitle: "Save Time & Reduce Mistakes",
        description:
          "Automate repetitive tasks and reduce human errors with a smarter workflow engine.",
          icon: (
           <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#024d87"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* For example, a checkmark inside circle */}
                <circle cx="12" cy="12" r="10" />
                <path d="M9 12l2 2l4 -4" />
              </svg>),
      },
      {
        title: "Real-Time Tracking",
        subtitle: "Stay Updated, Always",
        description: "Monitor your sales and inventory across multiple branches.",
        icon:(
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#024d87"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Clock icon */}
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>

        ),
      },
      {
        title: "Efficient Automation",
        subtitle: "Less Manual Work",
        description: "Automate billing, reports, alerts, and more.",
        icon:(<svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#024d87"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Gear icon for automation */}
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06 .06a2 2 0 1 1 -2.83 2.83l-.06 -.06a1.65 1.65 0 0 0 -1.82 -.33 1.65 1.65 0 0 0 -1 1.51V21a2 2 0 1 1 -4 0v-.09a1.65 1.65 0 0 0 -1 -1.51 1.65 1.65 0 0 0 -1.82 .33l-.06 .06a2 2 0 1 1 -2.83 -2.83l.06 -.06A1.65 1.65 0 0 0 5 15.4a1.65 1.65 0 0 0 -1.51 -1H3a2 2 0 1 1 0 -4h.09a1.65 1.65 0 0 0 1.51 -1 1.65 1.65 0 0 0 -.33 -1.82l-.06 -.06a2 2 0 1 1 2.83 -2.83l.06 .06A1.65 1.65 0 0 0 8.6 5a1.65 1.65 0 0 0 1 -1.51V3a2 2 0 1 1 4 0v.09c.36 .06 .69 .24 .93 .5l.06 .06a1.65 1.65 0 0 0 1.82 .33 1.65 1.65 0 0 0 1 1.51V5a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51z" />
              </svg>),
      },
      {
        title: "Scalable Growth",
        subtitle: "Grow Without Limits",
        description: "Easily expand your business operations seamlessly.",
        icon:(  <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#024d87"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Up‑arrow or trending icon for scale */}
                <path d="M12 19V5" />
                <path d="M5 12l7 -7l7 7" />
              </svg>
          )
      },
    ],
  };

  return <ReuseableComponent {...productData} />;
};

export default MainProduct;
