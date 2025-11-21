

// // import React, { useState } from "react";
// // import {
// //   Box,
// //   TextField,
// //   Button,
// //   Typography,
// //   MenuItem,
// //   Container,
// // } from "@mui/material";

// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     purpose: "",
// //     message: "",
// //   });

// //   const [resume, setResume] = useState(null); // for file upload

// //   const purposes = [
// //     "For Product Demo",
// //     "For Internship",
// //     "For Job",
// //     "Others",
// //   ];

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const maxSize = 2 * 1024 * 1024; // 2MB in bytes
// //       if (file.size > maxSize) {
// //         alert("⚠️ File size should not exceed 2 MB.");
// //         e.target.value = null; // clear the file input
// //         setResume(null);
// //         return;
// //       }
// //       setResume(file);
// //     }
// //   };

  

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const formDataToSend = new FormData();
// //       formDataToSend.append("firstName", formData.firstName);
// //       formDataToSend.append("lastName", formData.lastName);
// //       formDataToSend.append("email", formData.email);
// //       formDataToSend.append("purpose", formData.purpose);
// //       formDataToSend.append("message", formData.message);

// //       if (resume) {
// //         formDataToSend.append("resume", resume);
// //       }

// //       const response = await fetch("http://localhost:5000/api/contact", {
// //         method: "POST",
// //         body: formDataToSend, // no headers here for FormData
// //       });

// //       const data = await response.json();
// //       if (data.success) {
// //         alert("✅ Your message has been sent to HR!");
// //         setFormData({
// //           firstName: "",
// //           lastName: "",
// //           email: "",
// //           purpose: "",
// //           message: "",
// //         });
// //         setResume(null);
// //       } else {
// //         alert("❌ Failed to send message. Please try again.");
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       alert("Something went wrong. Please try again.");
// //     }
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: "100vh",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         background: "linear-gradient(135deg, #f0f3ff, #e1f7f5)",
// //         py: 8,
// //       }}
// //     >
// //       <Container
// //         maxWidth="sm"
// //         sx={{
// //           p: 4,
// //           boxShadow: 4,
// //           borderRadius: 3,
// //           backgroundColor: "#fff",
// //         }}
// //       >
// //         <Typography
// //           variant="h4"
// //           fontWeight="bold"
// //           mb={3}
// //           textAlign="center"
// //           color="primary"
// //         >
// //           Contact Us
// //         </Typography>

// //         <form onSubmit={handleSubmit}>
// //           <TextField
// //             label="First Name"
// //             name="firstName"
// //             fullWidth
// //             value={formData.firstName}
// //             onChange={handleChange}
// //             required
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label="Last Name"
// //             name="lastName"
// //             fullWidth
// //             value={formData.lastName}
// //             onChange={handleChange}
// //             required
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label="Email"
// //             name="email"
// //             type="email"
// //             fullWidth
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label="Purpose"
// //             name="purpose"
// //             select
// //             fullWidth
// //             value={formData.purpose}
// //             onChange={handleChange}
// //             required
// //             sx={{ mb: 2 }}
// //           >
// //             {purposes.map((option) => (
// //               <MenuItem key={option} value={option}>
// //                 {option}
// //               </MenuItem>
// //             ))}
// //           </TextField>

// //           {/* Show resume upload only if "Internship" or "Job" selected */}
// //           {(formData.purpose === "For Internship" ||
// //             formData.purpose === "For Job") && (
// //             <Box sx={{ mb: 2 }}>
// //               <Typography variant="body1" sx={{ mb: 1 }}>
// //                 Upload Resume (PDF/DOC)
// //               </Typography>
// //               <input
// //                 type="file"
// //                 name="resume"
// //                 accept=".pdf,.doc,.docx"
// //                 onChange={handleFileChange}
// //                 required
// //               />
// //             </Box>
// //           )}

// //           <TextField
// //             label="Message / Description"
// //             name="message"
// //             multiline
// //             rows={4}
// //             fullWidth
// //             value={formData.message}
// //             onChange={handleChange}
// //             sx={{ mb: 3 }}
// //           />

