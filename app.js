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

    var setGhost = function() {
        return Math.floor(Math.random()*10);
    }
    play();


    function play() {
        var ghost=setGhost();
        var ghostpos=0;
        var score=0;
        var delay=200;
        var dead=false;

        document.onkeydown = function (e) {
            switch (e.keyCode) {
                case 77:
                    var v = $("#controller").text();
                    $("#controller").text(v==9?0:++v);
                    break;
                case 88:
                    var v = $("#controller").text();
                    if (ghost==v) {
                        $("#"+(ghostpos-1)).text(" ");
                        score+=(ghost+200-delay)*10;
                        delay--;
                        ghost=setGhost();
                        ghostpos=0;
                    }
                default:
                    console.log(e);
            }
        }

        function iter() {
            if (ghostpos > 0) $("#" + (ghostpos - 1)).text(" ");
            $("#" + ghostpos).text(ghost)
            if (ghostpos == 20) {
                dead = true;
                if (dead) alert("You scored "+score+" points.");
                return;
            }
            ghostpos++;
            setTimeout(iter, delay);
        };
        iter();
    }
});