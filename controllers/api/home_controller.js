// const fetch = require("node-fetch");
// import fetch from 'node-fetch';
const externalApi =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

// // const request= require('request');

// export async function allData(req, res) {
  
//   // return res.status(200).json({ msg: "succesful request" , data:data}) ;
//   try {
//     var response = await fetch(externalApi);
//     var data = await response.json();
//     console.log(data);
//     return res
//       .status(200)
//       .json({ msg: "api fetch successful", data: data });
//   } catch (err) {
//     console.log("error", err);
//     return res.status(500).json({ msg: "Internal Server Error ****" });
//   }
// };
var express = require('express');
var router = express.Router();
var request = require('request');

module.exports.allData= function (req,res){
  request({
    uri: externalApi,
    query: "mealDb",

  },
  function(err, response, body){
    if(!err ){
      // console.log(body);
      return res.status(200).json({msg: "request successful", data:body})
    }
  } 
  )
  return res.status(500);
}

