// import React, { useState } from "react";
// import { Box, Typography, Button, IconButton, Link } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import { motion, AnimatePresence } from "framer-motion";
// import logoImg from "../assets/logo.jpg";
// import { useNavigate } from "react-router-dom";

// const Footer = () => {
 
// const navigate = useNavigate();
//   const linkStyle = {
//     display: "block",
//     color: "#e8e7e7c1",
//     textDecoration: "none",        // default: no underline
//     marginBottom: "0.5rem",
//     position: "relative",
//     "&:hover": {
//       // textDecoration: "underline",
//       color: "#ffffffff", // underline on hover
//     },
//   };

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         bgcolor: "#010c23ff",
//         color: "#ffffffff",
//         textAlign: "center",
//         py:7,
//       }}
//     >
     
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 flexWrap: "wrap",
//                 textAlign: "left",
//                 mb: 3,
//               }}
//             >
//               <Box sx={{ minWidth: 200 }}>
                
//                 <Typography variant="h6" gutterBottom color="white" sx={{mb:3,ml:-3}} fontWeight={500} fontSize={24}>
//                   Together for the journey ahead.<br />
                  
//                 </Typography>
//                 <Typography variant="body2" color="#e8e7e7c1" sx={{maxWidth:300, ml:-3}} fontSize={18}>
//                 At Vyoobam, we believe in long-lasting relationships built on trust, innovation, and shared success.

//                 </Typography>
//               </Box>

//               <Box sx={{ minWidth: 100,  }}>
//                 <Typography variant="h6" gutterBottom color="white" fontWeight={500} fontSize={23}>
//                   Explore
//                 </Typography>
//                 <Link component={RouterLink} to="/about" sx={linkStyle}>Overview</Link>
//                 <Link component={RouterLink} to="/about"sx={linkStyle}>Vision/Mission</Link>
//                 <Link component={RouterLink} to="/about" sx={linkStyle}>Timeline</Link>
//                 <Link component={RouterLink} to="/about" sx={linkStyle}>Core Values</Link>
//               </Box>
//               <Box
//             sx={{
//               display: { xs: "none", md: "flex" },
//               alignItems: "center",
//               px: 2,
//             }}
//           >
//             <Box
//               sx={{
//                 width: "1px",
//                 height: "70%", // or use 150px or any fixed height
//                 backgroundColor: "rgba(252, 251, 251, 1)", // soft grey line
//                 mx: -5,
//               }}
//             />
//           </Box>
              
//               <Box sx={{ minWidth: 50,  }}>
//                 <Typography variant="h6" gutterBottom color="white" fontWeight={500} fontSize={23}>
//                   Products
//                 </Typography>
//                 <Link component={RouterLink} to="/Market" sx={linkStyle}>Market Metrics</Link>
//                 <Link component={RouterLink} to="/Event" sx={linkStyle}>Events</Link>
//                 <Link component={RouterLink} to="/Sales" sx={linkStyle}>Sales Sage</Link>
//                 <Link component={RouterLink} to="/Egrocery" sx={linkStyle}>E-Grocery</Link>
//        <Link component={RouterLink} to="/Vyoobam" sx={linkStyle}>Vyoobam Nudge</Link>
//               </Box>
//               <Box
//             sx={{
//               display: { xs: "none", md: "flex" },
//               alignItems: "center",
//               px: 2,
//             }}
//           >
//             <Box
//               sx={{
//                 width: "1px",
//                 height: "70%", // or use 150px or any fixed height
//                 backgroundColor: "rgba(255, 255, 255, 1)", // soft grey line
//                 mx: -5
//               }}
//             />
//           </Box>

//               <Box sx={{ minWidth: 50,  }}>
//                 <Typography variant="h6" gutterBottom color="white" fontWeight={500} fontSize={23}>
//                   Services
//                 </Typography>
//                 <Link component={RouterLink} to="/service/web-development" sx={linkStyle}>Web Development</Link>
//                 <Link component={RouterLink} to="/services/Mobile-development" sx={linkStyle}>Mobile Development</Link>
//                 <Link component={RouterLink} to="/services/Data-development" sx={linkStyle}>Data Analysis</Link>
//                 <Link component={RouterLink} to="/services/Ui-development" sx={linkStyle}>UI/UX Design</Link>
//                 <Link component={RouterLink} to="/services/it-consulting" sx={linkStyle}>Consulting</Link>
//               </Box>
//             </Box>

