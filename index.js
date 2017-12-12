'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port);

app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'});
});

console.log(`todo list RESTful API server started on: ${port}`);
