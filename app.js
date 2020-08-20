// set up ======================================================================
const hostname = 'localhost';
const port = 3000;
const express = require('express')
const bodyParser = require('body-parser');
const router = require('./routes/web');
const app = express();
const fs = require('fs');

try {

    app.listen(port, hostname, (req, res) => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });

    app.use( bodyParser.json() );       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    }));
        
    app.use('/', router);

} catch (error) {
    return JSON.stringify({'error' : 'dont load server', 'infos': error});
}
