'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

module.exports = class extends Generator {
  prompting () {
    // Have Yeoman greet the user
    this.log(yosay(`Installing ${chalk.red('Prismatopia')}!`))
  }

  writing () {
    // Copy all files
    this.fs.copy(this.templatePath('**/*'), this.destinationPath(), {
      globOptions: {
        dot: true,
        ignore: ['**/.git', '**/README.md']
      }
    })

    this.fs.copy(this.templatePath('examples/.env.example'), this.destinationPath('.env'))
  }

  install () {
    this.log(yosay(`Initializing ${chalk.red('Prismatopia')}!`))

    this.spawnCommandSync('make', ['init'])
  }
}
