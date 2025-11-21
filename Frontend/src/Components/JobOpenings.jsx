// import React from "react";
// import { Box, Container, Typography, Button, useTheme } from "@mui/material";
// import adminImg from "../assets/admin.jpg";
// import fullstackImg from "../assets/fullstack.jpg";
// import softwareImg from "../assets/software.jpg";
// import wordpressImg from "../assets/wordpress.jpg";
// import reactnativeImg from "../assets/react.jpg";
// import heroImg from "../assets/vyoobamrep.png";
// import Header from "./Header";
// import Footer from "./Footer";

// import image from "../assets/CTA.jpg"; // your CTA illustration
// import { useNavigate } from "react-router-dom";

// import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
// import CodeIcon from "@mui/icons-material/Code";
// import StorageIcon from "@mui/icons-material/Storage";
// import LanguageIcon from "@mui/icons-material/Language"; // used instead of Html
// import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

// const jobOpenings = [
//   {
//     title: "Admin",
//     location: "Kumbakonam / Remote",
//     overview:
//       "Manage day-to-day office operations, documentation, and team coordination. Ensure smooth workflow and support management in decision-making.",
//     requirements: [
//       "Graduate in Business Administration / Commerce",
//       "Strong communication & organizational skills",
//       "Knowledge of MS Office / Google Workspace",
//     ],
//     image: adminImg,
//     icon: AdminPanelSettingsIcon,
//   },
//   {
//     title: "Full Stack Developer",
//     location: "Hybrid (Kumbakonam + Remote)",
//     overview:
//       "Work on both front-end and back-end systems to build scalable applications.",
//     requirements: [
//       "Proficiency in JavaScript, React.js, Node.js, Express.js",
//       "Experience with databases (MySQL/MongoDB)",
//       "REST API integration, Git, CI/CD knowledge",
//     ],
//     image: fullstackImg,
//     icon: CodeIcon,
//   },
//   {
//     title: "Software Engineer",
//     location: "Flexible (Remote option available)",
//     overview:
//       "Design, develop, and test software applications with focus on performance and scalability.",
//     requirements: [
//       "Knowledge of Python, Java, or .NET",
//       "Strong problem-solving skills",
//       "Exposure to SDLC & Agile methodology",
//     ],
//     image: softwareImg,
//     icon: StorageIcon,
//   },
//   {
//     title: "WordPress Developer",
//     location: "Kumbakonam / Remote",
//     overview:
//       "Develop, customize, and maintain WordPress websites and plugins.",
//     requirements: [
//       "Experience with WordPress themes & plugins",
//       "Strong skills in PHP, HTML, CSS, JavaScript",
//       "Knowledge of SEO best practices",
//     ],
//     image: wordpressImg,
//     icon: LanguageIcon,
//   },
//   {
//     title: "React Native Developer",
//     location: "Remote / Hybrid",
//     overview:
//       "Build high-performance cross-platform mobile apps using React Native.",
//     requirements: [
//       "Proficiency in React Native, Redux, REST APIs",
//       "Experience in publishing apps to Play Store / App Store",
//       "Good knowledge of mobile UI/UX standards",
//     ],
//     image: reactnativeImg,
//     icon: PhoneIphoneIcon,
//   },
// ];

// const JobSection = ({ job, reverse }) => {
//   const theme = useTheme();
//   const IconComp = job.icon;

//   return (
//     <Box
//       sx={{
//         bgcolor: "#fff",
//         color: "#000",
//         py: { xs: 6, md: 10 },
//         borderBottom: "1px solid #eee",
//       }}
//     >
//       <Container>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: {
//               xs: "column",
//               md: reverse ? "row-reverse" : "row",
//             },
//             alignItems: "center",
//             gap: 6,
//           }}
//         >
//           {/* Image with hover */}
//           <Box
//             sx={{
//               flex: 1,
//               display: "flex",
//               justifyContent: "center",
//               mb: { xs: 3, md: 0 },
//             }}
//           >
//             <Box
//               component="img"
//               src={job.image}
//               alt={job.title}
//               sx={{
//                 maxWidth: 500,
//                 width: "150%",
//                 height: 300,
//                 borderRadius: 4,
//                 boxShadow: 3,
//                 objectFit: "cover",
//                 transition: "0.4s",
//                 "&:hover": {
//                   transform: "scale(1.05)",
//                   boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
//                 },
//               }}
//             />
//           </Box>

