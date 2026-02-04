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
  overviewText2,
  features,
  benefits,
  featuresTitle,
  featuresDescription,
  benefiteSubtitle,
  benefitedes,
  benefitedes2,
  explorePath = "/Contact",
}) => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* ================= HERO ================= */}
      <Box sx={{ backgroundColor: "#fff", py: { xs: 6, md: 10 } }}>
        <Box sx={{ maxWidth: 1200, mx: "auto", px: 2, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {logo && (
              <Box sx={{ mb: 3, mt: 5 }}>
                <img src={logo} alt="logo" style={{ width: 160 }} />
              </Box>
            )}

            <Typography
              sx={{
                fontSize: { xs: 32, sm: 42, md: 52, lg: 58 },
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              {title}
            </Typography>

            {tagline && (
              <Typography
                sx={{
                  mt: 1,
                  fontSize: { xs: 18, md: 22 },
                  fontWeight: 600,
                  background:
                    "linear-gradient(90deg,#FF0080,#FF8C00,#0070F3,#7928CA)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {tagline}
              </Typography>
            )}

            <Typography
              sx={{
                mt: 2,
                maxWidth: 720,
                mx: "auto",
                fontSize: { xs: 15, md: 18 },
                color: "text.secondary",
              }}
            >
              {description}
            </Typography>

            <Button
              sx={{
                mt: 4,
                px: 4,
                py: 1.5,
                borderRadius: 30,
                fontSize: "1rem",
                background: "linear-gradient(90deg,#3f5eec,#00e4c9)",
                textTransform: "none",
              }}
              onClick={() => navigate(explorePath)}
            >
              Explore Us →
            </Button>
          </motion.div>
        </Box>
      </Box>

      {/* ================= OVERVIEW ================= */}
      <Box sx={{ backgroundColor: "#f9fafc", py: { xs: 6, md: 10 } }}>
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            px: 2,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 8 },
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            <Typography
              sx={{
                fontSize: { xs: 30, md: 48, lg: 58 },
                fontWeight: 400,
                mb: 2,
              }}
            >
              Overview
            </Typography>

            <Typography sx={{ fontSize: { xs: 15, md: 17 }, mb: 2 }}>
              {overviewText}
            </Typography>
            <Typography sx={{ fontSize: { xs: 15, md: 17 } }}>
              {overviewText2}
            </Typography>
          </motion.div>

          {overviewImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ flex: 1, display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  width: { xs: 220, sm: 280, md: 360 },
                  height: { xs: 220, sm: 280, md: 360 },
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: 3,
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
      </Box>

      {/* ================= FEATURES ================= */}
      {/* TOP SPACER */}
      <Box
        sx={{
          height: { xs: "24px", md: "40px" },
          backgroundColor: "#f9fafc",
        }}
      />

      {/* ===== TOP WAVE ===== */}
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
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: "clamp(60px, 12vw, 100px)", // 🔥 responsive
            display: "block",
          }}
        >
          <path
            fill="#00182aff"
            d="M0,224L48,218.7C96,213,192,203,288,197.3C384,192,480,192,576,186.7C672,181,768,171,864,149.3C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L0,0Z"
          />
        </svg>
      </Box>

      {/* ===== KEY FEATURES SECTION ===== */}
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: 8 },
          py: { xs: 6, md: 10 },
          backgroundColor: "#00182aff",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            textAlign="center"
            fontWeight={400}
            color="white"
            sx={{
              fontSize: { xs: "28px", sm: "36px", md: "48px" }, // 🔥 responsive
            }}
            gutterBottom
          >
            {featuresTitle}
          </Typography>

          <Typography
            textAlign="center"
            color="white"
            sx={{
              fontSize: { xs: "15px", sm: "17px", md: "20px" },
              maxWidth: "700px",
              mx: "auto",
              mb: { xs: 4, md: 6 },
              lineHeight: 1.7,
            }}
          >
            {featuresDescription}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gap: { xs: 3, md: 4 },
            }}
          >
            {features.map((f, i) => (
              <Box
                key={i}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 2,
                  backgroundColor: "#051e42ff",
                  borderLeft: "1px solid #f9f9f9ff",
                }}
              >
                <Typography
                  color="white"
                  sx={{
                    fontSize: { xs: "18px", md: "23px" },
                    mb: 1,
                  }}
                >
                  {f.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    color: "white",
                    lineHeight: 1.6,
                  }}
                >
                  {f.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Box>

      {/* ===== BOTTOM WAVE ===== */}
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
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: "clamp(60px, 12vw, 100px)", // 🔥 responsive
            display: "block",
          }}
        >
          <path
            fill="#00182aff"
            d="M0,224L48,218.7C96,213,192,203,288,197.3C384,192,480,192,576,186.7C672,181,768,171,864,149.3C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L0,0Z"
          />
        </svg>
      </Box>

      {/* ================= BENEFITS ================= */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            px: 2,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 10 },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: 24, fontWeight: 600, mb: 1 }}>
              WHY {title.toUpperCase()}?
            </Typography>

            <Typography sx={{ fontSize: 18, fontWeight: 600, mb: 2 }}>
              {benefiteSubtitle}
            </Typography>

            <Typography sx={{ mb: 2 }}>{benefitedes}</Typography>
            <Typography>{benefitedes2}</Typography>
          </Box>

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
                  boxShadow: 2,
                  borderLeft: "4px solid #024d87",
                }}
              >
                {b.icon && <Box mb={2}>{b.icon}</Box>}
                <Typography fontWeight={600}>{b.title}</Typography>
                <Typography sx={{ color: "#024d87" }}>{b.subtitle}</Typography>
                <Typography sx={{ mt: 1 }}>{b.description}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <CTA />
      <Footer />
    </>
  );
};

export default ReusableComponent;
