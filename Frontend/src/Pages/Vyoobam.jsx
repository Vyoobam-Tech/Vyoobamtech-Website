import React from "react";
import ReuseableComponent from "../Components/ReuseableComponent";
import overviewImage from "../assets/vyoobam.png"; // replace with your image
import logo from "../assets/VN.png"; // replace with your logo

const Vyoobam = () => {
  const productData = {
    logo,
    title: "Vyoobam Nudge",
    tagline: "Never Miss a Task. Never Miss a Customer",
    description:
      "Vyoobam Nudge is a smart reminder & notification platform that helps businesses and individuals stay on top of schedules, appointments, and recurring tasks.",
    overviewImage,
    overviewText:
      "With Vyoobam Nudge, businesses can automate reminders, manage recurring tasks, and collaborate with teams efficiently. The analytics dashboard provides insights to improve engagement and reduce missed appointments.",
      overviewText2:
  "Vyoobam Nudge ensures your team stays on top of important tasks, enhances customer communication, and optimizes operational workflows, helping businesses save time and boost overall productivity.",

    featuresTitle: "Key Features",
    featuresDescription:
      "Everything you need to automate reminders, track tasks, and ensure timely communication with customers.",
    features: [
      {
        title: "Automated Reminders",
        description: "Send SMS, WhatsApp, and Email alerts automatically.",
      },
      {
        title: "Recurring Scheduling",
        description: "Set tasks once and repeat them automatically.",
      },
      {
        title: "Industry-Specific Templates",
        description: "Templates tailored for healthcare, salons, services, and retail.",
      },
      {
        title: "Team Access",
        description: "Collaborate with your team to manage tasks effectively.",
      },
      {
        title: "Analytics Dashboard",
        description: "Track reminders sent, responses, and success rates.",
      },
      {
  title: "Smart Prioritization",
  description: "Automatically prioritize tasks and reminders based on urgency and deadlines.",
}

    ],
    benefiteSubtitle: "Stay Organized \n Save Time \n Build Customer Trust",
    benefitedes:
      "Vyoobam Nudge helps businesses automate reminders, reduce missed appointments, save time, and build stronger relationships with proactive communication.",
      benefitedes2:
  "By streamlining task management and providing actionable insights, Vyoobam Nudge empowers teams to work smarter, enhance customer engagement, and improve overall operational efficiency.",

    benefits: [
      {
        title: "Improve Customer Engagement",
        subtitle: "Stay Connected",
        description: "Reach customers via multiple channels to keep them informed.",
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
            <path d="M21 10a9 9 0 1 0-9 9"/>
            <path d="M22 22l-5-5"/>
          </svg>
        ), // Magnifying glass / engagement
      },
      {
        title: "Prevent Missed Appointments",
        subtitle: "Save Revenue",
        description: "Automate notifications to reduce no-shows and lost revenue.",
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
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        ), // Clock / schedule
      },
      {
        title: "Automate Repetitive Tasks",
        subtitle: "Save Time",
        description: "Set recurring tasks and reminders so you can focus on important work.",
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
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83"/>
          </svg>
        ), // Repeat / loop icon
      },
      {
        title: "Build Customer Trust",
        subtitle: "Proactive Communication",
        description: "Ensure timely, professional reminders that enhance customer satisfaction.",
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
            <path d="M21 10l-9 6-9-6 9-6 9 6z"/>
            <path d="M12 22V12"/>
          </svg>
        ), // Shield / trust
      },
    ],
  };

  return <ReuseableComponent {...productData} />;
};

export default Vyoobam;
