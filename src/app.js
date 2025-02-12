const express = require("express");
const currencyRoutes = require("./routes/currencyRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

//------------ Routes ------------//
app.use("/api/auth", authRoutes);
app.use("/api/currency", currencyRoutes);

module.exports = app;