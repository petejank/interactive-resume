'use strict';

const path = require('path');
const spritesmithPlugin = require('webpack-spritesmith');
const spriteDirectories = require('./sprite.directories');

const componentsDirs = spriteDirectories();

// Creates separate spritesheet for each component
module.exports = () => componentsDirs.map((directory) => {
  const targetFileName = `./spritesmith/${directory}`;
  return new spritesmithPlugin({
    src: {
      cwd: path.resolve(`./src/components/${directory}`),
      glob: 'assets/*.png'
    },
    target: {
      image: path.resolve(`${targetFileName}.png`),
      css: `${targetFileName}.scss`
    },
    apiOptions: {
      generateSpriteName: (fileName) => {
        const parsed = path.parse(fileName);
        const dir = parsed.dir.split(path.sep);
        const moduleName = dir[dir.length - 2];

        return `${moduleName}-${parsed.name}`;
      },
      cssImageRef: `~${directory}.png`
    }
  });
});