//           {/* Job Details */}
//           <Box sx={{ flex: 1 }}>
//             <Typography
//               variant="h4"
//               fontWeight="bold"
//               mb={2}
//               color="#000"
//               sx={{ display: "flex", alignItems: "center", gap: 1 }}
//             >
//               <IconComp sx={{ fontSize: 34, color: "#183278" }} />
//               {job.title}
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               fontWeight="medium"
//               mb={1}
//               color="#333"
//             >
//               Location: {job.location}
//             </Typography>
//             <Typography variant="body1" mb={2} fontWeight="medium" color="#222">
//               <strong>Role Overview:</strong> {job.overview}
//             </Typography>
//             <Typography variant="body1" mb={1} fontWeight="medium" color="#222">
//               <strong>Requirements:</strong>
//             </Typography>
//             <Box component="ul" sx={{ pl: 3, color: "#222" }}>
//               {job.requirements.map((req, idx) => (
//                 <Typography
//                   key={idx}
//                   component="li"
//                   sx={{ mb: 1, fontSize: 16 }}
//                 >
//                   {req}
//                 </Typography>
//               ))}
//             </Box>

//             {/* Apply Now Button */}
//             <Button
//               variant="outlined"
//               sx={{
//                 mt: 2,
//                 borderRadius: 2,
//                 textTransform: "none",
//                 fontWeight: 500,
//                 borderColor: "#183278",
//                 color: "#183278",
//                 "&:hover": { background: "#183278", color: "#fff" },
//               }}
//             >
//               Apply Now
//             </Button>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// const HeroZigzagPage = () => {
//   return (
//     <>
//       <Header />
//       {/* Hero Section */}
//       <Box
//         sx={{
//           minHeight: { xs: "75vh", md: "66vh" },
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           background: "linear-gradient(90deg, #020f35ff 60%, #fff 100%)",
//           pb: { xs: 4, md: 8 },
//           mt: 12,
//         }}
//       >
//         <Container>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               flexDirection: { xs: "column", md: "row" },
//               gap: 4,
//               ml: 6,
//             }}
//           >
//             <Box sx={{ flex: 1 }}>
//               <Typography
//                 variant="h2"
//                 fontWeight="400"
//                 color="white"
//                 sx={{ mb: 3 }}
//               >
//                 Your Future Begins Here
//               </Typography>
//               <Typography
//                 variant="h6"
//                 sx={{ color: "#e5eefd", maxWidth: 420, mb: 4 }}
//               >
//                 Empower your career—Join our team of innovators and shape
//                 tomorrow.
//               </Typography>
//               <Button
//                 variant="contained"
//                 sx={{
//                   background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
//                   borderRadius: 3,
//                   minWidth: 140,
//                   textTransform: "none",
//                   fontSize: 18,
//                   py: 1.7,
//                   px: 4,
//                   fontWeight: 500,
//                   boxShadow: "0 8px 24px 0 #1e88e540",
//                   "&:hover": {
//                     background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
//                   },
//                 }}
//               >
//                 Apply Now
//               </Button>
//             </Box>
//             <Box
//               sx={{
//                 flex: 1,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 mt: { xs: 4, md: 0 },
//               }}
//             >
//               <Box
//                 component="img"
//                 src={heroImg}
//                 alt="hero"
//                 sx={{
//                   width: "100%",
//                   maxWidth: 360,
//                   borderRadius: 7,
//                   boxShadow: 6,
//                   objectFit: "cover",
//                   border: "5px solid #f4f9ff",
//                   mt: 7,
//                 }}
//               />
//             </Box>
//           </Box>
//         </Container>
//       </Box>

