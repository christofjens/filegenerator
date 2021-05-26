const writeFile = require('./writeFile')
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'file',
    message: 'Which functions and files would you like to create?\n',
  },
]

inquirer.prompt(questions).then(answers => {
  const files = answers['file'].split(',').map(el => el.trim())
  files.forEach(file => writeFile(file))
})

// rl.question(
//   'Which functions and files would you like to create? Please separate by comma. ',
//   answer => {
//     answer.split(',').map(name => writeFile(name.trim()))

//     // for each word a new file, separate by comma
//     // writeFile([answer])
//     console.log([answer])

//     rl.close()
//   }
// )
