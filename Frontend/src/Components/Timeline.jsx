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
      "We are developing web and mobile applications while mentoring 30+ interns through our learning ecosystem.",
    image: level2025e,
  },
];

const Timeline = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Reverse the milestones for display
  const reversedMilestones = [...milestones].reverse();

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const scrollTop = window.scrollY - container.offsetTop;
    const sectionHeight = container.offsetHeight / reversedMilestones.length;

    let index = Math.floor(scrollTop / sectionHeight);
    if (index < 0) index = 0;
    if (index >= reversedMilestones.length) index = reversedMilestones.length - 1;

    setActiveIndex(index);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = ((activeIndex + 1) / reversedMilestones.length) * 180;

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
          mt: 15,
        }}
      >
        Our Journey
      </Typography>

      {/* Scroll Container */}
      <div
        style={{ height: `${reversedMilestones.length * 100}vh`, position: "relative" }}
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
              {reversedMilestones.map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: `${(i / (reversedMilestones.length - 1)) * 100}%`,
                    left: "-4px",
                    width: "10px",
                    height: "2px",
                    background: i === activeIndex ? "#1cdcfeff" : "#888",
                  }}
                />
              ))}
            </div>
          </div>

          
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 120" width="100%" height="100%">
                <path
                  d="M106.6,60l-20,25a47.9,47.9,0,1,1,0-70l80,70a47.9,47.9,0,1,0,0-70l-20,25"
                  fill="none"
                  stroke="#eee"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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

            {/* Stacked Years */}
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
                if (i < 0 || i >= reversedMilestones.length) return null;

                const isActive = i === activeIndex;

                return (
                  <div
                    key={reversedMilestones[i].year}
                    style={{
                      fontSize: isActive ? "80px" : "40px",
                      fontWeight: isActive ? "700" : "400",
                      opacity: isActive ? 1 : 0.4,
                      color: isActive ? "#270155ff" : "#999",
                      transition: "all 0.3s ease",
                      transform: "translateX(-80px)",
                    }}
                  >
                    {reversedMilestones[i].year}
                  </div>
                );
              })}
            </div>
          </div>

       
          <div style={{ width: "40%" }}>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#777",
                marginBottom: "10px",
              }}
            >
              {reversedMilestones[activeIndex].date}
            </div>
            <div style={{ fontSize: "18px", lineHeight: "1.5" }}>
              <img
                src={reversedMilestones[activeIndex].image}
                alt={reversedMilestones[activeIndex].year}
                style={{
                  width: "200px",
                  height: "auto",
                  marginBottom: "20px",
                }}
              />
              <br />
              {reversedMilestones[activeIndex].description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
