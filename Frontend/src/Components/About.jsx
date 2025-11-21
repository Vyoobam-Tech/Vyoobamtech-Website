import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import teamMeetingImage from "../assets/aboutintro.jpg"
import Header from "../Components/Header";
import Timeline from "../Components/Timeline";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IoTelescopeSharp } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import building from "../assets/building.jpg";
import wave from "../assets/wave1.jpg";

import AboutCore from "./AboutCore";
import Footer from "./Footer";
import "../Styles/About.css";
import CTA from "./CTA";
const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};



const About = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <Box className="about-section">
      <Header />
      {/* ✅ Simple Hero Section with Background Image */}
      {/* 🔹 HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${wave})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#0b0b0bff",
          py: 10,
          px: 2,
          mt: 12,
        }}
      >
        <Typography
          variant="h2"
          fontSize="58px"
          fontWeight="400"
          sx={{ textAlign: "center", mb: 2 }}
        >
          Empowering Digital Transformation
        </Typography>
        <Typography variant="subtitle1">
          <span
            onClick={() => navigate("/")}
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            Home
          </span>
          &nbsp;&gt;&nbsp; <span style={{ fontWeight: "bold" }}>About Us</span>
        </Typography>
      </Box>

      {/* 🔹 ABOUT CONTENT SECTION (Separate from Hero) */}
      <Box
        sx={{
          px: 4,
          py: 10,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "6fr 4fr" }, // slightly reduced right
          columnGap: { xs: 3, md: 6 }, // ✅ gap between left & right
          alignItems: "center",
background: "linear-gradient(-90deg, #fafafbff 0%, #c2d0eec5 150%)",

 // ✅ dark transparent bg
 
          color: "#fff", // ✅ text white
          mt: 0,
        }}
      >
        {/* Left Text */}
        <Box sx={{ minWidth: 0 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInRight}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 1,
                ml: 3,
                color: "#030303ff",
                fontWeight: 600,
                fontSize: "45px",
              }}
            >
              Our Company
            </Typography>
            <Typography
              variant="h6"
              color="black" fontWeight={500}
              sx={{ mt: 4, mb: 3, ml: 5,gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, }}
              gutterBottom
              
            >
              At Vyoobam Tech, innovation meets impact. Since our founding in
              2015, we have been committed to helping businesses embrace digital
              transformation and thrive in an ever-changing world. From startups
              to enterprises, we deliver scalable, secure, and future-ready
              technology solutions that empower organizations to stay ahead of
              the competition
            </Typography>
            <Typography
              variant="h6"
              color="black" fontWeight={400}
              sx={{ mb: 8, ml: 5 ,gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },}}
            >
              At Vyoobam Tech, innovation meets impact. Since our founding in
              2015, we have been committed to helping businesses embrace digital
              transformation and thrive in an ever-changing world. From startups
              to enterprises, we deliver scalable, secure, and future-ready
              technology solutions that empower organizations to stay ahead of
              the competition
            </Typography>
          </motion.div>
        </Box>

        {/* Right Image */}
        <Box
          sx={{ minWidth: 0, display: "flex", justifyContent: "center", mr: 5 }}
        >
          <Card
            elevation={2}
            sx={{
              borderRadius: 4,
              maxWidth: 400, // ✅ card size limited
              width: "100%",
            }}
          >
            <CardContent>
              <Box
                component="img"
                src={teamMeetingImage}
                alt="Team Meeting"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 1,
                  display: "block",
                }}
              />
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: "30px",
                    fontSize: "1rem",
                    fontWeight: 400,
                    background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
                    textTransform: "none",
                    "&:hover": {
                      background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
                    },
                  }}
                  onClick={() => navigate("/services")}
                >
                  Explore Us →
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Box
        sx={{
          py: 10,
          px: 2,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${building})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(6, 6, 6, 0.5)", // Optional dim effect
            zIndex: 1,
          },
        }}
      >
        {/* Inner Content Box */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            borderRadius: 2,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            overflow: "hidden",
            zIndex: 2,
            backgroundColor: "rgba(255, 255, 255, 0.05)", // very light transparent box
            border: "1px solid rgba(18, 17, 17, 0.1)", // optional soft border
            backdropFilter: "blur(8px)", // adds modern glass effect
          }}
        >
          {/* Vision Section */}
          <Box
            sx={{
              flex: 1,
              p: { xs: 4, md: 6 },
              textAlign: "center",

              display: "flex", // ✅ New
              flexDirection: "column", // ✅ New
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IoTelescopeSharp size={70} color="#4FC3F7" />
            <Typography variant="h5" mt={2} color="#fff">
              Our Vision
            </Typography>
            <Typography variant="body1" color="rgba(255,255,255,0.8)" mt={1}>
              To be a global leader in technology innovation, enabling
              businesses to achieve sustainable growth and lasting impact
              through cutting-edge digital solutions.
            </Typography>
          </Box>

          {/* Divider */}
          {/* Vertical Divider */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              px: 2,
            }}
          >
            <Box
              sx={{
                width: "1px",
                height: "70%", // or use 150px or any fixed height
                backgroundColor: "rgba(252, 240, 240, 0.3)", // soft grey line
                mx: 2,
              }}
            />
          </Box>

          {/* Mission Section */}
          <Box
            sx={{
              flex: 1,
              p: { xs: 4, md: 6 },
              textAlign: "center",
              display: "flex", // ✅ New
              flexDirection: "column", // ✅ New
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TbTargetArrow size={70} color="#4FC3F7" />
            <Typography variant="h5" mt={2} color="#fff">
              Our Mission
            </Typography>
            <Typography variant="body1" color="rgba(255,255,255,0.8)" mt={1}>
              To deliver customized, high-quality, and innovative solutions that
              align with business goals, enhance efficiency, and accelerate
              growth—while maintaining the highest levels of integrity,
              collaboration, and excellence.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box id="timeline-section" sx={{ overflowX: "visible" }}>
        <Timeline />
      </Box>

      <Box>
        <AboutCore />
      </Box>
      <CTA />
      <Footer />
    </Box>
  );
};

export default About;
