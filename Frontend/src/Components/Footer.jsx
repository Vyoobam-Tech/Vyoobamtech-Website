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
    color: "#e8e7e7c1",
    textDecoration: "none",        // default: no underline
    marginBottom: "0.5rem",
    position: "relative",
    "&:hover": {
      // textDecoration: "underline",
      color: "#ffffffff", // underline on hover
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
                
                <Typography variant="h6" gutterBottom color="white" sx={{mb:3,ml:-3}} fontWeight={500} fontSize={24}>
                  Together for the journey ahead.<br />
                  
                </Typography>
                <Typography variant="body2" color="#e8e7e7c1" sx={{maxWidth:300, ml:-3}} fontSize={18}>
                At Vyoobam,
                  we believe in long-lasting relationships built on trust, innovation, and shared success

                </Typography>
              </Box>

              <Box sx={{ minWidth: 100,  }}>
                <Typography variant="h6" gutterBottom color="white" fontWeight={500} fontSize={23}>
                  Explore
                </Typography>
                <Link component={RouterLink} to="/about" sx={linkStyle}>Overview</Link>
                <Link component={RouterLink} to="/about"sx={linkStyle}>Vision/Mission</Link>
                <Link component={RouterLink} to="/about" sx={linkStyle}>Timeline</Link>
                <Link component={RouterLink} to="/about" sx={linkStyle}>Core Values</Link>
              </Box>
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
                height: "70%", // or use 150px or any fixed height
                backgroundColor: "rgba(252, 251, 251, 1)", // soft grey line
                mx: -5,
              }}
            />
          </Box>
              
              <Box sx={{ minWidth: 50,  }}>
                <Typography variant="h6" gutterBottom color="white" fontWeight={500} fontSize={23}>
                  Products
                </Typography>
                <Link component={RouterLink} to="/Market" sx={linkStyle}>Market Metrics</Link>
                <Link component={RouterLink} to="/Event" sx={linkStyle}>Events</Link>
                <Link component={RouterLink} to="/Sales" sx={linkStyle}>Sales Sage</Link>
                <Link component={RouterLink} to="/Egrocery" sx={linkStyle}>E-Grocery</Link>
       <Link component={RouterLink} to="/Vyoobam" sx={linkStyle}>Vyoobam Nudge</Link>
              </Box>
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
                height: "70%", // or use 150px or any fixed height
                backgroundColor: "rgba(255, 255, 255, 1)", // soft grey line
                mx: -5
              }}
            />
          </Box>

              <Box sx={{ minWidth: 50,  }}>
                <Typography variant="h6" gutterBottom color="white" fontWeight={500} fontSize={23}>
                  Services
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
               <Button
                          variant="contained"
                          sx={{
                            mt: 3,
                            px: 4,
                            py: 1.5,
                            borderRadius: "20px",
                            fontSize: "1rem",
                            fontWeight: 400,
                            background: "linear-gradient(90deg, #3f5eec, #00e4c9)", // your logo theme color
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
<Typography variant="body2">© 2025 Vyoobam Tech. All Rights Reserved.</Typography>
         
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
    color="primary"
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
