import { Box, Typography, Paper, useTheme } from "@mui/material";
import React from "react";
import meeting from "../assets/metting.jpg";

import InsightsIcon from "@mui/icons-material/Insights";
import LockIcon from "@mui/icons-material/Lock";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SettingsIcon from "@mui/icons-material/Settings";

import { motion } from "framer-motion";
import "../Styles/FlipGallery.css";

const features = [
  {
    title: "Real-Time Insights",
    description:
      "Make smarter decisions with live data and actionable insights, delivered in real-time.",
    icon: <InsightsIcon />,
  },
  {
    title: "Flexible Plans",
    description:
      "Choose plans that adapt to your business needs, delivering both scalability and cost-efficiency",
    icon: <SettingsIcon />,
  },
  {
    title: "Secure Transactions",
    description:
      "Prioritize safety with encryption and robust security features.",
    icon: <LockIcon />,
  },
  {
    title: "Dedicated Support",
    description:
      "Access expert assistance 24/7 to ensure you're never alone on your journey.",
    icon: <SupportAgentIcon />,
  },
];

const Choose = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
        backgroundColor: "#01061f",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "6fr 6fr",
          },
          gap: { xs: 6, md: 8 },
          alignItems: "center",
        }}
      >
        {/* LEFT SECTION */}
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "clamp(26px, 4vw, 40px)",
              mb: 2,
            }}
          >
            Why Choose Us?
          </Typography>

          <Typography
            sx={{
              fontSize: "clamp(15px, 2vw, 20px)",
              fontWeight: 400,
              mb: 4,
              color: "#d1d5db",
            }}
          >
            Choosing the right technology partner is crucial for the success of
            your business. Here’s why Vyoobam Tech stands out.
          </Typography>

          {/* IMAGE */}
         <Box
  sx={{
    mt: { xs: 4, md: 8 },
    maxWidth: { xs: "100%", sm: 480, md: 600 }, // 🔼 size increased
    mx: "auto",
  }}
>
  <motion.img
    src={meeting}
    alt="meeting"
    loading="lazy"   // ✅ lazy loading
    className="single-effect"
    initial={{
      "--_i": "0%",
      filter: "grayscale(1)",
    }}
    whileInView={{
      "--_i": "10%",
      filter: "grayscale(0)",
    }}
    viewport={{
      once: false,
      amount: 0.4,
    }}
    transition={{
      duration: 0.4,
      ease: "linear",
    }}
    style={{
      width: "100%",
      height: "360px",          // 🔼 height increase
      objectFit: "cover",       // 💎 smooth crop
      borderRadius: "16px",     // little more premium
    }}
  />
</Box>

        </Box>

        {/* RIGHT SECTION */}
        <Box sx={{ display: "grid", gap: { xs: 2.5, md: 3 } }}>
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
                ease: "easeOut",
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  backgroundColor: "#021628",
                  color: "#fff",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  transition: "0.4s ease",

                  "&:hover": {
                    transform: { md: "scale(1.04)" },
                    boxShadow: "0 14px 34px rgba(0,0,0,0.35)",
                  },

                  "&:hover .feature-icon": {
                    transform: { md: "scale(1.4)" },
                    color: "#00E5FF",
                  },
                }}
              >
                <Box
                  className="feature-icon"
                  sx={{
                    fontSize: { xs: 28, md: 36 },
                    color: theme.palette.primary.main,
                    transition: "0.3s ease",
                    minWidth: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: "2px",
                  }}
                >
                  {feature.icon}
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "16px", md: "20px" },
                      mb: 0.5,
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "18px" },
                      fontWeight: 300,
                      color: "#cbd5e1",
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Choose;
