// //import Demo from "./Components/Demo"
// import Home from "./Components/Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./Components/About";
// import Service from "./Components/Service";
// import Contact from "./Components/Contact";
// // import Careers from "./Components/Careers";
// import Mobile from "./Components/Mobile.jsx";
// import Ui from "./Components/Ui.jsx"
// import DataAnalytics from "./Components/DataAnalytics.jsx"
// import Consulting from "./Components/Consulting.jsx"
// import "./Styles/App.css";
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "./Components/theme.jsx";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import Egrocery from "./Pages/Egrocery.jsx";
// import Market from "./Pages/Market.jsx"
// import Event from "./Pages/Event.jsx"
// import Sales from "./Pages/Sales.jsx"
// import Vyoobam from "./Pages/Vyoobam.jsx";
// import AllProduct from "./Components/AllProduct.jsx";
// // import JobOpenings from "./Components/JobOpenings.jsx";
// import Scroll from "./Components/Scroll.jsx";
// import AllServices from "./Components/AllServices.jsx";
// // import AdminLogin from "./Pages/AdminLogin.jsx";
// // import AdminCareers from "./Pages/AdminCareers.jsx";        

// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Duration of each animation
//       once: true, // Only animate once
//     });
//   }, []);
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Duration of each animation
//       once: true, // Only animate once
//     });
//   }, []);

//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <Router>
//           <Scroll />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
           
//             {/* <Route path="/careers" element={<Careers />} /> */}

//             <Route path="/Contact" element={<Contact />} />
//             <Route path="/Allproduct" element={<AllProduct />} />
           
//            <Route path="/Allservices" element={<AllServices/>} />

//             <Route path="/service/web-development" element={<Service />} />
//              <Route path="/services/Mobile-development" element={<Mobile/>} />
//               <Route path="/services/Ui-development" element={<Ui/>} />
//                <Route path="/services/Data-development" element={<DataAnalytics/>} />
//               < Route path="/services/it-consulting" element={<Consulting/>} />
//             {/* <Route path="/openings" element={<JobOpenings />} /> */}
//             <Route path="/Market" element={<Market/>}/>
//              <Route path="/Event" element={<Event/>}/>
//               <Route path="/Sales" element={<Sales/>}/>
//                    <Route path="/Egrocery" element={<Egrocery/>}/>
//                     <Route path="/Vyoobam" element={<Vyoobam/>}/>
               

//                      {/* <Route path="/admin-login" element={<AdminLogin />} />
//                   <Route path="/vyoobam-dev-career" element={<AdminCareers/>} /> */}
//           </Routes>
//         </Router>
//       </ThemeProvider>
//     </>
//   );
// }

// export default App;
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
