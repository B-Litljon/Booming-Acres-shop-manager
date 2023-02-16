const express = require('express');
const etsyApiRouter = express.router()

// route will need to include authentication/api keys in the header request
// https://openapi.etsy.com/v3/application/shops/{shop_id}/receipts/{receipt_id}
// endpoint for getting shop reciepts. with the shop receipts endpoints I can grab all the items that have been sold
// and use this data to append to the page 
module.exports = etsyApiRouter;