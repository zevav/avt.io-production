var play = true
var myMedia = document.getElementById("videoelement");

function onKeyDown(event) {
        switch (event.keyCode) {
                case 32:
                        if(play) {
                                myMedia.pause();
                                play = false;
                        } else {
                                myMedia.play();
                                play = true;
                        }
                        break;
                }
        return false;
}

window.addEventListener("keydown",onKeyDown,false);

