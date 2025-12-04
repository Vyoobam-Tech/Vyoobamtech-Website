
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
// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   typography: {
//     fontFamily: "'Source Sans Pro', sans-serif",

//     h1: {
//       fontWeight: 500,
//       fontSize: "clamp(2rem, 5vw, 5.5rem)",   // Mobile → Desktop auto adjust
//     },
//     h2: {
//       fontWeight: 400,
//       fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
//     },
//     h3: {
//       fontWeight: 400,
//       fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
//     },
//     h4: {
//       fontWeight: 600,
//       fontSize: "clamp(1.1rem, 2vw, 1.8rem)",
//     },
//     h5: {
//       fontWeight: 500,
//       fontSize: "clamp(1rem, 1.8vw, 1.6rem)",
//     },
//     h6: {
//       fontWeight: 300,
//       fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
//     },
//     body1: {
//       fontWeight: 500,
//       fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
//       lineHeight: 1.6,
//     },
//     button: {
//       fontWeight: 600,
//       textTransform: "none",
//       fontSize: "clamp(0.9rem, 1vw, 1.1rem)",
//     },
//   },
// });

// export default theme;
