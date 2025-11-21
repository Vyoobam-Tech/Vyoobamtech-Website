import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import careers from "../assets/webservice.jpg";
import impactImg from "../assets/web2.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AnimatedBox } from "./AnimatedBox";
import Header from "./Header";

const expertiseList = [
  {
    title: "Responsive & adaptive web applications",
    desc: "Modern, mobile-first apps that scale across devices seamlessly.",
  },
  {
    title: "Enterprise-grade portals & e-commerce platforms",
    desc: "Robust platforms built for security, scalability, and performance.",
  },
  {
    title: "API integrations & secure payment systems",
    desc: "Smooth integrations with 3rd party APIs and secure payment gateways.",
  },
  {
    title: "SEO-first architecture for higher visibility",
    desc: "Optimized designs to ensure better ranking and discoverability.",
  },
];

export default function WebDevelopment() {
  const navigate = useNavigate();
  const [animateNow, setAnimateNow] = useState(false);

  // 🔥 Refs for each animated section
  const refHero = useRef(null);
  const refTransform = useRef(null);
  const refImpact = useRef(null);

  // 🔥 InView triggers
  const isHeroInView = useInView(refHero, { once: true });
  const isTransformInView = useInView(refTransform, { once: true });
  const isImpactInView = useInView(refImpact, { once: true });

  useEffect(() => setAnimateNow(true), []);

  return (
    <>
      <Header />
      <Box width="100%" minHeight="100vh">
        {/* 🔥 HERO SECTION */}
        <Box
          sx={{
            position: "relative",
            bgcolor: "white",
            clipPath: "polygon(0 ,0, 100% 0, 100% 80%, 0 100%)",
            zIndex: 2,
            py: { xs: 6, md: 14 },
            px: { xs: 2, md: 10 },
          }}
        >
          {/* <Typography variant="subtitle1">
            <span
              onClick={() => navigate("/")}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              s
           </span>
          </Typography> */}

          <motion.div
            ref={refHero}
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView || animateNow ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              fontWeight={700}
              mt={3}
              fontSize={90}
              sx={{
                background: "black",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Web Development
              <br />
            </Typography>
          </motion.div>

          <Typography variant="h6" mt={1} fontSize={30}>
            Building the Digital Face of Your Business...
          </Typography>
        </Box>

        {/* BACKGROUND IMAGE */}
        <Box
          sx={{
            position: "relative",
            height: { xs: "60vh", md: "90vh" },
            backgroundImage: `url(${careers})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0% 100%)",
          }}
        />

        {/* 🔥 TRANSFORM SECTION (Right side animation) */}
        <Box
          ref={refTransform}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 3, md: 8 },
            py: { xs: 6, md: 10 },
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                lineHeight: 1.2,
              }}
            >
              Transform Your <br /> Digital Journey
            </Typography>
          </Box>

          {/* 🔥 Right content animation */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={
              isTransformInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }
            }
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ flex: 1 }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "text.secondary",
                lineHeight: 1.6,
              }}
            >
              We combine innovation, design thinking, and advanced technology to
              deliver scalable solutions that help organizations thrive in the
              digital era. From cloud-native applications to AI-driven
              platforms, our expertise spans across industries and use-cases.
            </Typography>
          </motion.div>
        </Box>

        {/* OUR EXPERTISE SECTION */}
        <Box
          sx={{
            bgcolor: "white",
            py: { xs: 6, md: 10 },
            px: { xs: 3, md: 8 },
            textAlign: "center",
          }}
        >
          <AnimatedBox delay={0.2}>
            <Typography
              variant="h3"
              fontWeight={800}
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                mb: 6,
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  display: "block",
                  width: "60px",
                  height: "4px",
                  background:
                    "linear-gradient(to right, #00e4c9, #a033ff, #ff267e)",
                  margin: "12px auto 0",
                  borderRadius: "2px",
                },
              }}
            >
              Our Expertise
            </Typography>
          </AnimatedBox>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 4,
            }}
          >
            {expertiseList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isTransformInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{ flex: "1 1 22%" }}
              >
                <Card
                  sx={{
                    borderRadius: "16px",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ mb: 1, fontSize: "1.1rem" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.9rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>

      {/* 🔥 BUSINESS IMPACT SECTION (Left text + zoom image) */}
      <Box
        ref={refImpact}
        sx={{
          bgcolor: "#f9f9f9",
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 8 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 6,
        }}
      >
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={
            isImpactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }
          }
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ flex: 1 }}
        >
          <Typography
            variant="h3"
            fontWeight={800}
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              mb: 3,
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                display: "block",
                width: "60px",
                height: "4px",
                background:
                  "linear-gradient(to right, #00e4c9, #a033ff, #ff267e)",
                margin: "12px 0 0",
                borderRadius: "2px",
              },
            }}
          >
            Business Impact
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              mb: 3,
            }}
          >
            Empowers organizations to connect with customers globally,
            streamline online operations, and achieve measurable growth.
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 6,
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
            onClick={() => navigate("/Contact")}
          >
            View →
          </Button>
        </motion.div>

        {/* 🔥 Image zoom animation */}
        <motion.img
          src={impactImg}
          alt="Business Impact"
          initial={{ scale: 1 }}
          animate={isImpactInView ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 3, ease: "easeInOut" }}
          style={{
            width: "40%",
            borderRadius: "16px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
            objectFit: "cover",
          }}
        />
      </Box>

      <Footer />
    </>
  );
}
