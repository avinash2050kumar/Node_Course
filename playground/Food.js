const request = require('request')


var FoodInfo = (value , callback) => {
  request(
  {
    url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
      value
    )}`,
    json: true
  },
  (error, response, body) => {
    if(body.meals !== null ){
    callback(body)
  }
    else if(body.meals !==undefined){
      callback( 'Unable To Find Data')
    }

    if(error){
      callback(response)
    }
  }
)}

module.exports.FoodInfo = FoodInfo
