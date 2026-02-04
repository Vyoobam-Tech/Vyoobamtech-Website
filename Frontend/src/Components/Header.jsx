// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Paper,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import LanguageIcon from "@mui/icons-material/Language";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import VyoobamNudge from "../assets/VN.png";
// import logoImg from "../assets/ulogo.png";
// import marketproduct from "../assets/marketproduct1.png";
// import eventproduct from "../assets/eventproduct.png";
// import salesproduct from "../assets/salesproduct.png";
// import eproduct from "../assets/eproduct.png";
// import WebIcon from "@mui/icons-material/Public";
// import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
// import DesignServicesIcon from "@mui/icons-material/DesignServices";
// import QueryStatsIcon from "@mui/icons-material/QueryStats";
// import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
// import { useRef } from "react";
// const Header = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [activeMega, setActiveMega] = useState(null);
//   const [langOpen, setLangOpen] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const [mobileMega, setMobileMega] = useState(null);

//   const menuItems = [
//     { text: "Home", path: "/" },
//     { text: "About", path: "/about" },
//     { text: "Products", mega: "products" },
//     { text: "Services", mega: "services" },
//     // { text: "Careers", path: "/careers" },
//     { text: "Contact", path: "/contact" },
    
//   ];

//   const megaMenus = {
//     products: [
//       {
//         category: "Market Metrics",
//         description: "Billing, inventory, and analytics platform",
//         icon: (
//           <img
//             src={marketproduct}
//             alt="Market Metrics"
//             style={{ width: 80, height: 100 }}
//           />
//         ),
//       },
//       // {
//       //   category: "Event Ease",
//       //   description: "Event management platform",
//       //   icon: (
//       //     <img
//       //       src={eventproduct}
//       //       alt="Event Ease"
//       //       style={{ width: 80, height: 100, borderRadius: 10 }}
//       //     />
//       //   ),
//       // },
//       {
//         category: "Sales Sage",
//         description: "CRM-powered sales management tool",
//         icon: (
//           <img
//             src={salesproduct}
//             alt="Sales Sage"
//             style={{ width: 80, height: 100, borderRadius: 10 }}
//           />
//         ),
//       },
//       {
//         category: "Vyoobam Nudge",
//         description: "Smart reminder & notification platform",
//         icon: (
//           <img
//             src={VyoobamNudge}
//             alt="Vyoobam Nudge"
//             style={{ width: 100, height: 100, borderRadius: 10 }}
//           />
//         ),
//       },
//       {
//         category: "E-GroceryMart",
//         description: "Seamless digital grocery store",
//         icon: (
//           <img
//             src={eproduct}
//             alt="E-GroceryMart"
//             style={{ width: 80, height: 100, borderRadius: 10 }}
//           />
//         ),
//       },
//     ],
//     services: [
//       {
//         category: "Web Development",
//         description: "Best-in-class web frameworks and custom platforms.",
//         icon: <WebIcon sx={{ color: "#3f5eecff", fontSize: 50 }} />,
//       },
//       {
//         category: "Mobile Development",
//         description: "Native and hybrid apps for every device.",
//         icon: <PhoneIphoneIcon sx={{ color: "#3f5eecff", fontSize: 50 }} />,
//       },
//       {
//         category: "UI/UX Design",
//         description: "Modern designs focused on user experience.",
//         icon: <DesignServicesIcon sx={{ color: "#3f5eecff", fontSize: 50 }} />,
//       },
//       {
//         category: "Data Analytics",
//         description: "Data-driven insight for smarter business decisions.",
//         icon: <QueryStatsIcon sx={{ color: "#3f5eecff", fontSize: 50 }} />,
//       },
//       {
//         category: "IT Consulting",
//         description: "Expert technology strategy for your enterprise.",
//         icon: <BusinessCenterIcon sx={{ color: "#3f5eecff", fontSize: 50 }} />,
//       },
//     ],
//   };

//   const closeTimeout = useRef(null);

