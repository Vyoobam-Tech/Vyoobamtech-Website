import React from "react";
import { Box, Typography, Container } from "@mui/material";
import group from "../assets/group.png";

export default function LeadershipSection() {
  return (
    <Box>

      {/* Top Light Section */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          textAlign: "center",
          pt: 8,
          pb: 0,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              mb: 3,
              fontSize: { xs: "28px", md: "40px" },
              fontFamily: '"Playfair Display", serif',
            }}
          >
           Driven by Passion United by Vision.
          </Typography>
<Box
            sx={{
              width: { xs: 60, sm: 70, lg: 90, xl: 110 },
              height: 4,
              mx: "auto",
              mb: { xs: 5, sm: 6, lg: 8 },
              borderRadius: 10,
              background:
                "linear-gradient(to right, #00e4c9, #a033ff, #ff267e)",
            }}
          />
          {/* Team Image */}
          <Box
            component="img"
            src={group}
            alt="Leadership Team"
            sx={{
              width: "100%",
              maxWidth: "900px",
              objectFit: "contain",
            }}
          />
        </Container>
      </Box>

      {/* Bottom Dark Content Section */}
      <Box
        sx={{
          background: "#043260",
          color: "#ffffff",
          textAlign: "center",
          py: 8,
          px: 2,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              mb: 3,
              lineHeight: 1.6,
              fontSize: { xs: "20px", md: "28px" },
            }}
          >
           At Vyoobam, our leaders are more than decision-makers — they are innovators, collaborators, and dreamers. With enthusiasm and dedication, we guide our teams to create impactful digital experiences that move businesses forward.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              opacity: 0.8,
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
          
          </Typography>
        </Container>
      </Box>

    </Box>
  );
}
