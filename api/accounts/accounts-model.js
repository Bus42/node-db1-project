const db = require('../../data/db-config');

// resolves to an array of accounts (or an empty array)
// resolves to an account by the given id
const get = (id) => id
  ? db('accounts')
    .where({ id })
    .first()
  : db('accounts')


// resolves to the newly created account
function create(account) {
  console.log(account)
}

// // resolves to the updated account
// const updateById = (id, account) => {
//   // DO YOUR MAGIC
// }

// // resolves to the deleted account
// const deleteById = id => {
//   // DO YOUR MAGIC
// }

module.exports = {
  get,
  // getById,
  create,
  // updateById,
  // deleteById,
}
