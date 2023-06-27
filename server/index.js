const express = require("express");
require("dotenv").config();
const app = express();
const { connection } = require("./Config/db");
const PORT = process.env.PORT || 9000;
// Start the server
app.listen(PORT, async () => {
  try {
    await connection; // Wait for the database connection to be established
    console.log(`Server is running on ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
