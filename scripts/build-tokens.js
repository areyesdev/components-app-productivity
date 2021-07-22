const { choices, decisions } = require('../tokens')
const toKebabCase = require('../utils/toKebabCase')
const fs = require('fs')

const cleanLines = (string = '') => string.trim().replace(/^\n\n/gm, '\n')

function transformTokens(parentKey, object) {
  const objectKeys = Object.keys(object)

  return objectKeys.reduce((transformedTokens, objectKey) => {
    const value = object[objectKey],
      customProperty = parentKey
        ? toKebabCase(`${parentKey}-${objectKey}`)
        : toKebabCase(`${objectKey}`)

    if (Array.isArray(value)) {
      return `${transformedTokens}\n  --${customProperty}: ${value.join(', ')};`
    } else if (typeof value === 'object') {
      return `${transformedTokens}\n${transformTokens(customProperty, value)}`
    }

    const label = `--${parentKey}-${toKebabCase(objectKey)}`
    return `${transformedTokens}\n  ${label}: ${value};`
  }, '')
}

function buildTokens() {
  const transformedChoices = transformTokens(null, choices),
    transformedDecisions = transformTokens(null, decisions),
    customProperties = `${transformedChoices}${transformedDecisions}`,
    data = `:root {\n  ${cleanLines(customProperties)}\n}\n`

  fs.writeFile('./styles/tokens.css', data, 'utf8', (error) => {
    if (error) {
      throw error
    }
    console.log('🎨 Custom properties created!')
  })
}

buildTokens()
