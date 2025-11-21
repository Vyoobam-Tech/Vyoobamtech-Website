import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import logoImg from "../assets/logo.jpg";
import marketproduct from "../assets/marketproduct1.png";
import eventproduct from "../assets/eventproduct.png";
import salesproduct from "../assets/salesproduct.png";
import eproduct from "../assets/eproduct.png";
import WebIcon from "@mui/icons-material/Public";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Products", mega: "products" },
    { text: "Services", mega: "services" },
    { text: "Careers", path: "/careers" },
    { text: "Contact", path: "/contact" },
  ];

  const megaMenus = {
    products: [
      {
        category: "Market Metrics",
        description: "Billing, inventory, and analytics platform",
        icon: (
          <img
            src={marketproduct}
            alt="Market Metrics"
            style={{ width: 80, height: 100 }}
          />
        ),
      },
      {
        category: "Event Ease",
        description: "Event management platform",
        icon: (
          <img
            src={eventproduct}
            alt="Event Ease"
            style={{ width: 80, height: 100, borderRadius: 10 }}
          />
        ),
      },
      {
        category: "Sales Sage",
        description: "CRM-powered sales management tool",
        icon: (
          <img
            src={salesproduct}
            alt="Sales Sage"
            style={{ width: 80, height: 100, borderRadius: 10 }}
          />
        ),
      },
      {
        category: "Vyoobam Nudge",
        description: "Smart reminder & notification platform",
        icon: (
          <NotificationsActiveIcon sx={{ color: "#294225", fontSize: 60 }} />
        ),
      },
      {
        category: "E-GroceryMart",
        description: "Seamless digital grocery store",
        icon: (
          <img
            src={eproduct}
            alt="E-GroceryMart"
            style={{ width: 80, height: 80, borderRadius: 100 }}
          />
        ),
      },
    ],
    services: [
      {
        category: "Web Development",
        description: "Best-in-class web frameworks and custom platforms.",
        icon: <WebIcon sx={{ color: "#001d65ff", fontSize: 50 }} />,
      },
      {
        category: "Mobile Development",
        description: "Native and hybrid apps for every device.",
        icon: <PhoneIphoneIcon sx={{ color: "#001d65ff", fontSize: 50 }} />,
      },
      {
        category: "UI/UX Design",
        description: "Modern designs focused on user experience.",
        icon: <DesignServicesIcon sx={{ color: "#001d65ff", fontSize: 50 }} />,
      },
      {
        category: "Data Analytics",
        description: "Data-driven insight for smarter business decisions.",
        icon: <QueryStatsIcon sx={{ color: "#001d65ff", fontSize: 50 }} />,
      },
      {
        category: "IT Consulting",
        description: "Expert technology strategy for your enterprise.",
        icon: <BusinessCenterIcon sx={{ color: "#001d65ff", fontSize: 50 }} />,
      },
    ],
  };

  const languages = ["English", "தமிழ்", "हिंदी"];

  const menuButtonStyles = {
    mx: 1,
    fontFamily: "'Source Sans Pro', serif",
    position: "relative",
    color: "#010830ff",
    fontSize: { xs: "18px", md: "16px" },
    textTransform: "none",
    backgroundColor: "transparent",
    "&::after": {
      content: "''",
      position: "absolute",
      width: "0%",
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: "#020748ff",
      transition: "width 0.3s ease",
    },
    "&:hover::after": { width: "100%" },
    "&:hover": { backgroundColor: "transparent", color: "#040f4dff" },
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        sx={{
          zIndex: 1201,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          background: "#ffffffff",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: { xs: 70, md: 100 },
            px: { xs: 2, md: 4 },
          }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              fontWeight: "400",
              fontSize: { xs: "18px", md: "26px" },
              color: "#000a43ff",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <img
              src={logoImg}
              alt="Logo"
              style={{ height: 45, marginRight: 8, mixBlendMode: "multiply" }}
            />
            Vyoobam Tech
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {menuItems.map((item) =>
              item.mega ? (
                <Box key={item.text} sx={{ position: "relative" }}>
                  <Button
                    sx={menuButtonStyles}
                    onClick={() =>
                      setActiveMega(activeMega === item.mega ? null : item.mega)
                    }
                    endIcon={
                      <KeyboardArrowDownIcon
                        sx={{
                          transform:
                            activeMega === item.mega
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          transition: "0.3s",
                        }}
                      />
                    }
                  >
                    {item.text}
                  </Button>

                  {/* ✅ Updated Mega Menu */}
                  <AnimatePresence>
                    {activeMega === item.mega && (
                      <motion.div
                        key={item.mega}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                          position: "fixed",
                          top: "100px",
                          left: 0,
                          width: "100vw",
                          background: "#fff",
                          zIndex: 1300,
                          boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
                          padding: "0",
                        }}
                        onMouseLeave={() => {
                          setActiveMega(null);
                          setHoveredItem(null);
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            maxWidth: "100%",
                            fontFamily: "'Source Sans Pro', serif",
                            minHeight: 400,
                          }}
                        >
                          {/* LEFT FULL PANEL */}
                          <Box
                            sx={{
                              width: 350,
                              bgcolor: "#ffffffff",
                              color: "#E8ECF9",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              alignItems: "flex-start",
                              p: 5,
                            }}
                          >
                            <Box>
                              <Typography
                                variant="h5"
                                sx={{
                                  fontWeight: 500,
                                  lineHeight: 1.3,
                                  color: "#01081eff",
                                }}
                              >
                                {item.mega === "products"
                                  ? "Our Products"
                                  : "Our Services"}
                              </Typography>
                              <Typography
                                sx={{ color: "#01081eff", mt: 1, fontSize: 13 }}
                              >
                                Hover on any item to see its details
                              </Typography>
                            </Box>
                            <Button
                              variant="contained"
                              sx={{
                                mt: 2,
                                px: 5,
                                py: 0.5,
                                borderRadius: "30px",
                                fontSize: "1rem",
                                fontWeight: 400,
                                background:
                                  "linear-gradient(90deg, #3f5eec, #00e4c9)", // same as Explore US button
                                color: "#fff",
                                textTransform: "none",
                                "&:hover": {
                                  background:
                                    "linear-gradient(90deg, #00e4c9, #3f5eec)",
                                },
                              }}
                              onClick={() =>
                                navigate(
                                  item.mega === "products"
                                    ? "/Allproduct"
                                    : "/Allservices"
                                )
                              }
                            >
                              {item.mega === "products"
                                ? "All Products →"
                                : "All Services"}
                            </Button>
                          </Box>

                          {/* RIGHT SIDE */}
                          <Box
                            sx={{
                              flex: 1,
                              display: "flex",
                              gap: 4,
                              p: 5,
                              alignItems: "stretch",
                            }}
                          >
                            {/* Menu List */}
                            <Box
                              sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                              }}
                            >
                              {megaMenus[item.mega].map((feat) => (
                                <Box
                                  key={feat.category}
                                  onMouseEnter={() => setHoveredItem(feat)}
                                  sx={{
                                    p: 2,
                                    mb: 0.5,
                                    borderRadius: 2,
                                    userSelect: "none",
                                    outline: "none",
                                    cursor: "pointer",

                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    bgcolor:
                                      hoveredItem?.category === feat.category
                                        ? "#cfdaf9ff"
                                        : "transparent",
                                    transition: "0.2s",
                                    "&:hover": { bgcolor: "#d3e1f7ff" },
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontWeight: 600,
                                      fontSize: "18px",
                                      color: "#0e1038ff",
                                    }}
                                  >
                                    {feat.category}
                                  </Typography>
                                  <KeyboardArrowDownIcon
                                    sx={{
                                      transform: "rotate(-90deg)",
                                      color: "#1D3E91",
                                      opacity:
                                        hoveredItem?.category === feat.category
                                          ? 1
                                          : 0.5,
                                    }}
                                  />
                                </Box>
                              ))}
                            </Box>

                            {/* Hover Details */}
                            <Box
                              sx={{
                                flex: 1.2,
                                bgcolor: "#ffffffff",
                                borderRadius: 3,
                                p: 5,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                              }}
                            >
                              {hoveredItem ? (
                                <>
                                  {/* <Box
                                    sx={{
                                      mb: 1,
                                      width: 150,
                                      height: 150,
                                    
                                      bgcolor: "#111111ff",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  > */}
                                  {hoveredItem.icon}

                                  <Typography
                                    variant="h6"
                                    sx={{
                                      color: "#00030aff",
                                      fontWeight: 700,
                                      mb: 1,
                                    }}
                                  >
                                    {hoveredItem.category}
                                  </Typography>
                                  <Typography
                                    sx={{
                                      color: "#000000ff",
                                      mb: 2,
                                      fontSize: 15,
                                    }}
                                  >
                                    {hoveredItem.description}
                                  </Typography>
                                  <Button
                                    variant="contained"
                                    sx={{
                                      mt: 2,
                                      px: 5,
                                      py: 0.5,
                                      borderRadius: "30px",
                                      fontSize: "1rem",
                                      fontWeight: 400,
                                      background:
                                        "linear-gradient(90deg, #3f5eec, #00e4c9)", // same as Explore US button
                                      color: "#fff",
                                      textTransform: "none",
                                      "&:hover": {
                                        background:
                                          "linear-gradient(90deg, #00e4c9, #3f5eec)",
                                      },
                                    }}
                                    onClick={() => {
                                      if (item.mega === "products") {
                                        switch (hoveredItem.category) {
                                          case "Market Metrics":
                                            navigate(
                                             "/Market"
                                            );
                                            break;
                                          case "Event Ease":
                                            navigate("/Event");
                                            break;
                                          case "Sales Sage":
                                            navigate("/Sales");
                                            break;
                                          case "Vyoobam Nudge":
                                            navigate("/Vyoobam");
                                            break;
                                          case "E-GroceryMart":
                                            navigate("/Egrocery");
                                            break;
                                          default:
                                            break;
                                        }
                                      } else if (item.mega === "services") {
                                        switch (hoveredItem.category) {
                                          case "Web Development":
                                            navigate(
                                              "/service/web-development"
                                            );
                                            break;
                                          case "Mobile Development":
                                            navigate(
                                              "/services/Mobile-development"
                                            );
                                            break;
                                          case "UI/UX Design":
                                            navigate("/services/Ui-development");
                                            break;
                                          case "Data Analytics":
                                            navigate(
                                              "/services/Data-development"
                                            );
                                            break;
                                          case "IT Consulting":
                                            navigate("/services/it-consulting");
                                            break;
                                          default:
                                            break;
                                        }
                                      }
                                    }}
                                  >
                                    Explore
                                  </Button>
                                </>
                              ) : (
                                <Typography sx={{ color: "#020f36ff" }}>
                                  Hover an item to preview details
                                </Typography>
                              )}
                            </Box>
                          </Box>
                        </Box>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
              ) : (
                <Button
                  key={item.text}
                  onClick={() => navigate(item.path)}
                  sx={menuButtonStyles}
                >
                  {item.text}
                </Button>
              )
            )}

            {/* Language Selector */}
            {/* <Box
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
              sx={{ position: "relative" }}
            >
              <IconButton color="inherit">
                <LanguageIcon />
              </IconButton>
              {langOpen && (
                <Paper
                  elevation={3}
                  sx={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    minWidth: "150px",
                    p: 1,
                  }}
                >
                  {languages.map((lang) => (
                    <Typography
                      key={lang}
                      sx={{
                        cursor: "pointer",
                        p: 1,
                        "&:hover": {
                          background: "#050d4aff",
                          color: "white",
                        },
                      }}
                      onClick={() => setLangOpen(false)}
                    >
                      {lang}
                    </Typography>
                  ))}
                </Paper>
              )}
            </Box> */}
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  onClick={() => {
                    if (item.mega) {
                      navigate(
                        item.mega === "products"
                          ? "/Allproduct"
                          : "/allservices"
                      );
                    } else {
                      navigate(item.path);
                    }
                    setOpen(false);
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
