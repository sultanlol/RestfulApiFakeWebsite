const express = require("express");
const cors = require('cors');
require("dotenv").config();

const app = express();
const api = require("./routes/api");

app.use(cors());
app.use(express.json());
app.use("/api", api);

app.get("/", (request, response) => {
  response.json({ welcome: "hello prisma." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});



