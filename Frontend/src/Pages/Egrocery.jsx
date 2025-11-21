import React from "react";
import ReuseableComponent from "../Components/ReuseableComponent";
import overviewImage from "../assets/emart.jpg"; // replace with your image
import logo from "../assets/eproduct.png"; // replace with your logo

const Egrocery = () => {
  const productData = {
    logo,
    title: "E-Grocery Mart",
    tagline: "“Your Store. Your Customers. Online.”",
    description:
      "Grocery shopping is moving online. E-Grocery Mart enables retailers to create a seamless digital grocery store with personalized shopping experiences, secure payments, and hassle-free delivery management.",
    overviewImage,
    overviewText:
      "E-Grocery Mart helps grocery retailers establish a digital presence, streamline order management, and provide customers with smooth shopping experiences. From search to delivery, everything is optimized for convenience and efficiency.",
    featuresTitle: "Key Features",
    featuresDescription:
      "Everything you need to run a successful online grocery store, enhance customer satisfaction, and increase repeat purchases.",
    features: [
      {
        title: "Smart Search & Recommendations",
        description: "Quickly find products and get personalized suggestions.",
      },
      {
        title: "Multi-Payment Options",
        description: "Cards, UPI, wallets, and COD for smooth transactions.",
      },
      {
        title: "Order Tracking",
        description: "Track orders in real-time from preparation to delivery.",
      },
      {
        title: "Mobile-First Platform",
        description: "Optimized for smartphones, tablets, and desktops.",
      },
      {
        title: "Secure Transactions",
        description: "Advanced encryption and fraud detection for safety.",
      },
    ],
    benefiteSubtitle: "Reach More Customers \n Simplify Operations \n Boost Efficiency",
    benefitedes:
      "E-Grocery Mart allows retailers to expand online, increase repeat purchases, and automate order management while providing customers a seamless shopping experience.",
    benefits: [
      {
        title: "Expand Customer Reach",
        subtitle: "Go Online Easily",
        description: "Reach more customers by creating your own digital grocery store.",
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
            <path d="M3 12h18M12 3v18"/>
          </svg>
        ), // Plus / growth
      },
      {
        title: "Increase Repeat Purchases",
        subtitle: "Personalized Shopping",
        description: "Provide tailored recommendations to keep customers coming back.",
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
            <path d="M12 20l4-8H8l4 8z"/>
            <path d="M12 4v4"/>
          </svg>
        ), // Triangle / repeat action
      },
      {
        title: "Improve Efficiency",
        subtitle: "Automated Orders",
        description: "Streamline order processing and delivery management for faster service.",
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
            <path d="M3 6h18M3 12h18M3 18h18"/>
          </svg>
        ), // List / automation
      },
      {
        title: "Secure Payments",
        subtitle: "Safe & Reliable",
        description: "Protect transactions with encryption and fraud detection.",
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
            <rect x="3" y="7" width="18" height="14" rx="2" ry="2"/>
            <path d="M16 3v4M8 3v4"/>
          </svg>
        ), // Credit card / payment
      },
    ],
  };

  return <ReuseableComponent {...productData} />;
};

export default Egrocery;
