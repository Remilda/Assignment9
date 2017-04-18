(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function RemoteDataStore(url) {
        if (!url) {
            throw new Error('No remote URL supplied.');
        }
        this.serverUrl = url;
        //this.data = {};
    }

    RemoteDataStore.prototype.add = function(key, val) {
        val.id = val.emailAddress;
        return $.post(this.serverUrl, val, function(serverResponse) {
            console.log(serverResponse);

        });
        //this.data[key] = val;
    };

    RemoteDataStore.prototype.getAll = function(cb) {
        return $.get(this.serverUrl, function(serverResponse) {
            if (cb) {
                console.log(serverResponse);
                cb(serverResponse);
                //return this.data;
            }
        });
    };

    RemoteDataStore.prototype.get = function(key, cb) {
        return $.get(this.serverUrl + '/' + key, function(serverResponse) {
            if (cb) {
                console.log(serverResponse);
                cb(serverResponse);
                //return this.data[key];
            }
        });
    };

    RemoteDataStore.prototype.remove = function(key) {
        return $.ajax(this.serverUrl + '/' + key, {
            type: 'DELETE'
            //delete this.data[key];
        });
    };

    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);
