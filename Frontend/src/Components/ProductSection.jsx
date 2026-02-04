import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ✅ Lazy loading
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import market2 from "../assets/market2.jpg";
import emart from "../assets/emart.jpg";
import sales2 from "../assets/sales2.jpg";
import vyoobam from "../assets/vyoobam.png";

const products = [
  {
    id: 1,
    name: "Market Metrics",
    image: market2,
    description:
      "Advanced analytics platform to track market trends, performance insights, and strategic growth opportunities.",
    path: "/Market",
  },
  {
    id: 2,
    name: "E-Grocery Mart",
    image: emart,
    description:
      "A complete e-commerce solution for online grocery shopping with smart inventory and order management.",
    path: "/Egrocery",
  },
  {
    id: 3,
    name: "Sales Sage",
    image: sales2,
    description:
      "Powerful sales intelligence system designed to optimize performance, forecasting, and revenue growth.",
    path: "/Sales",
  },
  {
    id: 4,
    name: "Vyoobam Nudge",
    image: vyoobam,
    description:
      "A digital platform for plant nurseries to manage products, orders, and customer engagement efficiently.",
    path: "/Vyoobam",
  },
];

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay, ease: "easeOut" },
  },
});

const ProductSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 5 },
        background: "#01061fff",
      }}
    >
      {/* Heading */}
      <motion.div
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography
          sx={{
            mb: { xs: 5, md: 9 },
            mt: { xs: 2, md: 5 },
            fontWeight: 600,
            fontSize: "clamp(26px, 4vw, 40px)",
            textAlign: "center",
            background: "white",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Products
        </Typography>
      </motion.div>

      {/* Slider */}
      <motion.div
        variants={fadeIn(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          navigation
          loop
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            600: { slidesPerView: 2, spaceBetween: 18 },
            900: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 300, sm: 340, md: 400 },
                  borderRadius: 2,
                  overflow: "hidden",
                  cursor: "pointer",

                  "&:hover img": {
                    transform: "scale(1.1)",
                    filter: "brightness(0.55)",
                  },

                  "&:hover .overlay": {
                    opacity: { md: 1 },
                    transform: { md: "translateY(0)" },
                  },

                  "&:hover .default-title": {
                    opacity: { md: 0 },
                  },
                }}
              >
                {/* ✅ Lazy Loaded Image */}
                <LazyLoadImage
                  src={product.image}
                  alt={product.name}
                  effect="blur"
                  width="100%"
                  height="100%"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "all 0.6s ease",
                  }}
                />

                {/* Default Title */}
                <Box
                  className="default-title"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 2,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: { xs: "18px", md: "20px" },
                    }}
                  >
                    {product.name}
                  </Typography>
                </Box>

                {/* Overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 2,
                    color: "#fff",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2))",
                    opacity: { xs: 1, md: 0 },
                    transform: {
                      xs: "translateY(0)",
                      md: "translateY(30px)",
                    },
                    transition: "all 0.5s ease",
                  }}
                >
                  <Typography sx={{ fontWeight: 600, mb: 1 }}>
                    {product.name}
                  </Typography>

                  <Typography sx={{ fontSize: "14px", mb: 2 }}>
                    {product.description}
                  </Typography>

                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      alignSelf: "flex-start",
                      color: "#fff",
                      borderColor: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#000",
                      },
                    }}
                    onClick={() => navigate(product.path)}
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </Box>
  );
};

export default ProductSection;
