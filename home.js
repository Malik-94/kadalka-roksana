(function() {
    'use strict';

    var btnScrollDown = document.querySelector('#may');

    function scrollDown() {
        var windowCoords = document.documentElement.clientHeight;
        (function scroll() {
            if (window.pageYOffset < 3350) {
                window.scrollBy(0, 70);
                setTimeout(scroll, 10);
            }
            if (window.pageYOffset > windowCoords) {
                window.pageYOffset(0,windowCoords );
            }
        })();
    }

    btnScrollDown.addEventListener('click', scrollDown);
})();