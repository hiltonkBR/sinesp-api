### Sinesp OpenSource API v1
Is a simple API develop in NODE JS, to integration in SINESP for free user :)

### How to server a project

First
```
npm install
```

Second 
```
node ./app.js localhost 3000
```

### How to teste API

Endpoint demo:

Request POST

```
https://sinesp.backofficesolucoes.io/
```

Body:

```json
{
   "key":"chavedemostracao",
   "plate":"hbm6603"
}
```
Response ALERT:

```json
{
   "code":200,
   "data":{
      "ano":"1978",
      "anoModelo":"1978",
      "chassi":"*****09660",
      "codigoRetorno":"0",
      "codigoSituacao":"1",
      "cor":"Branca",
      "data":"2020-10-29T13:00:39.948-03:00",
      "dataAtualizacaoAlarme":"",
      "dataAtualizacaoCaracteristicasVeiculo":"",
      "dataAtualizacaoRouboFurto":"",
      "marca":"VW/FUSCA 1300 L",
      "mensagemRetorno":"Sem erros.",
      "modelo":"VW/FUSCA 1300 L",
      "municipio":"PINDAMONHANGABA",
      "placa":"BHS1192",
      "situacao":"ROUBO / FURTO",
      "uf":"SP"
   }
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
### How to consume API in $.POST Jquery

```javascript
function getSinespPlate(platesearch){

    if(platesearch != ''){
        $.post({
            method: 'POST',
            url: 'https://sinesp.backofficesolucoes.io',
            data: {'key': 'chavedemostracao', 'plate': platesearch},
            success: function(data, status, xhr) {
                resultado = JSON.parse(data);
                if (resultado.code === 200) {
                    console.log(resultado?.data)
                }else{
                    error = JSON.parse(data);
                    console.log(resultado?.data)
                }
            },
            error: function(data) {
                console.log(data.error)
            }
        })
    }
}
```