// const handleLeave = () => {
//   closeTimeout.current = setTimeout(() => {
//     setActiveMega(null);
//     setHoveredItem(null);
//   }, 200);
// };

// const handleEnter = () => {
//   clearTimeout(closeTimeout.current);
// };


//   const languages = ["English", "தமிழ்", "हिंदी"];

//   const menuButtonStyles = {
//     mx: 1,
//     fontFamily: "'Source Sans Pro', serif",
//     position: "relative",
//     color: "#010830ff",
//    fontSize: { xs: "15px", sm: "16px", md: "16px", lg: "17px" },

//     textTransform: "none",
//     backgroundColor: "transparent",
//     "&::after": {
//       content: "''",
//       position: "absolute",
//       width: "0%",
//       height: "2px",
//       bottom: 0,
//       left: 0,
//       backgroundColor: "#020748ff",
//       transition: "width 0.3s ease",
//     },
//     "&:hover::after": { width: "100%" },
//     "&:hover": { backgroundColor: "transparent", color: "#040f4dff" },
//   };

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         color="default"
//         sx={{
//           zIndex: 1201,
//           boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//           background: "#ffffffff",
//         }}
//       >
//       <Toolbar
//   sx={{
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     minHeight: {
//       xs: 56,
//       sm: 64,
//       md: 80,
//       lg: 96,
//     },
//     px: {
//       xs: 1.5,
//       sm: 3,
//       md: 5,
//       lg: 8,
//     },
//   }}
// >

//           {/* Logo */}
//           <Typography
//             variant="h6"
//             sx={{
//               flexGrow: 1,
//               display: "flex",
//               alignItems: "center",
//               fontWeight: "400",
//               fontSize: { xs: "18px", md: "26px" },
//               color: "#000a43ff",
//               cursor: "pointer",
//             }}
//             onClick={() => navigate("/")}
//           >
//             <img
//   src={logoImg}
//   alt="Logo"
//   style={{
//     height: "auto",
//     maxHeight: "clamp(45px, 6vw, 80px)",
//     width: "auto",
//     marginRight: 8,
//     mixBlendMode: "multiply",
//   }}
// />


            
//           </Typography>

//           {/* Desktop Menu */}
//           <Box
//             sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
//           >
//             {menuItems.map((item) =>
//               item.mega ? (
//                 <Box key={item.text} sx={{ position: "relative" }}>
//                   <Button
//                     sx={menuButtonStyles}
//                     onClick={() =>
//                       setActiveMega(activeMega === item.mega ? null : item.mega)
//                     }
//                     endIcon={
//                       <KeyboardArrowDownIcon
//                         sx={{
//                           transform:
//                             activeMega === item.mega
//                               ? "rotate(180deg)"
//                               : "rotate(0deg)",
//                           transition: "0.3s",
//                         }}
//                       />
//                     }
//                   >
//                     {item.text}
//                   </Button>

//                   {/* ✅ Updated Mega Menu */}
//                   <AnimatePresence>
//                     {activeMega === item.mega && (
//                       <motion.div
//                         key={item.mega}
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                         style={{
//                           position: "fixed",
                      


//                           left: 0,
//                         width: "100%",
// maxWidth: "100vw",
// padding: "0",
// overflowX: "auto",

//                           background: "#fff",
//                           zIndex: 1300,
//                           boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
//                           padding: "0",
//                         }}
                     
//   onMouseEnter={handleEnter}
//   onMouseLeave={handleLeave}
// >

                     
//                         <Box
//                           sx={{
//                             display: "flex",
//                             maxWidth: "100%",
//                             fontFamily: "'Source Sans Pro', serif",
//                             minHeight: 400,
//                           }}
//                         >
//                           {/* LEFT FULL PANEL */}
//                           <Box
//                             sx={{
//                              width: { xs: "100%", sm: 250, md: 300, lg: 350 },


//                               bgcolor: "#ffffffff",
//                               color: "#E8ECF9",
//                               display: "flex",
//                               flexDirection: "column",
//                               justifyContent: "flex-start",
//                               alignItems: "flex-start",
//                               p: 5,
//                             }}
//                           >
//                             <Box>
//                               <Typography
//                                 variant="h5"
//                                 sx={{
//                                   fontWeight: 500,
//                                   lineHeight: 1.3,
//                                   color: "#01081eff",
//                                 }}
//                               >
//                                 {item.mega === "products"
//                                   ? "Our Products"
//                                   : "Our Services"}
//                               </Typography>
//                               <Typography
//                                 sx={{ color: "#01081eff", mt: 1, fontSize: 13 }}
//                               >
//                                 Hover on any item to see its details
//                               </Typography>
//                             </Box>
//                             <Button
//                               variant="contained"
//                               sx={{
//                                 mt: 2,
//                                 px: 5,
//                                 py: 0.5,
//                                 borderRadius: "30px",
//                                 fontSize: "1rem",
//                                 fontWeight: 400,
//                                 background:
//                                   "linear-gradient(90deg, #3f5eec, #00e4c9)", // same as Explore US button
//                                 color: "#fff",
//                                 textTransform: "none",
//                                 "&:hover": {
//                                   background:
//                                     "linear-gradient(90deg, #00e4c9, #3f5eec)",
//                                 },
//                               }}
//                               onClick={() =>
//                                 navigate(
//                                   item.mega === "products"
//                                     ? "/Allproduct"
//                                     : "/Allservices"
//                                 )
//                               }
//                             >
//                               {item.mega === "products"
//                                 ? "All Products →"
//                                 : "All Services"}
//                             </Button>
//                           </Box>

//                           {/* RIGHT SIDE */}
//                           <Box
//                             sx={{
//                               flex: 1,
//                               display: "flex",
//                               gap: { xs: 2, md: 4 },
// p: { xs: 3, md: 5 },

//                               alignItems: "stretch",
//                             }}
//                           >
//                             {/* Menu List */}
//                             <Box
//                               sx={{
//                                 flex: 1,
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 justifyContent: "center",
//                               }}
//                             >
//                               {megaMenus[item.mega].map((feat) => (
//                                 <Box
//                                   key={feat.category}
//                                   onMouseEnter={() => setHoveredItem(feat)}
//                                   sx={{
//                                     p: 2,
//                                     mb: 0.5,
//                                     borderRadius: 2,
//                                     userSelect: "none",
//                                     outline: "none",
//                                     cursor: "pointer",

//                                     display: "flex",
//                                     justifyContent: "space-between",
//                                     alignItems: "center",
//                                     bgcolor:
//                                       hoveredItem?.category === feat.category
//                                         ? "#cfdaf9ff"
//                                         : "transparent",
//                                     transition: "0.2s",
//                                     "&:hover": { bgcolor: "#d3e1f7ff" },
//                                   }}
//                                 >
//                                   <Typography
//                                     sx={{
//                                       fontWeight: 600,
//                                      fontSize: { xs: "14px", sm: "16px", md: "18px" },

//                                       color: "#0e1038ff",
//                                     }}
//                                   >
//                                     {feat.category}
//                                   </Typography>
//                                   <KeyboardArrowDownIcon
//                                     sx={{
//                                       transform: "rotate(-90deg)",
//                                       color: "#1D3E91",
//                                       opacity:
//                                         hoveredItem?.category === feat.category
//                                           ? 1
//                                           : 0.5,
//                                     }}
//                                   />
//                                 </Box>
//                               ))}
//                             </Box>

//                             {/* Hover Details */}
//                             <Box
//                               sx={{
//                                flex: { xs: 1, md: 1.2 },

//                                 bgcolor: "#ffffffff",
//                                 borderRadius: 3,
//                                 p: 5,
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 justifyContent: "center",
//                                 alignItems: "center",
//                                 textAlign: "center",
//                               }}
//                             >
//                               {hoveredItem ? (
//                                 <>
//                                   {/* <Box
//                                     sx={{
//                                       mb: 1,
//                                       width: 150,
//                                       height: 150,
                                    
//                                       bgcolor: "#111111ff",
//                                       display: "flex",
//                                       justifyContent: "center",
//                                       alignItems: "center",
//                                     }}
//                                   > */}
//                                   {hoveredItem.icon}

//                                   <Typography
//                                     variant="h6"
//                                     sx={{
//                                       color: "#00030aff",
//                                       fontWeight: 700,
//                                       mb: 1,
//                                     }}
//                                   >
//                                     {hoveredItem.category}
//                                   </Typography>
//                                   <Typography
//                                     sx={{
//                                       color: "#000000ff",
//                                       mb: 2,
//                                       fontSize: 15,
//                                     }}
//                                   >
//                                     {hoveredItem.description}
//                                   </Typography>
//                                   <Button
//                                     variant="contained"
//                                     sx={{
//                                       mt: 2,
//                                       px: 5,
//                                       py: 0.5,
//                                       borderRadius: "30px",
//                                       fontSize: "1rem",
//                                       fontWeight: 400,
//                                       background:
//                                         "linear-gradient(90deg, #3f5eec, #00e4c9)", // same as Explore US button
//                                       color: "#fff",
//                                       textTransform: "none",
//                                       "&:hover": {
//                                         background:
//                                           "linear-gradient(90deg, #00e4c9, #3f5eec)",
//                                       },
//                                     }}
//                                     onClick={() => {
//                                       if (item.mega === "products") {
//                                         switch (hoveredItem.category) {
//                                           case "Market Metrics":
//                                             navigate(
//                                              "/Market"
//                                             );
//                                             break;
//                                           case "Event Ease":
//                                             navigate("/Event");
//                                             break;
//                                           case "Sales Sage":
//                                             navigate("/Sales");
//                                             break;
//                                           case "Vyoobam Nudge":
//                                             navigate("/Vyoobam");
//                                             break;
//                                           case "E-GroceryMart":
//                                             navigate("/Egrocery");
//                                             break;
//                                           default:
//                                             break;
//                                         }
//                                       } else if (item.mega === "services") {
//                                         switch (hoveredItem.category) {
//                                           case "Web Development":
//                                             navigate(
//                                               "/service/web-development"
//                                             );
//                                             break;
//                                           case "Mobile Development":
//                                             navigate(
//                                               "/services/Mobile-development"
//                                             );
//                                             break;
//                                           case "UI/UX Design":
//                                             navigate("/services/Ui-development");
//                                             break;
//                                           case "Data Analytics":
//                                             navigate(
//                                               "/services/Data-development"
//                                             );
//                                             break;
//                                           case "IT Consulting":
//                                             navigate("/services/it-consulting");
//                                             break;
//                                           default:
//                                             break;
//                                         }
//                                       }
//                                     }}
//                                   >
//                                     Explore
//                                   </Button>
//                                 </>
//                               ) : (
//                                 <Typography sx={{ color: "#020f36ff" }}>
//                                   Hover an item to preview details
//                                 </Typography>
//                               )}
//                             </Box>
//                           </Box>
//                         </Box>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </Box>
//               ) : (
//                 <Button
//                   key={item.text}
//                   onClick={() => navigate(item.path)}
//                   sx={menuButtonStyles}
//                 >
//                   {item.text}
//                 </Button>
//               )
//             )}

//           </Box>

//           {/* Mobile Hamburger */}
//           <IconButton
//             sx={{ display: { xs: "flex", md: "none" } }}
//             onClick={() => setOpen(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <Drawer anchor="right"  open={open} onClose={() => setOpen(false)}>
//         <Box sx={{ width: { xs: 220, sm: 260 } }}>

          
         
          

// <List>
//   {menuItems.map((item) => (
//     <React.Fragment key={item.text}>
//       <ListItem disablePadding>
//         <ListItemButton
//           onClick={() => {
//             if (item.mega) {
//               // toggle submenu
//               setMobileMega(mobileMega === item.mega ? null : item.mega);
//             } else {
//               navigate(item.path);
//               setOpen(false);
//             }
//           }}
//         >
//           <ListItemText primary={item.text} />
//         </ListItemButton>
//       </ListItem>

//       {/* SUB MENU FOR MOBILE */}
//       {item.mega && mobileMega === item.mega && (
//         <Box sx={{ pl: 4, bgcolor: "#f5f7ff" }}>
//           {megaMenus[item.mega].map((sub) => (
//             <ListItemButton
//               key={sub.category}
//               sx={{ py: 0.5 }}
//               onClick={() => {
//                 // navigate based on item category
//                 if (item.mega === "products") {
//                   switch (sub.category) {
//                     case "Market Metrics":
//                       navigate("/Market");
//                       break;
//                     case "Sales Sage":
//                       navigate("/Sales");
//                       break;
//                     case "Vyoobam Nudge":
//                       navigate("/Vyoobam");
//                       break;
//                     case "E-GroceryMart":
//                       navigate("/Egrocery");
//                       break;
//                     default:
//                       break;
//                   }
//                 } else {
//                   switch (sub.category) {
//                     case "Web Development":
//                       navigate("/service/web-development");
//                       break;
//                     case "Mobile Development":
//                       navigate("/services/Mobile-development");
//                       break;
//                     case "UI/UX Design":
//                       navigate("/services/Ui-development");
//                       break;
//                     case "Data Analytics":
//                       navigate("/services/Data-development");
//                       break;
//                     case "IT Consulting":
//                       navigate("/services/it-consulting");
//                       break;
//                     default:
//                       break;
//                   }
//                 }

//                 setOpen(false);
//               }}
//             >
//               <ListItemText primary={sub.category} />
//             </ListItemButton>
//           ))}
//         </Box>
//       )}
//     </React.Fragment>
//   ))}
// </List>

//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Header;


import React, { useState, useRef } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WebIcon from "@mui/icons-material/Public";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Assets
import VyoobamNudge from "../assets/VN.png";
import logoImg from "../assets/ulogo.png";
import marketproduct from "../assets/marketproduct1.png";
import salesproduct from "../assets/salesproduct.png";
import eproduct from "../assets/eproduct.png";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMega, setMobileMega] = useState(null);
  const closeTimeout = useRef(null);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Products", mega: "products" },
    { text: "Services", mega: "services" },
    { text: "Contact", path: "/contact" },
  ];

  const megaMenus = {
    products: [
      {
        category: "Market Metrics",
        description: "Billing, inventory, and analytics platform",
        icon: <img src={marketproduct} alt="Market Metrics" style={{ width: 80, height: 100 }} />,
      },
      {
        category: "Sales Sage",
        description: "CRM-powered sales management tool",
        icon: <img src={salesproduct} alt="Sales Sage" style={{ width: 80, height: 100, borderRadius: 10 }} />,
      },
      {
        category: "Vyoobam Nudge",
        description: "Smart reminder & notification platform",
        icon: <img src={VyoobamNudge} alt="Vyoobam Nudge" style={{ width: 100, height: 100, borderRadius: 10 }} />,
      },
      {
        category: "E-GroceryMart",
        description: "Seamless digital grocery store",
        icon: <img src={eproduct} alt="E-GroceryMart" style={{ width: 80, height: 100, borderRadius: 10 }} />,
      },
    ],
    services: [
      {
        category: "Web Development",
        description: "Best-in-class web frameworks and custom platforms.",
        icon: <WebIcon sx={{ color: "#3f5eecff", fontSize: 50 }} />,
      },
      {
        category: "Mobile Development",
        description: "Native and hybrid apps for every device.",
        icon: <PhoneIphoneIcon sx={{ color: "#3f5eecff", fontSize: 50 }} />,
      },
      {
        category: "UI/UX Design",
        description: "Modern designs focused on user experience.",
        icon: <DesignServicesIcon sx={{ color: "#3f5eecff", fontSize: 50 }} />,
      },
      {
        category: "Data Analytics",
        description: "Data-driven insight for smarter business decisions.",
        icon: <QueryStatsIcon sx={{ color: "#3f5eecff", fontSize: 50 }} />,
      },
      {
        category: "IT Consulting",
        description: "Expert technology strategy for your enterprise.",
        icon: <BusinessCenterIcon sx={{ color: "#3f5eecff", fontSize: 50 }} />,
      },
    ],
  };

  const handleLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveMega(null);
      setHoveredItem(null);
    }, 200);
  };

  const handleEnter = () => {
    clearTimeout(closeTimeout.current);
  };

  const menuButtonStyles = {
    mx: 1,
    fontFamily: "'Source Sans Pro', serif",
    position: "relative",
    color: "#010830ff",
    fontSize: { xs: "15px", sm: "16px", md: "16px", lg: "17px" },
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
      {/* ================= APPBAR ================= */}
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
            minHeight: { xs: 56, sm: 64, md: 80, lg: 96 },
            px: { xs: 1.5, sm: 3, md: 5, lg: 8 },
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
              style={{
                height: "auto",
                maxHeight: "clamp(45px, 6vw, 80px)",
                width: "auto",
                marginRight: 8,
                mixBlendMode: "multiply",
              }}
            />
          </Typography>

         {/* Desktop Menu */}
<Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
  {menuItems.map((item) =>
    item.mega ? (
      <Box key={item.text} sx={{ position: "relative" }}>
        {/* MAIN MENU BUTTON */}
        <Button
          sx={menuButtonStyles}
          onClick={() =>
            setActiveMega(activeMega === item.mega ? null : item.mega)
          }
          onMouseEnter={() => setActiveMega(item.mega)} // ✅ hover open
          endIcon={
            <KeyboardArrowDownIcon
              sx={{
                transform:
                  activeMega === item.mega ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.3s",
              }}
            />
          }
        >
          {item.text}
        </Button>

        {/* MEGA MENU */}
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
                left: 0,
                width: "100%",
                maxWidth: "100vw",
                background: "#fff",
                zIndex: 1300,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={() => setActiveMega(item.mega)} // ✅ stay open
              onMouseLeave={() => setActiveMega(null)}      // ✅ close on leave
            >
              <Box
                sx={{
                  display: "flex",
                  fontFamily: "'Source Sans Pro', serif",
                  minHeight: 400,
                }}
              >
                {/* LEFT PANEL */}
                <Box
                  sx={{
                    width: { xs: "100%", sm: 250, md: 300, lg: 350 },
                    bgcolor: "#fff",
                    p: 5,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 500, lineHeight: 1.3, color: "#01081e" }}
                  >
                    {item.mega === "products"
                      ? "Our Products"
                      : "Our Services"}
                  </Typography>

                  <Typography sx={{ color: "#01081e", mt: 1, fontSize: 13 }}>
                    Hover on any item to see its details
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
                        "linear-gradient(90deg, #3f5eec, #00e4c9)",
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
                      : "All Services →"}
                  </Button>
                </Box>

                {/* RIGHT PANEL */}
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    gap: { xs: 2, md: 4 },
                    p: { xs: 3, md: 5 },
                  }}
                >
                  {/* MENU LIST */}
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
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          bgcolor:
                            hoveredItem?.category === feat.category
                              ? "#cfdaf9"
                              : "transparent",
                          transition: "0.2s",
                          "&:hover": { bgcolor: "#d3e1f7" },
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: {
                              xs: "14px",
                              sm: "16px",
                              md: "18px",
                            },
                            color: "#0e1038",
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

                  {/* HOVER DETAILS */}
                  <Box
                    sx={{
                      flex: { xs: 1, md: 1.2 },
                      bgcolor: "#fff",
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
                        {hoveredItem.icon}
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#00030a",
                            fontWeight: 700,
                            mb: 1,
                          }}
                        >
                          {hoveredItem.category}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#000",
                            mb: 2,
                            fontSize: 15,
                          }}
                        >
                          {hoveredItem.description}
                        </Typography>

                        <Button
                          variant="contained"
                          sx={{
                            px: 5,
                            py: 0.5,
                            borderRadius: "30px",
                            background:
                              "linear-gradient(90deg, #3f5eec, #00e4c9)",
                            textTransform: "none",
                          }}
                          onClick={() => {
                            const cat = hoveredItem.category;

                            if (item.mega === "products") {
                              const routes = {
                                "Market Metrics": "/Market",
                                "Sales Sage": "/Sales",
                                "Vyoobam Nudge": "/Vyoobam",
                                "E-GroceryMart": "/Egrocery",
                              };
                              navigate(routes[cat] || "/Allproduct");
                            } else {
                              const routes = {
                                "Web Development":
                                  "/service/web-development",
                                "Mobile Development":
                                  "/services/Mobile-development",
                                "UI/UX Design":
                                  "/services/Ui-development",
                                "Data Analytics":
                                  "/services/Data-development",
                                "IT Consulting":
                                  "/services/it-consulting",
                              };
                              navigate(routes[cat] || "/Allservices");
                            }
                          }}
                        >
                          Explore
                        </Button>
                      </>
                    ) : (
                      <Typography sx={{ color: "#020f36" }}>
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
</Box>


          {/* Mobile Hamburger */}
          <IconButton sx={{ display: { xs: "flex", md: "none" } }} onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: { xs: 220, sm: 260 } }}>
          <List>
            {menuItems.map((item) => (
              <React.Fragment key={item.text}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      if (item.mega) {
                        setMobileMega(mobileMega === item.mega ? null : item.mega);
                      } else {
                        navigate(item.path);
                        setOpen(false);
                      }
                    }}
                  >
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>

                {/* Mobile Submenu */}
                {item.mega && mobileMega === item.mega && (
                  <Box sx={{ pl: 4, bgcolor: "#f5f7ff" }}>
                    {megaMenus[item.mega].map((sub) => (
                      <ListItemButton
                        key={sub.category}
                        sx={{ py: 0.5 }}
                        onClick={() => {
                          const routes =
                            item.mega === "products"
                              ? { "Market Metrics": "/Market", "Sales Sage": "/Sales", "Vyoobam Nudge": "/Vyoobam", "E-GroceryMart": "/Egrocery" }
                              : { "Web Development": "/service/web-development", "Mobile Development": "/services/Mobile-development", "UI/UX Design": "/services/Ui-development", "Data Analytics": "/services/Data-development", "IT Consulting": "/services/it-consulting" };
                          navigate(routes[sub.category] || (item.mega === "products" ? "/Allproduct" : "/Allservices"));
                          setOpen(false);
                        }}
                      >
                        <ListItemText primary={sub.category} />
                      </ListItemButton>
                    ))}

                    {/* All Products / Services Button */}
                    <Button
                      variant="contained"
                      sx={{
                        mt: 1,
                        mb: 2,
                        px: 3,
                        py: 0.5,
                        borderRadius: "30px",
                        fontSize: "0.9rem",
                        fontWeight: 400,
                        background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
                        color: "#fff",
                        textTransform: "none",
                        width: "90%",
                        display: "block",
                        mx: "auto",
                        "&:hover": { background: "linear-gradient(90deg, #00e4c9, #3f5eec)" },
                      }}
                      onClick={() => {
                        navigate(item.mega === "products" ? "/Allproduct" : "/Allservices");
                        setOpen(false);
                      }}
                    >
                      {item.mega === "products" ? "All Products →" : "All Services →"}
                    </Button>
                  </Box>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
