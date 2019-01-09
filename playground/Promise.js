/*
var somePromises = new Promise((resolve, reject) => {
  setTimeout(resolve('Hey I am resolve'), 2000)
})

somePromises.then(message => console.log('This is resolved', message),error => {
  console.log('this is error Message', error)
})

*/

/*var advancePromise = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b)
    } else {
      reject('Not a number')
    }
  })
}

advancePromise(45, 65)
  .then(
    res => {
      return advancePromise(res, 90)
    }
  )
  .then(
    res => {
      console.log('Response is ', res)
    }
  ).catch((err)=>{console.log(err)})*/

const request = require('request')

var address = (lat, long) => {
  return new Promise((resolve, reject) => {
    request(
      {
        url: `https://api.darksky.net/forecast/8de4feeaab61d176a4107a1e5bd9292b/${lat},${long}`,
        json: true
      },
      (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(body.currently.temperature)
        } else if (error || response.statusCode === 400) {
          reject('unable To Connect')
        }
      }
    )
  })
}

address(25.60548, 85.1526573).then(
  res => {
    console.log('Response is', res)
  },
  error => {
    console.log('Error is ', error)
  }
)
