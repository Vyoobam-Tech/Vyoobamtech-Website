import React, { useState } from "react";
import { Box, Typography, Button, IconButton, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
 
const navigate = useNavigate();
  const linkStyle = {
    display: "block",
    color: "white",
    textDecoration: "none",        // default: no underline
    marginBottom: "0.5rem",
    position: "relative",
    "&:hover": {
      textDecoration: "underline", // underline on hover
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#010c23ff",
        color: "#ffffffff",
        textAlign: "center",
        py:7,
      }}
    >
      {/* Logo */}

      

      {/* Copyright */}
      

      {/* Expanded Content on Hover */}
      
        
          
            {/* Columns Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                textAlign: "left",
                mb: 3,
              }}
            >
              <Box sx={{ minWidth: 200 }}>
                <Typography variant="h6" gutterBottom color="white" sx={{mb:3}}>
                  FOOTER CONTENT
                </Typography>
                <Typography variant="body1" color="white" >
                   Vyoobam Tech is a leading technology solutions company providing innovative<br /> software, mobile, and web solutions to businesses globally.
                </Typography>
              </Box>

              <Box sx={{ minWidth: 120, borderRight: "1px solid white", pr: 2 }}>
                <Typography variant="h6" gutterBottom color="white">
                  Company
                </Typography>
                <Link component={RouterLink} to="/about" sx={linkStyle}>Overview</Link>
                <Link component={RouterLink} to="/about"sx={linkStyle}>Vision/Mission</Link>
                <Link component={RouterLink} to="/about" sx={linkStyle}>Timeline</Link>
                <Link component={RouterLink} to="/about" sx={linkStyle}>Core Values</Link>
              </Box>

              <Box sx={{ minWidth: 120, borderRight: "1px solid white", px: 2 }}>
                <Typography variant="h6" gutterBottom color="white">
                  PRODUCTS
                </Typography>
                <Link component={RouterLink} to="/Market" sx={linkStyle}>Market Metrics</Link>
                <Link component={RouterLink} to="/Event" sx={linkStyle}>Events</Link>
                <Link component={RouterLink} to="/Sales" sx={linkStyle}>Sales Sage</Link>
                <Link component={RouterLink} to="/Egrocery" sx={linkStyle}>E-Grocery</Link>
       <Link component={RouterLink} to="/Vyoobam" sx={linkStyle}>Vyoobam Nudge</Link>
              </Box>

              <Box sx={{ minWidth: 120, pl: 2 }}>
                <Typography variant="h6" gutterBottom color="white">
                  SERVICES
                </Typography>
                <Link component={RouterLink} to="/service/web-development" sx={linkStyle}>Web Development</Link>
                <Link component={RouterLink} to="/services/Mobile-development" sx={linkStyle}>Mobile Development</Link>
                <Link component={RouterLink} to="/services/Data-development" sx={linkStyle}>Data Analysis</Link>
                <Link component={RouterLink} to="/services/Ui-development" sx={linkStyle}>UI/UX Design</Link>
                <Link component={RouterLink} to="/services/it-consulting" sx={linkStyle}>Consulting</Link>
              </Box>
            </Box>

            {/* Connect Section */}
            <Box sx={{ mb: 3 }}>
              <Button variant="contained" color="error" onClick={() => navigate("/Contact")}>
                CONNECT WITH US
              </Button>
            </Box>
<Typography variant="body2">© 2025 Vyoobam Tech. All Rights Reserved.</Typography>
            {/* Social Icons */}
           <Box>
  <IconButton
    color="primary"
    component="a"
    href="https://www.facebook.com/VyoobamTech"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FacebookIcon />
  </IconButton>

  <IconButton
    color="info"
    component="a"
    href="https://twitter.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <TwitterIcon />
  </IconButton>

  <IconButton
    color="secondary"
    component="a"
    href="https://www.instagram.com/vyoobamtech/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <InstagramIcon />
  </IconButton>

  <IconButton
    color="primary"
    component="a"
    href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
    target="_blank"
    rel="noopener noreferrer"
  >
    <LinkedInIcon />
  </IconButton>
</Box>

          
       
    </Box>
  );
};

export default Footer;
