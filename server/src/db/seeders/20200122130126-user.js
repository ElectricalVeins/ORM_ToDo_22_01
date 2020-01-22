'use strict';
const bcrypt = require('bcrypt');

function generateUsers () {
  const users = [];
  for (let i = 11; i < 100;) {
    users.push({
                 firstName: 'John',
                 lastName: 'Doe',
                 login: `test_login${++i}`,
                 passwordHash: bcrypt.hashSync(`password${i}`,
                                               bcrypt.genSaltSync(10)),
                 email: `test${i}@gmail.com`,
                 createdAt: new Date(),
                 updatedAt: new Date()
               });
  }

  return users;
}

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', generateUsers(), {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
