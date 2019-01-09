/*const yargs = require('yargs')

const Foods = require('./Food')


let args = yargs.option({
  a: { alias: 'address', default: false, string: true }
}).argv

Foods.FoodInfo(args.a, (error ,response)=>{
  if(error){
    console.log('This is index Page Error', error)
  }
  else{
    console.log('This is response' , JSON.stringify(response , undefined , 2))
  }
})*/

// 8de4feeaab61d176a4107a1e5bd9292b

/*
const weather = require('./Weather/Weather')

weather.weatherRequest(25.60548 , 85.1526573, (error , response) => {
  if (error) {
    console.log(error)
  }

  else if(response){
    console.log(response)
  }
})
*/

const express = require('express')
const hbs = require('hbs')

hbs.registerPartials(__dirname+'/views/partials')
const app = express()
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.send({
    message: 'Your Server is running very fast'
  })
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page Friend',
    contentPage: 'This is my contentPage'
  })
})

app.get('/bad', (req, res) => {
  res.send('bad request')
})

app.use(express.static(__dirname + '/public'))

app.listen(3000)
