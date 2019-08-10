const dev = require('../models/dev');

module.exports = {
    async store(req, res) {
        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await dev.findById(user);
        const targetDev = await dev.findById(devId);

        if (!targetDev) {
            return res.status(400).json({ error: 'Dev not exists!' });
        }
        if (loggedDev.likes.includes(targetDev._id)) {
            return res.status(400).json({ error: 'Dev already liked!' });
        }

        if (targetDev.likes.includes(loggedDev._id)) {
            console.dir('DEU MATCH');
        }

        loggedDev.likes.push(targetDev._id);
        await loggedDev.save();

        return res.json(loggedDev);
    }
};
