const express = require('express');
const path = require('path');

const ngApp = express();

ngApp.use(express.static(__dirname + '/dist/employee-management-system'));

ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname + '/dist/employee-management-system/index.html'));
});

ngApp.listen(process.env.PORT || 8080);