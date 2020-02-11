'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

const prompts = [
  {
    type: 'input',
    name: 'prismaPort',
    message: 'What port should Prisma listen on?',
    default: '7000',
    store: true
  },
  {
    type: 'input',
    name: 'prismaServiceSecret',
    message: 'What secret do you want to use for your Prisma service?',
    default: 'somejibberish',
    store: true
  },
  {
    type: 'input',
    name: 'prismaManagementAPISecret',
    message: 'What secret do you want to use for the Prisma management API?',
    default: 'someotherjibberish',
    store: true
  },
  {
    type: 'input',
    name: 'apolloOauthTokenEndpoint',
    message: 'What is the endpoint Apollo should use for token validation?',
    store: true
  },
  {
    type: 'input',
    name: 'apolloOAuthClientID',
    message: 'What is the client ID Apollo should use with the OAuth endpoint?',
    store: true
  },
  {
    type: 'input',
    name: 'apolloOAuthClientCredentialsClientID',
    message: 'What client ID is setup to support the client credentials grant?',
    store: true
  },
  {
    type: 'input',
    name: 'apolloOAuthClientCredentialsClientSecret',
    message: 'What client secret that should be used to authenticate?',
    store: true
  },
  {
    type: 'input',
    name: 'apolloContainerImageTag',
    message: 'What is the tag you want to use for the local Apollo container?',
    default: 'lambdaschoollabs/prismatopia-apollo:latest',
    store: true
  }
]

module.exports = class extends Generator {
  async prompting () {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the prismadelic ${chalk.red(
          'generator-prismatopia'
        )} generator!`
      )
    )

    const props = await this.prompt(prompts)
    // To access props later use this.props.someAnswer;
    this.props = props
  }

  writing () {
    this.fs.copyTpl(
      this.templatePath('env'),
      this.destinationPath('.env'),
      this.props
    )
  }

  install () {}
}
