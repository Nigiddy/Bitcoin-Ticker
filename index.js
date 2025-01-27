const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", async function (req, res) {
  const crypto = req.body.crypto;
  const fiat = req.body.fiat;
  const amount = req.body.amount;

  try {
    // Use CoinGecko API as an example
    const response = await axios.get("https://api.coingecko.com/api/v3/simple/price", {
      params: {
        ids: crypto.toLowerCase(),
        vs_currencies: fiat.toLowerCase(),
      },
    });

    // Extract price
    const price = response.data[crypto.toLowerCase()][fiat.toLowerCase()];
    const totalValue = (price * amount).toFixed(2);

    // Send response to client
    res.write(`<p>The current price of 1 ${crypto} in ${fiat} is ${price}.</p>`);
    res.write(`<h1>${amount} ${crypto} is worth ${totalValue} ${fiat}.</h1>`);
    res.send();
  } catch (error) {
    console.error("Error fetching crypto data:", error.message);
    res.status(500).send("Unable to fetch cryptocurrency data. Please try again later.");
  }
});

// Start server
app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
