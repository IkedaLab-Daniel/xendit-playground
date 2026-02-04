require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const XENDIT_KEY = process.env.XENDIT_SECRET_KEY;
const PORT = 8070;

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
})