const { DataTypes  } = require('sequelize');
const {sequelize} = require('../connection.js')
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  bio: {
    type: DataTypes.STRING(100),
  },
  email: {
    type: DataTypes.STRING(200),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

module.exports = User;

//email, password, bio,name