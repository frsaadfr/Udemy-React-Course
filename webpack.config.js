const path = require('path')
console.log(path.join(__dirname, 'Public'))

module.exports = {
    entry: './src/App.js',
    output: {
        path: path.join(__dirname, 'Public'),
        filename:'bundle.js'
    }
};