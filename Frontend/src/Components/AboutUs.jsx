import {
  Box,
  Typography,
  Button,
  Stack,
  Avatar,
  Rating,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


import journey from "../assets/journey.jpg";
import trust from "../assets/trust.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f3f4fdff",
        minHeight: "70vh",
        position: "relative",
      }}
    >
      {/* Cards Section (Left) */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={7}
        sx={{ flex: 1, ml: { md: 9 } }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <Box
            sx={{
              borderRadius: 6,
              p: -1, // space for border
              background: "linear-gradient(1deg, #3f5eec, #00e4c9)", // gradient border
            }}
          >
            <Card
              sx={{
                bgcolor: "#d7dee3c6",
                boxShadow: 6,
                borderRadius: 6,
                minWidth: 180,
                p: 2,
                mb: 2,
                mt: 15,
              }}
            >
              <img
                src={trust}
                alt="Product"
                style={{ width: "100%", borderRadius: 20 }}
              />
              <Typography variant="h6" sx={{ mt: 2, color: "black" }}>
                Trusted Partner
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Typography
                  variant="body1"
                  sx={{ fontSize: 14, color: "black" }}
                >
                  20+ Projects
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                  {/* <Avatar
      src={marketproduct}
      alt="Product 1"
      sx={{ width: 24, height: 24 }}
    />
    <Avatar
      src={eventproduct}
      alt="Product 1"
      sx={{ width: 24, height: 24 }}
    />
    <Avatar
      src={eproduct}
      alt="Product 1"
      sx={{ width: 24, height: 24 }}
    />
    <Avatar
      src={salesproduct}
      alt="Product 1"
      sx={{ width: 24, height: 24 }}
    /> */}
                </Stack>
              </Box>
            </Card>
          </Box>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <Box
            sx={{
              borderRadius: 6,
              p: -1, // space for border
              background: "linear-gradient(1deg, #3f5eec, #00e4c9)", // gradient border
            }}
          >
            <Card
              sx={{
                bgcolor: "#d7dee3c6",
                boxShadow: 10,
                borderRadius: 6,
                minWidth: 180,
                p: 2,
                mb: 2,
              }}
            >
              <img
                src={journey}
                alt="Product"
                style={{ width: "100%", borderRadius: 20 }}
              />
              <Typography variant="h6" sx={{ mt: 2, color: "black" }}>
                Our Journey
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Typography variant="h3" sx={{ fontSize: 14, color: "black" }}>
                  2+ year
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                  <Avatar sx={{ width: 24, height: 24 }} />
                  <Avatar
                    sx={{ width: 24, height: 24, bgcolor: "primary.main" }}
                  />
                  <Avatar
                    sx={{ width: 24, height: 24, bgcolor: "secondary.main" }}
                  />
                </Stack>
              </Box>
            </Card>
          </Box>
        </motion.div>
      </Stack>

      {/* Info Section (Right) */}
      <Box
        sx={{
          flex: 2,
          ml: { md: 20 },
          textAlign: { xs: "center", md: "left" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* <Typography
          variant="overline"
          sx={{ color: "#8C5BC8", letterSpacing: 2, fontWeight: 700, mb: 1 }}
        >
          A BIT
        </Typography> */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              color: "#150357ff",
              fontWeight: 600,
              fontSize: "37px",
            }}
          >
            Who We Are
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#6b7280", mb: 3, maxWidth: 400 }}
          >
            Founded in 2015, Vyoobam Tech has grown from a web solutions
            provider into a full-scale digital transformation company. With
            expertise across Web Development, Mobile Applications, Data
            Analytics, UI/UX Design, and Consulting, we help businesses of all
            sizes navigate their digital journey.
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
            onClick={() => navigate("/about")}
          >
            Explore US →
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}
