import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import careers from "../assets/mobileservice.jpg";
import impactImg from "../assets/f2.png";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AnimatedBox } from "./AnimatedBox";
import Header from "./Header";

const expertiseList = [
  {
    title: "Native iOS & Android apps",
    desc: "High-performance, platform-specific apps built for iOS and Android devices.",
  },
  {
    title: "Cross-platform development (Flutter, React Native)",
    desc: "Single codebase apps that run smoothly on multiple platforms, saving time and resources.",
  },
  {
    title: "Real-time features: push notifications, geo-tracking, chatbots",
    desc: "Enhancing user engagement with instant updates, location tracking, and interactive bots.",
  },
  {
    title: "Secure authentication & cloud integration",
    desc: "Ensuring user security with robust authentication and seamless cloud connectivity.",
  },
];

export default function MobileDevelopment() {
  const navigate = useNavigate();
  const [animateNow, setAnimateNow] = useState(false);

  const refHero = useRef(null);
  const refTransform = useRef(null);
  const refImpact = useRef(null);

  const isHeroInView = useInView(refHero, { once: true });
  const isTransformInView = useInView(refTransform, { once: true });
  const isImpactInView = useInView(refImpact, { once: true });

  useEffect(() => setAnimateNow(true), []);

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <Box width="100%" minHeight="100vh" px={{ xs: 2, sm: 4, md: 0 }}>
        <motion.div
          ref={refHero}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView || animateNow ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{
              mt: { xs: 8, sm: 12, md: 18 },
              ml: { xs: 0, sm: 4, md: 8 },
              fontSize: {
                xs: "2.2rem",
                sm: "3rem",
                md: "4.5rem",
                lg: "5.5rem",
              },
              lineHeight: 1.1,
              background: "black",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Mobile App Development
          </Typography>
        </motion.div>

        <Typography
          variant="h6"
          sx={{
            mt: 1,
            ml: { xs: 0, sm: 4, md: 8 },
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.8rem" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          Engaging Customers Anywhere, Anytime...
        </Typography>

        {/* HERO BACKGROUND IMAGE */}
        <Box
          sx={{
            position: "relative",
            mt: { xs: 4, md: 8 },
            height: { xs: "45vh", sm: "60vh", md: "90vh" },
            backgroundImage: `url(${careers})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: {
              xs: "polygon(0 40%, 100% 0, 100% 100%, 0% 100%)",
              sm: "polygon(0 45%, 100% 0, 100% 100%, 0% 100%)",
              md: "polygon(0 50%, 100% 0, 100% 100%, 0% 100%)",
            },
          }}
        />

        {/* TRANSFORM SECTION */}
        <Box
          ref={refTransform}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 2, md: 8 },
            py: { xs: 5, md: 10 },
            gap: { xs: 4, md: 6 },
          }}
        >
          <Typography
            fontWeight={800}
            sx={{
              fontSize: {
                xs: "1.8rem",
                sm: "2.3rem",
                md: "3rem",
                lg: "3.5rem",
              },
              lineHeight: 1.15,
              textAlign: { xs: "center", md: "left" },
              maxWidth: { xs: "100%", md: "45%" },
            }}
          >
            Transform Your <br /> Digital Journey
          </Typography>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={
              isTransformInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }
            }
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ flex: 1 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.2rem" },
                color: "text.secondary",
                lineHeight: 1.7,
                ml: { xs: 0, md: 10 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              In today’s mobile-first world, apps are the fastest way to engage
              customers. We create high-performance mobile applications that
              combine scalability, security, and intuitive design.
            </Typography>
          </motion.div>
        </Box>

        {/* EXPERTISE CARDS */}
        <Box
          sx={{
            bgcolor: "white",
            py: { xs: 5, md: 10 },
            px: { xs: 2, md: 8 },
            textAlign: "center",
          }}
        >
          <AnimatedBox delay={0.2}>
            <Typography
              fontWeight={800}
              sx={{
                fontSize: { xs: "1.7rem", sm: "2rem", md: "2.5rem" },
                mb: { xs: 4, md: 6 },
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
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(4, 1fr)",
              },
              gap: { xs: 3, sm: 4 },
            }}
          >
            {expertiseList.map((item, index) => (
              <Card
                key={index}
                sx={{
                  height: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  },
                  display: "flex",
                  flexDirection: "column",
                  p: { xs: 2, md: 4 },
                }}
              >
                <Typography
                  fontWeight={700}
                  sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, mb: 1 }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.85rem", md: "0.9rem" },
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>

        {/* IMPACT SECTION */}
        <Box
          ref={refImpact}
          sx={{
            bgcolor: "#f9f9f9",
            py: { xs: 5, md: 10 },
            px: { xs: 2, md: 8 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 6 },
          }}
        >
          <Box flex={1}>
            <AnimatedBox delay={0.2}>
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
            </AnimatedBox>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              Mobile app development empowers businesses to deliver seamless
              digital experiences that drive measurable results...
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              Through secure transactions, in-app analytics, geolocation
              capabilities, and targeted push notifications, businesses gain new
              monetization opportunities and expanded market reach.
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: { xs: 3, md: 6 },
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
          </Box>

          <Box
            flex={1}
            component="img"
            src={impactImg}
            alt="Business Impact"
            sx={{
              width: { xs: "100%", sm: "50%", md: "35%" },
              maxWidth: "420px",
              mt: { xs: 4, md: 0 },
            }}
          />
        </Box>
      </Box>

      <Footer />
    </>
  );
}
