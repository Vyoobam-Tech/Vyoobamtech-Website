import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const CoreValues = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 6, md: 10 },
        backgroundColor: "#043260",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 5, md: 8 },
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        {/* ================= LEFT SECTION ================= */}
        <Box
          flex={1}
          data-aos="fade-right"
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Typography
            fontWeight={700}
            color="white"
            gutterBottom
            sx={{
              fontSize: {
                xs: "26px",
                sm: "32px",
                md: "40px",
              },
              lineHeight: 1.2,
            }}
          >
            Core Values
          </Typography>

          <Typography
            color="rgba(255,255,255,0.85)"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              lineHeight: 1.7,
              mt: 3,
              maxWidth: { xs: "100%", md: "90%" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            Our values are the foundation of everything we do. They guide our
            decisions, shape our culture, and define how we deliver value to our
            clients. We believe in building strong, long-term partnerships by
            consistently delivering innovative, reliable, and scalable digital
            solutions that create real impact.
            <br />
            <br />
            Driven by a passion for excellence, we focus on understanding our
            clients’ unique challenges and transforming ideas into meaningful
            digital experiences. Our commitment to quality, transparency, and
            continuous improvement ensures every solution meets the highest
            standards of performance and usability.
          </Typography>
        </Box>

        {/* ================= RIGHT SECTION ================= */}
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          gap={{ xs: 3, md: 4 }}
        >
          {/* VALUE 1 */}
          <Box data-aos="fade-up" data-aos-delay="100">
            <Typography
              fontWeight={600}
              color="white"
              sx={{ fontSize: { xs: "18px", sm: "20px", md: "22px" } }}
            >
              Innovation
            </Typography>

            <Typography
              color="rgba(255,255,255,0.8)"
              sx={{
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                mt: 1,
                lineHeight: 1.6,
              }}
            >
              We strive to innovate and push boundaries, ensuring our clients
              stay ahead in the digital landscape.
            </Typography>

            <Divider sx={{ mt: 2, bgcolor: "white", opacity: 0.25 }} />
          </Box>

          {/* VALUE 2 */}
          <Box data-aos="fade-up" data-aos-delay="300">
            <Typography
              fontWeight={600}
              color="white"
              sx={{ fontSize: { xs: "18px", sm: "20px", md: "22px" } }}
            >
              Excellence
            </Typography>

            <Typography
              color="rgba(255,255,255,0.8)"
              sx={{
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                mt: 1,
                lineHeight: 1.6,
              }}
            >
              Achieving excellence in every project is our standard,
              guaranteeing top-notch performance and results.
            </Typography>

            <Divider sx={{ mt: 2, bgcolor: "white", opacity: 0.25 }} />
          </Box>

          {/* VALUE 3 */}
          <Box data-aos="fade-up" data-aos-delay="500">
            <Typography
              fontWeight={600}
              color="white"
              sx={{ fontSize: { xs: "18px", sm: "20px", md: "22px" } }}
            >
              Client–Centric
            </Typography>

            <Typography
              color="rgba(255,255,255,0.8)"
              sx={{
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                mt: 1,
                lineHeight: 1.6,
              }}
            >
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
