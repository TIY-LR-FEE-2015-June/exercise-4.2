var merge = require('broccoli-merge-trees');

module.exports = merge(['public', 'assets', 'bower_components']);
