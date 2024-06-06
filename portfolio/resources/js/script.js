document.addEventListener("DOMContentLoaded", function () {
    var logo = document.querySelector('.logo');

    logo.addEventListener('click', function () {
        //window.scrollTo({ top: 0, behavior: 'smooth' });
        //window.open("../../../index.html", "_self");
        location.href="../../../", "_self";
    });

    // Add event listener to Socials for scrolling to the bottom
    
});

document.addEventListener('keydown', function(event) {
    let button;
    switch(event.key) {
        case 'ArrowRight':
            document.querySelector('.m-p-g__controls-arrow--next').click();
            break;
        case 'ArrowLeft':
            document.querySelector('.m-p-g__controls-arrow--prev').click();
            break;
        case 'Escape':
            document.querySelector('.m-p-g__controls-close').click();
            break;
    }
});