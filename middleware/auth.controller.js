const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const { secret } = require("../constants/config");

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class authController {
  async register(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Errors occured during the registration", errors });
      }
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res.status(400).json({
          message: `User with name ${username} is already registered`
        });
      }

      const hashedPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: "USER" });
      const user = new User({
        username,
        password: hashedPassword,
        roles: [userRole.value]
      });
      await user.save();
      return res.json({
        message: `User ${username} has successfuly registered`
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Reg error" });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res
          .status(400)
          .json({ message: `User ${username} is not found` });
      }

      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: `Password is not correct` });
      }
      const token = generateAccessToken(user._id, user.roles);
      return res.json({ token });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Login error" });
    }
  }

  async getUser(req, res) {
    try {
      const users = await User.find();
      res.header("Access-Control-Allow-Origin", "*");
      res.json(users);
    } catch (error) {
      console.log(error);
    }
  }

  async getCurrentUser(req, res) {
    try {
      const { id } = req.user;
      const self = await User.findById(id);
      res.json(self);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new authController();
