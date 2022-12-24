const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const { writeFile } = require('fs');
require('dotenv').config()
const apiKey = process.env.API_KEY;
const axios = require('axios');

router.use(cors());

router.use(express.json());

router.get('/', (req, res) => {
    res.status(200).send(`<h1>Home page</h1>`);
})

// router.get('/api/stocks', (req, res) => {
//     const getStockData = async () => {
//         const { data } = await axios.get(`https://www.alphavantage.co/query?function=LISTING_STATUS&apikey=${apiKey}`);
//         writeFile('./data/stocks.csv', data, 'utf8', function (err) {
//             if (err) {
//               console.log('Some error occured - file either not saved or corrupted file saved.');
//             } else{
//               console.log('It saved!');
//             }
//           });
        
//     }
//     getStockData();
//     res.send("Test");
// })


router.all('*', (req, res) => {
    res.status(404).send("Resource not found. Invalid URL");
})



module.exports = router