const { Router } = require('express');
const sliderRouter = Router();


sliderRouter.get('/', async (req, res) => {
    let data = [30, 50, 20, 70, 40, 90, 10, 60, 80, 25];
    
    try {
        res.status(200).send({ status: "YES", data });
    }catch (err) {
        res.status(404).send({ msg: "Login failed" });
    }
});

module.exports = { sliderRouter };

