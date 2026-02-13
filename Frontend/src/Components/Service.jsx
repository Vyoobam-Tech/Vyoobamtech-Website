// import { Box, Typography, Card, CardContent, Button } from "@mui/material";
// import careers from "../assets/webservice.jpg";
// import impactImg from "../assets/f1.jpg";
// import { useNavigate } from "react-router-dom";
// import Footer from "./Footer";
// import { motion, useInView } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { AnimatedBox } from "./AnimatedBox";
// import Header from "./Header";

// const expertiseList = [
//   {
//     title: "Responsive & adaptive web applications",
//     desc: "Modern, mobile-first apps that scale across devices seamlessly.",
//   },
//   {
//     title: "Enterprise-grade portals & e-commerce platforms",
//     desc: "Robust platforms built for security, scalability, and performance.",
//   },
//   {
//     title: "API integrations & secure payment systems",
//     desc: "Smooth integrations with 3rd party APIs and secure payment gateways.",
//   },
//   {
//     title: "SEO-first architecture for higher visibility",
//     desc: "Optimized designs to ensure better ranking and discoverability.",
//   },
// ];

// export default function WebDevelopment() {
//   const navigate = useNavigate();
//   const [animateNow, setAnimateNow] = useState(false);

//   // 🔥 Refs for each animated section
//   const refHero = useRef(null);
//   const refTransform = useRef(null);
//   const refImpact = useRef(null);

//   // 🔥 InView triggers
//   const isHeroInView = useInView(refHero, { once: true });
//   const isTransformInView = useInView(refTransform, { once: true });
//   const isImpactInView = useInView(refImpact, { once: true });

//   useEffect(() => setAnimateNow(true), []);

//   return (
//     <>
//       <Header />
//       <Box width="100%" minHeight="100vh" px={{ xs: 2, sm: 4, md: 0 }}>
//         {/* HERO TEXT */}
//         <motion.div
//           ref={refHero}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isHeroInView || animateNow ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           <Typography
//             variant="h2"
//             fontWeight={700}
//             sx={{
//               mt: { xs: 8, sm: 12, md: 18 },
//               ml: { xs: 0, sm: 4, md: 8 },
//               fontSize: {
//                 xs: "2.2rem", // mobile
//                 sm: "3rem", // tablet
//                 md: "4.5rem", // desktop
//                 lg: "5.5rem", // large screens
//               },
//               lineHeight: 1.1,
//               background: "black",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               textAlign: { xs: "center", sm: "left" },
//             }}
//           >
//             Web Development
//           </Typography>
//         </motion.div>

//         {/* SUB TEXT */}
//         <Typography
//           variant="h6"
//           sx={{
//             mt: 1,
//             ml: { xs: 0, sm: 4, md: 8 },
//             fontSize: {
//               xs: "1rem",
//               sm: "1.2rem",
//               md: "1.8rem",
//             },
//             textAlign: { xs: "center", sm: "left" },
//           }}
//         >
//           Building the Digital Face of Your Business...........
//         </Typography>

//         {/* BACKGROUND IMAGE */}
//         <Box
//           sx={{
//             position: "relative",
//             mt: { xs: 4, md: 8 },
//             height: {
//               xs: "45vh",
//               sm: "60vh",
//               md: "90vh",
//             },
//             backgroundImage: `url(${careers})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             clipPath: {
//               xs: "polygon(0 40%, 100% 0, 100% 100%, 0% 100%)", // mobile scaled down
//               sm: "polygon(0 45%, 100% 0, 100% 100%, 0% 100%)", // tablet
//               md: "polygon(0 50%, 100% 0, 100% 100%, 0% 100%)", // desktop
//             },
//           }}
//         />

//         <Box
//           ref={refTransform}
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             alignItems: "center",
//             justifyContent: "space-between",
//             px: { xs: 2, sm: 3, md: 8 },
//             py: { xs: 5, sm: 6, md: 10 },
//             gap: { xs: 4, md: 6 },
//           }}
//         >
//           {/* LEFT TITLE */}
//           <Typography
//             fontWeight={800}
//             sx={{
//               fontSize: {
//                 xs: "1.8rem", // mobile
//                 sm: "2.3rem", // tablets
//                 md: "3rem", // desktop
//                 lg: "3.5rem", // large
//               },
//               lineHeight: 1.15,
//               textAlign: { xs: "center", md: "left" },
//               maxWidth: { xs: "100%", md: "45%" },
//             }}
//           >
//             Transform Your <br /> Digital Journey
//           </Typography>