//       {/* Job Sections */}
//       {jobOpenings.map((job, idx) => (
//         <JobSection key={job.title} job={job} reverse={idx % 2 !== 0} />
//       ))}
//       {/* Call to Action Section */}
//       <Box sx={{ backgroundColor: "white", py: 6 }}>
//         <section
//           style={{
//             background: "linear-gradient(90deg, #f6e7ff 0%, #e3eaff 100%)",
//             borderRadius: "24px",
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//             padding: "3rem 2.5rem",
//             margin: "0 auto",
//             maxWidth: "1100px",
//             width: "100%",
//             boxShadow: "0 8px 32px rgba(80, 80, 120, 0.14)",
//             gap: "2rem",
//           }}
//         >
//           {/* Left: Text Content */}
//           <div style={{ maxWidth: "480px" }}>
//             <Typography
//               variant="h3"
//               sx={{
//                 fontWeight: 700,
//                 mb: 2,
//                 color: "#22223b",
//                 lineHeight: 1.2,
//                 letterSpacing: "-0.5px",
//               }}
//             >
//               Didn’t Find Your Role?
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{ fontSize: "1.05rem", color: "#37385b", mb: 3 }}
//             >
//               Great transformation begins with people who are passionate and
//               creative. Even if you don’t see a role that fits today, share your
//               profile with us. We’ll reach out when the right opportunity opens.
//             </Typography>

//             <Button
//               variant="contained"
//               sx={{
//                 px: 4,
//                 py: 1.5,
//                 borderRadius: "30px",
//                 fontSize: "1rem",
//                 fontWeight: 500,
//                 background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
//                 textTransform: "none",
//                 "&:hover": {
//                   background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
//                 },
//               }}
//               href="https://forms.gle/your-general-application-form" // 🔹 Replace with your Google Form link
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Apply Anyway →
//             </Button>
//           </div>

//           {/* Right: Image */}
//           <div>
//             <img
//               src={image}
//               alt="Join Our Team"
//               style={{
//                 borderRadius: "18px",
//                 boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
//                 maxWidth: "360px",
//                 width: "100%",
//                 height: "auto",
//               }}
//             />
//           </div>
//         </section>
//       </Box>

//       <Footer />
//     </>
//   );
// };

// export default HeroZigzagPage;




// import React from 'react';
// import { Box, Card, CardContent, Button, Typography } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
// import WorkIcon from '@mui/icons-material/Work';

// const jobs = [
//   {
//     category: 'IT',
//     title: 'FAI reviewer',
//     skills: 'manufacturing processes',
//     experience: '5 - 10 Years',
//     location: 'WICHITA',
//   },
//   // Add more jobs as needed...
// ];

// function Sidebar() {
//   return (
//     <Box sx={{
//       width: 220,
//       backgroundColor: '#0A1B3B',
//       height: '100vh',
//       color: '#e0e0e0',
//       padding: 2,
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'start',
//     }}>
//       <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 2 }}>
//         <HomeIcon sx={{ fontSize: 35, mr: 1 }} />
//         <Typography variant="h6">HOME</Typography>
//       </Box>
//       <Box sx={{ borderBottom: '1px solid #8190A5', width: '100%', mb: 2 }} />
//       <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//         <WorkIcon sx={{ fontSize: 30, mr: 1 }} />
//         <Typography variant="h6" sx={{ color: '#8190A5' }}>JOBS</Typography>
//       </Box>
//     </Box>
//   );
// }

