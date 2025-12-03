const express = require("express");
const router = express.Router();
const Job = require("../models/Job");
const adminAuth = require("../middleware/adminAuth"); // we'll create in server.js to keep one-file simple


router.post("/", adminAuth, async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.json({ success: true, job });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", adminAuth, async (req, res) => {
  try {
    const updated = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, job: updated });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.delete("/:id", adminAuth, async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
