/**
 * Created by iain on 03/08/2016.
 */

require.config({
    paths: {
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
        "underscore": "lib/underscore"
    }
});

require(['lib/modules/template'], function () {

    function sleepFor(sleepDuration) {
        var now = new Date().getTime();
        while (new Date().getTime() < now + sleepDuration) { /* do nothing */
        }
    }

    function iter(i) {
        if (i>0) $("#" + (i - 1)).text(" ");
        $("#" + i).text("5")
        if (i==20) return;
        setTimeout(function() {
            iter(++i);
        }, 200);
        console.log(i);
    }

    //noinspection JSAnnotator
    $("#0").text("5");
    var i=0;
    setTimeout(function () {
        iter(0);
    }, 200);
//    alert($("#cell0").text());

});