// function JobCard({ job }) {
//   return (
//     <Card sx={{ minWidth: 280, margin: 2, boxShadow: 2 }}>
//       <CardContent>
//         <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
//           <Box sx={{
//             backgroundColor: '#B1B1B1',
//             color: '#fff',
//             borderRadius: 1,
//             paddingX: 2,
//             paddingY: 0.5,
//             marginRight: 2,
//             fontWeight: 'bold',
//             fontSize: 16,
//             letterSpacing: 1,
//           }}>
//             {job.category}
//           </Box>
//         </Box>
//         <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
//           {job.title}
//         </Typography>
//         <Typography sx={{ mb: 0.5 }}>Skills: {job.skills}</Typography>
//         <Typography sx={{ mb: 0.5 }}>Experience: {job.experience}</Typography>
//         <Typography sx={{ mb: 2 }}>Location: {job.location}</Typography>
//         <Button
//           variant="outlined"
//           sx={{
//             fontWeight: 'bold',
//             width: '100%',
//             border: '2px solid',
//             borderColor: '#222',
//             color: '#222',
//             paddingY: 1,
//           }}
//         >
//           APPLY/SHORTLIST
//         </Button>
//       </CardContent>
//     </Card>
//   );
// }

// export default function JobsLayout() {
//   return (
//     <Box sx={{ display: 'flex', height: '100vh' }}>
//       <Sidebar />
//       <Box sx={{
//         flex: 1,
//         backgroundColor: '#fff',
//         display: 'flex',
//         flexWrap: 'wrap',
//         alignItems: 'flex-start',
//         padding: 3,
//       }}>
//         {jobs.map((job, idx) => (
//           <JobCard key={idx} job={job} />
//         ))}
//       </Box>
//     </Box>
//   );
// import React, { useState } from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   Button,
//   Typography,
//   Tabs,
//   Tab,
//   TextField,
// } from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";
// import WorkIcon from "@mui/icons-material/Work";
// import SchoolIcon from "@mui/icons-material/School";
// import logo from "../assets/logo.jpg"
// import { useNavigate } from "react-router-dom";
// // Jobs Data
//  const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     fetchJobs();
//     // eslint-disable-next-line
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const res = await axios.get("/api/careers");
//       setJobs(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };
// // Internship Data
// const internship = [
//   {
//     category: "Internship",
//     title: "Full Stack Internship",
//     skills: "HTML, CSS, JavaScript, React.js, Node.js, MongoDB",
//     duration: "6 Months",
//     location: "Kumbakonam / Remote",
//   },
// ];

// // Sidebar
// function Sidebar({ currentPage, setCurrentPage }) {
//    const navigate = useNavigate();
//   return (
//     <Box
//       sx={{
//         width: 220,
//         backgroundColor: "#0A1B3B",
//         color: "#e0e0e0",
//         padding: 2,
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       {/* HOME */}
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           mb: 2,
//           mt: 2,
//           cursor: "pointer",
//           color: currentPage === "home" ? "#00e4c9" : "#e0e0e0",
//         }}
//         onClick={() => navigate("/")}
//       >
//         <HomeIcon sx={{ fontSize: 35, mr: 1 }} />
//         <Typography variant="h6">HOME</Typography>
//       </Box>

//       <Box sx={{ borderBottom: "1px solid #8190A5", width: "100%", mb: 2 }} />

//       {/* JOBS */}
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           mb: 2,
//           cursor: "pointer",
//           color: currentPage === "jobs" ? "#00e4c9" : "#8190A5",
//         }}
//         onClick={() => setCurrentPage("jobs")}
//       >
//         <WorkIcon sx={{ fontSize: 30, mr: 1 }} />
//         <Typography variant="h6">JOBS</Typography>
//       </Box>

//       {/* INTERNSHIP */}
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           cursor: "pointer",
//           color: currentPage === "internship" ? "#00e4c9" : "#8190A5",
//         }}
//         onClick={() => setCurrentPage("internship")}
//       >
//         <SchoolIcon sx={{ fontSize: 30, mr: 1 }} />
//         <Typography variant="h6">INTERNSHIP</Typography>
//       </Box>
//     </Box>
//   );
// }

