const express = require("express");
const cors = require("cors");
const placesRouter = require("./routes/japan")

const app = express()

app.use(express.json())
app.use(cors())

const logger = (req, res, next) => {
    console.log('Request received:', new Date(), req.method, req.url);
    next();
  };
  app.use(logger);

  app.use("/japan", placesRouter);


module.exports = app;