import { Box, Typography, Card, CardContent,Button } from "@mui/material";
import careers from "../assets/careers.jpg";
import impactImg from "../assets/software.jpg"
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AnimatedBox } from "./AnimatedBox";
const expertiseList = [
   {
    title: "Rich visuals: charts, maps, and performance dashboards",
    desc: "Engaging, interactive visualizations to clearly communicate complex data.",
  },
  {
    title: "Custom role-based views (C-suite, managers, analysts)",
    desc: "Tailored dashboards and reports to provide relevant insights for every user type.",
  },
  {
    title: "Integration with ERP, CRM, IoT & cloud systems",
    desc: "Seamless connectivity with enterprise systems for comprehensive data insights.",
  },
  {
    title: "Self-service analytics tools",
    desc: "Empowering users to explore, analyze, and visualize data independently.",
  },
];
export default function DiagonalHeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // desktop
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };
   const navigate = useNavigate();
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // only animate once
  const [animateNow, setAnimateNow] = useState(false);
  useEffect(() => {
    setAnimateNow(true);
  }, []);
  return (
    <>
    <Box width="100%" minHeight="100vh">
      {/* First White Section */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "white",
          clipPath: "polygon(0 ,0, 100% 0, 100% 80%, 0 100%)",  // bottom diagonal
          zIndex: 2,
          py: { xs: 6, md: 4 },
          px: { xs: 2, md: 10 },
        }}
      >
        <Typography variant="subtitle1">
    <span
      onClick={() => navigate("/")}
      style={{ cursor: "pointer", fontWeight: "bold" }}
    >
      Home
    </span>
    &nbsp;&gt;&nbsp; <span style={{ fontWeight: "200" }}>Service</span>
  </Typography>
   <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView || animateNow ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Typography
          variant="h2"
          fontWeight={700} mt={3} fontSize={90}
          sx={{
            background:
              "black",
            backgroundSize: "600% 600%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: isInView || animateNow ? "gradientFlow 6s ease infinite" : "none",
          }}
        >
        
          Data Visualization 
          <br />
      
        </Typography>
         </motion.div>
        <Typography variant="h6" mt={1} fontSize={30}>
          Making Complex Data Simple...
        </Typography>
        
      </Box>
     

      {/* Second Section with Image */}
      <Box
        sx={{
          position: "relative",
          height: "60vh",
          backgroundImage: `url(${careers})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          clipPath: "polygon(0 90%, 100% 0, 100% 100%, 0% 100%)", // top diagonal
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
      <Box sx={{ flex: 1 }}>
        
        <Typography
          variant="h2"
          fontWeight={800}
          sx={{
            fontSize: { xs: "2rem", md: "3rem" }, // mobile smaller, desktop bigger
            lineHeight: 1.2,
          }}
        >
          Transform Your <br /> Digital Journey
        </Typography>
        
      </Box>

      {/* Right Side - Description */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            color: "text.secondary",
            lineHeight: 1.6,
          }}
        >
          Information is powerful only when it is clear.
           Our data visualization services deliver interactive dashboards and 
           real-time insights for leaders and teams.

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
            background: "linear-gradient(to right, #00e4c9, #a033ff, #ff267e)",
            margin: "12px auto 0",
            borderRadius: "2px",
          },
        }}
      >
       Our Features
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
              background: "linear-gradient(to right, #00e4c9, #a033ff, #ff267e)", // Tech Mahindra Red
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
          Simplifies complex datasets, enabling faster decisions and improved business agility.

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
      onClick={() => navigate("/services")}
    >
      View   →
    </Button>
       
      </Box>

      {/* Right Side - Image */}
      <Box
        flex={1}
        component="img"
        src={impactImg}
        alt="Business Impact"
        sx={{
          width: "30%",
          borderRadius: "16px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          objectFit: "cover",
        }}
      />
    </Box>
    <Footer/>
    </>
    
  );
}
