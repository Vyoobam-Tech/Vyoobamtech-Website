import { Typography, Button, Container, Box } from "@mui/material";
//import logoImg from "../assets/logo.jpg";
import laptop from "../assets/laptop.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import bgVideo from "../assets/video.mp4"
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import ServiceSlider from "../Components/ServiceSlider";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useInView } from "react-intersection-observer";
import Choose from "../Components/Choose";
import TestimonialSlider from "../Components/TestimonialSlider";
import ProductSection from "./ProductSection";
import CTA from "./CTA";
import AboutUs from "./AboutUs";
import infinity from "../assets/infinity1.jpg";
import WebIcon from "@mui/icons-material/Public";
import MobileFriendlyIcon from "@mui/icons-material/Smartphone";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AnimatedBox } from "./AnimatedBox";

const Home = () => {
  const navigate = useNavigate();
  const serviceSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    { title: "Web Development", icon: <WebIcon fontSize="large" /> ,path:"/service/web-development"},
    {
      title: "Mobile Development",
      icon: <MobileFriendlyIcon fontSize="large" />,path:"/services/Mobile-development" 
    },
    { title: "UI/UX Design", icon: <DesignServicesIcon fontSize="large" />,path:"/services/Ui-development" },
    { title: "Data Analysis", icon: <BusinessCenterIcon fontSize="large" />,path:"/services/Data-development" },
    { title: "IT Consulting", icon: <QueryStatsIcon fontSize="large" />,path:"/services/it-consulting" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (serviceSectionRef.current) {
      observer.observe(serviceSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 👇 Inside your Home component, at the top
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const [ref, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const slideInLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div>
      <Box sx={{ backgroundColor: "#d7e5f7ff", py: 0 }}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#000002ff", // Dark blue background
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "100vh",
              width: { xs: "100vw", md: "45vw" }, // Responsive wid
              display: "flex",
              alignItems: "flex-end",
              pr: { xs: 0, md: 2 },
              pb: { xs: 2, md: 3 },
              pt: { xs: 2, md: 4 },
              justifyContent: "flex-end",
            }}
          >
            <img
              src={infinity}
              alt="Right Side"
              style={{
                height: "80%",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </Box>
        </Box>

        {/* Main Section */}

        <Header />
        <Box
          sx={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "transparent", // ✅ allow video to be seen
            zIndex: 1,
            px: 2,
          }}
        >
          {/* Center Content */}
          <Container
            sx={{
              py: { xs: 12, md: 20 },
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              justifyContent: "left",
              textAlign: "left",
              position: "relative",
              zIndex: 1,
            }}
          >
            <motion.div
              ref={ref}
              variants={slideInLeft}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              style={{ maxWidth: "800px" }}
            >
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  mt: 5,
                  color: "#fff",

                  fontSize: { xs: "1.6rem", md: "2.90rem" },
                  lineHeight: "3rem",
                }}
              >
                Empowering Businesses with Digital Innovation
              </Typography>
              <Typography
                variant="h3"
                color="inherit"
                sx={{
                  mt: 5,
                  color: "#ddd",
                  fontSize: { xs: "1rem", md: "1.10rem" },
                  lineHeight: "1.8rem",
                }}
              >
                At Vyoobam Tech, we deliver next-gen IT solutions that help
                businesses scale faster, operate smarter, and adapt better in
                the digital-first world. From web and mobile applications to
                analytics and enterprise platforms, we are the technology
                partner that drives your success.
              </Typography>
              {/* <Box sx={{mt:3}}> <BlobButton >GET IN TOUCH </BlobButton></Box> */}
              <Button
                variant="contained"
                sx={{
                  mt: 6,
                  px: 4,
                  py: 1.5,
                  borderRadius: "30px",
                  fontSize: "1rem",
                  fontWeight: 400,
                  background: "linear-gradient(90deg, #3f5eec, #00e4c9)", // your logo theme color
                  textTransform: "none",
                  "&:hover": {
                    background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
                  },
                }}
                onClick={() => navigate("/about")}
              >
                See More →
              </Button>
            </motion.div>
          </Container>
        </Box>
      </Box>

      {/* service section*/}

      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* Service Section */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              backgroundColor: "white",
              px: 6,
              py: { xs: 4, md: 8 }, // ✅ Height increase
              minHeight: "80vh", // ✅ Section height fixed (you can increase further if needed)
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // ✅ Center alignment
              justifyContent: "center",
            }}
          >
            <AnimatedBox>
              {/* Heading */}
              <Typography
                variant="h2"
                sx={{
                  mb: 1,
                  mt: 5,
                  color: "#150357ff",
                  fontWeight: 600,
                  fontSize: "37px",
                }}
              >
                Services
              </Typography>
            </AnimatedBox>
            <Box
              sx={{
                mt: 2,
                mb: 8,
                height: "4px", // thickness
                width: "100px", // half small width
                mx: "auto", // center horizontally
                borderRadius: "16px",
                background:
                  "linear-gradient(to right, #00e4c9, #a033ff, #ff267e)", // logo theme
              }}
            />

            {/* Service Cards */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 5,
              }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  onClick={() =>
                    navigate(service.path)
                  } // ✅ Click navigate
                  style={{ cursor: "pointer" }}
                >
                 <Box
  sx={{
    width: { xs: "90vw", sm: 240, md: 280 },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    p: 4,
    border: "1px solid gray",
    borderRadius: "16px",
    backgroundColor: "#f9fafb",
    position: "relative", // ✅ needed for pseudo element
    transition: "all 0.4s ease",
    cursor: "pointer",
    overflow: "hidden", // ✅ keeps rounded corners visible

    // ✨ Gradient border effect (always rounded)
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      borderRadius: "16px",
      padding: "2px",
      background: "linear-gradient(to right, #00e4c9, #a033ff, #ff267e)",
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
      opacity: 0,
      transition: "opacity 0.3s ease",
      pointerEvents: "none", // avoid blocking hover
    },

    "&:hover::before": {
      opacity: 1, // ✅ show gradient border on hover
    },

    "&:hover": {
       border: "1px solid transparent",
      boxShadow: "0 4px 20px rgba(7, 7, 7, 0.1)",
      transform: "translateY(-2px)",
      background:
          "linear-gradient(to right, #f0f1ffff, #dee5f4ff, #c8daf5ff)",
    },

    "&:hover .arrow": {
      opacity: 1,
      transform: "translateY(0)",
    },
  }}
>
  <Box sx={{ fontSize: "3rem", color: "#3f5eecff", mb: 2 }}>
    {service.icon}
  </Box>
  <Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1, // spacing between text and arrow
  }}
>
  <Typography variant="h6" fontWeight={400}>
    {service.title}
  </Typography>
  <ArrowForwardIcon
      className="arrow"
      sx={{
        color: "#172160ff",
        fontSize: 22,
        opacity: 0, // hidden initially
        transform: "translateX(-10px)", // slight left offset
        transition: "all 0.3s ease",
      }}
    />
    </Box>
</Box>

                </motion.div>
              ))}
            </Box>
            <Button
              variant="contained"
              sx={{
                mt: 6,
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                fontSize: "1rem",
                fontWeight: 400,
                background: "linear-gradient(90deg, #3f5eec, #00e4c9)", // your logo theme color
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
                },
              }}
              onClick={() => navigate("/Allservices")}
            >
              View All Services ←
            </Button>
          </Box>
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
      </Box>
    </div>
  );
};

export default Home;
