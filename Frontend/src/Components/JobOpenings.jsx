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
  Dialog,
  DialogContent,
  FormControlLabel,
  Checkbox,
  CircularProgress,
  Alert,
  MenuItem,
} from "@mui/material";
import back from "../assets/laptop3.jpg";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosConfig";
import logo from "../assets/logo.jpg";

export default function JobsMultiStepComponent() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("home"); // home | jobs | internship
  const [jobs, setJobs] = useState([]);
  const [category, setCategory] = useState("IT");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [applyType, setApplyType] = useState(null); // 'job' | 'internship' | 'general'
  const [selectedJob, setSelectedJob] = useState(null);
  const [step, setStep] = useState(1); // 1..5
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [jobType, setJobType] = useState(""); 
  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    pincode: "",
  });
const [education, setEducation] = useState({
    highestQualification: "",
    college: "",
    cgpa: "",
    passoutYear: "",
    skills: [],
  });
const [roleSpecific, setRoleSpecific] = useState({
  // job - experienced
  experienceYears: "",
  prevCompany: "",
  expertise: "",
  changeReason: "",
  fresherInterest: "",
  fresherWhyHire: "",
  prevField: "",
  changeReasonCareer: "",
  newSkills: "",
  internshipDomain: "",
  whyIntern: "",
  availabilityHours: "",
});

  const [resumeFile, setResumeFile] = useState(null);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone);
  const validatePincode = (pin) => /^\d{6}$/.test(pin);
  const toggleSkill = (s) => {
    setEducation((prev) => {
      const exists = prev.skills.includes(s);
      return {
        ...prev,
        skills: exists ? prev.skills.filter((i) => i !== s) : [...prev.skills, s],
      };
    });
  };
  useEffect(() => {
    fetchJobs();
    
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/careers");
      setJobs(res.data || []);
    } catch (err) {
      console.error(err);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };
  const filteredJobs = jobs.filter((job) => {
    if (currentPage === "jobs" && job.category !== category) return false;
    const q = `${job.title} ${job.skills || ""} ${job.location || ""}`.toLowerCase();
    return q.includes(search.toLowerCase());
  });

  const internship = [
    {
      category: "Internship",
      title: "Full Stack Internship",
      skills: "HTML, CSS, JavaScript, React.js, Node.js, MongoDB",
      duration: "6 Months",
      location: "Kumbakonam / Remote",
    },
  ];
  const openApplyForm = (type = "general", job = null) => {
    setApplyType(type); // 'job' or 'internship' or 'general'
    setSelectedJob(job);
    setOpenForm(true);
    setStep(1);
    setSubmitError("");
    setSubmitSuccess(false);
  };
const closeApplyForm = () => {
    setOpenForm(false);
    setStep(1);
    setSelectedJob(null);
    setApplyType(null);
    setSubmitError("");
    setSubmitSuccess(false);
    // reset form
    setPersonal({ firstName: "", lastName: "", email: "", phone: "", city: "", pincode: "" });
    setEducation({ highestQualification: "", college: "", cgpa: "", passoutYear: "", skills: [] });
    setRoleSpecific({
      experienceYears: "",
      prevCompany: "",
      expertise: "",
      changeReason: "",
      internshipDomain: "",
      whyIntern: "",
      availabilityHours: "",
    });
    setResumeFile(null);
  };

  const canProceed = (s) => {
    if (s === 1) {
      if (!personal.firstName.trim() || !personal.lastName.trim()) return false;
      if (!validateEmail(personal.email)) return false;
      if (!validatePhone(personal.phone)) return false;
      if (!validatePincode(personal.pincode)) return false;
      return true;
    }

    if (s === 2) {
      // basic education checks
      if (!education.highestQualification.trim()) return false;
      if (!education.college.trim()) return false;
      return true;
    }

    if (s === 3) {
      // role-specific: depends on applyType
      if (applyType === "job") {
  if (!jobType) return false;

  if (jobType === "fresher") {
    if (!roleSpecific.fresherInterest.trim()) return false;
    if (!roleSpecific.fresherWhyHire.trim()) return false;
    return true;
  }

  if (jobType === "experienced") {
  if (!roleSpecific.expertise.trim()) return false;

  if (
    roleSpecific.experienceYears === undefined ||
    roleSpecific.experienceYears === null ||
    roleSpecific.experienceYears === "" ||
    Number(roleSpecific.experienceYears) <= 0
  ) {
    return false;
  }

  return true;
}


  if (jobType === "career-changer") {
    if (!roleSpecific.prevField.trim()) return false;
    if (!roleSpecific.changeReasonCareer.trim()) return false;
    if (!roleSpecific.newSkills.trim()) return false;
    return true;
  }

  return false;
}

      if (applyType === "internship") {
        if (!education.college?.trim()) return false; // ensure college present
        if (!roleSpecific.internshipDomain?.trim()) return false;
        return true;
      }
      // general application: optional
      return true;
    }

    if (s === 4) {
      // resume upload required
      return !!resumeFile;
    }

    // s === 5 confirmation
    return true;
  };

  const handleNext = () => {
    setSubmitError("");
    if (!canProceed(step)) {
      // build contextual message
      let msg = "Please complete required fields for this step.";
      if (step === 1) msg = "Enter valid personal information (name, email, phone, pincode).";
      if (step === 2) msg = "Enter education details (qualification & college).";
      if (step === 3) {
  if (applyType === "job") {
    if (!jobType) return setSubmitError("Please select a job category.");

    if (jobType === "fresher") {
      if (!roleSpecific.fresherInterest.trim())
        return setSubmitError("Please enter your area of interest.");
      if (!roleSpecific.fresherWhyHire.trim())
        return setSubmitError("Please explain why we should hire you.");
    }

    if (jobType === "experienced") {
      if (!roleSpecific.expertise.trim())
        return setSubmitError("Enter your Area of Expertise.");

      if (
        roleSpecific.experienceYears === undefined ||
        roleSpecific.experienceYears === null ||
        roleSpecific.experienceYears === "" ||
        Number(roleSpecific.experienceYears) <= 0
      ) {
        return setSubmitError("Enter valid years of experience.");
      }
    }

    if (jobType === "career-changer") {
      if (!roleSpecific.prevField.trim())
        return setSubmitError("Enter your previous field.");
      if (!roleSpecific.changeReasonCareer.trim())
        return setSubmitError("Explain why you want to change your career.");
      if (!roleSpecific.newSkills.trim())
        return setSubmitError("Mention the new skills you are learning.");
    }
  }
}


      if (step === 4) msg = "Please upload your resume (pdf/doc).";
      return setSubmitError(msg);
    }
    setStep((s) => Math.min(5, s + 1));
  };

  const handlePrev = () => {
    setSubmitError("");
    setStep((s) => Math.max(1, s - 1));
  };

  // final submit
  const handleSubmit = async () => {
    // final validation before send
    if (!canProceed(1)) return setSubmitError("Personal info incomplete or invalid.");
    if (!canProceed(2)) return setSubmitError("Education info incomplete.");
    if (!canProceed(3)) return setSubmitError("Role-specific info incomplete.");
    if (!canProceed(4)) return setSubmitError("Resume missing.");

    setSubmitError("");
    setSubmitting(true);

    try {
      const fd = new FormData();
      // grouped payload
      const payload = {
        personal,
        education,
        roleSpecific,
        applyType,
        appliedFor: selectedJob?.title || (applyType === "internship" ? "Internship" : "General"),
      };

      fd.append("payload", JSON.stringify(payload));
      fd.append("resume", resumeFile);

      const res = await axios.post("/api/apply", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data?.success) {
        setSubmitSuccess(true);
        setStep(5);
      } else {
        setSubmitError(res.data?.message || "Submission failed");
      }
    } catch (err) {
      console.error(err);
      setSubmitError(err?.response?.data?.message || err.message || "Submit failed");
    } finally {
      setSubmitting(false);
    }
  };

  // --- UI pieces ---
  const InfoCard = ({ data, type = "job" }) => (
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
          <Box sx={{ backgroundColor: "#B1B1B1", color: "#fff", borderRadius: 1, px: 2, py: 0.5, mr: 2, fontWeight: "bold", fontSize: 16, letterSpacing: 1 }}>
            {data.category}
          </Box>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.1rem", mb: 0.5 }}>{data.title}</Typography>
        {data.skills && <Typography sx={{ fontSize: 14, mb: 0.5 }}>Skills: {data.skills}</Typography>}
        {data.experience && <Typography sx={{ fontSize: 14, mb: 0.5 }}>Experience: {data.experience}</Typography>}
        {data.duration && <Typography sx={{ fontSize: 14, mb: 0.5 }}>Duration: {data.duration}</Typography>}
        <Typography sx={{ fontSize: 14, mb: 2 }}>Location: {data.location}</Typography>
      </CardContent>

      <Box sx={{ p: 2, pt: 0 }}>
        <Button
          variant="outlined"
          fullWidth
          sx={{ fontWeight: "bold", border: "2px solid #222", color: "#222", py: 1, textTransform: "none", "&:hover": { backgroundColor: "#222", color: "#fff" } }}
          onClick={() => openApplyForm(type === "internship" ? "internship" : "job", data)}
        >
          APPLY
        </Button>
      </Box>
    </Card>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Box sx={{ width: 220, backgroundColor: "#0A1B3B", color: "#e0e0e0", p: 2, display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, mt: 2, cursor: "pointer", color: currentPage === "home" ? "#00e4c9" : "#e0e0e0" }} onClick={() => setCurrentPage("home")}>
          <HomeIcon sx={{ fontSize: 35, mr: 1 }} />
          <Typography variant="h6">HOME</Typography>
        </Box>

        <Box sx={{ borderBottom: "1px solid #8190A5", width: "100%", mb: 2 }} />

        <Box sx={{ display: "flex", alignItems: "center", mb: 2, cursor: "pointer", color: currentPage === "jobs" ? "#00e4c9" : "#8190A5" }} onClick={() => setCurrentPage("jobs")}>
          <WorkIcon sx={{ fontSize: 30, mr: 1 }} />
          <Typography variant="h6">JOBS</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", color: currentPage === "internship" ? "#00e4c9" : "#8190A5" }} onClick={() => setCurrentPage("internship")}>
          <SchoolIcon sx={{ fontSize: 30, mr: 1 }} />
          <Typography variant="h6">INTERNSHIP</Typography>
        </Box>

        <Button variant="text" sx={{ mt: 3, color: "#c7d7ff", textTransform: "none" }} onClick={fetchJobs}>Refresh Jobs</Button>
      </Box>

      {/* Main area */}
      <Box sx={{ flex: 1, position: "relative", backgroundColor: "#fff" }}>
        <Box component="img" src={logo} alt="logo watermark" sx={{ position: "absolute", top: "50%", left: "50%", width: "800px", height: "400px", objectFit: "contain", opacity: 0.07, transform: "translate(-50%, -50%)", pointerEvents: "none", zIndex: 0 }} />

        <Box sx={{ position: "relative", zIndex: 1, p: 3, overflowY: "auto", minHeight: "100vh" }}>
          {currentPage === "home" && (
            <Box sx={{ p: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>Welcome to Vyoobam Careers</Typography>
              <Typography sx={{ mt: 2 }}>Explore job and internship opportunities to start or advance your career with us.</Typography>
              <Button variant="contained" sx={{ mt: 3 }} onClick={() => setCurrentPage("jobs")}>View Openings →</Button>
            </Box>
          )}

          {currentPage === "jobs" && (
            <Box sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3, justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>Recent Openings</Typography>
                <Tabs value={category} onChange={(_, v) => setCategory(v)} sx={{ minHeight: 40 }}>
                  <Tab label="IT" value="IT" sx={{ fontWeight: "bold" }} />
                  <Tab label="BPM" value="BPM" sx={{ fontWeight: "bold" }} />
                </Tabs>
                <TextField placeholder="Search by role, skills, location..." variant="outlined" size="small" sx={{ width: 300, backgroundColor: "#fafafa" }} value={search} onChange={(e) => setSearch(e.target.value)} />
              </Box>

              {loading ? (
                <Typography>Loading jobs...</Typography>
              ) : (
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 1 }}>
                  {filteredJobs.length > 0 ? filteredJobs.map((job) => <InfoCard key={job._id || job.title} data={job} />) : <Typography sx={{ mt: 5 }}>No jobs found.</Typography>}
                </Box>
              )}
            </Box>
          )}

          {currentPage === "internship" && (
            <Box sx={{ p: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Internship Opportunities</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>{internship.map((item, i) => <InfoCard key={i} data={item} type="internship" />)}</Box>
            </Box>
          )}
        </Box>
      </Box>

      {/* Multi-step Apply Dialog (grouped steps) */}
      <Dialog open={openForm} onClose={closeApplyForm} maxWidth="md" fullWidth>
        <DialogContent dividers sx={{ backgroundImage: `url(${back})`, backgroundSize: "cover", backgroundPosition: "center", p: 4, minHeight: 520 }}>
          <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)", zIndex: 1 }} />

          <Box sx={{ background: "white", p: 6, borderRadius: 3, boxShadow: 5, maxWidth: "720px", width: "100%", zIndex: 2, position: "relative", mt: 2, ml: 8 }}>
            {/* Header */}
            <Box textAlign="center" mb={3}>
              <Typography variant="h5" fontWeight={700}>Apply — {selectedJob?.title || (applyType === "internship" ? "Internship" : "General")}</Typography>
              <Typography sx={{ color: "#4a4c5a" }}>Follow the steps (1 → 5) to complete your application.</Typography>
            </Box>

            {/* Stepper content */}
            {step === 1 && (
              <Box>
                <Typography variant="h6" fontWeight={600} mb={2}>Personal Information *</Typography>
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <TextField fullWidth label="First name" value={personal.firstName} onChange={(e) => setPersonal((p) => ({ ...p, firstName: e.target.value }))} />
                  <TextField fullWidth label="Last name" value={personal.lastName} onChange={(e) => setPersonal((p) => ({ ...p, lastName: e.target.value }))} />
                </Box>
                <TextField fullWidth label="Email" value={personal.email} onChange={(e) => setPersonal((p) => ({ ...p, email: e.target.value }))} sx={{ mb: 2 }} />
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <TextField fullWidth label="Phone" value={personal.phone} onChange={(e) => setPersonal((p) => ({ ...p, phone: e.target.value }))} />
                  <TextField fullWidth label="Pincode" value={personal.pincode} onChange={(e) => setPersonal((p) => ({ ...p, pincode: e.target.value }))} />
                </Box>
                <TextField fullWidth label="City" value={personal.city} onChange={(e) => setPersonal((p) => ({ ...p, city: e.target.value }))} />

                {/* inline validation hints */}
                <Box mt={1}>
                  {(!personal.firstName || !personal.lastName) && <Typography color="error">First & last name required</Typography>}
                  {personal.email && !validateEmail(personal.email) && <Typography color="error">Invalid email</Typography>}
                  {personal.phone && !validatePhone(personal.phone) && <Typography color="error">Invalid phone</Typography>}
                  {personal.pincode && !validatePincode(personal.pincode) && <Typography color="error">Invalid pincode</Typography>}
                </Box>
              </Box>
            )}

            {step === 2 && (
              <Box>
                <Typography variant="h6" fontWeight={600} mb={2}>Education Information *</Typography>
                <TextField select fullWidth label="Highest Qualification" value={education.highestQualification} onChange={(e) => setEducation((ed) => ({ ...ed, highestQualification: e.target.value }))} sx={{ mb: 2 }}>
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="B.Tech">B.Tech</MenuItem>
                  <MenuItem value="M.Tech">M.Tech</MenuItem>
                  <MenuItem value="BSc">BSc</MenuItem>
                  <MenuItem value="Diploma">Diploma</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
                <TextField fullWidth label="College" value={education.college} onChange={(e) => setEducation((ed) => ({ ...ed, college: e.target.value }))} sx={{ mb: 2 }} />
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <TextField fullWidth label="CGPA / %" value={education.cgpa} onChange={(e) => setEducation((ed) => ({ ...ed, cgpa: e.target.value }))} />
                  <TextField fullWidth label="Passout Year" value={education.passoutYear} onChange={(e) => setEducation((ed) => ({ ...ed, passoutYear: e.target.value }))} />
                </Box>

                <Typography mb={1}>Skills</Typography>
                {["Frontend Developer", "Backend Developer", "Fullstack Developer", "UI/UX", "QA"].map((s) => (
                  <FormControlLabel key={s} control={<Checkbox checked={education.skills.includes(s)} onChange={() => toggleSkill(s)} />} label={s} />
                ))}

              </Box>
            )}

            {step === 3 && (
              <Box>
                <Typography variant="h6" fontWeight={600} mb={2}>Role-specific Questions *</Typography>

                {applyType === "job" && (
  <>
    {/* Job Type Dropdown */}
    <TextField
      select
      label="Job Type"
      fullWidth
      value={jobType}
      onChange={(e) => setJobType(e.target.value)}
      sx={{ mb: 3 }}
    >
      <MenuItem value="fresher">Fresher</MenuItem>
      <MenuItem value="experienced">Experienced</MenuItem>
      <MenuItem value="career-changer">Career Changer</MenuItem>
    </TextField>

    {/* -------------------- Fresher UI -------------------- */}
    {jobType === "fresher" && (
  <>
    <TextField
      fullWidth
      label="What field are you most interested in?"
      value={roleSpecific.fresherInterest}
      onChange={(e) =>
        setRoleSpecific((r) => ({ ...r, fresherInterest: e.target.value }))
      }
      sx={{ mb: 2 }}
    />
    <TextField
      fullWidth
      multiline
      rows={3}
      label="Tell us why you would be a good fit for this role"
      value={roleSpecific.fresherWhyHire}
      onChange={(e) =>
        setRoleSpecific((r) => ({ ...r, fresherWhyHire: e.target.value }))
      }
    />
  </>
)}


    {/* -------------------- Experienced UI -------------------- */}
    {jobType === "experienced" && (
      <>
        <TextField
          fullWidth
          type="number"
          label="Total Experience (years)"
          value={roleSpecific.experienceYears}
          onChange={(e) =>
            setRoleSpecific((r) => ({ ...r, experienceYears: e.target.value }))
          }
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Area of Expertise"
          value={roleSpecific.expertise}
          onChange={(e) =>
            setRoleSpecific((r) => ({ ...r, expertise: e.target.value }))
          }
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Previous Company"
          value={roleSpecific.prevCompany}
          onChange={(e) =>
            setRoleSpecific((r) => ({ ...r, prevCompany: e.target.value }))
          }
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          multiline
          rows={2}
          label="Reason for change (optional)"
          value={roleSpecific.changeReason}
          onChange={(e) =>
            setRoleSpecific((r) => ({ ...r, changeReason: e.target.value }))
          }
        />
      </>
    )}

    {/* -------------------- Career Changer UI -------------------- */}
    {jobType === "career-changer" && (
      <>
        <TextField
          fullWidth
          label="Previous Field"
          value={roleSpecific.prevField}
          onChange={(e) =>
            setRoleSpecific((r) => ({ ...r, prevField: e.target.value }))
          }
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          multiline
          rows={2}
          label="Why do you want to change field?"
          value={roleSpecific.changeReasonCareer}
          onChange={(e) =>
            setRoleSpecific((r) => ({ ...r, changeReasonCareer: e.target.value }))
          }
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Skills learned for new field"
          value={roleSpecific.newSkills}
          onChange={(e) =>
            setRoleSpecific((r) => ({ ...r, newSkills: e.target.value }))
          }
        />
      </>
    )}
  </>
)}


                {applyType === "internship" && (
                  <>
                    <TextField fullWidth label="Internship Domain" value={roleSpecific.internshipDomain} onChange={(e) => setRoleSpecific((r) => ({ ...r, internshipDomain: e.target.value }))} sx={{ mb: 2 }} />
                    <TextField fullWidth label="Why do you want this internship?" multiline rows={3} value={roleSpecific.whyIntern} onChange={(e) => setRoleSpecific((r) => ({ ...r, whyIntern: e.target.value }))} sx={{ mb: 2 }} />
                    <TextField fullWidth label="Availability (hours/week)" value={roleSpecific.availabilityHours} onChange={(e) => setRoleSpecific((r) => ({ ...r, availabilityHours: e.target.value }))} />
                  </>
                )}

                {!applyType && (
                  <Typography color="textSecondary">No role-specific questions for general applications.</Typography>
                )}

              </Box>
            )}

            {step === 4 && (
              <Box>
                <Typography variant="h6" fontWeight={600} mb={2}>Upload Resume *</Typography>
                <Button variant="contained" component="label">
                  Upload Resume
                  <input hidden type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResumeFile(e.target.files && e.target.files[0])} />
                </Button>
                <Box mt={2}>{resumeFile ? <Typography>Selected: {resumeFile.name}</Typography> : <Typography color="error">No resume selected</Typography>}</Box>
              </Box>
            )}

            {step === 5 && (
              <Box textAlign="center" py={4}>
                {submitSuccess ? (
                  <>
                    <Typography variant="h5" fontWeight={700} color="green">Submitted successfully!</Typography>
                    <Typography mt={2}>Thank you. We'll contact you soon.</Typography>
                  </>
                ) : (
                  <>
                    <Typography variant="h6" mb={2}>Review & Submit</Typography>
                    <Box textAlign="left" sx={{ maxHeight: 240, overflowY: "auto", textAlign: "left" }}>
                      <Typography><strong>Name:</strong> {personal.firstName} {personal.lastName}</Typography>
                      <Typography><strong>Email:</strong> {personal.email}</Typography>
                      <Typography><strong>Phone:</strong> {personal.phone}</Typography>
                      <Typography><strong>College:</strong> {education.college} ({education.highestQualification})</Typography>
                      <Typography><strong>Applied For:</strong> {selectedJob?.title || (applyType === "internship" ? "Internship" : "General")}</Typography>
                      <Typography><strong>Role Info:</strong> {applyType === "job" ? `${roleSpecific.experienceYears} yrs — ${roleSpecific.expertise}` : applyType === "internship" ? `${roleSpecific.internshipDomain}` : "-"}</Typography>
                    </Box>
                  </>
                )}
              </Box>
            )}

            {/* feedback */}
            {submitError && (
              <Box mt={2}><Alert severity="error">{submitError}</Alert></Box>
            )}

            {/* Navigation Buttons */}
            <Box mt={3} display="flex" justifyContent={step === 1 ? "center" : "space-between"} alignItems="center">
              {step > 1 ? (
                <Button variant="outlined" onClick={handlePrev} sx={{ borderRadius: 3, textTransform: "none" }}>← Previous</Button>
              ) : <span />}

              <Box>
                {step < 4 && (
                  <Button variant="outlined" onClick={handleNext} sx={{ textTransform: "none" }}>Next →</Button>
                )}

                {step === 4 && (
                  <Button variant="contained" onClick={() => setStep(5)} sx={{ ml: 2, textTransform: "none" }}>Proceed to Review</Button>
                )}

                {step === 5 && !submitSuccess && (
                  <Button variant="contained" onClick={handleSubmit} disabled={submitting} sx={{ ml: 2, textTransform: "none" }}>
                    {submitting ? <CircularProgress size={18} color="inherit" /> : "Submit"}
                  </Button>
                )}

                {step === 5 && submitSuccess && (
                  <Button variant="outlined" onClick={closeApplyForm} sx={{ ml: 2, textTransform: "none" }}>Close</Button>
                )}
              </Box>
            </Box>

          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
