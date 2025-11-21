import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Typography, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import axios from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

const emptyJob = { category: "IT", title: "", skills: "", experience: "", duration: "", location: "" };

export default function AdminCareer() {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState(emptyJob);
  const [editingId, setEditingId] = useState(null);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [toDelete, setToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("adminKey")) {
      navigate("/admin-login"); // safety redirect if not logged in
      return;
    }
    fetchJobs();
    // eslint-disable-next-line
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("/api/careers");
      setJobs(res.data);
    } catch (err) {
      alert("Failed to load jobs");
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const createJob = async () => {
    try {
      await axios.post("/api/careers", form);
      setForm(emptyJob);
      fetchJobs();
    } catch (err) {
      alert(err?.response?.data?.message || "Add failed");
    }
  };

  const startEdit = (job) => {
    setEditingId(job._id);
    setForm({ category: job.category, title: job.title, skills: job.skills, experience: job.experience, duration: job.duration, location: job.location });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateJob = async () => {
    try {
      await axios.put(`/api/careers/${editingId}`, form);
      setEditingId(null);
      setForm(emptyJob);
      fetchJobs();
    } catch (err) {
      alert(err?.response?.data?.message || "Update failed");
    }
  };

  const confirmDelete = (id) => { setToDelete(id); setOpenConfirm(true); };
  const doDelete = async () => {
    try {
      await axios.delete(`/api/careers/${toDelete}`);
      setOpenConfirm(false);
      setToDelete(null);
      fetchJobs();
    } catch (err) {
      alert("Delete failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("adminKey");
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Box sx={{ width: 220, background: "#0A1B3B", color: "#fff", p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Vyoobam Admin</Typography>
        <Button fullWidth variant="contained" color="info" onClick={() => { setEditingId(null); setForm(emptyJob); }} sx={{ mb: 1 }}>Add Job</Button>
        <Button fullWidth onClick={fetchJobs} sx={{ mb: 1 }}>Refresh</Button>
        <Button fullWidth color="error" onClick={logout}>Logout</Button>
      </Box>

      {/* Main */}
      <Box sx={{ flex: 1, p: 3 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>{editingId ? "Edit Job" : "Add New Job"}</Typography>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2, mb: 2 }}>
          <TextField label="Category" name="category" value={form.category} onChange={handleChange} select fullWidth>
            <MenuItem value="IT">IT</MenuItem>
            <MenuItem value="BPM">BPM</MenuItem>
            <MenuItem value="Internship">Internship</MenuItem>
          </TextField>
          <TextField label="Title" name="title" value={form.title} onChange={handleChange} fullWidth />
          <TextField label="Skills (comma separated)" name="skills" value={form.skills} onChange={handleChange} fullWidth />
          <TextField label="Experience" name="experience" value={form.experience} onChange={handleChange} fullWidth />
          <TextField label="Duration" name="duration" value={form.duration} onChange={handleChange} fullWidth />
          <TextField label="Location" name="location" value={form.location} onChange={handleChange} fullWidth />
        </Box>

        <Box sx={{ mb: 4 }}>
          {!editingId ? (
            <Button variant="contained" onClick={createJob} sx={{ mr: 2 }}>Create</Button>
          ) : (
            <Button variant="contained" onClick={updateJob} sx={{ mr: 2 }}>Update</Button>
          )}
          <Button variant="outlined" onClick={() => { setEditingId(null); setForm(emptyJob); }}>Clear</Button>
        </Box>

        <Typography variant="h5" sx={{ mb: 2 }}>Existing Jobs</Typography>
        {jobs.length === 0 && <Typography>No jobs found.</Typography>}
        {jobs.map((j) => (
          <Box key={j._id} sx={{ border: "1px solid #ddd", p: 2, mb: 2, borderRadius: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box>
              <Typography variant="h6">{j.title}</Typography>
              <Typography>{j.category} • {j.experience} • {j.location}</Typography>
              <Typography sx={{ mt: 1, color: "text.secondary" }}>{j.skills}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button onClick={() => startEdit(j)}>Edit</Button>
              <Button color="error" onClick={() => confirmDelete(j._id)}>Delete</Button>
            </Box>
          </Box>
        ))}

        {/* Confirm dialog */}
        <Dialog open={openConfirm} onClose={() => setOpenConfirm(false)}>
          <DialogTitle>Confirm delete?</DialogTitle>
          <DialogContent>Are you sure you want to delete this job?</DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenConfirm(false)}>Cancel</Button>
            <Button color="error" onClick={doDelete}>Delete</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}
