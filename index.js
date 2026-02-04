require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const XENDIT_KEY = process.env.XENDIT_SECRET_KEY;
const PORT = 8070;

// > Basic auth: username = secret key, password = blank
const authHeader = "Basic " + Buffer.from(`${XENDIT_KEY}`).toString("base64");

// > Create an invoice
app.post("/create-invoice", async (req, res) => {
    try {
         // ? sample
         const { amount = 100, email = "sample@gmail.com"} = req.body;

         const external_id = `order-${Date.now()}`;

         const resp = await axios.post(
            "https://api.xendit.co/v2/invoices",
            {
                external_id,
                amount, // > 100 -> PHP 100
                description: "sana gumana",
                success_redirect_url: `http://localhost:${PORT}/success`,
                failure_redirect_url: `http://localhost:${PORT}/failure`
            },
            {
                headers: {
                    Authorization: authHeader,
                    "Content-Type": "application/json",
                },
            }
         );
         
    } catch (ice) {

    }
})

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
})