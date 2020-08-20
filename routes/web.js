const express = require('express')
const sinespApi = require('sinesp-api');
const rateLimit = require("express-rate-limit");
const router = express.Router();

const createAccountLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 hour window
    max: 5, // start blocking after 5 requests
    message: JSON.stringify({'code': 500, 'error' : 'Aguarde um momento, tente pesquisar novamente após 1 minuto...', 'infos': 'null'})
});

async function getPlate(plate) {
    return await sinespApi.search(plate);
}


router.get('/', async(req, res) => 
{
    res.end("<title>Acesso negado</title><p>Acesso via GET nao permitido</p>");
})

router.post('/', createAccountLimiter, async(req, res) => 
{
    let plate = req.body.plate;
    let key = req.body.key;

    if((typeof(key) !== 'undefined') && (key === "chavedemostracao")){
        if(typeof(plate) !== 'undefined'){
            try {
                let response = await getPlate(plate)
                res.end(JSON.stringify({'code': 500, 'data' : response}));
            } catch (error) {
                res.end(JSON.stringify({'code': 500, 'error' : 'Sem informações, verifique se é uma placa válida', 'plate': plate, 'infos':'null'}));
            }
        }else{
            res.end(JSON.stringify({'code': 500, 'error' : 'Por favor, insira uma placa válida', 'plate':'null', 'infos':'null'}));
        }
    }else{
        res.end(JSON.stringify({'code': 500, 'error' : 'Solicite a chave da API'}));
    }
    
})

module.exports = router;