//           {/* RIGHT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             animate={
//               isTransformInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }
//             }
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             style={{ flex: 1 }}
//           >
//             <Typography
//               sx={{
//                 fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.2rem" },
//                 color: "text.secondary",
//                 lineHeight: 1.7,
//                 ml: { xs: 0, md: 10 }, // 🔥 mobile fix
//                 textAlign: { xs: "center", md: "left" },
//               }}
//             >
//               We combine innovation, design thinking, and advanced technology to
//               deliver scalable solutions that help organizations thrive in the
//               digital era. From cloud-native applications to AI-driven
//               platforms, our expertise spans across industries and use-cases.
//             </Typography>
//           </motion.div>
//         </Box>

//         <Box
//           sx={{
//             bgcolor: "white",
//             py: { xs: 5, sm: 6, md: 10 },
//             px: { xs: 2, sm: 3, md: 8 },
//             textAlign: "center",
//           }}
//         >
//           <AnimatedBox delay={0.2}>
//             <Typography
//               fontWeight={800}
//               sx={{
//                 fontSize: { xs: "1.7rem", sm: "2rem", md: "2.5rem" },
//                 mb: { xs: 4, md: 6 },
//                 position: "relative",
//                 display: "inline-block",
//                 "&::after": {
//                   content: '""',
//                   display: "block",
//                   width: "60px",
//                   height: "4px",
//                   background:
//                     "linear-gradient(to right, #00e4c9, #a033ff, #ff267e)",
//                   margin: "12px auto 0",
//                   borderRadius: "2px",
//                 },
//               }}
//             >
//               Our Expertise
//             </Typography>
//           </AnimatedBox>

//           {/* GRID */}
//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: {
//                 xs: "1fr",
//                 sm: "1fr 1fr",
//                 md: "repeat(4, 1fr)",
//               },
//               gap: { xs: 3, sm: 4 },
//               alignItems: "stretch",
//             }}
//           >
//             {expertiseList.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={
//                   isTransformInView
//                     ? { opacity: 1, y: 0 }
//                     : { opacity: 0, y: 40 }
//                 }
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 style={{ height: "100%" }}
//               >
//                 <Card
//                   sx={{
//                     height: "100%",
//                     borderRadius: "16px",
//                     boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
//                     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                     "&:hover": {
//                       transform: "translateY(-8px)",
//                       boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//                     },
//                   }}
//                 >
//                   <CardContent
//                     sx={{
//                       p: { xs: 3, md: 4 },
//                       display: "flex",
//                       flexDirection: "column",
//                       height: "100%",
//                     }}
//                   >
//                     <Typography
//                       fontWeight={700}
//                       sx={{
//                         fontSize: { xs: "1rem", md: "1.1rem" },
//                         mb: 1,
//                       }}
//                     >
//                       {item.title}
//                     </Typography>

//                     <Typography
//                       sx={{
//                         color: "text.secondary",
//                         fontSize: { xs: "0.85rem", md: "0.9rem" },
//                         lineHeight: 1.6,
//                         flexGrow: 1,
//                       }}
//                     >
//                       {item.desc}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </Box>
//         </Box>
//       </Box>

