import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const CoreValues = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 10 },
        backgroundColor: "#0f022aff",
      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={6}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        {/* Left Section - Title and Description */}
        <Box flex={1} data-aos="fade-right">
          <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
            Core Values
          </Typography>
          <Typography variant="body1" color="white">
            Our values drive our commitment to excellence and innovation,
            ensuring our clients receive the best solutions for their digital
            needs.
          </Typography>
        </Box>

        {/* Right Section - Values (Animated line-by-line) */}
        <Box flex={1} display="flex" flexDirection="column" gap={4}>
          <Box data-aos="fade-up" data-aos-delay="100">
            <Typography variant="h6" fontWeight="bold" color="white">
              Innovation
            </Typography>
            <Typography variant="body1" color="white">
              We strive to innovate and push boundaries, ensuring our clients
              stay ahead in the digital landscape.
            </Typography>
            <Divider sx={{ mt: 2 }} />
          </Box>

          <Box data-aos="fade-up" data-aos-delay="300">
            <Typography variant="h6" fontWeight="bold" color="white">
              Excellence
            </Typography>
            <Typography variant="body1" color="white">
              Achieving excellence in every project is our standard,
              guaranteeing top-notch performance and results.
            </Typography>
            <Divider sx={{ mt: 2 }} />
          </Box>

          <Box data-aos="fade-up" data-aos-delay="500">
            <Typography variant="h6" fontWeight="bold" color="white">
              Client–Centric
            </Typography>
            <Typography variant="body1" color="white">
              Putting our clients first is our ethos, building strong
              relationships and delivering tailored solutions.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CoreValues;