// //           <Button
// //             type="submit"
// //             variant="contained"
// //             fullWidth
// //             sx={{
// //               py: 1.2,
// //               background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
// //               fontWeight: "bold",
// //               textTransform: "none",
// //               borderRadius: 2,
// //             }}
// //           >
// //             Submit
// //           </Button>
// //         </form>
// //       </Container>
// //     </Box>
// //   );
// // };

// // export default Contact;



// import React, { useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   MenuItem,
//   Container,
// } from "@mui/material";
// import Header from "../Components/Header"
// import Footer from "./Footer";
// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     purpose: "",
//     message: "",
//   });

//   const [resume, setResume] = useState(null);

//   const purposes = ["For Product Demo", "For Internship", "For Job", "Others"];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const maxSize = 2 * 1024 * 1024; // 2 MB
//       if (file.size > maxSize) {
//         alert("⚠️ File size should not exceed 2 MB.");
//         e.target.value = null;
//         setResume(null);
//         return;
//       }
//       setResume(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formDataToSend = new FormData();
//       Object.keys(formData).forEach((key) => {
//         formDataToSend.append(key, formData[key]);
//       });
//       if (resume) formDataToSend.append("resume", resume);

//       const response = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         body: formDataToSend,
//       });

//       const data = await response.json();
//       if (data.success) {
//         alert("✅ Your message has been sent successfully!");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           purpose: "",
//           message: "",
//         });
//         setResume(null);
//       } else {
//         alert("❌ Failed to send message. Please try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <>
//     <Header/>
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "linear-gradient(135deg, #f9f9ff, #e6f0f8ff)",
//         py: 8,
//         mt:10
//       }}
//     >
//       <Container maxWidth="lg">
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             alignItems: "stretch",
//             justifyContent: "space-between",
//             gap: 6,
//           }}
//         >
//           {/* ---------- LEFT SECTION ---------- */}
//           <Box
//             sx={{
//               flex: 1,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//             }}
//           >
//             <Typography
//               variant="h1"
//               fontWeight="600" fontSize={80}
//               sx={{
//                 background: "linear-gradient(to right, #00e4c9, #a033ff, #ff267e)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 mb: 3,
//               }}
//             >
//               Let’s Build<br/>What’s Next..!
//             </Typography>

//             <Typography
//               variant="h5"
//               fontWeight={600}
//               sx={{ color: "#333", mb: 3 }}
//             >
//               Ready To Transform Your Ideas Into Powerful Digital Experiences?
//             </Typography>

//             <Typography
//               variant="body"
//               sx={{
//                 color: "#555",
//                 lineHeight: 1.8,
//                 maxWidth: "90%",
//                 fontSize: "1.05rem",
//               }}
//             >
//              Share your project details — from design to deployment,
//               Vyoobam helps you create, launch, and grow with confidence
//             </Typography>
//           </Box>

//           {/* ---------- RIGHT SECTION ---------- */}
//           <Box
//             // sx={{
//             //   flex: 1,
//             //   backgroundColor: "#fff",
//             //   // borderRadius: 3,
//             //   p: 4,
//             //   boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//             // }}
//           >
//             <Typography
//               variant="h5"
//               fontWeight="bold"
//               sx={{
//                 color: "#3f5eec",
//                 mb: 3,mt:8,
//                 textAlign: "center",
//               }}
//             >
//               Start a Project
//             </Typography>

//             <form onSubmit={handleSubmit}>
//               <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
//                 <TextField
//                   label="First Name"
//                   name="firstName"
//                    variant="standard" 
//                   fullWidth
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   required
//                 />
//                 <TextField
//                   label="Last Name"
//                   name="lastName"
//                    variant="standard" 
//                   fullWidth
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   required
//                 />
//               </Box>

//               <TextField
//                 label="Email"
//                 name="email"
//                 type="email"
//                  variant="standard" 
//                 fullWidth
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 sx={{ mb: 2 }}
//               />

//               <TextField
//                 label="Purpose"
//                 name="purpose"
//                 select
//                  variant="standard" 
//                 fullWidth
//                 value={formData.purpose}
//                 onChange={handleChange}
//                 required
//                 sx={{ mb: 2 }}
//               >
//                 {purposes.map((option) => (
//                   <MenuItem key={option} value={option}>
//                     {option}
//                   </MenuItem>
//                 ))}
//               </TextField>

