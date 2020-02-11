'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

module.exports = class extends Generator {
  async prompting () {
    // Have Yeoman greet the user
    this.log(yosay(`Welcome to the ${chalk.red('Prismatopia')} generator!`))
  }

  writing () {
    // Copy all files
    this.fs.copy(this.templatePath('**/*'), this.destinationRoot(), {
      globOptions: {
        dot: true,
        ignore: ['**/.git', '**/README.md']
      }
    })
  }

  install () {}
}
