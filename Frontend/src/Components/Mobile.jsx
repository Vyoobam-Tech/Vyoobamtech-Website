import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import careers from "../assets/mobileservice.jpg";
import impactImg from "../assets/f2.png";
import Slider from "react-slick";
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
               mt={18} ml={8}
              fontSize={90}
              sx={{
                background: "black",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
            Mobile App Development
              <br />
            </Typography>
          </motion.div>

          <Typography variant="h6" mt={1} fontSize={30} ml={8}>
          Engaging Customers Anywhere, Anytime...
          </Typography>
       

        {/* BACKGROUND IMAGE */}
        {/* <Box
          sx={{
            position: "relative",
            height: { xs: "60vh", md: "90vh" },
            backgroundImage: `url(${careers})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0% 100%)",
          }}
        /> */}<Box
                  sx={{
                    position: "relative",
                    height: { xs: "60vh", md: "90vh" },
                    backgroundImage: `url(${careers})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    clipPath: "polygon(0 50%, 123% 0, 100% 100%, 0% 100%)",
                   
                  }}
                />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // mobile → column, desktop → row
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 3, md: 8 },
            py: { xs: 6, md: 10 },
            gap: 4,
          }}
        >
          {/* Left Side - Title */}
         
           < Typography
    variant="h2"
    fontWeight={800} 
    sx={{
      fontSize: {
        xs: "2rem",        // mobile
        sm: "2.5rem",      // small tablets
        md: "3rem",        // desktop
        lg: "3.5rem",     // large screens
      },
      lineHeight: 1.2,
    }}
  >
    Transform Your <br /> Digital Journey
  </Typography>
        

          {/* Right Side - Description */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "text.secondary",
                lineHeight: 1.6,ml:10
              }}
            >
              In today’s mobile-first world, apps are the fastest way to engage
              customers. We create high-performance mobile applications that
              combine scalability, security, and intuitive design.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "white",
            py: { xs: 6, md: 10 },
            px: { xs: 3, md: 8 },
            textAlign: "center",
          }}
        >
          {/* Section Title */}
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

          {/* Cards Layout */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 4,
            }}
          >
            {expertiseList.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 22%" },
                  display: "flex",
                }}
              >
                  <Card
                  sx={{
                    flex: 1,
                    borderRadius: "16px",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                    flexDirection: "column", // make content vertical
    height: "100%",
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
                      sx={{
                        fontSize: "1.1rem",
                        mb: 1,
                      }}
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
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
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
        {/* Left Side - Content */}
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
                    "linear-gradient(to right, #00e4c9, #a033ff, #ff267e)", // Tech Mahindra Red
                  margin: "12px 0 0",
                  borderRadius: "2px",
                },
              }}
            >
              Business Impact
            </Typography>
          </AnimatedBox>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              mb: 3,
            }}
          >
           Mobile app development empowers businesses to deliver seamless digital experiences that drive measurable results. It strengthens customer engagement through personalized interactions, loyalty-driven features, and intuitive UX. Apps enhance operational efficiency by automating workflows,
            integrating backend systems, and providing real-time insights for decision-making.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              mb: 3,
            }}
          >Through secure transactions, in-app analytics, geolocation capabilities, and targeted push notifications, businesses gain new monetization opportunities and expanded market reach. Ultimately, mobile apps act as a strategic asset that supports scalability, increases revenue, and builds long-term customer relationships
          </Typography>

          {/* Optional CTA */}
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
                 width: "30%",
                 height: "350px",
                
               }}
             />
           
      </Box>
      <Footer />
    </>
  );
}
