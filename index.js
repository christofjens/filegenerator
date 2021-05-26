const writeFile = require('./writeFile')
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the name of the files you'd like to add?\n",
  },
  {
    type: 'checkbox',
    message: 'Please select a file-type',
    name: 'fileTypes',
    choices: [{ name: 'component' }, { name: 'spec' }, { name: 'stories' }],
  },
]

inquirer.prompt(questions).then(answers => {
  const names = answers['name'].split(',').map(el => el.trim())
  names.forEach(name => writeFile(name))
})
