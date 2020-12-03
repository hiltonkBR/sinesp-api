### Sinesp OpenSource API v1
Is a simple API develop in NODE JS, to integration in SINESP for free user :)

### How to server a project

First
```
npm install
```

Second 
```
nodemon .\app.js localhost 3000
```

### How to teste API

Endpoint demo:

Request POST

```
http://sinesp.backofficesolucoes.io/
```

Body:

json```
{
   "key":"chavedemostracao",
   "plate":"hbm6603"
}
```

Response SUCCESS:

```json
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
```

### Responses ERROR:

Plate error:

```json
{
   "code":500,
   "error":"Sem informações, verifique se é uma placa válida",
   "plate":"",
   "infos":"null"
}
```

No key
```json
{
   "code":403,
   "error":"Solicite a chave da API"
}
```
