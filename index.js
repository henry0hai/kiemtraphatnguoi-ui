const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Proxy API endpoint
app.post("/checkplate", async (req, res) => {
  const { bienso, loaixe } = req.query; // Read query parameters

  console.log("Received query parameters:", req.query); // Log the query parameters for debugging

  if (!bienso) {
    return res.status(400).json({ error: "Missing required field: bienso" });
  }

  try {
    // Forward the request to your Go API using Docker service name as the host
    // The URL for the backend API is updated from http://localhost:8080 to http://server:8080. 
    // The server name corresponds to the server service defined in your docker-compose.yml.
    const response = await axios.post(
      "http://server:8080/checkplate", // Use the internal Docker network name for the backend
      // "http://localhost:8080/checkplate",
      new URLSearchParams({ bienso, loaixe }).toString(), // Encode the data
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Set the correct content type
        },
      }
    );

    return res.json(response.data); // Return the Go API response to the client
  } catch (error) {
    console.error("Error fetching data from API:", error.message);
    return res
      .status(error.response?.status || 500)
      .json({ error: error.response?.data?.error || "Failed to fetch data from API" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});