//       <Box
//         ref={refImpact}
//         sx={{
//           bgcolor: "#f9f9f9",
//           py: { xs: 5, sm: 6, md: 10 },
//           px: { xs: 2, sm: 3, md: 8 },
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           alignItems: "center",
//           gap: { xs: 4, md: 6 },
//         }}
//       >
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           animate={
//             isImpactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }
//           }
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           style={{ flex: 1 }}
//         >
//           <Typography
//             fontWeight={800}
//             sx={{
//               fontSize: { xs: "1.8rem", sm: "2.1rem", md: "2.5rem" },
//               mb: 3,
//               position: "relative",
//               display: "inline-block",
//               "&::after": {
//                 content: '""',
//                 display: "block",
//                 width: "60px",
//                 height: "4px",
//                 background:
//                   "linear-gradient(to right, #00e4c9, #a033ff, #ff267e)",
//                 margin: "12px 0 0",
//                 borderRadius: "2px",
//               },
//             }}
//           >
//             Business Impact
//           </Typography>

//           <Typography
//             sx={{
//               color: "text.secondary",
//               fontSize: { xs: "0.95rem", md: "1.05rem" },
//               lineHeight: 1.7,
//               mb: 3,
//               maxWidth: "600px",
//             }}
//           >
//             Web development helps businesses build a strong online presence,
//             connect with customers globally, and deliver smooth, user-friendly
//             experiences. A well-designed website boosts brand credibility and
//             makes it easier for users to explore products and services.
//           </Typography>

//           <Typography
//             sx={{
//               color: "text.secondary",
//               fontSize: { xs: "0.95rem", md: "1.05rem" },
//               lineHeight: 1.7,
//               mb: 3,
//               maxWidth: "600px",
//             }}
//           >
//             Modern web solutions streamline operations with automation, secure
//             integrations, and real-time insights. They also improve conversions,
//             expand market reach, and support measurable business growth through
//             smart design and optimized performance.
//           </Typography>

//           <Button
//             variant="contained"
//             sx={{
//               mt: { xs: 3, md: 6 },
//               px: 4,
//               py: 1.5,
//               borderRadius: "30px",
//               fontSize: "1rem",
//               fontWeight: 400,
//               background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
//               textTransform: "none",
//               "&:hover": {
//                 background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
//               },
//             }}
//             onClick={() => navigate("/Contact")}
//           >
//             View →
//           </Button>
//         </motion.div>

//         {/* RIGHT IMAGE */}
//         <motion.img
//           src={impactImg}
//           alt="Business Impact"
//           initial={{ scale: 1 }}
//           animate={isImpactInView ? { scale: [1, 1.05, 1] } : {}}
//           transition={{ duration: 3, ease: "easeInOut" }}
//           style={{
//             width: "100%",
//             maxWidth: "420px",
//             marginTop: "10px",
//           }}
//         />
//       </Box>

//       <Footer />
//     </>
//   );
// }
// import { Box, Typography, Card, CardContent, Button } from "@mui/material";
// import careers from "../assets/webservice.jpg";
// import impactImg from "../assets/f1.jpg";
// import { useNavigate } from "react-router-dom";
// import Footer from "./Footer";
// import { motion, useInView } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { AnimatedBox } from "./AnimatedBox";
// import Header from "./Header";

// const expertiseList = [
//   {
//     title: "Responsive & adaptive web applications",
//     desc: "Modern, mobile-first apps that scale across devices seamlessly.",
//   },
//   {
//     title: "Enterprise-grade portals & e-commerce platforms",
//     desc: "Robust platforms built for security, scalability, and performance.",
//   },
//   {
//     title: "API integrations & secure payment systems",
//     desc: "Smooth integrations with 3rd party APIs and secure payment gateways.",
//   },
//   {
//     title: "SEO-first architecture for higher visibility",
//     desc: "Optimized designs to ensure better ranking and discoverability.",
//   },
// ];

// export default function WebDevelopment() {
//   const navigate = useNavigate();
//   const [animateNow, setAnimateNow] = useState(false);

//   const refHero = useRef(null);
//   const refTransform = useRef(null);
//   const refImpact = useRef(null);

//   const isHeroInView = useInView(refHero, { once: true });
//   const isTransformInView = useInView(refTransform, { once: true });
//   const isImpactInView = useInView(refImpact, { once: true });

//   useEffect(() => setAnimateNow(true), []);

//   return (
//     <>
//       <Header />

//       {/* ================= HERO SECTION ================= */}
//       <Box>
//         <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, sm: 4 } }}>
//           <motion.div
//             ref={refHero}
//             initial={{ opacity: 0, y: 50 }}
//             animate={isHeroInView || animateNow ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 1.5 }}
//           >
//             <Typography
//               fontWeight={800}
//               sx={{
//                 mt: { xs: 8, md: 14 },
//                 fontSize: {
//                   xs: "2.2rem",
//                   sm: "3rem",
//                   md: "4.5rem",
//                 },
//                 lineHeight: 1.1,
//                 textAlign: { xs: "center", md: "left" },
//               }}
//             >
//               Web Development
//             </Typography>
//           </motion.div>

//           <Typography
//             sx={{
//               mt: 1,
//               fontSize: { xs: "1rem", md: "1.4rem" },
//               textAlign: { xs: "center", md: "left" },
//             }}
//           >
//             Building the Digital Face of Your Business...........
//           </Typography>
//         </Box>

//         <Box
//           sx={{
//             mt: { xs: 4, md: 8 },
//             height: { xs: "45vh", md: "85vh" },
//             backgroundImage: `url(${careers})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             clipPath: {
//               xs: "polygon(0 40%, 100% 0, 100% 100%, 0% 100%)",
//               md: "polygon(0 50%, 100% 0, 100% 100%, 0% 100%)",
//             },
//           }}
//         />
//       </Box>

//       {/* ================= TRANSFORM SECTION ================= */}
//       <Box ref={refTransform} sx={{ py: { xs: 6, md: 10 } }}>
//         <Box
//           sx={{
//             maxWidth: "1200px",
//             mx: "auto",
//             px: { xs: 2, sm: 4 },
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             alignItems: "center",
//             gap: { xs: 4, md: 8 },
//           }}
//         >
//           <Typography
//             fontWeight={800}
//             sx={{
//               fontSize: { xs: "1.8rem", md: "3rem" },
//               textAlign: { xs: "center", md: "left" },
//               maxWidth: "500px",
//             }}
//           >
//             Transform Your <br /> Digital Journey
//           </Typography>

//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             animate={isTransformInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1.2 }}
//           >
//             <Typography
//               sx={{
//                 fontSize: { xs: "0.95rem", md: "1.1rem" },
//                 lineHeight: 1.7,
//                 maxWidth: "600px",
//                 textAlign: { xs: "center", md: "left" },
//               }}
//             >
              // We combine innovation, design thinking, and advanced technology to
              // deliver scalable solutions that help organizations thrive in the
              // digital era. From cloud-native applications to AI-driven platforms,
              // our expertise spans across industries.
//             </Typography>
//           </motion.div>
//         </Box>
//       </Box>

//       {/* ================= EXPERTISE ================= */}
//       <Box sx={{ bgcolor: "white", py: { xs: 6, md: 10 } }}>
//         <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, sm: 4 } }}>
//           <AnimatedBox>
//             <Typography
//               fontWeight={800}
//               sx={{ fontSize: { xs: "1.8rem", md: "2.5rem", alignItems:"center" }, mb: 6 }}
//             >
//               Our Expertise
//             </Typography>
//           </AnimatedBox>

//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: {
//                 xs: "1fr",
//                 sm: "1fr 1fr",
//                 md: "repeat(4, 1fr)",
//               },
//               gap: 4,
//             }}
//           >
//             {expertiseList.map((item, index) => (
//               <Card
//                 key={index}
//                 sx={{
//                   borderRadius: "16px",
//                   boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
//                 }}
//               >
//                 <CardContent>
//                   <Typography fontWeight={700} mb={1}>
//                     {item.title}
//                   </Typography>
//                   <Typography color="text.secondary">
//                     {item.desc}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             ))}
//           </Box>
//         </Box>
//       </Box>

//       {/* ================= BUSINESS IMPACT ================= */}
//       <Box ref={refImpact} sx={{ bgcolor: "#f9f9f9", py: { xs: 6, md: 10 } }}>
//         <Box
//           sx={{
//             maxWidth: "1200px",
//             mx: "auto",
//             px: { xs: 2, sm: 4 },
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             alignItems: "center",
//             gap: { xs: 4, md: 8 },
//           }}
//         >
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             animate={isImpactInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1.2 }}
//           >
//             <Typography fontWeight={800} sx={{ fontSize: "2.5rem", mb: 3 }}>
//               Business Impact
//             </Typography>

