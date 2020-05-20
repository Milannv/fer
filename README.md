# About
Quick PoC to demonstrate front end routing.

The .env file only contains settings for a (possible) API. Albeit kind of obsolete in this
PoC, I decided to implement .env files in order to store sensitive and/or deployment dependent configurations.

# Installation

    $ npm i

    $ cp .env.example .env

    $ npm run dev

# Adding express
This project does not necessarily needs a webserver to serve project contents.

It's easy to start a web server and serve this project using Express.js, just follow the steps below.

## Create index.js file

    let express = require('express');
    let app = express();
    
    app.use(express.static(__dirname));
    app.use(express.static('public'))
    
    const server = app.listen(process.env.PORT || 8001, function () {
        const host = server.address().address;
        const port = server.address().port;
    
        console.log('Listening at http://%s:%s', host, port);
    });


## Alter package.json and run server
    $ npm i express
    $ node index.js