//               {(formData.purpose === "For Internship" ||
//                 formData.purpose === "For Job") && (
//                 <Box sx={{ mb: 2 }}>
//                   <Typography variant="body1" sx={{ mb: 1 }}>
//                     Upload Resume (PDF/DOC)
//                   </Typography>
//                   <input
//                     type="file"
//                     name="resume"
//                     accept=".pdf,.doc,.docx"
//                     onChange={handleFileChange}
//                     required
//                   />
//                 </Box>
//               )}

//               <TextField
//                 label="Message / Description"
//                 name="message"
//                  variant="standard" 
//                 multiline
//                 rows={4}
//                 fullWidth
//                 value={formData.message}
//                 onChange={handleChange}
//                 sx={{ mb: 3 }}
//               />

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{
//                   py: 1.2,
//                   fontWeight: "bold",
//                   textTransform: "none",
//                   borderRadius: 2,
//                   background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
//                   "&:hover": {
//                     background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
//                   },
//                 }}
//               >
//                 Submit
//               </Button>
//             </form>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//     <Footer/>
//     </>
//   );
// };

// export default Contact;

// import React, { useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   MenuItem,
//   Container,
// } from "@mui/material";
// import Header from "../Components/Header";
// import Footer from "./Footer";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     purpose: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(null);
//   const [resume, setResume] = useState(null);

//   const purposes = ["For Product Demo", "For Internship", "For Job", "Others"];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const maxSize = 2 * 1024 * 1024; // 2 MB
//       if (file.size > maxSize) {
//         alert("⚠️ File size should not exceed 2 MB.");
//         e.target.value = null;
//         setResume(null);
//         return;
//       }
//       setResume(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataToSend = new FormData();
//       Object.keys(formData).forEach((key) => {
//         formDataToSend.append(key, formData[key]);
//       });
//       if (resume) formDataToSend.append("resume", resume);

//       const response = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         body: formDataToSend,
//       });

//       const data = await response.json();
//       if (data.success) {
//         alert("✅ Your message has been sent successfully!");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           purpose: "",
//           message: "",
//         });
//         setResume(null);
//       } else {
//         alert("❌ Failed to send message. Please try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <Box textAlign="center" sx={{mt:12, background: "linear-gradient(135deg, #f9f9ff, #e6edf8ff)",py: 8,}}>
//                 <Typography
//                   variant="h2"
//                   fontWeight={600}
//                   fontSize={70}
//                   sx={{
//                     background:
//                       "linear-gradient(to right, #00e4c9, #a033ff, #ff267e)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     mb:3,mt:5
//                   }}
//                 >
//                   Let’s Build What’s Next..!
//                 </Typography>

//                 <Typography
//                   variant="h5"
//                   fontWeight={400}
//                    fontSize={25}
//                   sx={{ color: "#253168ff", mb: 2 }}
//                 >
//                   Share your project details — from design to deployment, <br />Vyoobam
//                   helps you create, launch, and grow with confidence.
//                 </Typography>

//                 {/* <Typography
//                   variant="body"
//                   sx={{
//                     color: "#555",
//                     lineHeight: 1.8,
//                     maxWidth: "90%",
//                     mx: "auto",
//                     fontSize: "1.05rem",
//                   }}
//                 >
//                   Share your project details — from design to deployment, <br />Vyoobam
//                   helps you create, launch, and grow with confidence.
//                 </Typography> */}
//               </Box>
//       <Box
//         sx={{
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           background: "linear-gradient(135deg, #f9f9ff, #e6f0f8ff)",
//           py: 8,
          
//         }}
//       >
//         <Container maxWidth="lg">
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", md: "row" },
//               alignItems: "stretch",
//               justifyContent: "space-between",
//               gap: 6,mb:10
//             }}
//           >
//             {/* ---------- LEFT SECTION (Map + Text) ---------- */}
//             <Box sx={{ flex: 1 }}>
               
//               <Box
//                 sx={{
//                   borderRadius: 3,
//                   overflow: "hidden",
//                   boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//                   mb: 1,mt:6
//                 }}
//               >
//                 <iframe
//                   title="office-location"
//                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62672.23690920099!2d79.32686658397209!3d10.962253802065147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1svyoobam%20kumbakonam!5e0!3m2!1sen!2sin!4v1761200847692!5m2!1sen!2sin" // 🔹 Replace this with your own map link
//                   width="100%"
//                   height="550"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </Box>

//               {/* Text Content below Map */}
              
//             </Box>

//             {/* ---------- RIGHT SECTION (Form) ---------- */}
//             <Box sx={{ flex: 1, mt: { xs: 4, md: 0 } }}>
//               <Typography
//                 variant="h5"
//                 fontWeight="bold" fontSize={30}
//                 sx={{
//                   color: "#253168ff",
//                   mb: 3,
//                   textAlign: "center",
//                 }}
//               >
//               IGNITE YOUR VISION
//               </Typography>

//               <form onSubmit={handleSubmit}>
//                 <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
//                   <TextField
//                     label="First Name"
//                     name="firstName"
//                     variant="standard"
//                     fullWidth
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     required
//                      color="#253168ff"
//                   />
//                   <TextField
//                     label="Last Name"
//                     name="lastName"
//                     variant="standard"
//                     fullWidth
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     required
//                     color="#253168ff"
//                   />
//                 </Box>

//                 <TextField
//                   label="Email"
//                   name="email"
//                   type="email"
//                   variant="standard"
//                   fullWidth
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   sx={{ mb: 2 }}
//                   color="#253168ff"
//                 />

//                 <TextField
//                   label="Purpose"
//                   name="purpose"
//                   select
//                   variant="standard"
//                   fullWidth
//                   value={formData.purpose}
//                   onChange={handleChange}
//                   required
//                   color="#253168ff"
//                   sx={{ mb: 2 }}
//                 >
//                   {purposes.map((option) => (
//                     <MenuItem key={option} value={option}>
//                       {option}
//                     </MenuItem>
//                   ))}
//                 </TextField>

//                 {(formData.purpose === "For Internship" ||
//                   formData.purpose === "For Job") && (
//                   <Box sx={{ mb: 2 }}>
//                     <Typography variant="body"  color="#253168ff" sx={{ mb: 1 }}>
//                       Upload Resume (PDF/DOC)
//                     </Typography>
//                     <input
//                       type="file"
//                       name="resume"
//                       accept=".pdf,.doc,.docx"
//                       onChange={handleFileChange}
//                       required
//                     />
//                   </Box>
//                 )}

//                 <TextField
//                   label="Message / Description"
//                   name="message"
//                   variant="standard"
//                   multiline
//                   rows={4}
//                   fullWidth
//                   color="#253168ff"
//                   value={formData.message}
//                   onChange={handleChange}
//                   sx={{ mb: 3 }}
//                 />

//                 <Button
//                   type="submit"
//                   alignItems="center"
//                   variant="contained"
                  
//                   sx={{
//                     py: 1.2,
//                     fontWeight: "bold",
//                     textTransform: "none",
//                     borderRadius: 2,
//                     background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
//                     "&:hover": {
//                       background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
//                     },
//                   }}
//                 >
//                   Submit
//                 </Button>
//               </form>
//             </Box>
//           </Box>
//         </Container>
//       </Box>
//       <Footer />
//     </>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Container,
} from "@mui/material";
import Swal from "sweetalert2"; // ✅ SweetAlert2
import withReactContent from "sweetalert2-react-content";
import Header from "../Components/Header";
import Footer from "./Footer";