//             <Typography sx={{ maxWidth: "600px", mb: 3, lineHeight: 1.7 }}>
//              Web development helps businesses build a strong online presence,
//            connect with customers globally, and deliver smooth, user-friendly
// experiences. A well-designed website boosts brand credibility and
//             makes it easier for users to explore products and services.
//             </Typography>

//             <Typography sx={{ maxWidth: "600px", mb: 4, lineHeight: 1.7 }}>
            //   Modern web solutions streamline operations with automation, secure
            //  integrations, and real-time insights. They also improve conversions,
            //  expand market reach, and support measurable business growth through
            //  smart design and optimized performance.
//             </Typography>

//             <Button
//               variant="contained"
//               onClick={() => navigate("/Contact")}
//               sx={{
//                 px: 4,
//                 py: 1.5,
//                 borderRadius: "30px",
//                 background: "linear-gradient(90deg,#3f5eec,#00e4c9)",
//               }}
//             >
//               View →
//             </Button>
//           </motion.div>

//           <motion.img
//             src={impactImg}
//             alt="Business Impact"
//             style={{
//               width: "100%",
//               maxWidth: "420px",
//               height: "auto",
//             }}
//           />
//         </Box>
//       </Box>

//       <Footer />
//     </>
//   );
// }
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AnimatedBox } from "./AnimatedBox";
import { useNavigate } from "react-router-dom";

