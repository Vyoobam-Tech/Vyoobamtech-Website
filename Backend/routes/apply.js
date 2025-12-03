const express = require("express");
const router = express.Router();
const multer = require("multer");
const nodemailer = require("nodemailer");
const Application = require("../models/Application");

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    cb(null, allowed.includes(file.mimetype));
  },
});

router.post("/", upload.single("resume"), async (req, res) => {


  try {
    if (!req.body.payload) {
      return res.status(400).json({ success: false, message: "Form data missing" });
    }

    const formData = JSON.parse(req.body.payload);
    const { personal, education, roleSpecific, applyType, appliedFor } = formData;
     const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const alreadyApplied = await Application.findOne({
      "personal.email": personal.email,
      appliedFor: appliedFor,
      createdAt: { $gte: sixMonthsAgo }
    });

    if (alreadyApplied) {
      return res.status(400).json({
        success: false,
        message: `You have already applied for ${appliedFor}. You can re-apply after 6 months.`
      });
    }
    await Application.create({
      personal,
      education,
      roleSpecific,
      applyType,
      appliedFor,
      uploadedResume: req.file ? req.file.originalname : null
    });

    const filterFields = (obj) => {
      const result = {};
      Object.keys(obj).forEach((key) => {
        if (obj[key] && obj[key] !== "" && obj[key] !== null) {
          result[key] = obj[key];
        }
      });
      return result;
    };

    const mailPersonal = filterFields(personal);
    const mailEducation = filterFields(education);
    const mailRole = filterFields(roleSpecific);

    let hrBody = `
New ${applyType} Application Submitted:

Personal Details:
${JSON.stringify(mailPersonal, null, 2)}

Education Details:
${JSON.stringify(mailEducation, null, 2)}

Role Specific Details:
${JSON.stringify(mailRole, null, 2)}

Applied For: ${appliedFor || "-"}
`.trim();

    const hrEmail =
      applyType === "internship"
        ? "keerthivashini5@gmail.com"
        : "keerthivashiniganesan@gmail.com";

 
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "helpdesk@vyoobam.com",
        pass: "Help@vyoobam123",
      },
      tls: { rejectUnauthorized: false },
    });


    await transporter.sendMail({
      from: "helpdesk@vyoobam.com",
      to: hrEmail,
      replyTo: personal.email,
      subject: `New ${applyType} Application - ${personal.firstName} ${personal.lastName}`,
      text: hrBody,
      attachments: req.file
        ? [{ filename: req.file.originalname, content: req.file.buffer }]
        : [],
    });

   
    await transporter.sendMail({
      from: "helpdesk@vyoobam.com",
      to: personal.email,
      subject: `Your ${applyType} application is received`,
      text: `Hi ${personal.firstName},\n\nThank you for your application for ${appliedFor || applyType}. We will contact you soon.\n\nBest regards,\nVyoobam Team`,
    });

    res.json({ success: true, message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Job Application Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
