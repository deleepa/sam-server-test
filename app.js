/**
 * Author: Deleepa
 * Description: This is the main entry point to the server application
 */

'use strict'
const express = require('express');
const azureMobileApps = require('azure-mobile-apps');

var app = express();
var mobile = azureMobileApps();

//import the database schema that is exposed
mobile.tables.import('./tables');

//initialise the statically defined tables
mobile.tables.initialize().then(function() {
    
    //use the azure-mobile-apps as middleware
    app.use(mobile);
    
    //start the application
    app.listen(3000);
    
}); 