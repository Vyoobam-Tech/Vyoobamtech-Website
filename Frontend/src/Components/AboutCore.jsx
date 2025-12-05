// import React from "react";
// import { Box, Typography, Divider } from "@mui/material";

// const CoreValues = () => {
//   return (
//     <Box
//       sx={{
//         px: { xs: 2, md: 10 },
//         py: { xs: 6, md: 10 },
//         backgroundColor: "#0f022aff",
//       }}
//     >
//       <Box
//         display="flex"
//         flexDirection={{ xs: "column", md: "row" }}
//         gap={6}
//         alignItems="flex-start"
//         justifyContent="space-between"
//       >
//         {/* Left Section - Title and Description */}
//         <Box flex={1} data-aos="fade-right">
//           <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
//             Core Values
//           </Typography>
//           <Typography variant="body1" color="white">
//             Our values drive our commitment to excellence and innovation,
//             ensuring our clients receive the best solutions for their digital
//             needs.
//           </Typography><br />
//           <Typography variant="body1" color="white">
//             Our values drive our commitment to excellence and innovation,
//             ensuring our clients receive the best solutions for their digital
//             needs.
//           </Typography>
//         </Box>

//         {/* Right Section - Values (Animated line-by-line) */}
//         <Box flex={1} display="flex" flexDirection="column" gap={4}>
//           <Box data-aos="fade-up" data-aos-delay="100">
//             <Typography variant="h6" fontWeight="bold" color="white">
//               Innovation
//             </Typography>
//             <Typography variant="body1" color="white">
//               We strive to innovate and push boundaries, ensuring our clients
//               stay ahead in the digital landscape.
//             </Typography>
//             <Divider sx={{ mt: 2 }} />
//           </Box>

//           <Box data-aos="fade-up" data-aos-delay="300">
//             <Typography variant="h6" fontWeight="bold" color="white">
//               Excellence
//             </Typography>
//             <Typography variant="body1" color="white">
//               Achieving excellence in every project is our standard,
//               guaranteeing top-notch performance and results.
//             </Typography>
//             <Divider sx={{ mt: 2 }} />
//           </Box>

//           <Box data-aos="fade-up" data-aos-delay="500">
//             <Typography variant="h6" fontWeight="bold" color="white">
//               Client–Centric
//             </Typography>
//             <Typography variant="body1" color="white">
//               Putting our clients first is our ethos, building strong
//               relationships and delivering tailored solutions.
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default CoreValues;
import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const CoreValues = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 5, md: 10 },
        backgroundColor: "#0f022aff",
      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={{ xs: 4, md: 8 }}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        {/* LEFT SECTION */}
        <Box flex={1} data-aos="fade-right">
          <Typography
            fontWeight="bold"
            color="white"
            gutterBottom
            sx={{
              fontSize: { xs: "28px", sm: "34px", md: "40px" },
              lineHeight: 1.2,ml:-2
            }}
          >
            Core Values
          </Typography>

          <Typography
            color="white"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              lineHeight: 1.6,
              maxWidth: "90%",mt:3
            }}
          >
            Our values drive our commitment to excellence and innovation,
            ensuring our clients receive the best solutions for their digital
            needs.
            <br />
            <br />
            Our values shape our mission, vision, and everyday execution,
            helping us deliver impactful and lasting results.
          </Typography>
        </Box>

        {/* RIGHT SECTION */}
        <Box flex={1} display="flex" flexDirection="column" gap={{ xs: 3, md: 4 }}>
          {/* Value 1 */}
          <Box data-aos="fade-up" data-aos-delay="100">
            <Typography
              fontWeight="bold"
              color="white"
              sx={{ fontSize: { xs: "18px", sm: "20px", md: "22px" } }}
            >
              Innovation
            </Typography>

            <Typography
              color="white"
              sx={{ fontSize: { xs: "14px", sm: "15px", md: "16px" }, mt: 1 }}
            >
              We strive to innovate and push boundaries, ensuring our clients
              stay ahead in the digital landscape.
            </Typography>

            <Divider sx={{ mt: 2, bgcolor: "white", opacity: 0.3 }} />
          </Box>

          {/* Value 2 */}
          <Box data-aos="fade-up" data-aos-delay="300">
            <Typography
              fontWeight="bold"
              color="white"
              sx={{ fontSize: { xs: "18px", sm: "20px", md: "22px" } }}
            >
              Excellence
            </Typography>

            <Typography
              color="white"
              sx={{ fontSize: { xs: "14px", sm: "15px", md: "16px" }, mt: 1 }}
            >
              Achieving excellence in every project is our standard,
              guaranteeing top-notch performance and results.
            </Typography>

            <Divider sx={{ mt: 2, bgcolor: "white", opacity: 0.3 }} />
          </Box>

          {/* Value 3 */}
          <Box data-aos="fade-up" data-aos-delay="500">
            <Typography
              fontWeight="bold"
              color="white"
              sx={{ fontSize: { xs: "18px", sm: "20px", md: "22px" } }}
            >
              Client–Centric
            </Typography>

            <Typography
              color="white"
              sx={{ fontSize: { xs: "14px", sm: "15px", md: "16px" }, mt: 1 }}
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
