const { User } = require('../models');

module.exports = {
  register: async (req, res) => {
    try {
      const user = await User.register(req.body);
      const { id, username } = user;
      res.json({
        id,
        username,
        accessToken: user.generateToken(),
      });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  login: async (req, res) => {
    try {
      const user = await User.authenticate(req.body);
      const { id, username } = user;
      res.json({
        id,
        username,
        accessToken: user.generateToken(),
      });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  whoami: (req, res) => {
    const { password, ...currentUser } = req.user.dataValues;
    res.json(currentUser);
  },
};
