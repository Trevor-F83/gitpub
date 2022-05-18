const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('Welcome to the GitPub App!');
});

app.listen(port, () => {
    console.log('Listening on 3000')
});
