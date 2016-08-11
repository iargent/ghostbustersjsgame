/**
 * Created by iain on 03/08/2016.
 */

require.config({
    paths: {
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
        "underscore": "lib/underscore",
    }
});

require(['lib/modules/template'], function () {

    function sleepFor(sleepDuration) {
        var now = new Date().getTime();
        while (new Date().getTime() < now + sleepDuration) { /* do nothing */
        }
    }

    //noinspection JSAnnotator
    $("#0").text("5");
    for (var i = 0; i < 10; i++) {
        sleepFor(50);
        if (typeof last !== 'undefined') {
            $("#" + last).text("&nbsp;");
        }
        $("#" + i).text("5");
        var last = i;
    }
//    alert($("#cell0").text());

});