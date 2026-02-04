import { Typography, Button, Container, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Choose from "../Components/Choose";
import TestimonialSlider from "../Components/TestimonialSlider";
import ProductSection from "./ProductSection";
import CTA from "./CTA";
import AboutUs from "../Components/AboutUs";
import infinity from "../assets/infinity1.jpg";
import Partical from "../Components/Partical.jsx";
import image3 from "../assets/hero2.png";
import { AnimatePresence } from "framer-motion";
import Hero from "../Components/Hero";
import Appcontainer from "../Components/Appcontainer";
const Home = () => {
  const navigate = useNavigate();
  const serviceSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const WebDevelopmentSVG = () => (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
      <rect
        x="8"
        y="10"
        width="48"
        height="36"
        rx="4"
        stroke="#0c43b1ff"
        strokeWidth="2"
      />
      <line x1="8" y1="18" x2="56" y2="18" stroke="#0c43b1ff" strokeWidth="2" />
      <path d="M26 24L18 32L26 40" stroke="#0c43b1ff" strokeWidth="2" />
      <path d="M38 24L46 32L38 40" stroke="#0c43b1ff" strokeWidth="2" />
    </svg>
  );

  const MobileAppSVG = () => (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
      <rect
        x="20"
        y="6"
        width="24"
        height="52"
        rx="4"
        stroke="#0c43b1ff"
        strokeWidth="2"
      />
      <rect
        x="24"
        y="14"
        width="16"
        height="30"
        stroke="#0c43b1ff"
        strokeWidth="2"
      />
      <circle cx="32" cy="50" r="2" fill="#0c43b1ff" />
    </svg>
  );

  const DataAnalyticsSVG = () => (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
      <line
        x1="10"
        y1="52"
        x2="54"
        y2="52"
        stroke="#0c43b1ff"
        strokeWidth="2"
      />
      <rect
        x="14"
        y="34"
        width="6"
        height="18"
        stroke="#0c43b1ff"
        strokeWidth="2"
      />
      <rect
        x="26"
        y="26"
        width="6"
        height="26"
        stroke="#0c43b1ff"
        strokeWidth="2"
      />
      <rect
        x="38"
        y="18"
        width="6"
        height="34"
        stroke="#0c43b1ff"
        strokeWidth="2"
      />
    </svg>
  );

  const UiUxSVG = () => (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
      <rect
        x="8"
        y="10"
        width="40"
        height="30"
        rx="4"
        stroke="#0c43b1ff"
        strokeWidth="2"
      />
      <line x1="8" y1="18" x2="48" y2="18" stroke="#0c43b1ff" strokeWidth="2" />
      <rect
        x="12"
        y="22"
        width="12"
        height="6"
        stroke="#0c43b1ff"
        strokeWidth="2"
      />
      <rect
        x="28"
        y="22"
        width="16"
        height="12"
        stroke="#0c43b1ff"
        strokeWidth="2"
      />
      <path
        d="M38 42L52 28L56 32L42 46L36 48Z"
        stroke="#0c43b1ff"
        strokeWidth="2"
      />
    </svg>
  );

  const ITConsultingSVG = () => (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
      <circle cx="22" cy="22" r="8" stroke="#0c43b1ff" strokeWidth="2" />
      <circle cx="42" cy="22" r="8" stroke="#0c43b1ff" strokeWidth="2" />
      <path
        d="M10 46C10 38 18 34 22 34C26 34 34 38 34 46"
        stroke="#0c43b1ff"
        strokeWidth="2"
      />
      <path
        d="M30 46C30 38 38 34 42 34C46 34 54 38 54 46"
        stroke="#0c43b1ff"
        strokeWidth="2"
      />
    </svg>
  );

  const services = [
    {
      title: "Web Development",
      description:
        "We build fast, scalable, and responsive websites tailored to your business needs using modern web technologies.",
      icon: <WebDevelopmentSVG />,
      path: "/service/web-development",
    },
    {
      title: "Mobile App Development",
      description:
        "High-performance Android and iOS applications designed for seamless user experience and business growth.",
      icon: <MobileAppSVG />,
      path: "/services/Mobile-development",
    },
    {
      title: "UI / UX Designing",
      description:
        "User-centric designs that combine creativity and usability to deliver engaging digital experiences.",
      icon: <UiUxSVG />,
      path: "/services/Ui-development",
    },
    {
      title: "Data Analytics",
      description:
        "Transform raw data into meaningful insights with advanced analytics and data-driven decision making.",
      icon: <DataAnalyticsSVG />,
      path: "/services/Data-development",
    },
    {
      title: "IT Consulting",
      description:
        "Expert IT consulting services to optimize technology, improve efficiency, and scale your business.",
      icon: <ITConsultingSVG />,
      path: "/services/it-consulting",
    },
  ];

  return (
    <div>
      <Header />

      <Hero />

      <Box
        sx={{
          backgroundColor: "#fff",
          py: { xs: 6, sm: 8, lg: 10, xl: 12 },
          textAlign: "center",
        }}
      >
        <Appcontainer>
          {/* ================= HEADING ================= */}
          <Typography
            sx={{
              fontSize: { xs: 26, sm: 30, lg: 48, xl: 56 },
              fontWeight: 600,
              color: "#111",
              mb: 1,
            }}
          >
            Services
          </Typography>

          {/* ================= UNDERLINE ================= */}
          <Box
            sx={{
              width: { xs: 60, sm: 70, lg: 90, xl: 110 },
              height: 4,
              mx: "auto",
              mb: { xs: 5, sm: 6, lg: 8 },
              borderRadius: 10,
              background:
                "linear-gradient(to right, #00e4c9, #a033ff, #ff267e)",
            }}
          />

          {/* ================= CARDS WRAPPER ================= */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 3, sm: 4, xl: 5 },
              justifyContent: "center",
            }}
          >
            {services.map((service, index) => (
              <Box
                key={index}
                onClick={() => navigate(service.path)}
                sx={{
                  position: "relative",
                  width: {
                    xs: "100%",
                    sm: "calc(50% - 16px)",
                    lg: "calc(33.333% - 24px)",
                  },
                  maxWidth: { lg: 380, xl: 440 },
                  p: { xs: 3, sm: 3.5, lg: 4, xl: 4.5 },
                  borderRadius: 2,
                  backgroundColor: "#fff",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.35s ease",

                  "&:hover": {
                    transform: { lg: "translateY(-6px)" },
                    boxShadow: "0 20px 45px rgba(0,0,0,0.08)",

                    "& .hoverCircle": {
                      width: { lg: "300%" },
                      height: { lg: "300%" },
                      right: { lg: "-100%" },
                      bottom: { lg: "-100%" },
                      borderRadius: "0%",
                    },

                    "& .readArrow": {
                      backgroundColor: "#0c43b1",
                      color: "#fff",
                    },
                  },
                }}
              >
                {/* BACK CIRCLE */}
                <Box
                  className="hoverCircle"
                  sx={{
                    position: "absolute",
                    right: { xs: -30, lg: -40 },
                    bottom: { xs: -30, lg: -40 },
                    width: { xs: 120, lg: 160, xl: 190 },
                    height: { xs: 120, lg: 160, xl: 190 },
                    borderRadius: "50%",
                    backgroundColor: "#f3f3f3",
                    transition: "all 0.5s ease-in-out",
                  }}
                />

                {/* CONTENT */}
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 18, sm: 19, lg: 24, xl: 26 },
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 13, sm: 14, lg: 18, xl: 19 },
                      color: "#777",
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      className="readArrow"
                      sx={{
                        width: { xs: 32, lg: 36, xl: 40 },
                        height: { xs: 32, lg: 36, xl: 40 },
                        borderRadius: "50%",
                        backgroundColor: "#f1f1f1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <ArrowForwardIcon sx={{ fontSize: 18 }} />
                    </Box>

                    <Typography
                      sx={{ fontSize: { xs: 14, xl: 15 }, color: "#666" }}
                    >
                      Read more
                    </Typography>
                  </Box>
                </Box>

                {/* ICON */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: 16, lg: 24 },
                    right: { xs: 16, lg: 24 },
                    zIndex: 1,
                    transform: {
                      xs: "scale(0.8)",
                      lg: "scale(1)",
                      xl: "scale(1.1)",
                    },
                  }}
                >
                  {service.icon}
                </Box>
              </Box>
            ))}
          </Box>
        </Appcontainer>
      </Box>

      <AboutUs />

      <ProductSection />

      <TestimonialSlider />
      <Choose />

      <Box sx={{ backgroundColor: "white" }}>
        {" "}
        <CTA />
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
