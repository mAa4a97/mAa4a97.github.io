// LOADING SCREEN
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const totalImages = images.length;
    let loadedImages = 0;
  
    if (totalImages === 0) return;
  
    const overlay = document.getElementById('loading-overlay');
    const bar = document.getElementById('loading-bar');
  
    overlay.style.display = 'flex';
  
    const updateProgress = () => {
      loadedImages++;
      const percent = (loadedImages / totalImages) * 100;
      bar.style.width = `${percent}%`;
  
      if (loadedImages === totalImages) {
        globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setTimeout(() => {
          overlay.style.display = 'none';
        }, 300); // slight delay for smoother UX
      }
    };
  
    images.forEach(img => {
      if (img.complete) {
        updateProgress();
      } else {
        img.addEventListener('load', updateProgress);
        img.addEventListener('error', updateProgress); // handle broken images too
      }
    });
  });

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