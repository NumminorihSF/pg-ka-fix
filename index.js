'use strict';
/**
 * Created by numminorihsf on 13.04.16.
 */
var doubleUsage = false;
module.exports = function () {
    var oldConnect;
    var pg = require('pg');
    if (doubleUsage) {
        return;
    }
    doubleUsage = true;
    oldConnect = pg.Connection.prototype.connect;
    pg.Connection.prototype.connect = function () {
        var args = Array.prototype.slice.call(arguments);
        oldConnect.apply(this, args);
        this.stream.on('connect', function () {
            this.stream.setKeepAlive(true);
        }.bind(this));
    };
};