//             {/* Connect Section */}
//             <Box sx={{ mb: 3 }}>
//                <Button
//                           variant="contained"
//                           sx={{
//                             mt: 3,
//                             px: 4,
//                             py: 1.5,
//                             borderRadius: "20px",
//                             fontSize: "1rem",
//                             fontWeight: 400,
//                             background: "linear-gradient(90deg, #3f5eec, #00e4c9)", // your logo theme color
//                             textTransform: "none",
//                             "&:hover": {
//                               background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
//                             },
//                           }}
//                           onClick={() => navigate("/Contact")}
//                         >
//                         Contact Us →
//                         </Button>
//             </Box>

         
//            <Box>
//   <IconButton
//     color="primary"
//     component="a"
//     href="https://www.facebook.com/VyoobamTech"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <FacebookIcon />
//   </IconButton>

//   <IconButton
//     color="info"
//     component="a"
//     href="https://twitter.com/vyoobamtech"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <TwitterIcon />
//   </IconButton>

//   <IconButton
//     color="primary"
//     component="a"
//     href="https://www.instagram.com/vyoobamtech/"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <InstagramIcon />
//   </IconButton>

//   <IconButton
//     color="primary"
//     component="a"
//     href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <LinkedInIcon />
//   </IconButton>
// </Box>
                         
//       <Typography variant="body2">© 2025 Vyoobam Tech. All Rights Reserved.</Typography>    
       
//     </Box>
//   );
// };

