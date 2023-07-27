const { Router } = require('express');
const sliderRouter = Router();


sliderRouter.get('/', async (req, res) => {
    let data = [];
    try {
        res.status(200).send({ status: "YES", data });
    }
    catch (err) {
        res.status(404).send({ msg: "Login failed" });
    }
});

module.exports = { sliderRouter };

