import React, { useState } from "react";
import { Box, Typography, Paper, InputBase, Button } from "@mui/material";
import Header from "./Header";
import CTA from "./CTA";
import Footer from "./Footer";
import { BsSearch } from "react-icons/bs";
import DescriptionIcon from "@mui/icons-material/Description";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import GroupIcon from "@mui/icons-material/Group";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PublicIcon from "@mui/icons-material/Public";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SmsIcon from "@mui/icons-material/Sms";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonIcon from "@mui/icons-material/Person";
import LoopIcon from "@mui/icons-material/Loop";
import InsightsIcon from "@mui/icons-material/Insights";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HandshakeIcon from "@mui/icons-material/Handshake";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import marketproduct from "../assets/marketproduct1.png";
import eventproduct from "../assets/eventproduct.png";
import salesproduct from "../assets/salesproduct1.png";
import eproduct from "../assets/eproduct.png";
import { useNavigate } from "react-router-dom";

const products = [
  {
    image: marketproduct,
    name: "Market Metrics",
    category: "Business Analytics",
    features: [
      {
        icon: <DescriptionIcon />,
        title: "Smart Billing – Automate invoices and payments",
      },
      {
        icon: <Inventory2Icon />,
        title: "Inventory Management – Track stock and alerts",
      },
      {
        icon: <DashboardIcon />,
        title: "Analytics Dashboard – Visualize sales and performance",
      },
      {
        icon: <ShowChartIcon />,
        title: "Reports – Export detailed business reports",
      },
      {
        icon: <GroupIcon />,
        title: "User Management – Manage employee access and roles",
      },
    ],path:"/Market"
  },
  {
    image: eventproduct,
    name: "Event Ease",
    category: "Event Management",
    features: [
      {
        icon: <AssignmentIcon />,
        title: "Event Registration – Easy attendee sign-up",
      },
      {
        icon: <ConfirmationNumberIcon />,
        title: "Ticketing – Generate and manage tickets",
      },
      {
        icon: <AssessmentIcon />,
        title: "Analytics & Reports – Track event performance",
      },
      {
        icon: <NotificationsActiveIcon />,
        title: "Notifications – Alerts for attendees and organizers",
      },
      {
        icon: <PublicIcon />,
        title: "Multi-Event Management – Handle multiple events seamlessly",
      },
    ],path:"/Event"
  },
  {
    image: salesproduct,
    name: "Sales Sage",
    category: "Sales & CRM",
    features: [
      {
        icon: <GroupIcon />,
        title: "Lead Management – Capture and track leads",
      },
      {
        icon: <LoopIcon />,
        title: "Pipeline Tracking – Monitor deal progress",
      },
      {
        icon: <AssessmentIcon />,
        title: "Sales Reports – Analyze performance metrics",
      },
      {
        icon: <HandshakeIcon />,
        title: "Team Collaboration – Assign tasks and share updates",
      },
      {
        icon: <InsightsIcon />,
        title: "Customer Insights – Understand client behavior",
      },
    ],path:"/Sales"
  },
  {
    image: eproduct,
    name: "E-Grocery Mart",
    category: "E-Commerce / Grocery",
    features: [
      { icon: <BsSearch />, title: "Smart Search – Quickly find products" },
      {
        icon: <CreditCardIcon />,
        title: "Easy Checkout – Seamless purchase experience",
      },
      {
        icon: <Inventory2Icon />,
        title: "Order Management – Track and manage orders",
      },
      {
        icon: <LoopIcon />,
        title: "Inventory Sync – Auto-update stock levels",
      },
      {
        icon: <LocalShippingIcon />,
        title: "Delivery Tracking – Monitor deliveries in real-time",
      },
    ],path:"/Egrocery"
  },
  {
    image: NotificationsActiveIcon,
    name: "Vyoobam Nudge",
    category: "Notifications & Reminders",
    features: [
      {
        icon: <AccessTimeIcon />,
        title: "Task Reminders – Never miss important tasks",
      },
      {
        icon: <SmsIcon />,
        title: "Automated Alerts – Scheduled notifications",
      },
      {
        icon: <Diversity3Icon />,
        title: "Multi-Platform Support – Email, SMS, app notifications",
      },
      {
        icon: <MailOutlineIcon />,
        title: "Customizable Messages – Personalize alerts",
      },
      {
        icon: <PersonIcon />,
        title: "User Management – Control access and settings",
      },
    ],path:"/Vyoobam"
  },
];

