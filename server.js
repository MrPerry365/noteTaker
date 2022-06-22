const express = require('express');
const fs = require('fs');


const PORT = process.env.PORT || 3000;
const app = express();






app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});