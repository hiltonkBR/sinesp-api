const express = require('express')
const sinespApi = require('sinesp-api');
const rateLimit = require("express-rate-limit");
const router = express.Router();
const  app = express();

const createAccountLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 hour window
    max: 5, // start blocking after 5 requests
    message: JSON.stringify({'error' : 'Too many accounts created from this IP, please try again after an hour', 'infos': 'null'})
});

async function getPlate(plate) {
    return await sinespApi.search(plate);
}


router.get('/', createAccountLimiter, async(req, res) => 
{
    res.end(JSON.stringify({'error' : 'don\'t acess informations in method GET'}));
})

router.post('/', createAccountLimiter, async(req, res) => 
{

    let plate = req.body.plate;
    if(typeof(plate) !== 'undefined'){
        try {
            console.log(req.body.plate)
            let response = await getPlate(plate)
            res.end(JSON.stringify(response));
        
        } catch (error) {
            res.end(JSON.stringify({'error' : 'don\'t have informations from vehicle plate', 'plate' : req.params.key, 'infos': error}));
        }

    }else{
        res.end(JSON.stringify({'error' : 'please, insert plate valid', 'plate':'null','infos':'null'}));
    }
    
})

module.exports = router;
