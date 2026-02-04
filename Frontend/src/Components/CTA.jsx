import React from "react";
import image from "../assets/CTA.jpg";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#fff", py: { xs: 6, md: 12 } }}>
      <Box
        component="section"
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, sm: 3 },
          background: "linear-gradient(90deg, #f6e7ff 0%, #e3eaff 100%)",
          borderRadius: 3,
          boxShadow: "0 8px 32px rgba(80, 80, 120, 0.14)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 4, md: 6 },
            p: { xs: 3, sm: 4, md: 5 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* LEFT CONTENT */}
          <Box sx={{ maxWidth: 520 }}>
            <Typography
              sx={{
                fontSize: { xs: 24, sm: 28, md: 32 },
                fontWeight: 700,
                color: "#22223b",
                lineHeight: 1.25,
                mb: 2,
              }}
            >
              From the Spark of an Idea to Measurable Results
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 14.5, sm: 15.5, md: 16 },
                color: "#37385b",
                mb: 3,
                lineHeight: 1.7,
              }}
            >
              Every great transformation begins with an idea. We bring that idea
              to life with cutting-edge technology, seamless execution, and
              measurable outcomes that help your business thrive.
            </Typography>

            <Button
              variant="contained"
              sx={{
                px: 4,
                py: 1.4,
                borderRadius: "30px",
                fontSize: "0.95rem",
                fontWeight: 500,
                background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
                },
              }}
              onClick={() => navigate("/Contact")}
            >
              Get Started →
            </Button>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: 420 },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={image}
              alt="CTA"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2.5,
                boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
