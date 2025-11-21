import React from "react";
import { Box, Typography, Button } from "@mui/material";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DevicesIcon from "@mui/icons-material/Devices";
import MovieEditIcon from "@mui/icons-material/MovieEdit"; // Substitute with VideoLibrary if not available
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CreateIcon from "@mui/icons-material/Create";

const cardData = [
  {
    label: "Innovation-Driven Culture",
    desc: "Work on cutting-edge technologies like AI, Data Analytics, Mobile Apps, and Cloud",
    icon: <DesignServicesIcon sx={{ fontSize: 30 }} />,
    highlight: true,
  },
  {
    label: "Impactful Projects",
    desc: "Build solutions that serve startups, SMEs, and enterprises globally",
    icon: <DevicesIcon sx={{ fontSize: 30 }} />,
  },
  {
    label: "Continuous Learning",
    desc: "Access training, workshops, and mentorship through our learning ecosystem.",
    icon: <VideoLibraryIcon sx={{ fontSize: 30 }} />, // Use VideoLibraryIcon for video
  },
  {
    label: "Career Growth",
    desc: "Clear pathways for professional development and leadership opportunities",
    icon: <CreateIcon sx={{ fontSize: 30 }} />,
  },
];

const CareerSection = () => (
  <Box
    sx={{
      width: "100%",
      py: 8,
      display: "flex",
      justifyContent: "center",
      background: "#fafbfc",
    }}
  >
    <Box
      sx={{
        width: "100%",
        maxWidth: 1080,
        minHeight: 400,
        position: "relative",
        p: 4,
        display: { xs: "block", md: "flex" },
        alignItems: "flex-start",
        gap: 3,
      }}
    >
      {/* Left Large Box - Like Image */}
      <Box
        sx={{
          flex: "0 0 340px",
          background: "#fff",
          p: 3,
          boxShadow: 2,
          borderRadius: 2,
          minWidth: 260,
          mb: { xs: 4, md: 0 },
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          Why Work at Vyoobam Tech?
        </Typography>
        <Typography color="text.secondary" fontSize={15} mt={2}>
          Orders with multiple SKUs can be entered manually, or imported into
          the Quick Order form. Quick Order can be used
        </Typography>
      </Box>
      {/* Right Card Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 3,
          ml: { md: 4, xs: 0 },
        }}
      >
        <Box sx={{ display: "flex", gap: 3 }}>
          {/* Top Cards */}
          {cardData.slice(0, 2).map((card, idx) => (
            <Box
              key={card.label}
              sx={{
                background: card.highlight ? "#0a174e" : "#fff",
                color: card.highlight ? "#fff" : "#111",
                flex: 1,
                borderRadius: 2,
                boxShadow: 2,
                p: 3,
                minWidth: 180,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                {card.icon}
                <Typography ml={1.5} fontWeight={600} fontSize={18}>
                  {card.label}
                </Typography>
              </Box>
              <Typography
                fontSize={14}
                color={
                  card.highlight ? "rgba(255,255,255,0.8)" : "text.secondary"
                }
              >
                {card.desc}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: "flex", gap: 3 }}>
          {/* Bottom Cards */}
          {cardData.slice(2, 4).map((card, idx) => (
            <Box
              key={card.label}
              sx={{
                background: card.highlight ? "#222" : "#fff",
                color: card.highlight ? "#fff" : "#111",
                flex: 1,
                borderRadius: 2,
                boxShadow: 2,
                p: 3,
                minWidth: 180,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                {card.icon}
                <Typography ml={1.5} fontWeight={600} fontSize={18}>
                  {card.label}
                </Typography>
              </Box>
              <Typography
                fontSize={14}
                color={
                  card.highlight ? "rgba(255,255,255,0.8)" : "text.secondary"
                }
              >
                {card.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
);

export default CareerSection;
