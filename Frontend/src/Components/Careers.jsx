import Header from "./Header";
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import careerBg from "../assets/careers.jpg";
import women from "../assets/women1.mp4";
import CareerSection from "./CareerSection";
import CTA from "./CTA";
import Footer from "./Footer";
import vyoobamrep from "../assets/vyoobamrep.png";
import { useNavigate } from "react-router-dom";
import open from "../assets/open.jpg";
const Careers = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Box
        sx={{
          position: "relative",
          height: "70vh",
          backgroundImage: `url(${careerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          mt: 13,
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        />

        {/* Content */}
        <Container sx={{ position: "relative", zIndex: 2, textAlign: "left" }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Build Your Future with Vyoobam Tech
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Be part of an innovative company where your skills shape the future.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: 400,
              background: "linear-gradient(90deg, #3f5eec, #00e4c9)", // your logo theme color
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
              },
            }}
            onClick={() => navigate("/openings")}
          >
            View Openings →
          </Button>
        </Container>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          py: 8,
          px: 4,
          flexDirection: { xs: "column", md: "row" },
          mt: 9, // responsive
        }}
      >
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Box
            component="video"
            src={women} // <-- import your video file on top
            autoPlay
            muted
            loop
            playsInline
            sx={{
              width: { xs: "100%", sm: "80%", md: "500px" }, // increased width
              height: { xs: "auto", md: "350px" },

              objectFit: "cover",
            }}
          />
        </Box>

        {/* Left Side Content */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" fontWeight="600" gutterBottom>
            Grow With Vyoobam Tech
          </Typography>
           <Typography variant="body1" sx={{ mb: 4, mt: 5 }}>
    At Vyoobam Tech, we believe that people are the driving force behind innovation. 
    Our culture is built on curiosity, creativity, and collaboration — where every idea 
    matters and every individual has the opportunity to make an impact. We’re committed 
    to helping our team members grow through learning, mentorship, and real-world challenges 
    that shape the future of technology.
  </Typography>

  <Typography variant="body1" sx={{ mb: 4, mt: 2 }}>
    Whether you’re beginning your career or expanding your expertise, Vyoobam Tech offers 
    an environment that encourages growth, experimentation, and continuous improvement. 
    Together, we aim to create solutions that inspire change, empower businesses, 
    and build a smarter digital world. Your journey to innovation begins here.
  </Typography>
          {/* <Button
            variant="contained"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: 400,
              background: "linear-gradient(90deg, #3f5eec, #00e4c9)", // your logo theme color
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
              },
            }}
            onClick={() => navigate("/services")}
          >
            Apply Now →
          </Button> */}
        </Box>

        {/* Right Side Image */}
      </Box>

      <CareerSection />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          py: 8,
          px: 4,
          flexDirection: { xs: "column", md: "row" }, // responsive
        }}
      >
        {/* Left Side Content */}
        <Box sx={{ flex: 1, ml: 1 }}>
          <Typography variant="h2" fontWeight="600" fontSize={60} gutterBottom>
            Life at Vyoobam Tech
          </Typography>
          <Typography
            variant="h6"
            fontWeight={400}
            fontSize={20}
            sx={{ mb: 4, mt: 4, ml: 1 }}
          >
            We’re not just about work; we’re about building a community of
            thinkers, doers, and leaders. From hackathons and team outings to
            mentorship sessions, our culture inspires creativity, collaboration,
            and continuous growth.
          </Typography>
          {/* <Button
              variant="contained"
              sx={{
               
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                fontSize: "1rem",
                fontWeight: 400,
                background: "linear-gradient(90deg, #3f5eec, #00e4c9)", // your logo theme color
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
                },
              }}
              onClick={() => navigate("/services")}
            >
             Apply Now   →
            </Button>
         */}
        </Box>

        {/* Right Side Image */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src={vyoobamrep}
            alt="Our Team"
            sx={{
              width: "100%",
              maxWidth: 450,
              borderRadius: 3,
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          height: "70vh",
          backgroundImage: `url(${open})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          mt: 13,
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        />

        {/* Content */}
        <Container
          sx={{ position: "relative", zIndex: 2, textAlign: "center" }}
        >
          {/* <Typography variant="h6" sx={{ mb: 1, mt: -8 }}>
            Join Us →
          </Typography> */}
          {/* <Typography variant="h2" fontWeight="bold" gutterBottom>
            Current Openings
          </Typography> */}

          <Button
            variant="contained"
            sx={{
           mt:-6,
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: 400,
              background: "linear-gradient(90deg, #3f5eec, #00e4c9)", // your logo theme color
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
              },
            }}
            onClick={() => navigate("/openings")}
          >
            View Openings →
          </Button>
        </Container>
      </Box>
      <CTA />
      <Footer />
    </div>
  );
};

export default Careers;

