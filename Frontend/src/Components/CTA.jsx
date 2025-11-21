import React from "react";
import image from "../assets/CTA.jpg";
import { Box, Button } from "@mui/material";
export default function CTA() {
  return (
    <Box sx={{ backgroundColor: "white", py: 6 }}>
      <section
        style={{
          background: "linear-gradient(90deg, #f6e7ff 0%, #e3eaff 100%)",
          borderRadius: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "3rem 2.5rem",
          margin: "0 auto",
          maxWidth: "960px",
          width: "100%",
          boxShadow: "0 8px 32px rgba(80, 80, 120, 0.14)",
        }}
      >
        {/* Left: Text Content */}
        <div style={{ maxWidth: "420px" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "1rem",
              color: "#22223b",
              lineHeight: "1.2",
              letterSpacing: "-1px",
            }}
          >
            From The Spark Of An Idea To Mesurable Results
          </h2>
          <p
            style={{ fontSize: "1rem", color: "#37385b", marginBottom: "2rem" }}
          >
            Event great transformation begins with an idea.we bring that idea to
            life with cutting edge technology,seamless execution,and mesurable
            outcomes that help your business thrive
          </p>
          <Button
            variant="contained"
            sx={{
              mt: 3,
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
            onClick={() => navigate("/Contact")}
          >
            Get Started →
          </Button>
        </div>
        {/* Right: Meeting Image/Mockup */}
        <div>
          <img
            src={image} // Replace with your image path
            alt="Meeting screenshot"
            style={{
              borderRadius: "18px",
              boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
              maxWidth: "340px",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </section>
    </Box>
  );
}
