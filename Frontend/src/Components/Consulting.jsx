import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import careers from "../assets/finalit.jpg";
import impactImg from "../assets/f5.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AnimatedBox } from "./AnimatedBox";
import Header from "./Header";

const expertiseList = [
  {
    title: "IT strategy & digital roadmaps",
    desc: "Defining technology vision and actionable plans to achieve business goals.",
  },
  {
    title: "System modernization & cloud migration",
    desc: "Upgrading legacy systems and moving workloads to secure, scalable cloud platforms.",
  },
  {
    title: "Workflow automation & process redesign",
    desc: "Optimizing business processes with automation and improved efficiency.",
  },
  {
    title: "Technology stack advisory",
    desc: "Guidance on selecting the right tools, frameworks, and platforms for your organization.",
  },
];

export default function Consulting() {
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
      <Box width="100%" minHeight="100vh">
        {/* HERO SECTION */}
        <motion.div
          ref={refHero}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView || animateNow ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Typography
            fontWeight={700}
            sx={{
              mt: { xs: 8, sm: 12, md: 18 },
              ml: { xs: 0, sm: 4, md: 8 },
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem", lg: "6rem" },
              lineHeight: 1.1,
              background: "black",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            IT Consulting
          </Typography>
        </motion.div>

        <Typography
          sx={{
            mt: 1,
            ml: { xs: 0, sm: 4, md: 8 },
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          Driving Digital Transformation...
        </Typography>

        {/* HERO IMAGE */}
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
              We partner with organizations to design and implement future-ready
              digital strategies. Our consultants bring deep expertise in
              technology, industry trends, and process optimization.
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
                  background:
                    "linear-gradient(to right, #00e4c9, #a033ff, #ff267e)",
                  margin: "12px auto 0",
                  borderRadius: "2px",
                },
              }}
            >
              Our Consulting Areas
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
                  <CardContent
                    sx={{
                      p: { xs: 3, md: 4 },
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
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
                        flexGrow: 1,
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
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              IT consulting helps organizations optimize operations, reduce
              costs, and strengthen their overall digital strategy. By aligning
              technology with business goals, it enables companies to modernize
              systems, streamline workflows, and improve efficiency. With expert
              guidance, businesses can adopt scalable solutions, enhance
              resilience, and stay competitive in an evolving digital economy.
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
                "&:hover": {
                  background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
                },
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
            sx={{
              width: { xs: "60%", md: "40%" },
              maxWidth: "400px",
              mt: { xs: 3, md: 0 },
            }}
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
}
