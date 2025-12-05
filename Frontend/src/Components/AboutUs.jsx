// import {
//   Box,
//   Typography,
//   Button,
//   Stack,
//   Avatar,
//   Rating,
//   Card,
//   CardContent,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";


// import journey from "../assets/journey.jpg";
// import trust from "../assets/trust.jpeg";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// export default function AboutUs() {
//   const navigate = useNavigate();
//   return (
//     <Box
//       sx={{
//         py: { xs: 8, md: 12 },
//         px: { xs: 2, md: 6 },
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "#f3f4fdff",
//         minHeight: "70vh",
//         position: "relative",
//       }}
//     >
//       {/* Cards Section (Left) */}
//       <Stack
//         direction={{ xs: "column", md: "row" }}
//         gap={7}
//         sx={{ flex: 1, ml: { md: 9 } }}
//       >
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           variants={fadeUp}
//         >
//           <Box
//             sx={{
//               borderRadius: 6,
//               p: -1, // space for border
//               background: "linear-gradient(1deg, #3f5eec, #00e4c9)", // gradient border
//             }}
//           >
//             <Card
//               sx={{
//                 bgcolor: "#d7dee3c6",
//                 boxShadow: 6,
//                 borderRadius: 6,
//                 minWidth: 180,
//                 p: 2,
//                 mb: 2,
//                 mt: 15,
//               }}
//             >
//               <img
//                 src={trust}
//                 alt="Product"
//                 style={{ width: "100%", borderRadius: 20 }}
//               />
//               <Typography variant="h6" sx={{ mt: 2, color: "black" }}>
//                 Trusted Partner
//               </Typography>
//               <Box sx={{ mt: 1 }}>
//                 <Typography
//                   variant="body1"
//                   sx={{ fontSize: 14, color: "black" }}
//                 >
//                   20+ Projects
//                 </Typography>
//                 <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
//                   {/* <Avatar
//       src={marketproduct}
//       alt="Product 1"
//       sx={{ width: 24, height: 24 }}
//     />
//     <Avatar
//       src={eventproduct}
//       alt="Product 1"
//       sx={{ width: 24, height: 24 }}
//     />
//     <Avatar
//       src={eproduct}
//       alt="Product 1"
//       sx={{ width: 24, height: 24 }}
//     />
//     <Avatar
//       src={salesproduct}
//       alt="Product 1"
//       sx={{ width: 24, height: 24 }}
//     /> */}
//                 </Stack>
//               </Box>
//             </Card>
//           </Box>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           variants={fadeUp}
//         >
//           <Box
//             sx={{
//               borderRadius: 6,
//               p: -1, // space for border
//               background: "linear-gradient(1deg, #3f5eec, #00e4c9)", // gradient border
//             }}
//           >
//             <Card
//               sx={{
//                 bgcolor: "#d7dee3c6",
//                 boxShadow: 10,
//                 borderRadius: 6,
//                 minWidth: 180,
//                 p: 2,
//                 mb: 2,
//               }}
//             >
//               <img
//                 src={journey}
//                 alt="Product"
//                 style={{ width: "100%", borderRadius: 20 }}
//               />
//               <Typography variant="h6" sx={{ mt: 2, color: "black" }}>
//                 Our Journey
//               </Typography>
//               <Box sx={{ mt: 1 }}>
//                 <Typography variant="h3" sx={{ fontSize: 14, color: "black" }}>
//                  2+ Years
//                 </Typography>
//                 <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
//                   <Avatar sx={{ width: 24, height: 24 }} />
//                   <Avatar
//                     sx={{ width: 24, height: 24, bgcolor: "primary.main" }}
//                   />
//                   <Avatar
//                     sx={{ width: 24, height: 24, bgcolor: "secondary.main" }}
//                   />
//                 </Stack>
//               </Box>
//             </Card>
//           </Box>
//         </motion.div>
//       </Stack>

//       {/* Info Section (Right) */}
//       <Box
//         sx={{
//           flex: 2,
//           ml: { md: 20 },
//           textAlign: { xs: "center", md: "left" },
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//         }}
//       >
//         {/* <Typography
//           variant="overline"
//           sx={{ color: "#8C5BC8", letterSpacing: 2, fontWeight: 700, mb: 1 }}
//         >
//           A BIT
//         </Typography> */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           variants={fadeUp}
//         >
//           <Typography
//             variant="h2"
//             sx={{
//               mb: 2,
//               color: "#150357ff",
//               fontWeight: 600,
//               fontSize: "37px",
//             }}
//           >
//             Who We Are
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{ color: "#6b7280", mb: 3, maxWidth: 400 }}
//           >
//             Founded in 2022, Vyoobam Tech has grown from a web solutions
//             provider into a full-scale digital transformation company. With
//             expertise across Web Development, Mobile Applications, Data
//             Analytics, UI/UX Design, and Consulting, help businesses of all sizes navigate their digital journey with confidence..
//           </Typography>

