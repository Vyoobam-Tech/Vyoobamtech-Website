import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import careers from "../assets/dataservice.jpg";
import impactImg from "../assets/f3.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AnimatedBox } from "./AnimatedBox";
import Header from "./Header";

const expertiseList = [
  {
    title: "Predictive & prescriptive analytics",
    desc: "Leveraging historical data to forecast trends and recommend actionable strategies.",
  },
  {
    title: "Customer behavior insights",
    desc: "Analyzing user patterns to optimize engagement, retention, and conversion.",
  },
  {
    title: "Automated reporting & real-time dashboards",
    desc: "Dynamic visualization of key metrics for faster, data-driven decision making.",
  },
  {
    title: "AI/ML-driven data models",
    desc: "Implementing intelligent algorithms to enhance predictions, personalization, and efficiency.",
  },
];

export default function DataAnalytics() {
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
      <Box width="100%" minHeight="100vh" px={{ xs: 2, sm: 4, md: 0 }}>
        {/* HERO SECTION */}
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
              fontSize: { xs: "2.2rem", sm: "3rem", md: "4.5rem", lg: "5.5rem" },
              lineHeight: 1.1,
              background: "black",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Data Analytics
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
          From Information to Intelligence.
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
            px: { xs: 2, sm: 3, md: 8 },
            py: { xs: 5, sm: 6, md: 10 },
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* LEFT TITLE */}
          <Typography
            fontWeight={800}
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.3rem", md: "3rem", lg: "3.5rem" },
              lineHeight: 1.15,
              textAlign: { xs: "center", md: "left" },
              maxWidth: { xs: "100%", md: "45%" },
            }}
          >
            Transform Your <br /> Digital Journey
          </Typography>

          {/* RIGHT DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isTransformInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ flex: 1 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "0.95rem", md: "1.2rem" },
                color: "text.secondary",
                lineHeight: 1.7,
                textAlign: { xs: "center", md: "left" },
                ml: { xs: 0, md: 8 },
              }}
            >
              We transform raw data into actionable intelligence, enabling
              businesses to make faster and smarter decisions.
            </Typography>
          </motion.div>
        </Box>

        {/* EXPERTISE CARDS */}
        <Box
          sx={{
            bgcolor: "white",
            py: { xs: 5, sm: 6, md: 10 },
            px: { xs: 2, sm: 3, md: 8 },
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
                  background: "linear-gradient(to right, #00e4c9, #a033ff, #ff267e)",
                  margin: "12px auto 0",
                  borderRadius: "2px",
                },
              }}
            >
              Our Capabilities
            </Typography>
          </AnimatedBox>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
              gap: { xs: 3, sm: 4 },
              alignItems: "stretch",
            }}
          >
            {expertiseList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isTransformInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: "16px",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 }, display: "flex", flexDirection: "column", height: "100%" }}>
                    <Typography fontWeight={700} sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: { xs: "0.85rem", md: "0.9rem" }, lineHeight: 1.6, flexGrow: 1 }}>
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* BUSINESS IMPACT */}
        <Box
          ref={refImpact}
          sx={{
            bgcolor: "#f9f9f9",
            py: { xs: 5, sm: 6, md: 10 },
            px: { xs: 2, sm: 3, md: 8 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isImpactInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ flex: 1 }}
          >
            <Typography
              fontWeight={800}
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.1rem", md: "2.5rem" },
                mb: 3,
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  display: "block",
                  width: "60px",
                  height: "4px",
                  background: "linear-gradient(to right, #00e4c9, #a033ff, #ff267e)",
                  margin: "12px 0 0",
                  borderRadius: "2px",
                },
              }}
            >
              Business Impact
            </Typography>

            <Typography sx={{ color: "text.secondary", fontSize: { xs: "0.95rem", md: "1.05rem" }, lineHeight: 1.7, mb: 3 }}>
              Data analytics transforms decision-making from guesswork to data-backed precision. By uncovering patterns, trends, and actionable insights, it helps businesses understand customer behavior, optimize operations, and predict future outcomes. With accurate, real-time data, organizations can make smarter strategic choices, reduce risks, and drive consistent growth.
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: 3,
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                fontSize: "1rem",
                fontWeight: 400,
                background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
                textTransform: "none",
                "&:hover": { background: "linear-gradient(90deg, #00e4c9, #3f5eec)" },
              }}
              onClick={() => navigate("/Contact")}
            >
              View →
            </Button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <Box
            flex={1}
            component="img"
            src={impactImg}
            alt="Business Impact"
            sx={{ width: { xs: "60%", md: "40%" }, maxWidth: "400px", mt: { xs: 3, md: 0 } }}
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
}
