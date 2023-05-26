 const axios =require('axios/dist/browser/axios.cjs');
 
 axios.get("https://localhost:1337/api/products/:id")
    .then(response =>{
        console.log(response.data);
    })
;