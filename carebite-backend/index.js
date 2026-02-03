const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");//
const workerRoutes = require("./routes/worker");//
const gmhospitalRoutes = require("./routes/gm_hospital");//
const supervisorRoutes = require("./routes/supervisor");//
const admRoutes = require("./routes/adm");//
const gmcRoutes = require("./routes/gmc");//
const gsRoutes = require("./routes/gs");//
const donorRoutes = require("./routes/donor");//
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 8000;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Hello route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// API routes
app.use("/api/auth", authRoutes);//
app.use("/api/worker", workerRoutes);//
app.use("/api/gmh",gmhospitalRoutes);//
app.use("/api/sup",supervisorRoutes);//
app.use("/api/adm",admRoutes);//
app.use("/api/gmc",gmcRoutes);//
app.use("/api/gs",gsRoutes);//
app.use("/api/donor",donorRoutes);//

// Start server
app.listen(PORT, "0.0.0.0", () => {
 console.log(`Server running on port ${PORT}`);
});

// app.listen(PORT, () => {
//      console.log(`Server running on port 8000`);
//    });