import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import laptop from "../assets/laptop.jpg";
import laptop2 from "../assets/laptop3.jpg";
import building2 from "../assets/building2.png";
import marketande from "../assets/marketande.png";
import traniee from "../assets/traniee.jpg";
import level2025e from "../assets/level2025e.png";

const milestones = [
  {
    year: 2015,
    date: "2015",
    description: "Founded as a web and IT solutions provider.",
    image: laptop2,
  },
  {
    year: 2022,
    date: "2022",
    description: "Expanded as a tech hub in Kumbakonam.",
    image: building2,
  },
  {
    year: 2023,
    date: "2023",
    description:
      "Launched Vyoobam Academic across Tamil Nadu, training students in advanced IT skills.",
    image: traniee,
  },
  {
    year: 2024,
    date: "2024",
    description:
      "Released flagship products Market Metrics and E-Grocery Mart.",
    image: marketande,
  },
  {
    year: 2025,
    date: "2025",
    description:
      "Delivered AI, analytics, and mobile app projects; trained 30+ interns through our learning ecosystem.",
    image: level2025e,
  },
];

const Timeline = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const scrollTop = window.scrollY - container.offsetTop;
    const sectionHeight = container.offsetHeight / milestones.length;

    let index = Math.floor(scrollTop / sectionHeight);
    if (index < 0) index = 0;
    if (index >= milestones.length) index = milestones.length - 1;

    setActiveIndex(index);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = ((activeIndex + 1) / milestones.length) * 180;

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontWeight: 600,
          fontSize: "55px",
          letterSpacing: "1px",
          color: "#060606ff",
          mt: 15, // spacing below heading
        }}
      >
        Our Journey
      </Typography>
      {/* Scroll Container */}
      <div
        style={{ height: `${milestones.length * 100}vh`, position: "relative" }}
        ref={containerRef}
      >
        {/* Pinned Content */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            padding: "0 20vw",
            boxSizing: "border-box",
            background: "#fff",
            overflowX: "hidden",
          }}
        >
          {/* Left Timeline Line */}
          <div
            style={{
              width: "10%",
              display: "flex",
              justifyContent: "center",
              transform: "translateX(-30px)",
            }}
          >
            <div
              style={{
                position: "relative",
                height: "300px",
                width: "2px",
                background: "#000",
              }}
            >
              {milestones.map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: `${(i / (milestones.length - 1)) * 100}%`,
                    left: "-4px",
                    width: "10px",
                    height: "2px",
                    background: i === activeIndex ? "#1cdcfeff" : "#888",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Center Year + Circle */}

          {/* Center - Year with Infinity behind it */}
          <div
            style={{
              position: "relative",
              width: "40%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Large Infinity in background behind the year */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "220px",
                height: "120px",
                zIndex: 0,
                pointerEvents: "none",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 120"
                width="100%"
                height="100%"
              >
                {/* Base path - light grey infinity */}
                <path
                  d="M106.6,60l-20,25a47.9,47.9,0,1,1,0-70l80,70a47.9,47.9,0,1,0,0-70l-20,25"
                  fill="none"
                  stroke="#eee"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Red progress path */}
                <path
                  d="M106.6,60l-20,25a47.9,47.9,0,1,1,0-70l80,70a47.9,47.9,0,1,0,0-70l-20,25"
                  fill="none"
                  stroke="#00d4fa5b"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="400"
                  strokeDashoffset={400 - (progress / 180) * 400}
                  style={{ transition: "stroke-dashoffset 0.3s ease" }}
                />
              </svg>
            </div>

            {/* Stacked Years in front of infinity */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                zIndex: 1,
              }}
            >
              {[activeIndex - 1, activeIndex, activeIndex + 1].map((i) => {
                if (i < 0 || i >= milestones.length) return null;

                const isActive = i === activeIndex;

                return (
                  <div
                    key={milestones[i].year}
                    style={{
                      fontSize: isActive ? "80px" : "40px",
                      fontWeight: isActive ? "700" : "400",
                      opacity: isActive ? 1 : 0.4,
                      color: isActive ? "#270155ff" : "#999",
                      transition: "all 0.3s ease",
                      transform: "translateX(-80px)",
                    }}
                  >
                    {milestones[i].year}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Description */}
          <div style={{ width: "40%" }}>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#777",
                marginBottom: "10px",
              }}
            >
              {milestones[activeIndex].date}
            </div>
            <div style={{ fontSize: "18px", lineHeight: "1.5" }}>
              <img
                src={milestones[activeIndex].image}
                alt={milestones[activeIndex].year}
                style={{
                  width: "200px", // 🔹 adjust kutty/perusa
                  height: "auto",
                  marginBottom: "20px",
                }}
              />
              <br />
              {milestones[activeIndex].description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
