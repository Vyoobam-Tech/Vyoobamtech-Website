import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Box, Typography, Button, IconButton } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import MemoryIcon from "@mui/icons-material/Memory";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const rawServices = [
  {
    id: 1,
    title: "Web Development",
    icon: <HeadsetMicIcon sx={{ fontSize: 40, color: "#fff" }} />,
    bgColor: "#4caf50",
 description: "Responsive, secure, and SEO-ready websites that build your online identity and accelerate growth"
  },
  {
    id: 2,
    title: "Mobile App Development",
    icon: <MemoryIcon sx={{ fontSize: 40, color: "#fff" }} />,
    bgColor: "#fb923c",
      description: "High-performance apps for iOS and Android with intuitive interfaces and seamless user experiences"
  },
  {
    id: 3,
    title: "UI/UX Design",
    icon: <CloudIcon sx={{ fontSize: 40, color: "#fff" }} />,
    bgColor: "#6366f1",
  
     description: " – Human-centered design that delights users, increases adoption, and drives conversions"
  },
  {
    id: 4,
    title: "Data Analytics & Visualization",
    icon: <MobileFriendlyIcon sx={{ fontSize: 40, color: "#fff" }} />,
    bgColor: "#ef4444",
     description: " –Transforming raw data into insights with dashboards, predictive analytics, and intelligent reporting"
  },
  {
    id: 5,
    title: "It consulting",
    icon: <MobileFriendlyIcon sx={{ fontSize: 40, color: "#fff" }} />,
    bgColor: "#2ab8b14d",
     description: " – Strategic IT consulting to optimize processes, adopt the right technology stack, and future-proof operations."
  },
  
];

const ServiceSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = rawServices.length;
  const slidesToShow = 3;

  const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false, // hide default arrows
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Determine visible slides based on screen width
  const visibleSlides = () => {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3  ;
  };

  const maxSlideIndex = totalSlides - visibleSlides();

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", py: 6, px: 2, position: "relative" }}>
      {/* Left Arrow */}
      <IconButton
        onClick={() => sliderRef.current?.slickPrev()}
        disabled={currentSlide === 0}
        sx={{
          position: "absolute",
          top: "50%",
          left: -20,
          transform: "translateY(-50%)",
          backgroundColor: "#fff",
          boxShadow: 2,
          zIndex: 1,
          "&:disabled": {
            opacity: 0.3,
            cursor: "not-allowed",
          },
        }}
      >
        <NavigateBeforeIcon />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        onClick={() => sliderRef.current?.slickNext()}
        disabled={currentSlide >= maxSlideIndex}
        sx={{
          position: "absolute",
          top: "50%",
          right: -20,
          transform: "translateY(-50%)",
          backgroundColor: "#fff",
          boxShadow: 2,
          zIndex: 1,
          "&:disabled": {
            opacity: 0.3,
            cursor: "not-allowed",
          },
        }}
      >
        <NavigateNextIcon />
      </IconButton>

      <Slider ref={sliderRef} {...settings}>
        {rawServices.map((service, index) => (
          <Box
            key={index}
            sx={{
              p: 4,
              m: 1,
              border: "1px solid #e5e7eb",
              textAlign: "center",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              height: "260px",
              transition: "all 0.4s ease",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#002252ff",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                
              },
              "&:hover .arrow": {
                color: "#10b981",
              },
              "&:hover .icon-container": {
  transform: "scale(1.15)", // icon grows on hover
},
"&:hover .title": {
      color: "#fff",
    },
    "&:hover .description": {
  opacity: 1,
  maxHeight: "100px",
}


            }}
          >
            {/* Icon */}
            <Box   className="icon-container"
              sx={{
                backgroundColor: service.bgColor,
                borderRadius: "16px",
                padding: 2,
                width: 64,
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
                transition: "transform 0.3s ease",
              }}
            >
              {service.icon}
            </Box>

            {/* Title */}
            <Typography
            className="title"
              variant="h6"
              sx={{ fontWeight: "bold", color: "#111827", mb: 2 }}
            >
              {service.title}
            </Typography>
            <Typography
  className="description"
  variant="body1"
  sx={{
    color: "#e5e7eb",
    mt: 1,
    opacity: 0,
    maxHeight: 0,
    overflow: "hidden",
    transition: "opacity 0.4s ease, max-height 0.4s ease",
  }}
>
  {service.description}
</Typography>


            {/* Arrow */}
            <Button
              className="arrow"
              disableRipple
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#6b7280",
                textTransform: "none",
                transition: "color 0.3s ease",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              →
            </Button>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ServiceSlider;
