(function() {
    'use strict';

    var btnScrollDown = document.querySelector('#raw');

    function scrollDown() {
        var windowCoords = document.documentElement.clientHeight;
        (function scroll() {
            if (window.pageYOffset < 700) {
                window.scrollBy(0, 20);
                setTimeout(scroll, 10);
            }
            if (window.pageYOffset > windowCoords) {
                window.pageYOffset(0,windowCoords );
            }
        })();
    }

    btnScrollDown.addEventListener('click', scrollDown);
})();