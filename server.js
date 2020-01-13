const express = require('express');
const server = express();
let port = 5000;

server.use(express.json());

server.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`Server is listening on port ${port}`);
    }
})