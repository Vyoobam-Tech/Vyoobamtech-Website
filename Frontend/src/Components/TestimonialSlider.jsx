import { Box, Typography, Avatar } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import hari from "../assets/hari.png";
import hari2 from "../assets/hari2.png";
import kt from "../assets/kt.jpg";
import lakshu from "../assets/lakshu.png";
import cheliyan from "../assets/cheliyan.png";
import janu from "../assets/janu.png";
import seva from "../assets/seva.jpg"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { AnimatedBox } from "./AnimatedBox";

const brandLogos = [hari, lakshu, cheliyan, hari2, kt,seva, janu];

const testimonials = [
  {
    name: "Samuel Schick",
    role: "Client",
    image: "",
    text: "Vyoobam Tech is a top-tier software development company that excels in delivering innovative and reliable tech solutions.",
  },
  {
    name: "Vigneshwaran Sivaprakasam",
    role: "Client",
    image: "",
    text: "Vyoobam Tech has been an incredible partner. Very professional, knowledgeable, and responsive to project needs.",
  },
];

const TestimonialSlider = () => {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#fffffff8",
        textAlign: "center",
        overflow: "hidden",
        // important to hide overflow scroll
      }}
    >
      {/* ✅ Logo Scrolling Container */}
      <Box
        sx={{
          whiteSpace: "nowrap",
          display: "inline-block",
          animation: "scrollLeft 25s linear infinite", // animation
        }}
      >
        {brandLogos.concat(brandLogos).map((logo, idx) => (
          <Box
            key={idx}
            component="img"
            src={logo}
            alt={`brand-logo-${idx}`}
            sx={{
              height: 80,
              width: 200,
              objectFit: "contain",
              mx: 4,
              display: "inline-block",
              filter: "grayscale(0%)",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                filter: "grayscale(0%)",
                transform: "scale(1.1)",
              },
            }}
          />
        ))}
      </Box>

      {/* ✅ Keyframes for scrolling */}
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      {/* Testimonial Section */}
      <AnimatedBox>
        <Typography variant="h2" color="black" gutterBottom mt={5} mb={5}>
          Our Clients Say
        </Typography>
      </AnimatedBox>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        speed={800}
        spaceBetween={50}
        slidesPerView={1}
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                px: 4,
                py: 6,
              }}
            >
              <Box
                sx={{
                  width: 130,
                  height: 130,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(to right, #00e4c9, #00b2ff, #ff267e)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 3,
                  p: "3px",
                }}
              >
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{ width: 120, height: 120 }}
                />
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontStyle: "italic",
                  color: "#374151",
                  mb: 2,
                }}
              >
                "{testimonial.text}"
              </Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                {testimonial.name}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <Box
          className="swiper-button-prev-custom"
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "#fff",
            borderRadius: "50%",
            width: 40,
            height: 40,
            boxShadow: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#00b2ff",
            cursor: "pointer",
          }}
        >
          <NavigateBeforeIcon />
        </Box>
        <Box
          className="swiper-button-next-custom"
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "#fff",
            borderRadius: "50%",
            width: 40,
            height: 40,
            boxShadow: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#00b2ff",
            cursor: "pointer",
          }}
        >
          <NavigateNextIcon />
        </Box>
      </Swiper>
    </Box>
  );
};

export default TestimonialSlider;
