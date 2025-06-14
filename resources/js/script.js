// LOADING SCREEN
document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const overlay = document.getElementById('loading-overlay');
    const bar = document.getElementById('loading-bar');
  
    let totalImages = lazyImages.length;
    let loadedImages = 0;
  
    if (totalImages === 0) return;
  
    overlay.style.display = 'flex';
  
    const updateProgress = () => {
      loadedImages++;
      const percent = (loadedImages / totalImages) * 100;
      bar.style.width = `${percent}%`;
  
      if (loadedImages === totalImages) {
        setTimeout(() => {
          overlay.style.display = 'none';
        }, 500);
      }
    };
  
    // Fallback for images already loaded
    lazyImages.forEach(img => {
      if (img.complete) {
        updateProgress();
      } else {
        img.addEventListener('load', updateProgress);
        img.addEventListener('error', updateProgress);
      }
    });
  
    // Force loading of lazy images not in viewport
    const preloadAllLazyImages = () => {
      lazyImages.forEach(img => {
        if (!img.src) {
          img.src = img.dataset.src; // assume you're using <img data-src="..." loading="lazy">
          img.removeAttribute('loading'); // turn off lazy
        }
      });
    };
  
    // Optional: run preload on load to avoid stuck loading bar
    window.addEventListener("load", () => {
      preloadAllLazyImages();
    });
  });
  

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');
    var username = document.querySelector('.username');
    var parallaxContainer = document.querySelector('.parallax-container');
    var overlay = document.querySelector('.overlay');
    var logo = document.querySelector('.logo');

    // Set initial state of navbar
    var scrolled = false;

    // Function to handle scroll event
    function handleScroll() {
        var parallaxContainerRect = parallaxContainer.getBoundingClientRect();
        var parallaxContainerBottom = parallaxContainerRect.bottom;

        // Check if overlay is active
        var isOverlayActive = overlay.style.display === 'flex';

        if (!isOverlayActive) {
            if (window.scrollY > parallaxContainerBottom && !scrolled) {
                // Add a class to show the navbar
                navbar.classList.add('show-navbar');
                scrolled = true;
                // Hide the username
                username.style.display = 'none';
            } else if (window.scrollY <= parallaxContainerBottom && scrolled) {
                // Remove the class to hide the navbar
                navbar.classList.remove('show-navbar');
                scrolled = false;
                // Show the username
                username.style.display = 'block';
            }
        }
    }

    // Attach the handleScroll function to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Initial check for scroll position
    handleScroll();

    // Add event listener to logo for scrolling to the top
    logo.addEventListener('click', function () {
        //window.scrollTo({ top: 0, behavior: 'smooth' });
        var element = document.getElementById('about-me');
        var headerOffset = 70;
        var elementPosition =  element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });

    // Add event listener to Socials for scrolling to the bottom
    
});

// Add this section to your existing JavaScript file
// !!!EVENT TIMELINE!!!

/*document.addEventListener("DOMContentLoaded", function () {
    generateEventTimeline();
});

function generateEventTimeline() {
    var eventTimeline = document.getElementById('eventTimeline');

    var events = [
        { date: '06/03/2022', title: 'Ghetto eGames' },
        { date: '08/06/2022', title: 'Ghetto Football Euro League 2022' },
        { date: '11/06/2022', title: 'Ghetto Festival at Daugavpils' },
        { date: '23/02/2022', title: 'LU Qualification games to FaceIt Collegiate' },
        { date: '31/03/2023', title: 'YOU+' },
        { date: '26/08/2023', title: 'Mad Liepaja 2023' },
        { date: '30/09/2023', title: 'kleverr fall B-League Finals' },
        { date: '17/10/2023', title: 'kleverr Virsliga Season 1' },
        { date: '11/11/2023', title: 'OlyBet Sports Bar Baltics Cup' }
    ];

    // Sort events by date in ascending order
    events.sort(function (a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateA - dateB;
    });

    // Calculate the total number of events
    var totalEvents = events.length;

    // Calculate the width for each event dot
    var dotWidthPercentage = 90 / (totalEvents - 1);

    // Create event dots and add them to the timeline
    events.forEach(function (event, index) {
        var dot = document.createElement('div');
        dot.className = 'event-dot';

        // Calculate the left position for each event dot
        var leftPosition = index * dotWidthPercentage + 5;

        dot.style.left = leftPosition + '%';

        dot.addEventListener('click', function () {
            showOverlay(event.date, event.title);
        });

        eventTimeline.appendChild(dot);
    });
}

function showOverlay(date, title) {
    var overlay = document.querySelector('.overlay');
    var overlayContent = document.querySelector('.overlay-content');
    var closeOverlay = document.querySelector('.close-overlay');

    overlayContent.innerHTML = '<h3>' + title + '</h3><p>Date: ' + date + '</p>';
    overlay.style.display = 'flex';

    closeOverlay.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
}*/