// export default Footer;
import React from "react";
import { Box, Typography, Button, IconButton, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  
  const linkStyle = {
    display: "block",
    color: "#e8e7e7c1",
    textDecoration: "none",
    marginBottom: "0.5rem",
    position: "relative",
    fontSize: "clamp(0.875rem, 1.5vw, 1rem)", // ✅ Responsive font
    "&:hover": {
      color: "#ffffffff",
    },
  };

  return (<>
    <Box
      sx={{
        position: "relative",
        bgcolor: "#010c23ff",
        color: "#ffffffff",
        textAlign: "center",
        py: { xs: 4, sm: 5, md: 7 }, // ✅ Responsive padding
        px: { xs: 2, sm: 3, md: 4 }, // ✅ Horizontal padding for mobile
      }}
    >
      {/* Main Content Grid */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // ✅ Stack on mobile
          justifyContent: { xs: "center", md: "space-around" },
          alignItems: { xs: "center", md: "flex-start" },
          flexWrap: "wrap",
          textAlign: { xs: "center", md: "left" }, // ✅ Center on mobile
          mb: { xs: 4, md: 3 },
          gap: { xs: 4, md: 2 }, // ✅ Spacing between sections
          maxWidth: "1400px",
          mx: "auto",
        }}
      >
        {/* Brand Section */}
        <Box 
          sx={{ 
            minWidth: { xs: "100%", sm: 250, md: 200 },
            maxWidth: { xs: "100%", sm: 400, md: 300 },
            mb: { xs: 3, md: 0 },
          }}
        >
          <Typography 
            variant="h6" 
            gutterBottom 
            color="white" 
            sx={{
              mb: { xs: 2, md: 3 },
              fontWeight: 500,
              fontSize: "clamp(1.25rem, 3vw, 1.5rem)", // ✅ Responsive
            }}
          >
            Together for the journey ahead.
          </Typography>
          <Typography 
            variant="body2" 
            color="#e8e7e7c1" 
            sx={{
              maxWidth: { xs: "100%", md: 300 },
              fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)", // ✅ Responsive
              lineHeight: 1.6,
            }}
          >
            At Vyoobam, we believe in long-lasting relationships built on trust, innovation, and shared success.
          </Typography>
        </Box>

        {/* Divider - Hidden on mobile */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            px: 2,
          }}
        >
          <Box
            sx={{
              width: "1px",
              height: "150px",
              backgroundColor: "rgba(252, 251, 251, 0.3)",
              mx: 2,
            }}
          />
        </Box>

        {/* Explore Section */}
        <Box 
          sx={{ 
            minWidth: { xs: "100%", sm: 150, md: 100 },
            mb: { xs: 3, md: 0 },
          }}
        >
          <Typography 
            variant="h6" 
            gutterBottom 
            color="white" 
            fontWeight={500}
            sx={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", // ✅ Responsive
              mb: { xs: 1.5, md: 2 },
            }}
          >
            Explore
          </Typography>
          <Link component={RouterLink} to="/about" sx={linkStyle}>Overview</Link>
          <Link component={RouterLink} to="/about" sx={linkStyle}>Vision/Mission</Link>
          <Link component={RouterLink} to="/about" sx={linkStyle}>Timeline</Link>
          <Link component={RouterLink} to="/about" sx={linkStyle}>Core Values</Link>
        </Box>

        {/* Divider - Hidden on mobile */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            px: 2,
          }}
        >
          <Box
            sx={{
              width: "1px",
              height: "150px",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              mx: 2,
            }}
          />
        </Box>

        {/* Products Section */}
        <Box 
          sx={{ 
            minWidth: { xs: "100%", sm: 150, md: 50 },
            mb: { xs: 3, md: 0 },
          }}
        >
          <Typography 
            variant="h6" 
            gutterBottom 
            color="white" 
            fontWeight={500}
            sx={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", // ✅ Responsive
              mb: { xs: 1.5, md: 2 },
            }}
          >
            Products
          </Typography>
          <Link component={RouterLink} to="/Market" sx={linkStyle}>Market Metrics</Link>
          <Link component={RouterLink} to="/Event" sx={linkStyle}>Events</Link>
          <Link component={RouterLink} to="/Sales" sx={linkStyle}>Sales Sage</Link>
          <Link component={RouterLink} to="/Egrocery" sx={linkStyle}>E-Grocery</Link>
          <Link component={RouterLink} to="/Vyoobam" sx={linkStyle}>Vyoobam Nudge</Link>
        </Box>

        {/* Divider - Hidden on mobile */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            px: 2,
          }}
        >
          <Box
            sx={{
              width: "1px",
              height: "150px",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              mx: 2,
            }}
          />
        </Box>

        {/* Services Section */}
        <Box 
          sx={{ 
            minWidth: { xs: "100%", sm: 150, md: 50 },
            mb: { xs: 3, md: 0 },
          }}
        >
          <Typography 
            variant="h6" 
            gutterBottom 
            color="white" 
            fontWeight={500}
            sx={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", // ✅ Responsive
              mb: { xs: 1.5, md: 2 },
            }}
          >
            Services
          </Typography>
          <Link component={RouterLink} to="/service/web-development" sx={linkStyle}>Web Development</Link>
          <Link component={RouterLink} to="/services/Mobile-development" sx={linkStyle}>Mobile Development</Link>
          <Link component={RouterLink} to="/services/Data-development" sx={linkStyle}>Data Analysis</Link>
          <Link component={RouterLink} to="/services/Ui-development" sx={linkStyle}>UI/UX Design</Link>
          <Link component={RouterLink} to="/services/it-consulting" sx={linkStyle}>Consulting</Link>
        </Box>
      </Box>

      {/* Contact Button */}
      <Box sx={{ mb: { xs: 3, md: 3 } }}>
        <Button
          variant="contained"
          sx={{
            mt: { xs: 2, md: 3 },
            px: { xs: 3, md: 4 },
            py: { xs: 1.2, md: 1.5 },
            borderRadius: "20px",
            fontSize: "clamp(0.875rem, 1.5vw, 1rem)", // ✅ Responsive
            fontWeight: 400,
            background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
            textTransform: "none",
            "&:hover": {
              background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
            },
          }}
          onClick={() => navigate("/Contact")}
        >
          Contact Us →
        </Button>
      </Box>

      {/* Social Icons */}
      <Box 
        sx={{ 
          
          display: "flex",
          justifyContent: "center",
          gap: { xs: 1, md: 0 },
        }}
      >
        <IconButton
          color="primary"
          component="a"
          href="https://www.facebook.com/VyoobamTech"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#fff",
            "&:hover": { color: "#3b5998" },
          }}
        >
          <FacebookIcon sx={{ fontSize: { xs: 24, md: 28 } }} />
        </IconButton>

        <IconButton
          color="info"
          component="a"
          href="https://twitter.com/vyoobamtech"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#fff",
            "&:hover": { color: "#1DA1F2" },
          }}
        >
          <TwitterIcon sx={{ fontSize: { xs: 24, md: 28 } }} />
        </IconButton>

        <IconButton
          color="primary"
          component="a"
          href="https://www.instagram.com/vyoobamtech/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#fff",
            "&:hover": { color: "#E1306C" },
          }}
        >
          <InstagramIcon sx={{ fontSize: { xs: 24, md: 28 } }} />
        </IconButton>

        <IconButton
          color="primary"
          component="a"
          href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#fff",
            "&:hover": { color: "#0077b5" },
          }}
        >
          <LinkedInIcon sx={{ fontSize: { xs: 24, md: 28 } }} />
        </IconButton>
      </Box>

      {/* Copyright */}
      
      <Typography 
        variant="body2"
        sx={{
          fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)", // ✅ Responsive
          color: "#e8e7e7c1",mb:-4
        }}
      >
        © 2025 Vyoobam Tech. All Rights Reserved.
      </Typography>
    </Box>
   </>
  );
};

export default Footer;

