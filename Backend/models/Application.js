const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema(
  {
    personal: Object,
    education: Object,
    roleSpecific: Object,
    applyType: String,
    appliedFor: String,
    uploadedResume: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", ApplicationSchema);
