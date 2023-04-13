$(document).ready(function() {
    var slideIndexS = 0,
        sliding = false;
    
    $('#fullpage').fullpage({
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
      anchors: ['Landing_page', 'About_Me', 'My_Experience', 'Socials', 'Contacts'],
      menu: '#menu',
          css3: true,
          licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
          afterSlideLoad: function(section, origin, destination, direction){
              slideIndexS = destination.index+1;
          },
          onLeave: function(origin, destination, direction) {
              console.log('Index: ' + origin.index + ' Slide Index: ' + slideIndexS);
              //console.log(index, nextIndex, direction, sliding);
              if (origin.index === 1 && !sliding) {
                  if (direction === 'down' && slideIndexS < 4) {
                      $.fn.fullpage.moveSlideRight();
                      return false;
                  } else if (direction === 'up' && slideIndexS > 1) {
                      $.fn.fullpage.moveSlideLeft();
                      return false;
                  }
              } else if (sliding) {
                  return false;
              }
          }
      });
  });