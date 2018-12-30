'use strict'

const fs = require('fs')

const COMPONENTS_DIRS = './src/components'
const ASSETS_DIR = 'assets'

module.exports = () => {
  // Read components dirs
  return fs.readdirSync(COMPONENTS_DIRS).filter((file) => {
    const statSync = fs.statSync(`${COMPONENTS_DIRS}/${file}`)
    // Check if they contain at least one .png file
    return statSync.isDirectory()
      && fs.readdirSync(`${COMPONENTS_DIRS}/${file}/${ASSETS_DIR}`).filter((file) => /\.png$/.test(file)).length
  })
}
