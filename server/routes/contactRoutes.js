const express = require("express");
const router = express.Router();
console.log("Contact route loaded");
const Contact = require("../models/Contact");

router.post("/contact", async (req, res) => {
    console.log("Received data:", req.body);
    try {
        const { name, email, msg } = req.body;

        const newContact = new Contact({
            name,
            email,
            msg
        });

        await newContact.save();
console.log("Saved data:", newContact);
        res.status(201).json({
            message: "Message saved successfully"
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

module.exports = router;