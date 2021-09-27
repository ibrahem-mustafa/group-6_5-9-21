const bcrypt = require('bcrypt');


const HashPassword = (password) => bcrypt.hashSync(password, 10);


const ComparePassword = (plainText, hashedPassword) => bcrypt.compareSync(plainText, hashedPassword)

module.exports = {
  HashPassword,
  ComparePassword,
};