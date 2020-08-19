const sinespApi = require('sinesp-api');
const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 3000;

async function getPlate(plate) {
    return await sinespApi.search(plate);
}

app.get('/:key?', async(req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    let plate = req.params.key
    let a = await getPlate(plate)
    res.end(JSON.stringify(a));
})

app.listen(port, hostname, (req, res) => {
    console.log(`Server running at http://${hostname}:${port}/`);
});