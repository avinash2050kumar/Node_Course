const request = require('request')

var weatherRequest = (lat, long, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/8de4feeaab61d176a4107a1e5bd9292b/${lat},${long}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(body.currently.temperature)
      } else if (error || response.statusCode === 400) {
        callback('unable To Connect')
      }
    }
  )
}

module.exports.weatherRequest = weatherRequest
