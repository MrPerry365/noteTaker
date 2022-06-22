const express = require('express');
const fs = require('fs');

const PORT = process.env.PORT || 3000;
const app = express();




app.listen(3000, () => {
    console.log(`API server now on port ${PORT}!`);
});