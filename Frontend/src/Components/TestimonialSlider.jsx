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
import seva from "../assets/seva.jpg";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { AnimatedBox } from "./AnimatedBox";
import woman from "../assets/client1.jpeg";
import man from "../assets/client2.jpeg";

const brandLogos = [hari, lakshu, cheliyan, hari2, kt, seva, janu];

const testimonials = [
  {
    name: "	Azharuddin",
    role: "Client",
    image: woman,
    text: "Vyoobam Tech delivers innovative, reliable, and customized software solutions with a strong focus on quality and client satisfaction — the ideal partner for elevating your digital presence.",
  },
  {
    name: "Vigneshwaran Sivaprakasam",
    role: "Client",
    image: man,
    text: "Vyoobam Tech has been an exceptional partner for our business projects. Their team is highly professional, knowledgeable, and consistently responsive to our project needs. Great work — keep growing!",
  },
];

const TestimonialSlider = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#fffffff8",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* 🔹 Logo Scrolling */}
      <Box
        sx={{
          whiteSpace: "nowrap",
          display: "inline-block",
          animation: {
            xs: "scrollLeft 35s linear infinite",
            md: "scrollLeft 10s linear infinite",
          },
        }}
      >
        {brandLogos.concat(brandLogos).map((logo, idx) => (
          <Box
            key={idx}
            component="img"
            src={logo}
            alt={`brand-logo-${idx}`}
            sx={{
              height: { xs: 45, sm: 60, md: 80 },
              width: { xs: 120, sm: 150, md: 200 },
              objectFit: "contain",
              mx: { xs: 2, md: 4 },
              display: "inline-block",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        ))}
      </Box>

      {/* Keyframes */}
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      {/* Heading */}
      <AnimatedBox>
        <Typography
          sx={{
            mt: { xs: 4, md: 5 },
            mb: { xs: 4, md: 5 },
            fontWeight: 600,
            fontSize: "clamp(26px, 4vw, 40px)",
            color: "#000",
          }}
        >
          Our Clients Say
        </Typography>
      </AnimatedBox>

      {/* 🔹 Testimonial Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        speed={800}
        spaceBetween={30}
        slidesPerView={1}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                boxShadow: {
                  xs: "0 4px 12px rgba(0,0,0,0.08)",
                  md: "0 6px 18px rgba(0,0,0,0.12)",
                },
                px: { xs: 3, md: 5 },
                py: { xs: 4, md: 6 },
              }}
            >
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{
                  width: { xs: 90, sm: 120, md: 150 },
                  height: { xs: 90, sm: 120, md: 150 },
                  mx: "auto",
                  mb: 3,
                }}
              />

              <Typography
                sx={{
                  fontStyle: "italic",
                  color: "#374151",
                  fontSize: { xs: "14px", md: "16px" },
                  mb: 2,
                  lineHeight: 1.6,
                }}
              >
                "{testimonial.text}"
              </Typography>

              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "15px", md: "16px" },
                }}
              >
                {testimonial.name}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default TestimonialSlider;