document.addEventListener("DOMContentLoaded", function () {
    generateEventTimeline();
});

var overlayActive = false;

function generateEventTimeline() {
    var eventTimeline = document.getElementById('eventTimeline');
    var events = [
        { date: '06/03/2022', title: 'Ghetto eGames', imageUrl: '../../assets/events/egames.png', description: 'Pirmā pieredze lielākā tiešraides sfērā.\nSpēlējot videospēles, sanāca iepazīt dažus patīkamus spēlētājus - lmn8 un Mjeeeku. Visai smieklīgā veidā lmn8 jautāja, vai es nevēlos būt iekšspēles kameras operators "nelielā" spēles Counter-Strike: Global Offensive (turpmāk CS) turnīrā. CSā man bija pieredze gan spēlējot, gan arī veidojot tiešraides grafikas, bet būt kā kameras operatoram(?) - īsti nē. Bet nu labi, piekritu. Izrādījās, ka šis nebija neliels turnīrs, bet gan Ghetto Games rīkots Baltijas mēroga turnīrs', endDate: '06/03/2022', web: 'ghetto-egames' },
        { date: '08/06/2022', title: 'Ghetto Football Euro League 2022', imageUrl: '../../assets/events/euroleague22.png', description: 'Smth', endDate: '08/06/2022', web: 'ghetto-euroleague-2022' },
        { date: '11/06/2022', title: 'Ghetto Carnival at Daugavpils', imageUrl: '../../assets/events/gg_daugavpils2022.jpg', description: 'Smth', endDate: '11/06/2022', web: 'ghetto-daugavpils-2022'  },
        { date: '23/02/2023', title: 'LU Qualification games to FaceIt Collegiate', imageUrl: '../../assets/events/LU_FaceIt.jpg', description: 'Smth', endDate: '23/02/2023', web: 'lu-faceit-qual'  },
        { date: '31/03/2023', title: 'YOU+', imageUrl: '../../assets/events/youpluss.jpg', description: 'Smth', endDate: '30/09/2023', web: 'youpluss'  },
        { date: '21/07/2023', title: 'GGFest 2023', imageUrl: '../../assets/events/ggfest.jpg', description: 'Smth', endDate: '23/07/2023', web: 'ggfest-2023'  },
        { date: '26/08/2023', title: 'Mad Liepaja 2023', imageUrl: '../../assets/events/mad_liepaja_2023.jpg', description: 'Smth', endDate: '27/08/2023', web: 'mad_liepaja-2023'  },
        { date: '30/09/2023', title: 'kleverr fall B-League Finals', imageUrl: '../../assets/events/kleverr_b_league.jpg', description: 'Smth', endDate: '30/09/2023', web: 'kleverr-b-league'  },
        { date: '17/10/2023', title: 'kleverr Virsliga Season 1', imageUrl: '../../assets/events/kleverr_virsliga_1.jpg', description: 'Smth', endDate: '16/12/2023', web: 'kleverr-virsliga-S1'  },
        { date: '11/11/2023', title: 'OlyBet Sports Bar Baltics Cup', imageUrl: '../../assets/events/olybet_cs2.jpg', description: 'Smth', endDate: '02/12/2023', web: 'olybet-cs2'  },
        { date: '24/02/2024', title: 'Charrity Game "ODS vs GENERAL"', imageUrl: '../../assets/events/ods_vs_general.jpg', description: "Viena no jaudīgākajām tiešraidēm līdz šim!\nAr visu pieejamo audio un video tehniku aizbraukt no viena Latvijas gala līdz gandrīz vai otram Latvijas nostūrim (Līvāniem) ar sabiedrisko transportu bija uzdevums, tomēr viss sanāca.\nGARĀŽAs rīkotā labdarības spēle tika translēta ar 4 kamerām - 3x Canon Camcorder, kuras bija saslēgtas pa taisno pie Decklink, un 1 Panasonic GH5 (manu kameru, ar kuru arī filmēju), kas bija uzlikta uz Zhiyun Crane 2 stabilizatora, pie kā bija piestiprināts Blackmagic HDMI uz SDI pārveidotājs, lai varētu kameru saslēgt ar bezvadu raidītāju Teradek Bolt 600.", web: 'ods-vs-general'},
        { date: '05/03/2024', title: 'kleverr Virsliga Season 2', imageUrl: '../../assets/events/kleverr_virsliga_2.webp', description: 'Smth', endDate: '05/05/2024', web: 'kleverr-virsliga-S2'  },
        { date: '18/05/2024', title: 'FORUMS LĪDERE 2024', imageUrl: '../../assets/events/forums_lidere-2024.jpg', description: 'Smth', endDate: '18/05/2024', web: 'forums-lidere-2024'  }
    ];

    // Sort events by date in ascending order
    events.sort(function (a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateA - dateB;
    });

    // Calculate the width for each event dot
    var dotWidthPercentage = 90 / (events.length - 1);

    // Create event dots and add them to the timeline
    events.forEach(function (event, index) {
        var dot = document.createElement('div');
        dot.className = 'event-dot';
        //dot.style.width = '15px';
        //dot.style.height = '15px';
        //dot.style.backgroundColor = '#4CAF50';
        //dot.style.borderRadius = '50%';
        //dot.style.transform = 'translateX(-50%)';
        dot.ariaLabel = event.title;
        dot.style.cursor = 'pointer';
        dot.style.left = index * dotWidthPercentage + 5 + '%';

        var dateLabel = document.createElement('span');
        dateLabel.className = 'event-date-label';
        dateLabel.innerText = event.date;

        var eventTitle = document.createElement('span');
        eventTitle.className = 'event-title';
        eventTitle.innerText = event.title;

        dateLabel.appendChild(eventTitle);
        dot.appendChild(dateLabel);

        dot.addEventListener('click', function (e) {
            /*if (!overlayActive) {
                showOverlay(event);
                e.stopPropagation(); // Prevent the event from propagating to the document click event
            }*/
            /* Comment out before publish: */
            //window.open("../../events/" + event.web + ".html", "_self")
            /* uncomment, before publish: */
            window.open("../../events/" + event.web, "_self")
        });

        eventTimeline.appendChild(dot);
    });
}

