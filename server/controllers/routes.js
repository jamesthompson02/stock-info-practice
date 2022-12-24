const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

router.use(cors());

router.use(express.json());

router.get('/', (req, res) => {
    res.status(200).send(`<h1>Home page</h1>`);
})


router.all('*', (req, res) => {
    res.status(404).send("Resource not found. Invalid URL");
})



module.exports = router