export default function AllProduct() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredProducts = products
    .map((product) => {
      const matchedFeatures = product.features.filter((feature) =>
        feature.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const isProductMatch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      if (isProductMatch || matchedFeatures.length > 0) {
        return {
          ...product,
          features:
            matchedFeatures.length > 0 || isProductMatch
              ? matchedFeatures.length > 0
                ? matchedFeatures
                : product.features
              : [],
        };
      }
      return null;
    })
    .filter(Boolean);

  return (
    <Box sx={{ bgcolor: "#F3F5F8", minHeight: "100vh" }}>
      {/* Header */}
      <Header />

      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          minHeight: "38vh",
          bgcolor: "#01032dff",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
          pt: 10,
          mt: 12,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 500,
            textAlign: "center",
            fontSize: { xs: "2rem", md: "3rem" },
            mb: 3,
          }}
        >
          Empowering businesses with integrated software
        </Typography>
      </Box>

      {/* SVG WAVE */}
      <svg
        viewBox="0 0 1440 320"
        style={{ width: "100%", height: "100px", display: "block" }}
        preserveAspectRatio="none"
      >
        <path
          fill="#010528ff"
          d="M0,224L48,218.7C96,213,192,203,288,197.3C384,192,480,192,576,186.7C672,181,768,171,864,149.3C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      {/* SEARCH BOX BETWEEN SVG AND PRODUCT SECTION */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          top: "-80px", // floating effect between SVG and product section
          zIndex: 2,
        }}
      >
        <Paper
          elevation={6}
          sx={{
            display: "flex",
            alignItems: "center",
            width: { xs: "90%", md: "540px" },
            borderRadius: "50px",
            p: 1.5,
            bgcolor: "#dee4fcff",
            boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
          }}
        >
          <Box sx={{ color: "#888", px: 2 }}>
            <BsSearch />
          </Box>
          <InputBase
            placeholder="I'm looking for..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ flex: 1, fontSize: "1.1rem" }}
          />
        </Paper>
      </Box>

      {/* PRODUCT SECTION */}
      <Box sx={{ maxWidth: "1080px", mx: "auto", pt: 5, pb: 5 }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(({ image, name, category, features ,path}, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                background: "#f5f6fa",
                py: 4,
                px: { xs: 2, md: 5 },
                alignItems: "flex-start",
                borderRadius: 3,
                mb: 3,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              {/* LEFT SIDE */}
              <Box sx={{ flex: 1, minWidth: 230, mb: { xs: 3, md: 0 } }}>
                <Box
                  component="img"
                  src={image}
                  alt={`${name} logo`}
                  sx={{
                    width: 130,
                    height: 120,
                    objectFit: "contain",
                    mb: 1,
                  }}
                />
                <Typography variant="h5" fontWeight="400" mt={1}>
                  {name}
                </Typography>
                <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>
                  {category}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    px: 4,
                    py: 1,
                    borderRadius: "30px",
                    fontSize: "1rem",
                    fontWeight: 400,
                    background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
                    textTransform: "none",
                    "&:hover": {
                      background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
                    },
                  }}
                  onClick={() => navigate(path)}
                >
                  Explore Us →
                </Button>
              </Box>

              {/* RIGHT SIDE */}
              <Box
                sx={{
                  flex: 2,
                  ml: { xs: 0, md: 3 },
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                {features.map(({ icon, title }, j) => (
                  <Box
                    key={j}
                    sx={{
                      flex: "1 1 calc(33.33% - 12px)",
                      backgroundColor: "#fff",
                      borderRadius: 2,
                      p: 2,
                      boxShadow: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minWidth: "200px",
                    }}
                  >
                    <Box sx={{ fontSize: 40, color: "#024d87", mb: 1 }}>
                      {React.cloneElement(icon, { sx: { fontSize: 35 } })}
                    </Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ flexGrow: 1, fontWeight: 600 }}
                    >
                      {title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))
        ) : (
          <Typography variant="h6" align="center" sx={{ mt: 4 }}>
            No results found.
          </Typography>
        )}
      </Box>

      <CTA />
      <Footer />
    </Box>
  );
}
