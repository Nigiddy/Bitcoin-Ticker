# Bitcoin Ticker

A simple Node.js and Express.js application that fetches cryptocurrency conversion rates for selected fiat currencies. Users can enter the amount of cryptocurrency, select a crypto type, and choose a fiat currency to view the real-time conversion value.

## Features
- Convert cryptocurrencies (Bitcoin, Ethereum, Litecoin) into fiat currencies (USD, EUR, GBP).
- Fetch live data from the BitcoinAverage API.
- User-friendly interface built with an HTML form.
- Lightweight and responsive backend using Express.js.

---

## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/en/) installed on your machine.
- An active internet connection.

### Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/Nigiddy/bitcoin-ticker.git
   cd bitcoin-ticker

2. Install dependencies:
   npm install
   
4. Start the server:
   node index.js
5. Open your browser and go to:
   http://localhost:3000

Usage
1. Enter the amount of cryptocurrency you want to convert.
2. Select the type of cryptocurrency (e.g., Bitcoin, Ethereum, Litecoin).
3. Choose the fiat currency you want to convert into (e.g., USD, GBP, EUR).
4. Click the "Check" button to view the converted value and current date.
