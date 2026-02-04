import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Collapse,
  IconButton,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import your assets here
import vyoobamrep from "../assets/vyoobamrep.png";
import tech from "../assets/tech.jpg";
import journey from "../assets/journey.jpg";
import trust from "../assets/trust.jpeg";

// Lazy load package
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

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
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box sx={{ width: "100%", background: "#fff", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            mb: 5,
            fontWeight: 600,
            color: "#13044a",
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
          }}
        >
          Life at Vyoobam
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 8 },
            alignItems: "flex-start",
          }}
        >
          {/* LEFT – ACCORDION */}
          <Box sx={{ flex: { md: 0.6 }, width: "100%" }}>
            {slides.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <Box
                  key={item.id}
                  onClick={() => handleToggle(index)}
                  sx={{
                    borderTop: "1px solid #e0e0e0",
                    borderBottom:
                      index === slides.length - 1
                        ? "1px solid #e0e0e0"
                        : "none",
                    cursor: "pointer",
                  }}
                >
                  {/* Header */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: { xs: 2.5, md: 3 },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: isOpen
                          ? "clamp(1.2rem, 2vw, 1.6rem)"
                          : "clamp(1.05rem, 1.8vw, 1.3rem)",
                        fontWeight: isOpen ? 600 : 400,
                        color: "#13044a",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <IconButton
                      disableRipple
                      sx={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "0.3s",
                        color: "#13044a",
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>

                  <Collapse in={isOpen}>
                    <Box sx={{ pb: 3, pr: { md: 4 } }}>
                      <Typography
                        sx={{
                          color: "#555",
                          fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                          lineHeight: 1.7,
                          mb: 2.5,
                        }}
                      >
                        {item.desc}
                      </Typography>

                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(item.route);
                        }}
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          textTransform: "none",
                          color: "#3f5eec",
                          fontWeight: 600,
                          padding: 0,
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

          {/* RIGHT – IMAGE */}
          <Box
            sx={{
              flex: { md: 0.4 },
              width: "100%",
              position: { md: "sticky" },
              top: 120,
              borderRadius: "16px",
              overflow: "hidden",
              height: { xs: "240px", sm: "320px", md: "460px" },
            }}
          >
            <LazyLoadImage
              key={activeIndex} // ensures fade re-render
              src={slides[activeIndex].img}
              alt={slides[activeIndex].title}
              effect="blur"      // smooth placeholder
              width="100%"
              height="100%"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                transition: "opacity 0.5s ease-in-out",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
