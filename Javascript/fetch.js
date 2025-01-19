const { error } = require('console');
const fetch = require('node-fetch');
// We have set up an endpoint at http://localhost:3000. 

// Make one fetch request for each CRUD action below and print the response. 


// Create a GET request to http://localhost:3000
fetch("http://localhost:3000")
.then(response=>response.json())
.then(response=>console.log(response))
.catch(error=>console.log(error))

// Create a POST request to http://localhost:3000
fetch("http://localhost:3000",{
    method: 'POST',
    mode:'CORS',
    header:{
        'Content-Type':'applicaiton/json'
    },
    body:
        JSON.stringify({'data':'This is POST body'})
})
.then(response=>response.json())
.then(response=>console.log(response))
.catch(error=>console.log(error))

// Create a PUT request to http://localhost:3000

fetch("http://localhost:3000",{
    method:'PUT',
    mode:'CORS',
    header:{
        'Content-Type':'application/json'
    },
    body:
        JSON.stringify({'data':'This is PUT body'})
})
.then(response=>response.json())
.then(response=>console.log(response))
.catch(error=>console.log(error))

// Create a DELETE request to http://localhost:3000

fetch("http://localhost:3000",{
    method:'DELETE',
    mode:'CORS',
    header:{
        'Content-Type':'application/json'
    },
    body:
        JSON.stringify({'data':'This is DELETE body'})
    
})
.then(response=>response.json())
.then(response=>console.log(response))
.catch(error=>console.log(error))