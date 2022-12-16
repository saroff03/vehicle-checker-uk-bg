const express = require("express");
const router = express.Router();
const axios = require('axios');

//Env vars
const API_URL = process.env.API_URL
const API_KEY = process.env.API_KEY

router.post('/', (req, res) => {
  const body = req.body;

  // Make a request to the backend API
  axios.post(`${API_URL}`, body,
    {
      headers: {
        "Content-Type": "application/json",
        'x-api-key': `${API_KEY}`
      }
    }
  )
    .then((response) => {
      // Return the response from the backend API to the client
      res.send(response.data);
    })
    .catch((error) => {
      // Handle any errors
      res.status(500).send(error);
    });
});

module.exports = router;