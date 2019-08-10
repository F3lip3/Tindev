const axios = require('axios');
const dev = require('../models/dev');

module.exports = {
    async index(req, res) {
        const { user } = req.headers;
        const loggedDev = await dev.findById(user);
        const users = await dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.dislikes } }
            ]
        });

        return res.json(users);
    },
    async store(req, res) {
        const { username: user } = req.body;
        const existingUser = await dev.findOne({ user });
        if (existingUser) {
            return res.json(existingUser);
        }

        const response = await axios.get(`https://api.github.com/users/${user}`);
        const { name, bio, avatar_url: avatar } = response.data;

        const newDev = await dev.create({
            name,
            user,
            bio,
            avatar
        });

        return res.json(newDev);
    }
};

// INDEX, SHOW, STORE, UPDATE, DELETE
