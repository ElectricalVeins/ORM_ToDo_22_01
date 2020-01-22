'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: false,
        is: /[A-Z][a-z]*/,
        type: Sequelize.STRING(32)
      },
      lastName: {
        allowNull: false,
        is: /[A-Z][a-z]*/,
        type: Sequelize.STRING(32)
      },
      login: {
        allowNull: false,
        is: /^[^ ^()*&|\\/]{6,16}$/,
        unique: true,
        type: Sequelize.STRING(16)
      },
      passwordHash: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: true,
        unique: true,
        isEmail: true,
        type: Sequelize.STRING(128)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};