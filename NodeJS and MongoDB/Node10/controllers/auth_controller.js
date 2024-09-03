const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
      this.users = data;
  },
};
const bcrypt = require("bcrypt");

const handleLogin = async (request, response) => {
  const { user, pwd } = request.body;
  if (!user || !pwd) {
      return response.status(400).json({ message: "User and password required." });
  }

  const userFound = usersDB.users.find((person) => person.username === user);
  if (!userFound) return response.sendStatus(401);
  const match = await bcrypt.compare(pwd, userFound.password);
  if (match) {
      response.json({ success: `User ${user} logged in.` });
  } else {
    response.sendStatus(401);
  }
};

module.exports = { handleLogin };