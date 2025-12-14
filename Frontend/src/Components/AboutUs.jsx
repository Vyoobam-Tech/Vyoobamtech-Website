import React, { useState } from "react";
import { Box, Typography, Button, Collapse, IconButton, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import your assets here
import vyoobamrep from "../assets/vyoobamrep.png";
import tech from "../assets/tech.jpg";
import journey from "../assets/journey.jpg";
import trust from "../assets/trust.jpeg";

const slides = [
  {
    id: 0,
    title: "Who We Are",
    desc: `Founded in 2022, Vyoobam Tech has evolved from a small web solutions provider into a full-scale digital transformation company. We empower businesses to grow digitally by delivering innovative Web and Mobile applications, Data Analytics solutions, UI/UX designs, and expert Consulting services.`,
    img: vyoobamrep,
     route: "/about", 
  },
  {
    id: 1,
    title: "Our Journey",
    desc: `Our journey began with a simple belief — technology should empower people. From humble beginnings, we have expanded across multiple sectors, overcoming challenges with passion, innovation, and trust, and creating digital experiences that make a meaningful impact for our clients.`,
    img: journey,
     route: "/about#timeline-section", 
  },
  {
    id: 2,
    title: "Our Technical Expertise",
    desc: `At Vyoobam Tech, we provide end-to-end digital solutions backed by deep technical expertise. Our team excels in Web and Mobile development using frameworks like React, Angular, and Spring Boot, building robust backend systems, managing secure databases, integrating APIs, leveraging cloud and DevOps practices, and designing intuitive UI/UX experiences.`,
    img: tech,
     route: "/AllServices", 
  },
  {
    id: 3,
    title: "Our Trusted Vision",
    desc: `Our vision is to be a trusted partner in every business’s digital transformation. We aim to deliver innovative, reliable, and scalable technology solutions while fostering long-term relationships built on trust, transparency, and measurable impact, helping our clients grow and succeed in a digital-first world.`,
    img: trust,
     route: "/about#vision", 
  },
];

export default function AboutUsXebiaStyle() {
  const navigate = useNavigate();
  // Default to the first item being open (0)
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    // If clicking the already open item, keep it open (or toggle null to close)
    // Xebia style usually keeps one open always, so we just set index.
    setActiveIndex(index);
  };

  return (
    <Box sx={{ width: "100%", background: "#fff", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{ mb: 5, fontWeight: 600, color: "#13044a" }}
        >
          Life at Vyoobam
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" }, // Mobile: Image top (reversed), Desktop: Side by side
            gap: { xs: 4, md: 8 },
            alignItems: "flex-start",
          }}
        >
          {/* LEFT SIDE - ACCORDION LIST */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {slides.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <Box
                  key={item.id}
                  onClick={() => handleToggle(index)}
                  sx={{
                    borderTop: "1px solid #e0e0e0",
                    borderBottom: index === slides.length - 1 ? "1px solid #e0e0e0" : "none",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.02)",
                    },
                  }}
                >
                  {/* Header Row */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: 3,
                      pr: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: isOpen ? "1.5rem" : "1.25rem",
                        fontWeight: isOpen ? 600 : 400,
                        color: "#13044a",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {item.title}
                    </Typography>
                    
                    {/* Plus Icon that rotates to X */}
                    <IconButton
                      disableRipple
                      sx={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                        color: "#13044a",
                      }}
                    >
                      <AddIcon fontSize="large" />
                    </IconButton>
                  </Box>

                  {/* Collapsible Content */}
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <Box sx={{ pb: 4, pr: { md: 4 } }}>
                      <Typography
                        sx={{
                          color: "#555",
                          fontSize: "1.05rem",
                          lineHeight: 1.7,
                          mb: 3,
                        }}
                      >
                        {item.desc}
                      </Typography>

                      <Button
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent accordion toggle when clicking button
                          navigate(item.route);
                        }}
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          textTransform: "none",
                          color: "#3f5eec",
                          fontWeight: 600,
                          fontSize: "1rem",
                          padding: 0,
                          "&:hover": {
                            background: "transparent",
                            textDecoration: "underline",
                          },
                        }}
                      >
                        Learn more
                      </Button>
                    </Box>
                  </Collapse>
                </Box>
              );
            })}
          </Box>

          {/* RIGHT SIDE - STICKY IMAGE */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              position: { md: "sticky" },
              top: 100, // Makes image stick while scrolling on desktop
              height: "fit-content",
            }}
          >
            <Box
              component="img"
              src={slides[activeIndex].img}
              alt={slides[activeIndex].title}
              sx={{
                width: "100%",
                height: { xs: "300px", md: "500px" },
                objectFit: "cover",
                borderRadius: "16px",
                transition: "opacity 0.5s ease-in-out",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}