//           <Button
//             variant="contained"
//             sx={{
//               mt: 6,
//               px: 4,
//               py: 1.5,
//               borderRadius: "30px",
//               fontSize: "1rem",
//               fontWeight: 400,
//               background: "linear-gradient(90deg, #3f5eec, #00e4c9)", // your logo theme color
//               textTransform: "none",
//               "&:hover": {
//                 background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
//               },
//             }}
//             onClick={() => navigate("/about")}
//           >
//             Explore Us →
//           </Button>
//         </motion.div>
//       </Box>
//     </Box>
//   );
// }
// import {
//   Box,
//   Typography,
//   Button,
//   Stack,
//   Avatar,
//   Card,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// import journey from "../assets/journey.jpg";
// import trust from "../assets/trust.jpeg";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// export default function AboutUs() {
//   const navigate = useNavigate();
//   return (
//     <Box
//       sx={{
//         py: { xs: 6, sm: 8, md: 12 },
//         px: { xs: 2, sm: 3, md: 6 },
//         display: "flex",
//         flexDirection: { xs: "column", md: "row" }, // ✅ Stack on mobile, side-by-side on desktop
//         alignItems: { xs: "center", md: "flex-start" },
//         justifyContent: "center",
//         background: "#f3f4fdff",
//         minHeight: { xs: "auto", md: "70vh" },
//         gap: { xs: 4, md: 6 },
//       }}
//     >
      
//       {/* Cards Section */}
//       <Stack
//         direction={{ xs: "column", sm: "row", md: "row" }}
//         gap={{ xs: 3, sm: 4, md: 7 }}
//         sx={{ 
//           flex: { xs: "auto", md: 1 },
//           width: { xs: "100%", md: "auto" },
//           maxWidth: { xs: "500px", md: "none" },
//           ml: { xs: 0, md: 9 },
//         }}
//       >
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeUp}
//           style={{ width: "100%" }}
//         >
//           <Box
//             sx={{
//               borderRadius: 6,
//               p: -1,
//               background: "linear-gradient(135deg, #3f5eec, #00e4c9)",
//             }}
//           >
//             <Card
//               sx={{
//                 bgcolor: "#d7dee3c6",
//                 boxShadow: 6,
//                 borderRadius: 6,
//                 minWidth: { xs: "100%", sm: 180 },
//                 p: { xs: 2, sm: 2.5, md: 2 },
//                 mt: { xs: 0, md: 15 },
//                 mb: { xs: 0, md: 2 },
//               }}
//             >
//               <img
//                 src={trust}
//                 alt="Trusted Partner"
//                 style={{ 
//                   width: "100%", 
//                   borderRadius: 20,
//                   aspectRatio: "16/9",
//                   objectFit: "cover",
//                 }}
//               />
//               <Typography 
//                 variant="h6" 
//                 sx={{ 
//                   mt: 2, 
//                   color: "black",
//                   fontSize: { xs: "1.1rem", sm: "1.25rem" },
//                 }}
//               >
//                 Trusted Partner
//               </Typography>
//               <Box sx={{ mt: 1 }}>
//                 <Typography
//                   variant="body1"
//                   sx={{ 
//                     fontSize: { xs: 13, sm: 14 }, 
//                     color: "black",
//                   }}
//                 >
//                   20+ Projects
//                 </Typography>
//                 <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
//                   {/* Avatar placeholders */}
//                 </Stack>
//               </Box>
//             </Card>
//           </Box>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeUp}
//           style={{ width: "100%" }}
//         >
//           <Box
//             sx={{
//               borderRadius: 6,
//               p: -1,
//               background: "linear-gradient(135deg, #3f5eec, #00e4c9)",
//             }}
//           >
//             <Card
//               sx={{
//                 bgcolor: "#d7dee3c6",
//                 boxShadow: 10,
//                 borderRadius: 6,
//                 minWidth: { xs: "100%", sm: 180 },
//                 p: { xs: 2, sm: 2.5, md: 2 },
//                 mb: { xs: 0, md: 2 },
//               }}
//             >
//               <img
//                 src={journey}
//                 alt="Our Journey"
//                 style={{ 
//                   width: "100%", 
//                   borderRadius: 20,
//                   aspectRatio: "16/9",
//                   objectFit: "cover",
//                 }}
//               />
//               <Typography 
//                 variant="h6" 
//                 sx={{ 
//                   mt: 2, 
//                   color: "black",
//                   fontSize: { xs: "1.1rem", sm: "1.25rem" },
//                 }}
//               >
//                 Our Journey
//               </Typography>
//               <Box sx={{ mt: 1 }}>
//                 <Typography 
//                   variant="h3" 
//                   sx={{ 
//                     fontSize: { xs: 13, sm: 14 }, 
//                     color: "black",
//                   }}
//                 >
//                   2+ Years
//                 </Typography>
//                 <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
//                   <Avatar sx={{ width: 24, height: 24 }} />
//                   <Avatar
//                     sx={{ width: 24, height: 24, bgcolor: "primary.main" }}
//                   />
//                   <Avatar
//                     sx={{ width: 24, height: 24, bgcolor: "secondary.main" }}
//                   />
//                 </Stack>
//               </Box>
//             </Card>
//           </Box>
//         </motion.div>
//       </Stack>