// // Reusable Card Component
// function InfoCard({ data }) {
//   const navigate = useNavigate();
//   return (
//     <Card
//       sx={{
//         width: 300,
//         height: 320,
//         margin: 2,
//         boxShadow: 2,
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       <CardContent sx={{ flexGrow: 1 }}>
//         <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
//           <Box
//             sx={{
//               backgroundColor: "#B1B1B1",
//               color: "#fff",
//               borderRadius: 1,
//               px: 2,
//               py: 0.5,
//               mr: 2,
//               fontWeight: "bold",
//               fontSize: 16,
//               letterSpacing: 1,
//             }}
//           >
//             {data.category}
//           </Box>
//         </Box>

//         <Typography
//           variant="h6"
//           sx={{ fontWeight: 700, fontSize: "1.1rem", mb: 0.5 }}
//         >
//           {data.title}
//         </Typography>

//         {data.skills && (
//           <Typography sx={{ fontSize: 14, mb: 0.5 }}>
//             Skills: {data.skills}
//           </Typography>
//         )}
//         {data.experience && (
//           <Typography sx={{ fontSize: 14, mb: 0.5 }}>
//             Experience: {data.experience}
//           </Typography>
//         )}
//         {data.duration && (
//           <Typography sx={{ fontSize: 14, mb: 0.5 }}>
//             Duration: {data.duration}
//           </Typography>
//         )}
//         <Typography sx={{ fontSize: 14, mb: 2 }}>
//           Location: {data.location}
//         </Typography>
//       </CardContent>

//       <Box sx={{ p: 2, pt: 0 }}>
//         <Button
//           variant="outlined"
//           fullWidth
//           sx={{
//             fontWeight: "bold",
//             border: "2px solid #222",
//             color: "#222",
//             py: 1,
//             textTransform: "none",
//             "&:hover": {
//               backgroundColor: "#222",
//               color: "#fff",
//             },
//           }}
//           onClick={() => navigate("/contact")}
//         >
//           APPLY
//         </Button>
//       </Box>
//     </Card>
//   );
// }

// // Home Page
// function HomePage() {
//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h4" sx={{ fontWeight: 700 }}>
//         Welcome to Vyoobam Careers
//       </Typography>
//       <Typography sx={{ mt: 2 }}>
//         Explore job and internship opportunities to start or advance your
//         career with us.
//       </Typography>
//     </Box>
//   );
// }

// // Jobs Page
// function JobsPage() {
//   const [category, setCategory] = useState("IT");
//   const [search, setSearch] = useState("");

//   const filteredJobs = jobs.filter(
//     (job) =>
//       job.category === category &&
//       `${job.title} ${job.skills} ${job.location}`
//         .toLowerCase()
//         .includes(search.toLowerCase())
//   );

//   return (
//     <Box sx={{ p: 3 }}>
//       {/* Header */}
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           mb: 3,
//           justifyContent: "space-between",
//           flexWrap: "wrap",
//           gap: 2,
//         }}
//       >
//         <Typography variant="h4" sx={{ fontWeight: 700 }}>
//           Recent Openings
//         </Typography>

//         <Tabs
//           value={category}
//           onChange={(_, v) => setCategory(v)}
//           sx={{ minHeight: 40 }}
//         >
//           <Tab label="IT" value="IT" sx={{ fontWeight: "bold" }} />
//           <Tab label="BPM" value="BPM" sx={{ fontWeight: "bold" }} />
//         </Tabs>

//         <TextField
//           placeholder="Search by role, skills, location..."
//           variant="outlined"
//           size="small"
//           sx={{ width: 300, backgroundColor: "#fafafa" }}
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </Box>

//       {/* Job List */}
//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           alignItems: "flex-start",
//         }}
//       >
//         {filteredJobs.length > 0 ? (
//           filteredJobs.map((job) => <InfoCard key={job.title} data={job} />)
//         ) : (
//           <Typography sx={{ mt: 5 }}>No jobs found.</Typography>
//         )}
//       </Box>
//     </Box>
//   );
// }

