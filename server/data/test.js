const csv = require('csv-parser')
const {readFileSync, createReadStream, writeFile, writeFileSync } = require('fs')


// let results = [];

// createReadStream('data.csv')
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     results = JSON.stringify(results);
//     // console.log(results.slice(0,2));

// });

// setTimeout(() => {
//     writeFile('securities.json', results, 'utf8', function (err) {
//     if (err) {
//         console.log('Some error occured - file either not saved or corrupted file saved.');
//     } else{
//         console.log('It saved!');
//     }
//     });
                

// }, 5000);



//



// let results = readFileSync('securities.json', 'utf8', function (err) {
//         if (err) {
//             console.log('File not read');
//         } else{
//             console.log('File read');
//         }
//         }  )

// results = JSON.parse(results);

// let stocks = [];

// setTimeout(() => {
//     for (let each of results) {
//         if (each.assetType === "Stock") {
//             stocks.push(each);
//         }
//     }

// }, 5000)


// setTimeout(() => {

//     writeFileSync('stocks.json', JSON.stringify(stocks), 'utf8', function (err) {
//         if (err) {
//             console.log('Some error occured - file either not saved or corrupted file saved.');
//         } else{
//             console.log('It saved!');
//         }
//         } )

// }, 7000)



//



// let stocks = readFileSync('stocks.json', 'utf8');

// stocks = JSON.parse(stocks);

// setTimeout(() => {
//     console.log(stocks[stocks.length - 1]);
// }, 3000);





