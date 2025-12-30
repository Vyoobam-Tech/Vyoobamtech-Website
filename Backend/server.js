const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;

const cors = require("cors");

app.use(cors({
  origin: "https://vyoobamtech-website-1-zcuh.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));


app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/vyoobam-careers", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));


const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF, DOC, and DOCX files are allowed"));
    }
  },
});

app.post("/api/contact", upload.single("resume"), async (req, res) => {
  console.log("Backend Route Hit:", req.body);

  try {
    const { firstName, lastName, email, purpose, message } = req.body;

    // FIX: If purpose is missing
    if (!purpose) {
      return res.status(400).json({ success: false, message: "Purpose required" });
    }

    
    const hrTransporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "helpdesk@vyoobam.com",
        pass: "Help@vyoobam123",
      },
       family: 4,
       tls: {
        rejectUnauthorized: false,
             },
    });

    const userTransporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "helpdesk@vyoobam.com",
        pass: "Help@vyoobam123",
      },
       family: 4,
       tls: {
         rejectUnauthorized: false,
       },
    });

    let hrEmail =
      purpose.toLowerCase().includes("internship") ||
      purpose.toLowerCase().includes("job")
        ?"manishaselvakumar03@gmail.com"
        : "keerthivashiniganesan@gmail.com";

    console.log("Sending HR mail to:", hrEmail);

    // MAIL TO HR
    await hrTransporter.sendMail({
      from: "helpdesk@vyoobam.com",
      to: hrEmail,
      replyTo: email,
      subject: `New Contact Form Submission - ${purpose}`,
      text: `
New contact form submission:

Name: ${firstName} ${lastName}
Email: ${email}
Purpose: ${purpose}
Message: ${message}
      `,
      attachments: req.file
        ? [
            {
              filename: req.file.originalname,
              content: req.file.buffer,
            },
          ]
        : [],
    });

    console.log("HR mail sent successfully");

    // MAIL TO USER (confirmation)
    await userTransporter.sendMail({
      from: "helpdesk@vyoobam.com",
      to: email,
      subject: `Your ${purpose} submission is received`,
      text: `Hi ${firstName},

Thank you for your submission. Our team will contact you soon.

Best regards,
Vyoobam Team`,
    });

    console.log("User mail sent successfully");

    res.json({ success: true, message: "Emails sent successfully!" });

  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // File too large or other Multer errors
    return res.status(400).json({ success: false, message: err.message });
  } else if (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  next();
});

const adminAuth = require("./middleware/adminAuth");

const jobsRouter = require("./routes/jobs");
app.use("/api/careers", jobsRouter);
const applyRouter = require("./routes/apply");
app.use("/api/apply", applyRouter);
          

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);