function showOverlay(event) {
    overlayActive = true;
    disableNavbar();
    //disableScroll();
    disableOVP();

    var overlay = document.getElementById('eventOverlay');
    var overlayContent = document.getElementById('overlayContent');
    var eventImage = document.getElementById('eventImage');
    var eventDescription = document.getElementById('eventDescription');
    var eventStartDateLabel = document.getElementById('eventStartDateLabel');
    var eventStartDate = document.getElementById('eventStartDate');
    var eventEndDateLabel = document.getElementById('eventEndDateLabel');
    var eventEndDate = document.getElementById('eventEndDate');

    overlayContent.innerHTML = ''; // Clear existing content

    // Event Name
    var eventName = document.createElement('h2');
    eventName.innerText = event.title;
    overlayContent.appendChild(eventName);

    // Event Image (if defined)
    if (event.imageUrl) {
        var image = document.createElement('img');
        image.src = event.imageUrl;
        image.alt = 'Event Image';
        image.className = 'event-image';
        overlayContent.appendChild(image);
    }

    // Event Description
    var description = document.createElement('p');
    description.innerText = event.description;
    overlayContent.appendChild(description);

    overlay.style.display = 'block';
}

function closeOverlay() {
    overlayActive = false;
    enableNavbar();
    enableScroll();
    enableOVP();

    var overlay = document.getElementById('eventOverlay');
    overlay.style.display = 'none';
}

function disableNavbar() {
    var navbar = document.querySelector('.navbar');
    navbar.style.pointerEvents = 'none';
    navbar.style.display = 'none';
}

function enableNavbar() {
    var navbar = document.querySelector('.navbar');
    navbar.style.pointerEvents = 'auto';
    navbar.style.display = 'flex';
}

function disableOVP() {
    var ovp = document.querySelector('.overlay-image');
    ovp.style.display = 'none';
}

function enableOVP() {
    var ovp = document.querySelector('.overlay-image');
    ovp.style.display = 'block';
}

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = 'auto';
}

// Close overlay when clicking outside of the overlay content
document.addEventListener('click', function (event) {
    var overlay = document.getElementById('eventOverlay');
    if (overlayActive && !overlay.contains(event.target)) {
        closeOverlay();
    }
});