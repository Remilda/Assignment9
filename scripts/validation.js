(function(window) {
    'use strict';
    var App = window.App || {};
    var Validation = {

        isCompanyEmail: function(emailInput) {
            return /.+@bignerdranch\.com$/.test(emailInput);

        },

        isValidEmail: function(email, remoteDS) {
            App.validEmail = true;
            return remoteDS.get(email, function (serverResponse) {
                if (serverResponse === null) {
                    App.validEmail = true;
                }
                else {
                    if (serverResponse.emailAddress === email) {
                        App.validEmail = false;
                    }
                }
            });
        }
    };
    App.Validation = Validation;
    window.App = App;
})(window);
