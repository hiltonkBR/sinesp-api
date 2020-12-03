# Sinesp OpenSource API v1
Is a simple API develop in NODE JS, to integration in SINESP for free user :)

# How to execute a project

first
```
npm install
```

second 
```
nodemon .\app.js localhost 3000
```

# how to use API

Endpoint:
```
localhost:3000/plate/sinesp
```

Body:
json```
{
  "key": "chavedemostracao",
  "plate": "hbm6603"
}
```

Response:

{
   "code":200,
   "data":{
      "ano":"2003",
      "anoModelo":"2004",
      "chassi":"*****80726",
      "codigoRetorno":"0",
      "codigoSituacao":"0",
      "cor":"Prata",
      "data":"23/05/2019 às 17:25:02",
      "dataAtualizacaoAlarme":null,
      "dataAtualizacaoCaracteristicasVeiculo":null,
      "dataAtualizacaoRouboFurto":null,
      "marca":"FIAT/PALIO FIRE",
      "mensagemRetorno":"Sem erros.",
      "modelo":"FIAT/PALIO FIRE",
      "municipio":"RIBEIRAO DAS NEVES",
      "placa":"HBM6603",
      "situacao":"Sem restrição",
      "uf":"MG"
   }
}