const MySwal = withReactContent(Swal);

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    purpose: "",
    message: "",
  });

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  const purposes = ["For Product Demo", "For Internship", "For Job", "Others"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const maxSize = 2 * 1024 * 1024; // 2 MB
      if (file.size > maxSize) {
        MySwal.fire({
          icon: "warning",
          title: "⚠️ File too large",
          text: "File size should not exceed 2 MB.",
          timer: 2500,
          showConfirmButton: false,
        });
        e.target.value = null;
        setResume(null);
        return;
      }
      setResume(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });
      if (resume) formDataToSend.append("resume", resume);

      const response = await fetch("http://localhost:5000/api/contact", {
        
        method: "POST",
       
        body: formDataToSend,
        
      });
 console.log("Frontend Response:", response);
      const data = await response.json();

      if (data.success) {
        MySwal.fire({
          icon: "success",
          title: "✅ Success",
          text: "Your message has been sent successfully!",
          timer: 3000,
          showConfirmButton: false,
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          purpose: "",
          message: "",
        });
        setResume(null);
      } else {
        MySwal.fire({
          icon: "error",
          title: "❌ Failed",
          text: "Failed to send message. Please try again.",
          timer: 3000,
          showConfirmButton: false,
        });
      }
    } catch (err) {
      console.error(err);
      MySwal.fire({
        icon: "error",
        title: "❌ Error",
        text: "Something went wrong. Please try again later.",
        timer: 3000,
        showConfirmButton: false,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      {/* Header Section */}
      <Box
        textAlign="center"
        sx={{
          mt: 12,
          background: "linear-gradient(135deg, #f9f9ff, #e6edf8ff)",
          py: 8,
        }}
      >
        <Typography
          variant="h2"
          fontWeight={600}
          fontSize={70}
          sx={{
            background: "linear-gradient(to right, #00e4c9, #a033ff, #ff267e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 3,
            mt: 5,
          }}
        >
          Let’s Build What’s Next..!
        </Typography>

        <Typography
          variant="h5"
          fontWeight={400}
          fontSize={25}
          sx={{ color: "#253168ff", mb: 2 }}
        >
          Share your project details — from design to deployment, <br />
          Vyoobam helps you create, launch, and grow with confidence.
        </Typography>
      </Box>

      {/* Form + Map Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f9f9ff, #e6f0f8ff)",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "stretch",
              justifyContent: "space-between",
              gap: 6,
              mb: 10,
            }}
          >
            {/* Left Section - Map */}
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  mb: 1,
                  mt: 6,
                }}
              >
                <iframe
                  title="office-location"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62672.23690920099!2d79.32686658397209!3d10.962253802065147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1svyoobam%20kumbakonam!5e0!3m2!1sen!2sin!4v1761200847692!5m2!1sen!2sin"
                  width="100%"
                  height="550"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Box>

            {/* Right Section - Form */}
            <Box sx={{ flex: 1, mt: { xs: 4, md: 0 } }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                fontSize={30}
                sx={{ color: "#253168ff", mb: 3, textAlign: "center" }}
              >
                IGNITE YOUR VISION
              </Typography>

              <form onSubmit={handleSubmit}>
                <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    variant="standard"
                    fullWidth
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    color="#253168ff"
                  />
                  <TextField
                    label="Last Name"
                    name="lastName"
                    variant="standard"
                    fullWidth
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    color="#253168ff"
                  />
                </Box>

                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  variant="standard"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{ mb: 2 }}
                  color="#253168ff"
                />

                <TextField
                  label="Purpose"
                  name="purpose"
                  select
                  variant="standard"
                  fullWidth
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                  color="#253168ff"
                  sx={{ mb: 2 }}
                >
                  {purposes.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>

                {(formData.purpose === "For Internship" ||
                  formData.purpose === "For Job") && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body" color="#253168ff" sx={{ mb: 1 }}>
                      Upload Resume (PDF/DOC)
                    </Typography>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                    />
                  </Box>
                )}

                <TextField
                  label="Message / Description"
                  name="message"
                  variant="standard"
                  multiline
                  rows={4}
                  fullWidth
                  color="#253168ff"
                  value={formData.message}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  alignItems="center"
                  variant="contained"
                  disabled={loading} // Disable while sending
                  sx={{
                    py: 1.2,
                    fontWeight: "bold",
                    textTransform: "none",
                    borderRadius: 2,
                    background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
                    "&:hover": {
                      background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
                    },
                  }}
                >
                  {loading ? "Sending..." : "Submit"} {/* Show loading */}
                </Button>
              </form>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