export default function Service({
  heroTitle,
  heroSubtitle,
  heroImage,
  transformTitle,
  transformDesc,
  expertiseList = [],
  impactTitle,
  impactDesc1,
  impactDesc2,
  impactImage,
}) {
  const navigate = useNavigate();

  const refHero = useRef(null);
  const refTransform = useRef(null);
  const refImpact = useRef(null);

  const heroInView = useInView(refHero, { once: true });
  const transformInView = useInView(refTransform, { once: true });
  const impactInView = useInView(refImpact, { once: true });

  return (
    <>
      <Header />

      {/* ================= HERO ================= */}
      <Box>
        <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, sm: 4 } }}>
          <motion.div
            ref={refHero}
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
          >
            <Typography
              fontWeight={800}
              sx={{
                mt: "clamp(10rem, 12vh, 10rem)",
                fontSize: "clamp(2rem, 6vw, 4.8rem)",
                lineHeight: 1.1,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {heroTitle}
            </Typography>
          </motion.div>

          <Typography
            sx={{
              mt: 1,
              fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {heroSubtitle}
          </Typography>
        </Box>

        <Box
          sx={{
            mt: "clamp(2rem, 6vh, 5rem)",
            height: { xs: "45vh", md: "85vh" },
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: {
              xs: "polygon(0 40%, 100% 0, 100% 100%, 0% 100%)",
              md: "polygon(0 50%, 100% 0, 100% 100%, 0% 100%)",
            },
          }}
        />
      </Box>

      {/* ================= TRANSFORM ================= */}
      <Box ref={refTransform} sx={{ py: "clamp(4rem, 10vh, 8rem)" }}>
        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            px: { xs: 2, sm: 4 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: "clamp(2rem, 6vw, 5rem)",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            fontWeight={800}
            sx={{
              fontSize: "clamp(1.7rem, 4vw, 3.2rem)",
              maxWidth: "500px",
            }}
          >
            {transformTitle}
          </Typography>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={transformInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
          >
            <Typography
              sx={{
                maxWidth: "600px",
                lineHeight: 1.7,
                fontSize: "clamp(0.95rem, 2.8vw, 1.1rem)",
              }}
            >
              {transformDesc}
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* ================= EXPERTISE ================= */}
      {expertiseList.length > 0 && (
        <Box sx={{ py: "clamp(4rem, 10vh, 8rem)" }}>
          <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, sm: 4 } }}>
            <AnimatedBox>
              <Typography
                fontWeight={800}
                sx={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  mb: "clamp(2rem, 6vh, 4rem)",
                  textAlign: "center",
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
                gap: "clamp(1.5rem, 3vw, 2.5rem)",
              }}
            >
              {expertiseList.map((item, i) => (
                <Card
                  key={i}
                  sx={{
                    borderRadius: "16px",
                    height: "100%",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                    textAlign: "center", // ✅ heading center
                  }}
                >
                  <CardContent>
                    <Typography
                      fontWeight={700}
                      sx={{
                        fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Box>
      )}

      {/* ================= IMPACT ================= */}
      <Box
        ref={refImpact}
        sx={{ bgcolor: "#f9f9f9", py: "clamp(4rem, 10vh, 8rem)" }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            px: { xs: 2, sm: 4 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: "clamp(2rem, 6vw, 5rem)",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={impactInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
          >
            <Typography
              fontWeight={800}
              sx={{
                fontSize: "clamp(1.7rem, 4vw, 2.8rem)",
                mb: 3,
              }}
            >
              {impactTitle}
            </Typography>

            <Typography
              sx={{
                maxWidth: "600px",
                mb: 3,
                fontSize: "clamp(0.95rem, 2.8vw, 1.1rem)",
                lineHeight: 1.7,
                mx: { xs: "auto", md: 0 },
              }}
            >
              {impactDesc1}
            </Typography>

            <Typography
              sx={{
                maxWidth: "600px",
                mb: 4,
                fontSize: "clamp(0.95rem, 2.8vw, 1.1rem)",
                lineHeight: 1.7,
                mx: { xs: "auto", md: 0 },
              }}
            >
              {impactDesc2}
            </Typography>

            {/* ✅ Button centered on mobile */}
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Button
                variant="contained"
                onClick={() => navigate("/Contact")}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "30px",
                  fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                  background:
                    "linear-gradient(90deg,#3f5eec,#00e4c9)",
                }}
              >
                View →
              </Button>
            </Box>
          </motion.div>

          <motion.img
            src={impactImage}
            alt="impact"
            initial={{ scale: 1 }}
            animate={impactInView ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 3 }}
            style={{ width: "100%", maxWidth: "420px" }}
          />
        </Box>
      </Box>

      <Footer />
    </>
  );
}
