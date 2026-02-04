import { Box } from "@mui/material";

export default function AppContainer({ children }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: {
          xs: "100%",
          lg: 1280,
          xl: 1600,
        },
        mx: "auto",
        px: { xs: 2, sm: 3, lg: 4 },
      }}
    >
      {children}
    </Box>
  );
}
