/**
 * Author: Deleepa
 * Description: This file contains the model for the User table
 */
'use strict'
const azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table();

table.columns = {
    "email": "string",
    "password": "string",
    "package_id": "string"
};

table.dynamicSchema = false;

module.exports = table;