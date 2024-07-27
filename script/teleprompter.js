var playing = false;
var scrollInterval;

function scrollDown() {
    if (playing) {
        playing = false;
        clearInterval(scrollInterval);
        $(".fa-pause").addClass("fa-play").removeClass("fa-pause");
        } else {
            $(".fa-play").addClass("fa-pause").removeClass("fa-play");
            playing = true;
            let scrollStep = 1;
            scrollInterval = setInterval(() => {
                window.scrollBy(0, scrollStep);
                if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                    clearInterval(scrollInterval);
                }
            }, 10);
        }
}

function flip() {
    $(".content").toggleClass('flip');
}


