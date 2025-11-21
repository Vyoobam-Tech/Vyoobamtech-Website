import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import overviewImage from "../assets/Market.jpg";
import logo from "../assets/marketproduct1.png"; // replace with your image
import Header from "./Header";
import Footer from "./Footer";
import CTA from "./CTA";

const MainProduct = () => {
  return (
    <>
      <Header />
      {/* ================= HERO SECTION ================= */}
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 6 },
          backgroundColor: "#fff",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 🔹 Logo on top */}
          <Box sx={{ mb: 3, mt: 5 }}>
            <img
              src={logo} // replace with your logo path
              alt="Market Metrics Logo"
              style={{ width: "120px", height: "auto", margin: "0 auto" }}
            />
          </Box>

          <Typography
            variant="h4"
            fontSize="58px"
            fontWeight="600"
            mb="3px"
            color="black"
            gutterBottom
          >
            Market Metrics
          </Typography>

          <Typography
            variant="h5"
            fontWeight="600"
            sx={{
              background:
                "linear-gradient(90deg,#FF0080,#FF8C00,#0070F3,#7928CA)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            gutterBottom
          >
            “Smarter Billing. Smarter Decisions.”
          </Typography>

          <Typography
            variant="h6"
            fontWeight={500}
            color="text.secondary"
            sx={{ maxWidth: "700px", mx: "auto" }}
          >
            The all-in-one billing, inventory, and analytics platform designed
            for growing businesses.
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 6,
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: 400,
              background: "linear-gradient(90deg, #3f5eec, #00e4c9)", // your logo theme color
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
              },
            }}
            onClick={() => navigate("/services")}
          >
            Explore US →
          </Button>
        </motion.div>
      </Box>

      {/* ================= OVERVIEW SECTION ================= */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 8 },
          py: { xs: 8, md: 12 },
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#f9fafc",
        }}
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1 }}
        >
          <Typography
            variant="h2"
            fontWeight="400"
            fontSize="58px"
            color="black"
            gutterBottom
            sx={{ pb: 2 }}
          >
            Overview
          </Typography>
          <Typography variant="h6" fontWeight="400" color="text.secondary">
            Managing inventory, billing, and reports separately is
            time-consuming and error-prone. Market Metrics brings it all
            together in one seamless platform. Designed for retailers,
            wholesalers, and SMEs, it simplifies daily operations while
            providing powerful insights for better decision-making.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 6,
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: 400,
              background: "linear-gradient(90deg, #3f5eec, #00e4c9)", // your logo theme color
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
              },
            }}
            onClick={() => navigate("/services")}
          >
            Explore US →
          </Button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Box
            sx={{
              width: { xs: 280, md: 400 },
              height: { xs: 280, md: 400 },
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={overviewImage}
              alt="Overview"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </motion.div>
      </Box>
      <Box sx={{ height: "40px", backgroundColor: "#f9fafc" }} />
      {/* ===== WAVE DIVIDER ABOVE KEY FEATURES ===== */}
      {/* ===== WAVE DIVIDER ABOVE KEY FEATURES ===== */}

      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
          position: "relative",
          transform: "rotate(180deg)",
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          style={{ width: "100%", height: "100px" }}
          preserveAspectRatio="none"
        >
          <path
            fill="#00182aff" // Same as your Key Feature background
            d="M0,224L48,218.7C96,213,192,203,288,197.3C384,192,480,192,576,186.7C672,181,768,171,864,149.3C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </Box>

      {/* ================= KEY FEATURES SECTION ================= */}
      <Box
        sx={{
          px: { xs: 2, md: 8 },
          py: { xs: 8, md: 12 },
          backgroundColor: "#00182aff",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            fontWeight="400"
            fontSize="48px"
            color="white"
            textAlign="center"
            gutterBottom
          >
            Key Features
          </Typography>

          <Typography
            variant="h6"
            fontWeight="400"
            fontSize={20}
            color="white"
            textAlign="center"
            maxWidth="700px"
            mx="auto"
            mb={6}
          >
            Everything your growing business needs to streamline operations,
            save time, and make smarter decisions.
          </Typography>

          {/* Features Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 4,
            }}
          >
            {[
              {
                title: "Smart Billing & Invoicing",
                description:
                  "GST-ready templates make billing faster and compliant with local tax laws.",
              },
              {
                title: "Inventory Control",
                description:
                  "Track stock in real-time, get low-stock alerts, and manage across locations.",
              },
              {
                title: "Data Analytics Dashboard",
                description:
                  "Visualize sales, expenses, and trends to make data-backed decisions.",
              },
              {
                title: "Barcode & QR Integration",
                description:
                  "Speed up checkouts and inventory updates with barcode/QR scanning.",
              },
              {
                title: "Custom Reports",
                description:
                  "Generate tailored reports that match your business requirements.",
              },
              {
                title: "Multi-location Support",
                description:
                  "Manage inventory and operations across branches seamlessly.",
              },
            ].map((feature, index) => (
              <Box
                key={index}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: "#051e42ff",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                  borderLeft: "1px solid #f9f9f9ff",
                }}
              >
                <Typography
                  variant="h6"
                  color="white"
                  fontWeight="400"
                  fontSize="23px"
                  gutterBottom
                >
                  {feature.title}
                </Typography>
                <Typography variant="body" fontWeight="400" color="white">
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Box>

      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
          position: "relative",
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          style={{ width: "100%", height: "100px" }}
          preserveAspectRatio="none"
        >
          <path
            fill="#00182aff" // Same as your Key Feature background
            d="M0,224L48,218.7C96,213,192,203,288,197.3C384,192,480,192,576,186.7C672,181,768,171,864,149.3C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </Box>
      {/* ========== BUSINESS BENEFITS SECTION ========== */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          px: { xs: 2, md: 8 },
          py: { xs: 8, md: 12 },
          background: "linear-gradient(90deg, #ffffff 60%, #f3f4fdff 100%)",
          gap: { xs: 6, md: 10 },
        }}
      >
        {/* Left side: heading & intro */}
        <Box sx={{ flex: 1, maxWidth: 400 }}>
          <Typography
            variant="h6"
            fontWeight={600}
            fontSize={25}
            sx={{ color: "#024d87", mb: 1 }}
          >
            WHY MARKET METRICS?
          </Typography>
          <Typography
            variant="h6"
            fontWeight="600"
            color="black"
            sx={{ mb: 2 }}
          >
            Reliable, Efficient, Scalable <br />
            Built For Business Automation.
          </Typography>
          <Typography
            variant="body"
            color="text.secondary"
            sx={{ lineHeight: 1.7 }}
          >
            With Market Metrics, Businesses Can Streamline Billing, Track
            Inventory Live, And Scale Operations Effortlessly. Our tools empower
            your team to make faster, smarter decisions.
          </Typography>
        </Box>

        {/* Right side: 2x2 grid of benefits with SVG icons */}
        <Box
          sx={{
            flex: 2,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 4,
          }}
        >
          {/* Benefit Card 1 */}
          <Box
            sx={{
              background: "#fff",
              p: 3,
              borderRadius: 2,
              boxShadow: 1,
              borderLeft: "4px solid #024d87",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: 4, // ⬆️ stronger shadow on hover
                transform: "translateY(-4px)", // ⬆️ subtle lift
                borderLeftColor: "#024d87", // 🔥 optional brighter orange on hover
              },
            }}
          >
            {/* SVG icon */}
            <Box sx={{ mb: 2 }}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#024d87"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* For example, a checkmark inside circle */}
                <circle cx="12" cy="12" r="10" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </Box>
            <Typography
              variant="h6"
              fontWeight="600"
              fontSize="20px"
              color="black"
              sx={{ mb: 1 }}
            >
              Minimize Errors
            </Typography>
            <Typography
              variant="body"
              fontWeight="400"
              sx={{ color: "#024d87" }}
            >
              Save Time & Reduce Mistakes
            </Typography>
            <Typography
              variant="body2"
              fontFamily="Source Sans Pro"
              sx={{ mt: 1.2, color: "text.secondary" }}
            >
              Automate Repetitive Tasks And Reduce Human Errors With A Marter
              Workflow Engine.
            </Typography>
          </Box>

          {/* Benefit Card 2 */}
          <Box
            sx={{
              background: "#fff",
              p: 3,
              borderRadius: 2,
              boxShadow: 1,
              borderLeft: "4px solid #024d87",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: 4, // ⬆️ stronger shadow on hover
                transform: "translateY(-4px)", // ⬆️ subtle lift
                borderLeftColor: "#024d87", // 🔥 optional brighter orange on hover
              },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#024d87"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Clock icon */}
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </Box>
            <Typography
              variant="h6"
              fontWeight="600"
              fontSize="20px"
              color="black"
              sx={{ mb: 1 }}
            >
              Real‑Time Tracking
            </Typography>
            <Typography
              variant="body"
              fontWeight="400"
              sx={{ color: "#024d87" }}
            >
              Stay Updated, Always
            </Typography>
            <Typography
              variant="body2"
              fontFamily="Source Sans Pro"
              sx={{ mt: 1.2, color: "text.secondary" }}
            >
              Monitor Your Sales And Inventory Status Across Multiple Locations
              Live.
            </Typography>
          </Box>

          {/* Benefit Card 3 */}
          <Box
            sx={{
              background: "#fff",
              p: 3,
              borderRadius: 2,
              boxShadow: 1,
              borderLeft: "4px solid #024d87",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: 4, // ⬆️ stronger shadow on hover
                transform: "translateY(-4px)", // ⬆️ subtle lift
                borderLeftColor: "#024d87", // 🔥 optional brighter orange on hover
              },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#024d87"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Gear icon for automation */}
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06 .06a2 2 0 1 1 -2.83 2.83l-.06 -.06a1.65 1.65 0 0 0 -1.82 -.33 1.65 1.65 0 0 0 -1 1.51V21a2 2 0 1 1 -4 0v-.09a1.65 1.65 0 0 0 -1 -1.51 1.65 1.65 0 0 0 -1.82 .33l-.06 .06a2 2 0 1 1 -2.83 -2.83l.06 -.06A1.65 1.65 0 0 0 5 15.4a1.65 1.65 0 0 0 -1.51 -1H3a2 2 0 1 1 0 -4h.09a1.65 1.65 0 0 0 1.51 -1 1.65 1.65 0 0 0 -.33 -1.82l-.06 -.06a2 2 0 1 1 2.83 -2.83l.06 .06A1.65 1.65 0 0 0 8.6 5a1.65 1.65 0 0 0 1 -1.51V3a2 2 0 1 1 4 0v.09c.36 .06 .69 .24 .93 .5l.06 .06a1.65 1.65 0 0 0 1.82 .33 1.65 1.65 0 0 0 1 1.51V5a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51z" />
              </svg>
            </Box>
            <Typography
              variant="h6"
              fontWeight="600"
              fontSize="20px"
              color="black"
              sx={{ mb: 1 }}
            >
              Efficient Automation
            </Typography>
            <Typography
              variant="body"
              fontWeight="400"
              sx={{ color: "#024d87" }}
            >
              Less Manual Work
            </Typography>
            <Typography
              variant="body2"
              fontFamily="Source Sans Pro"
              sx={{ mt: 1.2, color: "text.secondary" }}
            >
              Automate Billing, Reports, Alerts And More To Free Up Your Team’s
              Time.
            </Typography>
          </Box>

          {/* Benefit Card 4 */}
          <Box
            sx={{
              background: "#fff",
              p: 3,
              borderRadius: 2,
              boxShadow: 1,
              borderLeft: "4px solid #024d87",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: 4, // ⬆️ stronger shadow on hover
                transform: "translateY(-4px)", // ⬆️ subtle lift
                borderLeftColor: "#024d87", // 🔥 optional brighter orange on hover
              },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#024d87"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Up‑arrow or trending icon for scale */}
                <path d="M12 19V5" />
                <path d="M5 12l7 -7l7 7" />
              </svg>
            </Box>
            <Typography
              variant="h6"
              fontWeight="600"
              fontSize="20px"
              color="black"
              sx={{ mb: 1 }}
            >
              Scalable Growth
            </Typography>
            <Typography
              variant="body"
              fontWeight="400"
              sx={{ color: "#024d87" }}
            >
              Grow Without Limits
            </Typography>
            <Typography
              variant="body2"
              fontFamily="Source Sans Pro"
              sx={{ mt: 1.2, color: "text.secondary" }}
            >
              Whether You're Expanding Locations Or Services, Our Platform
              Scales With Your Business.
            </Typography>
          </Box>
        </Box>
      </Box>
      <CTA />
      <Footer />
    </>
  );
};

export default MainProduct;
