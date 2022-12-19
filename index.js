require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const cors = require("cors");
const PORT = process.env.PORT || 3030;


app.use(cors());

//Env vars
const API_URL = process.env.API_URL
const API_KEY = process.env.API_KEY

app.use(bodyParser.json());

app.use(express.static("src"));

//Routes
app.use("/vehicleinfo", require("./routes"));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

