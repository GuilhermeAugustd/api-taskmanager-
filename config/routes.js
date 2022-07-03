const express = require('express')
const routes = express.Router()

let db = [
  { task: 'learn Redux', finished: false },
  { task: 'learn Typescript', finished: false },
  { task: 'learn React', finished: true }
]

//Consultar
routes.get('/', (req, res) => {
  return res.json(db)
})

//Adicionar
routes.post('/add', (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).end()
  }

  db.push(body)
  return res.json(body)
})

//delete
routes.delete('/:id', (req, res) => {
  const id = req.params.id

  db = db.filter(item => {
    if (!item[id]) {
      db.pop(item)
      return db
    }
  })

  return res.send(db)
})

module.exports = routes
