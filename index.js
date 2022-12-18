require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const cors = require("cors");
const PORT = process.env.PORT || 3030;
const rateLimit = require("express-rate-limit");


app.use(cors());

//Env vars
const API_URL = process.env.API_URL
const API_KEY = process.env.API_KEY

//Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, //10 mins
  max: 200,
})
app.use(limiter)
app.set("trust proxy")


app.use(bodyParser.json());

app.use(express.static("/src"));

//Routes
app.use("/vehicleinfo", require("./routes"));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

