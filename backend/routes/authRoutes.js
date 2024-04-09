const express = require("express");
const routes = express.Router();

const { register, login } = require("../controllers/Auth");

routes.post("/register", register);
routes.get("/login", login);

module.exports = routes;
