const express = require("express");
const cors = require("cors");

const invoicesRoutes = require("./routes/invoices");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());
// log middleware
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// invoices routes
app.use("/api/invoices", invoicesRoutes);

const PORT = process.env.PORT || 4000;

// listen for requests
app.listen(`${PORT}`, () => {
  console.log(`Server started on port ${PORT}`);
});
