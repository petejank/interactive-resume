const fs = require('fs')

const COMPONENTS_DIRS = './src/components'
const ASSETS_DIR = 'assets/images'

module.exports = () => {
  // Read components dirs
  return fs.readdirSync(COMPONENTS_DIRS).filter((file) => {
    const statSync = fs.statSync(`${COMPONENTS_DIRS}/${file}`)
    // Check if they contain at least one .png file
    if (!statSync.isDirectory()) return
    try {
      return fs.readdirSync(`${COMPONENTS_DIRS}/${file}/${ASSETS_DIR}`).filter((file) => /\.png$/.test(file)).length
    } catch(e) {
      return
    }
  })
}
