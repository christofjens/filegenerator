const writeFile = require('./writeFile')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  'Which functions and files would you like to create? Please separate by comma. ',
  answer => {
    answer.split(',').map(name => writeFile(name.trim()))

    // for each word a new file, separate by comma
    // writeFile([answer])
    console.log([answer])

    rl.close()
  }
)
