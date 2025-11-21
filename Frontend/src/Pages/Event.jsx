import React from "react";
import ReuseableComponent from "../Components/ReuseableComponent";
import overviewImage from "../assets/event2.jpg"; // replace with your event image
import logo from "../assets/eventproduct.png"; // replace with your logo

const Event = () => {
  const productData = {
    logo,
    title: "Event Ease",
    tagline: "Plan Manage and Track Events—Effortlessly",
    description:
      "An end-to-end event management platform that simplifies registration, ticketing, communication, and analytics so you can focus on delivering great experiences.",
    overviewImage,
    overviewText:
      "Events are complex, but managing them shouldn’t be. Event Ease is designed to streamline every aspect of event planning—from registration and ticketing to attendee management, communications, and analytics—ensuring your events run smoothly and successfully.",
    featuresTitle: "Key Features",
    featuresDescription:
      "Everything you need to manage events efficiently, improve attendee experience, and drive better outcomes.",
    features: [
      {
        title: "Online Registration & Ticketing",
        description:
          "Create secure registration pages and sell tickets online with integrated payment processing.",
      },
      {
        title: "Attendee Management",
        description:
          "Track participant registrations, confirmations, and no-shows effortlessly.",
      },
      {
        title: "Event Communications",
        description:
          "Send automated reminders, updates, and notifications to attendees and staff.",
      },
      {
        title: "Analytics & Reports",
        description:
          "Get actionable insights on attendance, revenue, engagement, and feedback.",
      },
      {
        title: "Multi-Event Dashboard",
        description:
          "Manage multiple events from a single platform with centralized control.",
      },
      {
        title: "Customizable Branding",
        description:
          "Tailor your event pages, emails, and tickets with your brand colors, logo, and themes.",
      },
    ],
    benefiteSubtitle:
      "Save Time, Increase Engagement, and Maximize ROI \n Built for Event Professionals.",
    benefitedes:
      "Event Ease helps planners automate tedious tasks, monitor event performance, and make data-driven decisions, empowering teams to deliver better experiences without extra stress.",
    benefits: [
      {
        title: "Time-Saving Automation",
        subtitle: "Reduce Manual Work",
        description:
          "Automate registration, ticketing, and attendee communication to save hours of coordination.",
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#024d87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
        ),
      },
      {
        title: "Real-Time Tracking",
        subtitle: "Stay Updated, Always",
        description:
          "Monitor registrations, ticket sales, and attendance across all your events in real time.",
        icon: (
           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#024d87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3V3z"/>
        <path d="M7 12h10M12 7v10"/>
      </svg>
        ),
      },
      {
        title: "Engaged Attendees",
        subtitle: "Boost Participation",
        description:
          "Automate communications and reminders to increase attendee engagement and satisfaction.",
        icon: (
         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#024d87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="12" r="4"/>
        <circle cx="17" cy="12" r="4"/>
        <path d="M9 16c0 2 8 2 8 0"/>
      </svg>
        ),
      },
      {
        title: "Data-Driven Decisions",
        subtitle: "Improve ROI",
        description:
          "Use analytics and reports to identify trends, optimize event strategy, and maximize revenue.",
        icon: (
           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#024d87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="M7 14l3-3 5 5 4-4"/>
      </svg>
        ),
      },
    ],
  };

  return <ReuseableComponent {...productData} />;
};

export default Event;