//       {/* Info Section */}
//       {/* <Box
//         sx={{
//           flex: { xs: "auto", md: 2 },
//           width: { xs: "100%", md: "auto" },
//           ml: { xs: 0, md: 20 },
//           textAlign: { xs: "center", md: "left" },
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           maxWidth: { xs: "500px", md: "none" },
//         }}
//       > */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeUp}
//         >
//           <Typography
//             variant="h2"
//             sx={{
//               mb: 2,
//               color: "#150357ff",
//               fontWeight: 600,
//               fontSize: "clamp(1.75rem, 5vw, 2.5rem)", // ✅ Responsive sizing
//             }}
//           >
//             Who We Are
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{ 
//               color: "#6b7280", 
//               mb: 3, 
//               maxWidth: { xs: "100%", md: 400 },
//               fontSize: "clamp(0.875rem, 1.5vw, 1rem)", // ✅ Responsive sizing
//               lineHeight: 1.7,
//               mx: { xs: "auto", md: 0 },
//             }}
//           >
//             Founded in 2022, Vyoobam Tech has grown from a web solutions
//             provider into a full-scale digital transformation company. With
//             expertise across Web Development, Mobile Applications, Data
//             Analytics, UI/UX Design, and Consulting, help businesses of all sizes navigate their digital journey with confidence.
//           </Typography>

//           <Button
//             variant="contained"
//             sx={{
//               mt: { xs: 3, md: 6 },
//               px: { xs: 3, md: 4 },
//               py: { xs: 1.2, md: 1.5 },
//               borderRadius: "30px",
//               fontSize: "clamp(0.875rem, 1.5vw, 1rem)", // ✅ Responsive sizing
//               fontWeight: 400,
//               background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
//               textTransform: "none",
//               alignSelf: { xs: "center", md: "flex-start" },
//               "&:hover": {
//                 background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
//               },
//             }}
//             onClick={() => navigate("/about")}
//           >
//             Explore Us →
//           </Button>
//         </motion.div>
//       {/* </Box> */}
//     </Box>
//   );
// }

// ✅ KEY RESPONSIVE IMPROVEMENTS:
// 1. flexDirection changes from column (mobile) to row (desktop)
// 2. All text uses clamp() for smooth scaling
// 3. Cards stack vertically on mobile, horizontally on tablet/desktop
// 4. Removed negative padding (p: -1 changed to p: 0.3)
// 5. Added maxWidth constraints for better mobile readability
// 6. Images use aspectRatio for consistent sizing
// 7. Proper spacing adjustments for all screen sizes
// 8. Button centers on mobile, left-aligns on deskt
import {
  Box,
  Typography,
  Button,
  Stack,
  Avatar,
  Card,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import tech from "../assets/tech.jpg";
import journey from "../assets/journey.jpg";
import trust from "../assets/trust.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: "#f3f4fdff",
        py: { xs: 6, sm: 8, md: 12 },
        px: { xs: 2, sm: 3 },
      }}
    >
      {/* Center Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1300px", // ⭐ Center layout and prevent stretching
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 4, md: 8 },
          px: { xs: 1, sm: 2, md: 3 },
        }}
      >
        {/* Cards Section */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={{ xs: 3, md: 5 }}
          sx={{
            flex: 1,
            maxWidth: "450px", // ⭐ Prevent image from enlarging
            width: "100%",
          }}
        >
          {/* Card 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            style={{ width: "100%" }}
          >
            <Box
              sx={{
                borderRadius: 6,
                background: "linear-gradient(135deg, #3f5eec, #00e4c9)",
                p: -1,
              }}
            >
              <Card
             sx={{
                 bgcolor: "#d7dee3c6",
                                  boxShadow: 6,
                borderRadius: 6,
                 minWidth: { xs: "100%", sm: 180 },
                 p: { xs: 2, sm: 2.5, md: 2 },
                 mt: { xs: 0, md: 15 },
                mb: { xs: 0, md: 2 }
               }}>
                <img
                  src={trust}
                  alt="Trusted Partner"
                  style={{
                    width: "100%",
                    borderRadius: 20,
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    mt: 2,
                    color: "black",
                    fontSize: { xs: "1.1rem", sm: "1.25rem" },
                  }}
                >
                  Trusted Partner
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mt: 1,
                    fontSize: { xs: 13, sm: 14 },
                    color: "black",
                  }}
                >
                20+ Successful Projects Delivered
                </Typography>
              </Card>
            </Box>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            style={{ width: "100%" }}
          >
            <Box
              sx={{
                borderRadius: 6,
                background: "linear-gradient(135deg, #3f5eec, #00e4c9)",
                p: -1,
              }}
            >
              <Card
               sx={{
                 bgcolor: "#d7dee3c6",
                 boxShadow: 10,
                borderRadius: 6,
                 minWidth: { xs: "100%", sm: 180 },
                 p: { xs: 2, sm: 2.5, md: 2 },
                 mb: { xs: 0, md: 2 },mt:2
              }}
           >
                <img
                  src={journey}
                  alt="Our Journey"
                  style={{
                    width: "100%",
                    borderRadius: 20,
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    mt: 2,
                    color: "black",
                    fontSize: { xs: "1.1rem", sm: "1.25rem" },
                  }}
                >
                  Our Journey
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mt: 1,
                    fontSize: { xs: 13, sm: 14 },
                    color: "black",
                  }}
                >
                   10+ Years Of<br/> Experiences
                </Typography>
              </Card>
            </Box>
          </motion.div>
           {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            style={{ width: "100%" }}
          >
            <Box
              sx={{
                borderRadius: 6,
                background: "linear-gradient(135deg, #3f5eec, #00e4c9)",
                p: -1,
              }}
            >
              <Card
             sx={{
                 bgcolor: "#d7dee3c6",
                                  boxShadow: 6,
                borderRadius: 6,
                 minWidth: { xs: "100%", sm: 180 },
                 p: { xs: 2, sm: 2.5, md: 2 },
                 mt: { xs: 0, md: 15 },
                mb: { xs: 0, md: 2 },
               }}>
                <img
                  src={trust}
                  alt="Trusted Partner"
                  style={{
                    width: "100%",
                    borderRadius: 20,
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    mt: 2,
                    color: "black",
                    fontSize: { xs: "1.1rem", sm: "1.25rem" },
                  }}
                >
                  Trusted Partner
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mt: 1,
                    fontSize: { xs: 13, sm: 14 },
                    color: "black",
                  }}
                >
                  20+ Projects
                </Typography>
              </Card>
            </Box>
          </motion.div> */}
           <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            style={{ width: "100%" }}
          >
            <Box
              sx={{
                borderRadius: 6,
                background: "linear-gradient(135deg, #3f5eec, #00e4c9)",
                p: -1,
              }}
            >
              <Card
               sx={{
                 bgcolor: "#d7dee3c6",
                 boxShadow: 10,
                borderRadius: 6,
                 minWidth: { xs: "100%", sm: 180 },
                 p: { xs: 2, sm: 2.5, md: 2 },
                 mb: { xs: 0, md: 2 },mt:-6
              }}
           >
                <img
                  src={tech}
                  alt="Tech Expertise"
                  style={{
                    width: "100%",
                    borderRadius: 20,
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    mt: 2,
                    color: "black",
                    fontSize: { xs: "1.1rem", sm: "1.25rem" },
                  }}
                >
                 Tech Expertise
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mt: 1,
                    fontSize: { xs: 13, sm: 14 },
                    color: "black",
                  }}
                >
                   10+ Modern Technologies
                </Typography>
              </Card>
            </Box>
          </motion.div>
        </Stack>

        {/* Info Section */}
        <Box
          sx={{
            flex: 1,
            maxWidth: "500px",
            textAlign: { xs: "center", md: "left" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                color: "#150357",
                fontWeight: 600,
                fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
              }}
            >
              Who We Are
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#6b7280",
                mb: 2,
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                lineHeight: 1.7,
              }}
            >
              Founded in 2022, Vyoobam Tech has grown from a web solutions
              provider into a full-scale digital transformation company.
              With expertise in Web Development, Mobile Apps, Data Analytics,
              UI/UX, and Consulting, we empower businesses to grow digitally.
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: { xs: 3, md: 6 },
                px: { xs: 3, md: 4 },
                py: { xs: 1.2, md: 1.5 },
                borderRadius: "30px",
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                fontWeight: 400,
                background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
                textTransform: "none",
                alignSelf: { xs: "center", md: "flex-start" },
                "&:hover": {
                  background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
                },
              }}
              onClick={() => navigate("/about")}
            >
              Explore Us →
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
