const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');

let key = "";
let endpoint = "https://api.cognitive.microsofttranslator.com/";

// location, also known as region.
// required if you're using a multi-service or regional (not global) resource. It can be found in the Azure port>
let location = "eastus";
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/test', (request, response) => {
        console.log(request.query.text)
})

//translate to French
app.post('/translate2FR', (request, res) => {
axios({
    baseURL: endpoint,
    url: '/translate',
    method: 'post',
    headers: {
        'Ocp-Apim-Subscription-Key': key,
         // location required if you're using a multi-service or regional (not global) resource.
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
    },
    params: {
        'api-version': '3.0',
        'from': 'en',
        'to': 'fr'
    },
    data: [{
        'text': request.query.text
    }],
    responseType: 'json'
}).then(function(response){
    console.log(JSON.stringify(response.data, null, 4))
        res.json(response.data)

})
})

//translate to Spanish
app.post('/translate2ES', (request, res) => {
    axios({
        baseURL: endpoint,
        url: '/translate',
        method: 'post',
        headers: {
            'Ocp-Apim-Subscription-Key': key,
             // location required if you're using a multi-service or regional (not global) resource.
            'Ocp-Apim-Subscription-Region': location,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        params: {
            'api-version': '3.0',
            'from': 'en',
            'to': 'es'
        },
        data: [{
            'text': request.query.text
        }],
        responseType: 'json'
    }).then(function(response){
        console.log(JSON.stringify(response.data, null, 4))
            res.json(response.data)
    
    })
})

//detect language
app.post('/detect', (request, res) => {
    axios({
        baseURL: endpoint,
        url: '/detect',
        method: 'post',
        headers: {
            'Ocp-Apim-Subscription-Key': key,
             // location required if you're using a multi-service or regional (not global) resource.
            'Ocp-Apim-Subscription-Region': location,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        params: {
            'api-version': '3.0',
        },
        data: [{
            'text': request.query.text
        }],
        responseType: 'json'
    }).then(function(response){
        console.log(JSON.stringify(response.data, null, 4))
            res.json(response.data)
    
    })
})

//lookup language alterative translations
app.post('/lookup', (request, res) => {
    axios({
        baseURL: endpoint,
        url: '/dictionary/lookup',
        method: 'post',
        headers: {
            'Ocp-Apim-Subscription-Key': key,
             // location required if you're using a multi-service or regional (not global) resource.
            'Ocp-Apim-Subscription-Region': location,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        params: {
            'api-version': '3.0',
            'from': 'en',
            'to': request.query.lang
        },
        data: [{
            'text': request.query.text
        }],
        responseType: 'json'
    }).then(function(response){
        console.log(JSON.stringify(response.data, null, 4))
            res.json(response.data)
    
    })
})

//general translation api from English
app.post('/translate', (request, res) => {
    axios({
        baseURL: endpoint,
        url: '/translate',
        method: 'post',
        headers: {
            'Ocp-Apim-Subscription-Key': key,
             // location required if you're using a multi-service or regional (not global) resource.
            'Ocp-Apim-Subscription-Region': location,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        params: {
            'api-version': '3.0',
            'from': 'en',
            'to': request.query.lang
        },
        data: [{
            'text': request.query.text,
        }],
        responseType: 'json'
    }).then(function(response){
        console.log(JSON.stringify(response.data, null, 4))
            res.json(response.data)
    
    })
})

//lookup language alterative translations
app.post('/examples', (request, res) => {
    axios({
        baseURL: endpoint,
        url: '/dictionary/examples',
        method: 'post',
        headers: {
            'Ocp-Apim-Subscription-Key': key,
             // location required if you're using a multi-service or regional (not global) resource.
            'Ocp-Apim-Subscription-Region': location,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        params: {
            'api-version': '3.0',
            'from': 'en',
            'to': request.query.lang
        },
        data: [{
            'text': request.query.text,
            'translation': request.query.translation
        }],
        responseType: 'json'
    }).then(function(response){
        console.log(JSON.stringify(response.data, null, 4))
            res.json(response.data)
    
    })
})

app.listen(port, () =>
{
        console.log('Example app listening on port ${port}')
})
