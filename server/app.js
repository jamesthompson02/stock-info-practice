const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const router = require('./controllers/routes');

app.use('',  router);

app.use(cors());

app.use(express.json());

app.listen(`${port}`, () => {
    console.log(`Server is now running at port ${port}`);
})
