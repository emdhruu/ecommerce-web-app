const User = require("../models/user");

const register = async (req, res) => {
  const { username, password } = req.body;

  if (password.length < 6) {
    res.status(400).json({ message: "Password must be greater then 6 letter" });
    return;
  }

  try {
    const user = await User.create({ username, password });
    res
      .status(200)
      .json({ message: "Successfully created user and password", user });
  } catch (error) {
    res
      .status(401)
      .json({ message: "failed to create user", error: error.message });
    console.log(error);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "Username or password is not present" });
    return;
  }

  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      res.status(401).json({ message: "User not found" });
      return;
    } else {
      res.status(200).json({ message: "Login Successfully", user });
      return;
    }
  } catch (error) {
    res.status(400).json({ message: "failed to Login", error: error.message });
  }
};

module.exports = { register, login };
