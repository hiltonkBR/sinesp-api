const hostname = '127.0.0.1';
const port = 3000;
const express = require('express')
const bodyParser = require('body-parser');
const router = require('./routes/web');
const app = express();

try {

    app.listen(port, hostname, (req, res) => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });

    app.use( bodyParser.json() );
    app.use(bodyParser.urlencoded({
        extended: true
    }));
        
    app.use('/', router);

} catch (error) {
    return JSON.stringify({'error' : 'dont load server', 'infos': error});
}
