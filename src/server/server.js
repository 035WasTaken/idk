const got = require('got');
const express = require('express');
const app = express();
const port = 3030;


app.get('../html/index.html')
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
