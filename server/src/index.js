'use strict';

const { User } = require('./db/models');

/*


*/

async function createUser (user) {

}

async function updateUserById (id, data) {
  try {
    const updatedUser = (await User.update(data, {
      where: {
        id: id,
      },
      returning: true
    })
      
    )[1][0].get();
    return updatedUser
  } catch (e) {throw e;}
}

/*
async function updateUserById2 (id, data) {
  try {
const oldUser=await User.findByPk(id);
const updatedUser=await oldUser.update(data);
return updatedUser.get();
  } catch (e) {throw e;}
}
*/

async function deleteUser (id) {

  try {
    const user = await User.findByPk(id);
    if (user) {

    } else {
      throw new Error('404 resource not found');
    }
  } catch (e) {
    console.error(e);
  }

}

async function getUserById (id) {
  try {
    const user = await User.findByPk(id);
    if (user) {
      return user.get();
    } else {
      throw new Error('404 resource not found');
    }
  } catch (e) {
    console.error(e);
  }

}

/*
getUserById(8)
.then(console.log)
 .catch(console.error);

updateUserById(4,{firstName:'Ronald'})
.then(console.log)
 .catch(console.error);*/
