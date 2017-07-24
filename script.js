#!/usr/bin/env node 

var axios = require("axios");
axios.get("https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=cat")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
