const { Router } = require('express');
const japanRouter = require('../controller/japan')
const jpRouter = Router();

jpRouter.get("/", japanRouter.index)

module.exports = jpRouter;