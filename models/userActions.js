const knex = require('knex');
const config = require('../knexfile');
const userDb = knex(config.development);

// FUNCTION TO CREATE USER

async function createUser(user) {
    const [id] = await userDb("users").insert(user);
    return id;
}

// FUNCTION TO GET ALL USERS

async function getAllUsers() {
    return userDb('users');
}

// FUNCTION TO GET SINGLE USER

async function getSingleUser(id) {
    return userDb('users')
        .where({ id: id })
        .first();
}

// FUNCTION TO DELETE SINGLE USER

async function deleteSingleUser(id) {
    return userDb('users')
        .where({ id: id })
        .del();
}

// FUNCTION TO UPDATE SINGLE USER

async function singleUpdateUser(id, changes) {
    return userDb('users')
        .where({ id: id })
        .update(changes)
        .then(() => {
            return getSingleUser(id);
        })
}

module.exports = {
    createUser,
    getAllUsers,
    getSingleUser,
    deleteSingleUser,
    singleUpdateUser
}