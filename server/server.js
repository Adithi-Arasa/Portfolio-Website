const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors({
    origin: "http://127.0.0.1:5500"
}));
app.use(express.json());
const contactRoutes = require("./routes/contactRoutes");
app.use("/api", contactRoutes);
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Server is running successfully!");
});

mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000
})
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((error) => {
    console.log("MongoDB connection error:", error.message);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});