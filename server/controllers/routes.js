const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const { writeFile } = require('fs');
require('dotenv').config()
const apiKey = process.env.API_KEY;
const apiKey2 = process.env.API_KEY_2;
const axios = require('axios');

router.use(cors());

router.use(express.json());

// Get routes

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

//     const yellowStone = async () => {
//         const { data } = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=ysac-u&apikey=${apiKey}');
//         console.log(data);
//     }
//     yellowStone();
    
//     res.send("Test");
// })

// Post routes

router.post('/api/stock/growth', urlEncodedParser, async (req, res) => {
    const { stock } = req.body;
    res.json(`${stock} received by growth url endpoint`)
})

router.post('/api/stock/value', urlEncodedParser, async (req, res) => {
    const { stock } = req.body;
    try {
        const { data } = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stock}&apikey=${apiKey}`);
        const { Name, PERatio, PEGRatio, PriceToBookRatio } = data;
        const data1 = await axios.get(`https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${stock}&apikey=${apiKey2}`);
        const { totalAssets, totalLiabilities } = data1.data.annualReports[0];
        let debtToEquity = parseInt(totalLiabilities) / (parseInt(totalAssets) - parseInt(totalLiabilities));
        debtToEquity = debtToEquity.toFixed(2);
        res.json({
            name: Name,
            priceToEarnings: parseFloat(PERatio).toFixed(2),
            pegRatio: parseFloat(PEGRatio).toFixed(2),
            priceToBook: parseFloat(PriceToBookRatio).toFixed(2),
            debtToEquity: debtToEquity
        }) 

    } catch (err) {
        res.json({
            name: "error",
            priceToEarnings: "error",
            pegRatio: "error",
            priceToBook: "error",
            debtToEquity: "error"
        })
    }
    
    
})


// Error 404 route


router.all('*', (req, res) => {
    res.status(404).send("Resource not found. Invalid URL");
})



module.exports = router