const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const { writeFile } = require('fs');
require('dotenv').config()
const apiKey = process.env.API_KEY;
const apiKey2 = process.env.API_KEY_2;
const apiKey3 = process.env.API_KEY_3;
const apiKey4 = process.env.API_KEY_4;
const apiKey5 = process.env.API_KEY_5;
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
    try {
        const { data } = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stock}&apikey=${apiKey3}`);
        const data1 = await axios.get(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${stock}&apikey=${apiKey4}`);
        const data2 = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${stock}&apikey=${apiKey5}`);
        let quarterly = data1.data.quarterlyReports;
        console.log(quarterly);
        console.log(quarterly[0]);
        let sharePriceKey = Object.values(data2.data['Monthly Time Series']);
        let netIncomeGrowth;
        let preTaxMarginGrowth;
        let returnOnEquity = data.ReturnOnEquityTTM;
        let sharePriceGrowthPercentage;

        if (Object.keys(data2.data['Monthly Time Series']).length > 60) {
            sharePriceGrowthPercentage = ((parseFloat(sharePriceKey[0]['4. close']) - parseFloat(sharePriceKey[60]['4. close']))/parseFloat(sharePriceKey[60]['4. close'])) * 100;
            sharePriceGrowthPercentage = sharePriceGrowthPercentage.toFixed(2);
        } else {

            sharePriceGrowthPercentage = ((parseFloat(sharePriceKey[0]['4. close']) - parseFloat(sharePriceKey[(Object.keys(data2.data['Monthly Time Series']).length - 1)]['4. close']))/parseFloat(sharePriceKey[(Object.keys(data2.data['Monthly Time Series']).length - 1)]['4. close'])) * 100;
            sharePriceGrowthPercentage = sharePriceGrowthPercentage.toFixed(2);
        }
        // console.log(Object.values(data2.data['Monthly Time Series'])[0]['4. close']);
        if ( quarterly.length > 1) {

            netIncomeGrowth = parseInt(quarterly[0].netIncome) - parseInt(quarterly[(quarterly.length -1)].netIncome);

            // Note: pretaxmargingrowth variable calculation is 4 lines long!

            const recentInvestmentIncome = parseInt(quarterly[0].investmentIncomeNet) || 0;
            const recentOtherNonOperatingIncome = parseInt(quarterly[0].otherNonOperatingIncome) || 0;
            const recentInterestExpense = parseInt(quarterly[0].interestExpense) || 0;
            const oldInvestmentIncome = parseInt(quarterly[(quarterly.length - 1)].investmentIncomeNet) || 0;
            const oldOtherNonOperatingIncome = parseInt(quarterly[(quarterly.length - 1)].otherNonOperatingIncome) || 0;
            const oldInterestExpense = parseInt(quarterly[(quarterly.length - 1)].interestExpense) || 0;


            preTaxMarginGrowth = (parseInt(quarterly[0].operatingIncome) + recentInvestmentIncome
            - recentInterestExpense + recentOtherNonOperatingIncome) -
            (parseInt(quarterly[(quarterly.length - 1)].operatingIncome) + oldInvestmentIncome
            - oldInterestExpense + oldOtherNonOperatingIncome);
            
            // console.log(parseInt(quarterly[0].operatingIncome));
            // console.log(parseInt(quarterly[0].investmentIncomeNet));
            // console.log(parseInt(quarterly[0].interestExpense));
            // console.log(parseInt(quarterly[0].otherNonOperatingIncome));
            // console.log(quarterly[0]);

        } else {
            netIncomeGrowth = "Not enough data";
            preTaxMarginGrowth = "Not enough data";

        }
        res.json({
            name: data.Name,
            preTaxMarginGrowth: preTaxMarginGrowth,
            netIncomeGrowth: netIncomeGrowth,
            ROE: returnOnEquity,
            sharePriceGrowth: sharePriceGrowthPercentage
        });
    } catch (err) {

        console.log(err);

        res.json({
            name: "error",
            preTaxMarginGrowth: "error",
            netIncomeGrowth: "error",
            ROE: "error",
            sharePriceGrowth: "error"
        });


    }
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
        console.log(err);

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