
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Source Sans Pro', sans-serif",
    h1: { fontWeight: 500, fontSize: "100px" },
    h2: {  fontWeight: 400, fontSize: "37px" },
    h3: { fontWeight: 400, fontSize: "2.2rem" },
    h4: { fontWeight: 600, fontSize: "37px" },
    h5: { fontWeight: 500, fontSize: "2.2rem" },
    h6: { fontWeight: 300, fontSize: "17px" },
    body1: { fontWeight: 500, fontSize: "1rem", lineHeight: 1.6 },
    button: { fontWeight: 600, textTransform: "none" },
  },
});

export default theme;
