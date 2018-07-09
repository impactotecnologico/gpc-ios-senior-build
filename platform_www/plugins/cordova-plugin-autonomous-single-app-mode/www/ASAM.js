cordova.define("cordova-plugin-autonomous-single-app-mode.ASAM", function(require, exports, module) {

var exec = require('cordova/exec');

var ASAM = {
  toggle: function(flag, cb) {
    exec(cb, null, 'ASAM', 'toggle', [flag]);
  }
};

module.exports = ASAM;

});
