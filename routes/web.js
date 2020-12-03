const express = require('express')
const sinespApi = require('sinesp-api')
const rateLimit = require("express-rate-limit")

const app = express()
const cors = require('cors')

async function getPlate(plate) {
    return await sinespApi.search(plate);
}

app.get('/', cors(), async(req, res) => 
{
    res.json({'code': 500, 'error' : 'Acesso via GET nao permitido'});
})

app.post('/', cors(), async(req, res) => 
{
    let plate = req.body.plate;
    let key = req.body.key;

    if((typeof(key) !== 'undefined') && (key === "chavedemostracao")){
        if(typeof(plate) !== 'undefined'){
            try {
                let response = await getPlate(plate)
                res.json({'code': 200, 'data' : response});
            } catch (error) {
                res.json({'code': 500, 'error' : 'Sem informações, verifique se é uma placa válida', 'plate': plate, 'infos':'null'});
            }
        }else{
            res.json({'code': 500, 'error' : 'Por favor, insira uma placa válida', 'plate':'null', 'infos':'null'});
        }
    }else{
        res.json({'code': 403, 'error' : 'Solicite a chave da API'});
    }
    
})

module.exports = app;
