const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  category: { type: String, required: true }, // IT / BPM / Internship
  title: { type: String, required: true },
  skills: { type: String, required: true },
  experience: { type: String },
  duration: { type: String },
  location: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Job", JobSchema);