// // Internship Page
// function InternshipPage() {
//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
//         Internship Opportunities
//       </Typography>

//       <Box sx={{ display: "flex", flexWrap: "wrap" }}>
//         {internship.map((item) => (
//           <InfoCard key={item.title} data={item} />
//         ))}
//       </Box>
//     </Box>
//   );
// }

// // Main Layout
// export default function JobsLayout() {
//   const [currentPage, setCurrentPage] = useState("home");

//   return (
//     <Box sx={{ display: "flex", height: "100vh" }}>
//   <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

//   {/* Right Side Content */}
//   <Box sx={{ flex: 1, position: "relative", backgroundColor: "#fff" }}>
//     {/* Watermark */}
//     <Box
//       component="img"
//       src={logo}
//       alt="logo watermark"
//       sx={{
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         width: "800px",       // adjust size
//         height: "400px",
//         objectFit: "contain",
//         opacity: 0.07,        // light watermark
//         transform: "translate(-50%, -50%)",
//         pointerEvents: "none",
//         zIndex: 0,
//       }}
//     />

//     {/* Scrollable content */}
//     <Box sx={{ position: "relative", zIndex: 1, overflowY: "auto", height: "100%" }}>
//       {currentPage === "home" && <HomePage />}
//       {currentPage === "jobs" && <JobsPage />}
//       {currentPage === "internship" && <InternshipPage />}
//     </Box>
//   </Box>
// </Box>

//   );
// }
import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  Tabs,
  Tab,
  TextField,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosConfig"; // if you don't have this, replace with `import axios from "axios";`
import logo from "../assets/logo.jpg";

/**
 * Single-file Careers UI component
 * - Sidebar (Home / Jobs / Internship)
 * - Jobs fetch from GET /api/careers
 * - Tabs (IT / BPM) + search
 * - Internship static list (you can fetch too if stored in DB)
 * - Watermark logo
 *
 * Usage: put this file in src/pages and add a route to it:
 *   <Route path="/jobs" element={<JobsSingleComponent />} />
 */

