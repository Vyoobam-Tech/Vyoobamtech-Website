import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CTA from "./CTA";

const ReusableComponent = ({
  logo,
  title,
  tagline,
  description,
  overviewImage,
  overviewText,
  features,
  benefits,
  featuresTitle,
  featuresDescription,
  benefiteSubtitle,
  benefitedes,
  explorePath = "/Contact",
}) => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 6 },
          backgroundColor: "#fff",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 🔹 Logo on top */}
          {logo && (
            <Box sx={{ mb: 3, mt: 5 }}>
              <img
                src={logo}
                alt={`${title} Logo`}
                style={{ width: "120px", height: "auto", margin: "0 auto" }}
              />
            </Box>
          )}

          <Typography
            variant="h4"
            fontSize="58px"
            fontWeight="600"
            color="black"
            gutterBottom
          >
            {title}
          </Typography>

          {tagline && (
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{
                background:
                  "linear-gradient(90deg,#FF0080,#FF8C00,#0070F3,#7928CA)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              gutterBottom
            >
              {tagline}
            </Typography>
          )}

          <Typography
            variant="h6"
            fontWeight={500}
            color="text.secondary"
            sx={{ maxWidth: "700px", mx: "auto" }}
          >
            {description}
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 6,
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              fontSize: "1rem",
              background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
              },
            }}
            onClick={() => navigate(explorePath)}
          >
            Explore Us →
          </Button>
        </motion.div>
      </Box>

      {/* ================= OVERVIEW SECTION ================= */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 8 },
          py: { xs: 8, md: 12 },
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#f9fafc",
        }}
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1 }}
        >
          <Typography
            variant="h2"
            fontWeight="400"
            fontSize="58px"
            color="black"
            gutterBottom
            sx={{ pb: 2 }}
          >
            Overview
          </Typography>
          <Typography variant="h6" fontWeight="400" color="text.secondary" sx={{mt:3}}>
            {overviewText}
          </Typography>
          {/* <Button
            variant="contained"
            sx={{
              mt: 6,
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              fontSize: "1rem",
              background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
              },
            }}
            onClick={() => navigate(explorePath)}
          >
            Explore Us →
          </Button> */}
        </motion.div>

        {/* Right Image */}
        {overviewImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Box
              sx={{
                width: { xs: 280, md: 400 },
                height: { xs: 280, md: 400 },
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src={overviewImage}
                alt="Overview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </motion.div>
        )}
      </Box>

      {/* ================= KEY FEATURES ================= */}<Box sx={{ height: "40px", backgroundColor: "#f9fafc" }} />
            {/* ===== WAVE DIVIDER ABOVE KEY FEATURES ===== */}
            {/* ===== WAVE DIVIDER ABOVE KEY FEATURES ===== */}
      
            <Box
              sx={{
                width: "100%",
                overflow: "hidden",
                lineHeight: 0,
                position: "relative",
                transform: "rotate(180deg)",
              }}
            >
              <svg
                viewBox="0 0 1440 320"
                style={{ width: "100%", height: "100px" }}
                preserveAspectRatio="none"
              >
                <path
                  fill="#00182aff" // Same as your Key Feature background
                  d="M0,224L48,218.7C96,213,192,203,288,197.3C384,192,480,192,576,186.7C672,181,768,171,864,149.3C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
              </svg>
            </Box>

      <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 8, md: 12 }, background: "#00182aff" }}>
       <motion.div
                 initial={{ opacity: 0, y: 40 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
               >
        <Typography
          variant="h2"
          fontWeight="400"
          fontSize="48px"
          color="white"
          textAlign="center"
          gutterBottom
        >
            {featuresTitle}
          
        </Typography>
        <Typography
                    variant="h6"
                    fontWeight="400"
                    fontSize={20}
                    color="white"
                    textAlign="center"
                    maxWidth="700px"
                    mx="auto"
                    mb={6}
                  >
                   {featuresDescription}
                  </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
          }}
        >
          {features.map((f, i) => (
            <Box
              key={i}
              sx={{
                p: 3,
                borderRadius: 2,
                backgroundColor: "#051e42ff",
                borderLeft: "1px solid #f9f9f9ff",
              }}
            >
              <Typography
                variant="h6"
                color="white"
                fontSize="23px"
                gutterBottom
              >
                {f.title}
              </Typography>
              <Typography variant="body1" color="white">
                {f.description}
              </Typography>
            </Box>
          ))}
        </Box>
     </motion.div>
      </Box>
       <Box
              sx={{
                width: "100%",
                overflow: "hidden",
                lineHeight: 0,
                position: "relative",
              }}
            >
              <svg
                viewBox="0 0 1440 320"
                style={{ width: "100%", height: "100px" }}
                preserveAspectRatio="none"
              >
                <path
                  fill="#00182aff" // Same as your Key Feature background
                  d="M0,224L48,218.7C96,213,192,203,288,197.3C384,192,480,192,576,186.7C672,181,768,171,864,149.3C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
              </svg>
            </Box>

      {/* ================= BUSINESS BENEFITS ================= */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          px: { xs: 2, md: 8 },
          py: { xs: 8, md: 12 },
          background: "linear-gradient(90deg, #ffffff 60%, #f3f4fdff 100%)",
          gap: { xs: 6, md: 10 },
        }}
      >
        {/* Left heading */}
        <Box sx={{ flex: 1, maxWidth: 400 }}>
          <Typography
            variant="h6"
            fontWeight={600}
            fontSize={25}
            sx={{ color: "#024d87", mb: 1 }}
          >
            WHY {title.toUpperCase()}?
          </Typography>
          <Typography variant="h6" fontWeight="600" color="black" sx={{ mb: 2,whiteSpace: "pre-line" }}>
            {benefiteSubtitle}
          </Typography>
          <Typography
                      variant="body"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                     {benefitedes}
                    </Typography>
        </Box>

        {/* Right grid */}
        <Box
          sx={{
            flex: 2,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 4,
          }}
        >
          {benefits.map((b, i) => (
            <Box
              key={i}
              sx={{
                background: "#fff",
                p: 3,
                borderRadius: 2,
                boxShadow: 1,
                borderLeft: "4px solid #024d87",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: 4,
                  transform: "translateY(-4px)",
                },
              }}
            >
                 {/* Icon (optional) */}
          {b.icon && (
            <Box sx={{ mb: 2 }}>{b.icon}</Box>
          )}

              <Typography
                variant="h6"
                fontWeight="600"
                fontSize="20px"
                color="black"
                sx={{ mb: 1 }}
              >
                {b.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#024d87" }}>
                {b.subtitle}
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 1.2, color: "text.secondary" }}
              >
                {b.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <CTA />
      <Footer />
    </>
  );
};

export default ReusableComponent;
