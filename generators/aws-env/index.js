'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

const prompts = [
  {
    type: 'input',
    name: 'applicationName',
    message: 'What is the name of your application?'
  },
  {
    type: 'input',
    name: 'environmentName',
    message: 'What is the name of your environment?'
  }
]

module.exports = class extends Generator {
  async prompting () {
    this.log(
      yosay(
        `Ready to create a ${chalk.red('Prismatopia')} AWS environment?`
      )
    )

    const props = await this.prompt(prompts)
    // To access props later use this.props.someAnswer;
    this.props = props
  }

  writing () {
    this.fs.copy(
      this.templatePath('aws.application.env'),
      this.destinationPath(`aws.${this.props.applicationName}.env`)
    )

    this.fs.copy(
      this.templatePath('aws.application.environment.env'),
      this.destinationPath(
        `aws.${this.props.applicationName}.${this.props.environmentName}.env`
      )
    )
  }

  install () {
    this.installDependencies()
  }
}
