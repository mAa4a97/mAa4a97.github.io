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

    var responsivePage = document.querySelector('.responsiveArtwork');
    responsivePage.addEventListener('click', function () {
        //window.scrollTo({ top: 0, behavior: 'smooth' });
        //window.open("../../../index.html", "_self");
        location.href="./interactive_thing/Untitled-2.html", "_self";
    });

    var gifSeries = document.querySelector('.gifSeries');
    gifSeries.addEventListener('click', function () {
        //window.scrollTo({ top: 0, behavior: 'smooth' });
        //window.open("../../../index.html", "_self");
        location.href="./second/gif_series.html", "_self";
    });

    var glitchArt = document.querySelector('.glitchArt');
    glitchArt.addEventListener('click', function () {
        //window.scrollTo({ top: 0, behavior: 'smooth' });
        //window.open("../../../index.html", "_self");
        location.href="./second/glitch_art.html", "_self";
    });
    

});

// redirects

// FULLPAGE
const sections = document.querySelectorAll('.page');
let currentSection = 1;
const navbar = document.querySelector('.navbar');
let isScrolling = false;

window.addEventListener('wheel', (e) => {
  if (isScrolling) return;
  isScrolling = true;

  if (e.deltaY > 0) {
    currentSection = Math.min(currentSection + 1, sections.length - 1);
  } else {
    currentSection = Math.max(currentSection - 1, 1);
  }

  console.log(currentSection);

  sections[currentSection].scrollIntoView({ behavior: 'smooth' });

  setTimeout(() => isScrolling = false, 800); // prevent rapid scroll

  if (currentSection > 1) {
        navbar.style.opacity = '1';
    }  else {
        navbar.style.opacity = '0';
    };
});

const lines = [
    "Welcome to",
    "RTU LiepA works",
    "of mAa4a",
    "",
    "Scroll down to explore more"
  ];
  
  const el = document.getElementById("typewriter");
  
  let lineIndex = 0;
  let charIndex = 0;
  
  function typeLine() {
    if (lineIndex >= lines.length) return;
  
    const line = lines[lineIndex];
    el.innerHTML = lines.slice(0, lineIndex).join('\n') + '\n' + line.slice(0, charIndex) + '<span class="cursor"></span>';
  
    charIndex++;
  
    if (charIndex <= line.length) {
      setTimeout(typeLine, 50); // typing speed
    } else {
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 700); // pause before next line
    }
  }
  
  typeLine();