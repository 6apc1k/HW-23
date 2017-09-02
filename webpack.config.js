const path = require('path');

module.exports = {
    entry: './js/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    }
};