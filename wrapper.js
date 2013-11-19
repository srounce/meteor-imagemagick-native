if (!Meteor) {
    // Not Running In Meteor (nodejs code)
    // example NPM/Node Dependencies that we'll use
    var imagemagick = require('imagemagick-native');
    exports = module.exports = imagemagick
} else {
    // Running as Meteor Package
    var imagemagick = Npm.require('imagemagick-native');
    this.imagemagick = imagemagick
}
