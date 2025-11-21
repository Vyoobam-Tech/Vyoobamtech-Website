import React from "react";
import ReuseableComponent from "../Components/ReuseableComponent";
import overviewImage from "../assets/sales2.jpg"; // replace with your image
import logo from "../assets/salesproduct1.png"; // replace with your logo

const Sales = () => {
  const productData = {
    logo,
    title: "Sales Sage",
    tagline: "Turn Leads into Customers Faster",
    description:
      "Sales teams struggle with scattered leads and missed opportunities. Sales Sage is a CRM-powered sales management tool designed to organize pipelines, boost productivity, and improve win rates.",
    overviewImage,
    overviewText:
      "Sales Sage helps sales teams centralize leads, manage pipelines efficiently, and gain actionable insights to close deals faster. Designed for teams of all sizes, it boosts productivity while improving customer relationships.",
    featuresTitle: "Key Features",
    featuresDescription:
      "Everything your sales team needs to streamline processes, track leads, and improve conversion rates.",
    features: [
      {
        title: "Lead Management",
        description: "Capture, nurture, and convert prospects efficiently.",
      },
      {
        title: "Pipeline Visualization",
        description: "Track deals at every stage with clarity.",
      },
      {
        title: "Sales Forecasting",
        description: "Predict revenue with accuracy and confidence.",
      },
      {
        title: "Team Collaboration",
        description: "Share notes, reminders, and alerts across the team.",
      },
      {
        title: "Performance Analytics",
        description: "Measure KPIs, conversion rates, and overall sales performance.",
      },
    ],
    benefiteSubtitle: "Efficient, Predictable, Insightful \n Designed for Sales Success.",
    benefitedes:
      "Sales Sage empowers your team to close deals faster, strengthen customer relationships, and improve sales predictability with actionable insights.",
    benefits: [
      {
        title: "Close Deals Faster",
        subtitle: "Accelerate Your Pipeline",
        description:
          "Organize leads and prioritize high-value opportunities to reduce sales cycles.",
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
            <path d="M3 12h18M12 3l9 9-9 9"/>
          </svg>
        ), // Arrow for speed / fast deals
      },
      {
        title: "Strengthen Customer Relationships",
        subtitle: "Build Loyalty",
        description:
          "Keep track of interactions, follow-ups, and customer preferences to improve engagement.",
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
            <path d="M12 21C12 21 7 16 4 12c3-4 8-9 8-9s5 5 8 9c-3 4-8 9-8 9z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        ), // Heart/Customer engagement
      },
      {
        title: "Improve Sales Predictability",
        subtitle: "Data-Driven Forecasts",
        description:
          "Use analytics to understand trends, forecast revenue, and plan resources effectively.",
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
            <path d="M4 19h16M4 15h16M4 11h16M4 7h16"/>
          </svg>
        ), // Analytics bars / predictability
      },
      {
        title: "Empower Sales Teams",
        subtitle: "Actionable Insights",
        description:
          "Provide your team with dashboards and alerts to make informed decisions quickly.",
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
            <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z"/>
          </svg>
        ), // Star / achievement
      },
    ],
  };

  return <ReuseableComponent {...productData} />;
};

export default Sales;
