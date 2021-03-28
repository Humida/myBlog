const express = require('express');

const user_router = express.Router();

var users = [
    { id: 1, name: "User1", email: "user1@gmail.com", age: 31 },
    { id: 2, name: "User2", email: "user2@gmail.com", age: 20 },
    { id: 3, name: "User1", email: "user1.2@gmail.com", age: 25 }
];

user_router.get('/', (req, res) => {
    res.render('/public/index', {
        users: users
    });
})



module.exports = user_router;