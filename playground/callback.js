var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Avinash'
  }

  callback(user , user.id)
}

getUser(31, (user , userId) => {
  console.log(user , userId)
})
