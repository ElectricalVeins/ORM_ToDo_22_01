'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING(32),
      allowNull: false,
      is: /[A-Z][a-z]*/
    },
    lastName: {
      allowNull: false,
      is: /[A-Z][a-z]*/,
      type: DataTypes.STRING(32)
    },
    login: {
      allowNull: false,
      is: /^[^ ^()*&|\\/]{6,16}$/,
      unique: true,
      type: DataTypes.STRING
    },
    passwordHash: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: true,
      unique: true,
      isEmail: true,
      type: DataTypes.STRING
    }
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};