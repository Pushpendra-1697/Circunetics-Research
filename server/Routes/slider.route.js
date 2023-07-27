const { Router } = require('express');
const sliderRouter = Router();


sliderRouter.get('/', (req, res) => {
    try {
        res.status(200).send({ msg: "I am Slider Route" });
    }
    catch (err) {
        res.status(404).send({ msg: "Login failed" });
    }
});

module.exports = {sliderRouter};

