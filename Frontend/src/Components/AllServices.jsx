import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import moblie from "../assets/mobileservice.jpg";
import web from "../assets/webservice.jpg";
import ui from "../assets/uiservice.jpg";
import data from "../assets/dataservice.jpg";
import it from "../assets/consultingservice.jpg";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


// Services data
const services = [
  { title: "Web Development", image: web,path: "/service/web-development" },
  { title: "Moblie App Development", image: moblie,path: "/services/Mobile-development" },
  { title: "Ui/Ux Design", image: ui,path: "/services/Ui-development" },
  { title: "DataAnalytics", image: data,path: "/services/Data-development" },
    { title: "IT Consulting", image: it,path: "/services/it-consulting" },
];

const AllServices = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Box sx={{ padding: 4, mt: 13, backgroundColor: "#f8f8f8" }}>
        {/* Heading */}
        <Typography
          variant="h2" 
          sx={{ textAlign: "left", mb: 10,mt:5, fontWeight: "400",fontSize:"50px" }}
        >
          All Service
        </Typography>

        {/* Services row */}
       <Box
        
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            px: { xs: 2, md: 6 },
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              onClick={() => navigate(service.path)}
              sx={{
                flex: {
                  xs: "0 1 100%", // 1 card on mobile
                  sm: "0 1 48%", // 2 cards on tablet
                  md: "0 1 30%", // 3 cards on desktop
                },
                minHeight: 420,
                backgroundColor: "#dddedef2",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                p: 4,mb:8,
                cursor: "pointer",
                position: "relative",
                transition: "all 0.4s ease",
                "&:hover": {
                  backgroundColor: "#000025ff",color:"white",
                  transform: "translateY(-6px)",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                },
                "&:hover .arrow": {
                  transform: "translateX(6px)",color:"whitesmoke"
                },
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  objectFit: "cover",
                  margin: "0 auto 20px",
                  mt:3,
                }}
              />

              {/* Title + Arrow */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: "auto",
                }}
              >
                <Typography variant="body" sx={{ fontWeight: 400 }}>
                  {service.title}
                </Typography>
                 <ArrowForwardIcon
                  className="arrow"
                  sx={{
                    color: "#000",
                    fontSize: 22,
                    transition: "transform 0.3s ease",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default AllServices;
