const knex = require('knex');
const config = require('../knexfile');
const userDb = knex(config.development);

// FUNCTION TO CREATE USER

async function createUser(user){
    const [id] = await userDb("users").insert(user);
    return id;
}

// FUNCTION TO GET ALL USERS

async function getAllUsers(){
    return userDb('users');
}

module.exports ={
    createUser,
    getAllUsers
}