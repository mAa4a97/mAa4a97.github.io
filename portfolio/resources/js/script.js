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
// Download Button
document.addEventListener("DOMContentLoaded", () => {

    const observer = new MutationObserver(() => {

        const controls = document.querySelector(".m-p-g__controls");

        if (
            controls &&
            !controls.querySelector(".m-p-g__controls-download")
        ) {

            const downloadBtn = document.createElement("button");
            downloadBtn.className = "m-p-g__controls-download";

            downloadBtn.innerHTML = `
                <span class="m-p-g__btn">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                        <path d="M5 20h14v-2H5v2zm7-18v10l4-4 1.4 1.4L12 16l-5.4-6.6L8 8l4 4V2z"/>
                    </svg>
                </span>
            `;

            controls.appendChild(downloadBtn);

            downloadBtn.addEventListener("click", () => {

                const activeImg = document.querySelector(
                    ".m-p-g__fullscreen-img.active"
                );

                if (!activeImg) return;

                const link = document.createElement("a");

                link.href = activeImg.src;
                link.download = activeImg.src.split("/").pop();

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

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