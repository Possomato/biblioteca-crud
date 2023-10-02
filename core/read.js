const fs = require('fs')
const DB_FILE_PATH = './core/db'

console.log('[CRUD]')

const create = (content) => {
  fs.writeFileSync(DB_FILE_PATH, content)
  return content
}

//simulation
console.log(create('Teste2'))