/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const { version } = require('../package.json')
fs.writeFileSync(path.resolve(__dirname, '../ep-version.js'), `export const version = '${version}'
`)
