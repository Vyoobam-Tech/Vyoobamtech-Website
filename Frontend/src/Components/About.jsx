import { useNavigate, useLocation } from "react-router-dom";
import { Typography, Card, CardContent, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Header from "../Components/Header";
import Timeline from "../Components/Timeline";
import AboutCore from "./AboutCore";
import Footer from "./Footer";
import CTA from "./CTA";

import teamMeetingImage from "../assets/aboutintro.jpg";
import building from "../assets/building.jpg";
import wave from "../assets/wave1.jpg";

import { IoTelescopeSharp } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";

/* ================= LAZY BACKGROUND COMPONENT ================= */
const LazyBackground = ({ image, children, sx = {} }) => {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        backgroundImage: loaded ? `url(${image})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.6s ease",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

/* ================= ANIMATION ================= */
const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <Box>
      <Header />

      {/* ================= HERO (LAZY BG) ================= */}
      <LazyBackground
        image={wave}
        sx={{
          mt: { xs: 8, md: 12 },
          py: { xs: 6, md: 10 },
          px: 2,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            mb: 2,
            fontSize: {
              xs: "30px",
              sm: "38px",
              md: "48px",
              lg: "58px",
            },
          }}
        >
          Empowering Digital Transformation
        </Typography>

        <Typography>
          <span
            onClick={() => navigate("/")}
            style={{ cursor: "pointer", fontWeight: 600 }}
          >
            Home
          </span>
          &nbsp;&gt;&nbsp; <strong>About Us</strong>
        </Typography>
      </LazyBackground>

      {/* ================= ABOUT CONTENT ================= */}
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: 6 },
          py: { xs: 6, md: 10 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1.2fr 0.8fr",
          },
          gap: { xs: 4, md: 6 },
          background: "#fff",
        }}
      >
        {/* LEFT TEXT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
        >
          <Typography
            sx={{
              fontWeight: 600,
              mb: 2,
              textAlign: { xs: "center", md: "left" },
              fontSize: {
                xs: "26px",
                sm: "32px",
                md: "40px",
              },
            }}
          >
            Our Company
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "15px", md: "18px" },
              lineHeight: 1.7,
              mb: 3,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            At Vyoobam Tech, innovation meets impact. Since our founding in
            2015, we have been committed to helping businesses embrace digital
            transformation and thrive in an ever-changing world. From startups
            to enterprises, we deliver scalable, secure, and future-ready
            technology solutions that empower organizations to stay ahead of the
            competition
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "15px", md: "18px" },
              lineHeight: 1.7,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Over the years, we have expanded our expertise to deliver
            high-performance applications, intelligent platforms, and end-to-end
             digital ecosystems. Our mission is to empower teams, streamline
             operations, and enable growth through reliable and strategic
            technology solutions.
          </Typography>
        </motion.div>

        {/* RIGHT IMAGE (LAZY IMG) */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Card
            sx={{
              maxWidth: { xs: 300, sm: 350, md: 420 },
              width: "100%",
              borderRadius: 4,
            }}
          >
            <CardContent>
              <Box
                component="img"
                src={teamMeetingImage}
                alt="Team"
                loading="lazy"
                decoding="async"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                }}
              />

              <Button
                fullWidth
                sx={{
                  mt: 2,
                  py: 1.4,
                  borderRadius: "30px",
                  background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
                  textTransform: "none",
                  "&:hover": {
                    background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
                  },
                }}
                variant="contained"
                onClick={() => navigate("/Allservices")}
              >
                Explore Us →
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* ================= VISION / MISSION (LAZY BG) ================= */}
      <LazyBackground
        image={building}
        sx={{
          py: { xs: 6, md: 10 },
          px: 2,
          position: "relative",
          "::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "1100px",
            mx: "auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: 3,
            backdropFilter: "blur(8px)",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          {[
            {
              icon: <IoTelescopeSharp size={70} color="#4FC3F7" />,
              title: "Our Vision",
 text: " To be a global leader in technology innovation, enabling businesses to achieve sustainable growth and lasting impact through cutting-edge digital solutions.",
            },
            {
              icon: <TbTargetArrow size={70} color="#4FC3F7" />,
              title: "Our Mission",
              text: "To deliver customized, high-quality, and innovative solutions that align with business goals, enhance efficiency, and accelerate growth—while maintaining the highest levels of integrity, collaboration, and excellence.",}
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                p: { xs: 4, md: 6 },
                textAlign: "center",
                color: "#fff",
              }}
            >
              {item.icon}
              <Typography variant="h5" mt={2}>
                {item.title}
              </Typography>
              <Typography mt={1} sx={{ opacity: 0.85 }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </LazyBackground>

      <Timeline />
      <AboutCore />
      <CTA />
      <Footer />
    </Box>
  );
};

export default About;
