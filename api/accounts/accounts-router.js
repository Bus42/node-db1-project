const express = require('express');
const accountsModel = require('./accounts-model');
const router = require('express').Router()
router.use(express.json());

// [GET] /api/accounts returns an array of accounts (or an empty array if there aren't any).
router.get('/', (req, res) => {
  accountsModel.get().then(accounts => {
    accounts ? res.status(200).send(accounts) : res.status(404).send({ message: 'Error fetching accounts' })
  })
})

// [GET] /api/accounts/:id returns an account by the given id.
router.get('/:id', (req, res) => {
  const id = req.params.id
  accountsModel.getById(id).then(account => {
    account ? res.status(200).send(account) : res.status(404).send({ message: 'Error fetching account' })
  })
})

// // [POST] /api/accounts returns the created account. Leading or trailing whitespace on budget name should be trimmed before saving to db.
// router.post('/', (req, res) => {
//   // DO YOUR MAGIC
// })

// // [PUT] /api/accounts/:id returns the updated account. Leading or trailing whitespace on budget name should be trimmed before saving to db.
// router.put('/:id', (req, res) => {
//   // DO YOUR MAGIC
// });

// // [DELETE] /api/accounts/:id returns the deleted account.
// router.delete('/:id', (req, res) => {
//   // DO YOUR MAGIC
// })

// router.use((err, req, res) => { // eslint-disable-line
//   // DO YOUR MAGIC
// })

module.exports = router;
