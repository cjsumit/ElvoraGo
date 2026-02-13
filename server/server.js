require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message",
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.status(200).json({ message: "Email sent successfully" });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
