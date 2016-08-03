/**
 * Created by iain on 03/08/2016.
 */

define(['underscore', 'jquery'], function () {
    var showName = function (n) {
        var temp = _.template("Hello <%= name %>");
        $("body").html(temp({name: n}));
    };
    return {
        showName: showName
    };
})