export default function JobsSingleComponent() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("home"); // home | jobs | internship
  const [jobs, setJobs] = useState([]);
  const [category, setCategory] = useState("IT");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // fetch jobs from backend
  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/careers"); // backend route
      setJobs(res.data || []);
    } catch (err) {
      console.error("Failed to fetch jobs:", err);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  // client-side filtering
  const filteredJobs = jobs.filter((job) => {
    if (currentPage === "jobs" && job.category !== category) return false;
    const q = `${job.title} ${job.skills || ""} ${job.location || ""}`.toLowerCase();
    return q.includes(search.toLowerCase());
  });

  // internship fallback (if you don't store in DB)
  const internship = [
    {
      category: "Internship",
      title: "Full Stack Internship",
      skills: "HTML, CSS, JavaScript, React.js, Node.js, MongoDB",
      duration: "6 Months",
      location: "Kumbakonam / Remote",
    },
  ];

  // small reusable card
  const InfoCard = ({ data }) => (
    <Card
      sx={{
        width: 300,
        height: 320,
        margin: 2,
        boxShadow: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
          <Box
            sx={{
              backgroundColor: "#B1B1B1",
              color: "#fff",
              borderRadius: 1,
              px: 2,
              py: 0.5,
              mr: 2,
              fontWeight: "bold",
              fontSize: 16,
              letterSpacing: 1,
            }}
          >
            {data.category}
          </Box>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.1rem", mb: 0.5 }}>
          {data.title}
        </Typography>

        {data.skills && <Typography sx={{ fontSize: 14, mb: 0.5 }}>Skills: {data.skills}</Typography>}
        {data.experience && <Typography sx={{ fontSize: 14, mb: 0.5 }}>Experience: {data.experience}</Typography>}
        {data.duration && <Typography sx={{ fontSize: 14, mb: 0.5 }}>Duration: {data.duration}</Typography>}
        <Typography sx={{ fontSize: 14, mb: 2 }}>Location: {data.location}</Typography>
      </CardContent>

      <Box sx={{ p: 2, pt: 0 }}>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            fontWeight: "bold",
            border: "2px solid #222",
            color: "#222",
            py: 1,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#222",
              color: "#fff",
            },
          }}
          onClick={() => navigate("/contact")}
        >
          APPLY
        </Button>
      </Box>
    </Card>
  );

  // layout
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Box sx={{ width: 220, backgroundColor: "#0A1B3B", color: "#e0e0e0", p: 2, display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            mt: 2,
            cursor: "pointer",
            color: currentPage === "home" ? "#00e4c9" : "#e0e0e0",
          }}
          onClick={() => setCurrentPage("home")}
        >
          <HomeIcon sx={{ fontSize: 35, mr: 1 }} />
          <Typography variant="h6">HOME</Typography>
        </Box>

        <Box sx={{ borderBottom: "1px solid #8190A5", width: "100%", mb: 2 }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            cursor: "pointer",
            color: currentPage === "jobs" ? "#00e4c9" : "#8190A5",
          }}
          onClick={() => setCurrentPage("jobs")}
        >
          <WorkIcon sx={{ fontSize: 30, mr: 1 }} />
          <Typography variant="h6">JOBS</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            color: currentPage === "internship" ? "#00e4c9" : "#8190A5",
          }}
          onClick={() => setCurrentPage("internship")}
        >
          <SchoolIcon sx={{ fontSize: 30, mr: 1 }} />
          <Typography variant="h6">INTERNSHIP</Typography>
        </Box>

        <Button
          variant="text"
          sx={{ mt: 3, color: "#c7d7ff", textTransform: "none" }}
          onClick={fetchJobs}
        >
          Refresh Jobs
        </Button>
      </Box>

      {/* Main area */}
      <Box sx={{ flex: 1, position: "relative", backgroundColor: "#fff" }}>
        {/* Watermark */}
        <Box
          component="img"
          src={logo}
          alt="logo watermark"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "800px",
            height: "400px",
            objectFit: "contain",
            opacity: 0.07,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Content */}
        <Box sx={{ position: "relative", zIndex: 1, p: 3, overflowY: "auto", minHeight: "100vh" }}>
          {/* Home */}
          {currentPage === "home" && (
            <Box sx={{ p: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>Welcome to Vyoobam Careers</Typography>
              <Typography sx={{ mt: 2 }}>Explore job and internship opportunities to start or advance your career with us.</Typography>
              <Button variant="contained" sx={{ mt: 3 }} onClick={() => setCurrentPage("jobs")}>View Openings →</Button>
            </Box>
          )}

          {/* Jobs */}
          {currentPage === "jobs" && (
            <Box sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3, justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>Recent Openings</Typography>

                <Tabs value={category} onChange={(_, v) => setCategory(v)} sx={{ minHeight: 40 }}>
                  <Tab label="IT" value="IT" sx={{ fontWeight: "bold" }} />
                  <Tab label="BPM" value="BPM" sx={{ fontWeight: "bold" }} />
                </Tabs>

                <TextField
                  placeholder="Search by role, skills, location..."
                  variant="outlined"
                  size="small"
                  sx={{ width: 300, backgroundColor: "#fafafa" }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Box>

              {loading ? (
                <Typography>Loading jobs...</Typography>
              ) : (
                <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }}>
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => <InfoCard key={job._id} data={job} />)
                  ) : (
                    <Typography sx={{ mt: 5 }}>No jobs found.</Typography>
                  )}
                </Box>
              )}
            </Box>
          )}

          {/* Internship */}
          {currentPage === "internship" && (
            <Box sx={{ p: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Internship Opportunities</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {internship.map((item, i) => <InfoCard key={i} data={item} />)}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
