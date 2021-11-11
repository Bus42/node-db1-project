const db = require('../../data/db-config');

// resolves to an array of accounts (or an empty array)
const getAll = () => {
  db('accounts')
    .then(accounts => {
      return accounts.length ? accounts : [];
    })
}

// resolves to an account by the given id
const getById = id => {
  db('accounts').where({ id })
    .then(account => {
      return account.length ? account[0] : null;
    })
}

// // resolves to the newly created account
// const create = account => {
//   db.insert(account).into('accounts')
//     .then(db('accounts').where({ id: account.id }).then(account => {
//       return account.length ? account[0] : null;
//     }))
// }

// // resolves to the updated account
// const updateById = (id, account) => {
//   // DO YOUR MAGIC
// }

// // resolves to the deleted account
// const deleteById = id => {
//   // DO YOUR MAGIC
// }

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
