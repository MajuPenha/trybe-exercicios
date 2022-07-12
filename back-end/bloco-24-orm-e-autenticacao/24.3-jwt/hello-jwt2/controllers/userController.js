const userController = {

  userInfo: (req, res) => {
    const { username, adm } = req.user;
    res.status(200).json({ username, adm });
  },

};

module.exports = userController;