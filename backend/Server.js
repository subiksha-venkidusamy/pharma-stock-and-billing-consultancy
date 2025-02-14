const express = require("express");
const cors = require("cors");
const admin = require("./config/firebaseAdmin"); // Import Firebase Admin

const app = express();
app.use(cors());
app.use(express.json());

// API to Verify Firebase Token
app.post("/verify-token", async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; 
    const decodedToken = await admin.auth().verifyIdToken(token);
    res.json({ success: true, uid: decodedToken.uid });
  } catch (error) {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
