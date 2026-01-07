// import { Box, Typography, Button } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import market2 from "../assets/market2.jpg";
// import event2 from "../assets/event2.jpg";
// import emart from "../assets/emart.jpg";
// import sales2 from "../assets/sales2.jpg";
// import vyoobam from "../assets/vyoobam.png"
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const products = [
//   {
//     id: 1,
//     name: "Market Metrics",
//     image: market2,
//     action: "READ MORE",
//     path: "/Market",
//   },
//   // {
//   //   id: 2,
//   //   name: "Event Ease",
//   //   image: event2,
//   //   action: "READ MORE",
//   //   path: "/Event",
//   // },
//   {
//     id: 2,
//     name: "E-Grocery Mart",
//     image: emart,
//     action: "READ MORE",
//     path: "/Egrocery",
//   },
//   {
//     id: 3,
//     name: "Sales Sage",
//     image: sales2,
//     action: "READ MORE",
//     path: "/Sales"
//   },
//   {
//     id: 4,
//     name: "Vyoobam Nursery ",
//     image:vyoobam,
//     action: "READ MORE",
//     path: "/Vyoobam"
//   }
// ];

// const fadeIn = (delay = 0) => ({
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1.2, delay, ease: "easeOut" },
//   },
// });
// const ProductSection = () => {
//   const navigate = useNavigate();

//   return (
//     <Box sx={{ py: 8, px: 5, background: "#01061fff" }}>
//       <motion.div
//         variants={fadeIn(0.2)}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <Typography
//           variant="h2"
//           sx={{
//             mb: 9,
//             mt: 5,
//             fontWeight: "600",
//             fontSize: "40px",
//             textAlign: "center",
//             background: "white",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           Our Products
//         </Typography>
//       </motion.div>
//       <motion.div
//         variants={fadeIn(0.6)} // small delay → comes after heading
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={20}
//           slidesPerView={3}
//           navigation
//           loop
//           centeredSlides={false}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             600: { slidesPerView: 2 },
//             900: { slidesPerView: 3 },
//           }}
//         >
//           {products.map((product) => (
//             <SwiperSlide key={product.id}>
//               <Box
//                 sx={{
//                   position: "relative",
//                   // 👈 fixed width
//                   height: 400,
//                   borderRadius: 2,
//                   overflow: "hidden",
//                   cursor: "pointer",
//                   "&:hover img": {
//                     transform: "scale(1.1)",
//                     filter: "brightness(0.6)", // keep zoom/dark effect
//                     transition: "transform 0.6s ease, filter 0.6s ease",
//                   },
//                 }}
//               >
//                 {/* Product Image */}
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     filter: "brightness(0.85)",
//                     transition: "transform 0.6s ease, filter 0.6s ease",
//                   }}
//                 />
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     bottom: 0,
//                     left: 0,
//                     right: 0,
//                     p: 3,
//                     color: "#fff",
//                     background:
//                       "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))", // gradient only at bottom
//                   }}
//                 >
//                   {/* Content Overlay - ALWAYS VISIBLE */}
//                   <Box
//                     className="contentBox"
//                     sx={{
//                       position: "absolute",
//                       bottom: 0,
//                       left: 0,
//                       right: 0,
//                       p: 3,
//                       color: "#fcf9f9ff",
//                       transform: "translateY(0%)", // always visible
//                       opacity: 1, // always visible
//                       backgroundColor: "rgba(0,0,0,0.4)", // semi-transparent overlay
//                     }}
//                   >
//                     <Typography variant="h5" fontSize={28} sx={{ mb: 1 }}>
//                       {product.name}
//                     </Typography>
//                     <Button
//                       variant="outlined"
//                       sx={{
//                         color: "#fffcfcff",
//                         borderColor: "#fff",
//                         textTransform: "uppercase",
//                         fontSize: "0.8rem",
//                         fontWeight: 600,
//                         "&:hover": {
//                           backgroundColor: "#fff",
//                           color: "#000",
//                         },
//                       }}
//                       onClick={() => navigate(product.path)} // ← Add this
//                     >
//                       {product.action}
//                     </Button>
//                   </Box>
//                 </Box>
//               </Box>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </motion.div>
//       <Box sx={{ display: "flex", justifyContent: "center" }}>
//         <motion.div
//           variants={fadeIn(1)} // comes after cards
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <Button
//             variant="contained"
//             sx={{
//               mt: 6,
//               px: 4,
//               py: 1.5,
//               borderRadius: "30px",
//               textAlign: "center",
//               justifyItems: "center",
//               fontSize: "1rem",
//               fontWeight: 400,
//               background: "linear-gradient(90deg, #3f5eec, #00e4c9)", // your logo theme color
//               textTransform: "none",
//               "&:hover": {
//                 background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
//               },
//             }}
//             onClick={() => navigate("/Allproduct")}
//           >
//             Explore US →
//           </Button>
//         </motion.div>
//       </Box>
//     </Box>
//   );
// };

// export default ProductSection;
import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
    <Box sx={{ py: 8, px: 5, background: "#01061fff" }}>
      {/* Heading */}
      <motion.div
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 9,
            mt: 5,
            fontWeight: 600,
            fontSize: "40px",
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
          slidesPerView={3}
          navigation
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Box
                sx={{
                  position: "relative",
                  height: 400,
                  borderRadius: 2,
                  overflow: "hidden",
                  cursor: "pointer",

                  "&:hover img": {
                    transform: "scale(1.1)",
                    filter: "brightness(0.55)",
                  },

                  "&:hover .overlay": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                  "&:hover .default-title": {
  opacity: 0,
},
                }}
              >
                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "all 0.6s ease",
                  }}
                />

                {/* Default Title (Before Hover) */}
                <Box
                className="default-title"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#fff", fontWeight: 600 }}
                  >
                    {product.name}
                  </Typography>
                </Box>

                {/* Hover Overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 3,
                    color: "#fff",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2))",
                    opacity: 0,
                    transform: "translateY(30px)",
                    transition: "all 0.5s ease",
                  }}
                >
                  <Typography variant="h5" fontWeight={600} mb={1}>
                    {product.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#e5e7eb",
                      mb: 2,
                      lineHeight: 1.5,
                    }}
                  >
                    {product.description}
                  </Typography>

                  <Button
                    variant="outlined"
                    sx={{
                      alignSelf: "flex-start",
                      color: "#fff",
                      borderColor: "#fff",
                      fontSize: "0.75rem",
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

      {/* Explore Button */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <motion.div
          variants={fadeIn(1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Button
            variant="contained"
            sx={{
              mt: 6,
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: 400,
              background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
              },
            }}
            onClick={() => navigate("/Allproduct")}
          >
            Explore Us →
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ProductSection;
