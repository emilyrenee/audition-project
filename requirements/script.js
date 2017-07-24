#!/usr/bin/env node 

var axios = require("axios");
var jsonfile = require("jsonfile");


axios.get("https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=cat&nojsoncallback=?")
  .then(function (response) {
	// write response data to result.json
	jsonfile.writeFile("result.json", response.data);
	console.log("Cat the result.json file.");
  })
  .catch(function (error) {
    console.log(error);
  });
