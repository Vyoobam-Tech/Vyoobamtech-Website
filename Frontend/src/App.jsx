
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { lazy, Suspense, useEffect } from "react";
import theme from "./Components/theme.jsx";
import "./Styles/App.css";

import AOS from "aos";
import "aos/dist/aos.css";
import logo from "./assets/logob.png";
import Scroll from "./Components/Scroll.jsx";

/* 🔥 LAZY IMPORTS */
const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Components/About"));
const Service = lazy(() => import("./Components/Service"));
const Contact = lazy(() => import("./Components/Contact"));

const Mobile = lazy(() => import("./Components/Mobile.jsx"));
const Ui = lazy(() => import("./Components/Ui.jsx"));
const DataAnalytics = lazy(() => import("./Components/DataAnalytics.jsx"));
const Consulting = lazy(() => import("./Components/Consulting.jsx"));

const AllProduct = lazy(() => import("./Components/AllProduct.jsx"));
const AllServices = lazy(() => import("./Components/AllServices.jsx"));

const Market = lazy(() => import("./Pages/Market.jsx"));
const Event = lazy(() => import("./Pages/Event.jsx"));
const Sales = lazy(() => import("./Pages/Sales.jsx"));
const Egrocery = lazy(() => import("./Pages/Egrocery.jsx"));
const Vyoobam = lazy(() => import("./Pages/Vyoobam.jsx"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Scroll />

        {/* 🔥 Suspense Wrapper */}
        <Suspense
  fallback={
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={logo}
        alt="Loading..."
        style={{ width: "150px", marginBottom: "20px" }}
      />
      <span style={{ fontSize: "18px", fontWeight: 500 }}>
        Loading...
      </span>
    </div>
  }
>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/Allproduct" element={<AllProduct />} />
            <Route path="/Allservices" element={<AllServices />} />

            <Route path="/service/web-development" element={<Service />} />
            <Route
              path="/services/Mobile-development"
              element={<Mobile />}
            />
            <Route path="/services/Ui-development" element={<Ui />} />
            <Route
              path="/services/Data-development"
              element={<DataAnalytics />}
            />
            <Route
              path="/services/it-consulting"
              element={<Consulting />}
            />

            <Route path="/Market" element={<Market />} />
            <Route path="/Event" element={<Event />} />
            <Route path="/Sales" element={<Sales />} />
            <Route path="/Egrocery" element={<Egrocery />} />
            <Route path="/Vyoobam" element={<Vyoobam />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
