'use strict'
const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

describe('generator-prismatopia:local-env', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/local-env'))
      .withPrompts({ someAnswer: true })
  })

  it('creates files', () => {
    assert.file(['.env'])
  })
})
