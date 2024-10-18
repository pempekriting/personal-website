function checkScroll() {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        var sectionTop = section.getBoundingClientRect().top;
        var sectionBottom = section.getBoundingClientRect().bottom;
        var windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75 && sectionBottom > 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

function checkTimelineItems() {
    var items = document.querySelectorAll('.timeline-item');
    items.forEach(function(item, index) {
        setTimeout(function() {
            var itemTop = item.getBoundingClientRect().top;
            var itemBottom = item.getBoundingClientRect().bottom;
            var windowHeight = window.innerHeight;
            if (itemTop < windowHeight * 0.75 && itemBottom > 0) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        }, index * 200); // Delay each item by 200ms
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.tech-icon');
    
    icons.forEach(icon => {
      icon.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
        this.style.transition = 'transform 0.3s ease';
      });
      
      icon.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
      });
    });
  });

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        // Scrolling down
        document.querySelector('header').style.transform = 'translateY(-50px)';
        document.querySelector('header').style.transition = 'transform 0.3s ease-out';
    } else {
        // Scrolling up
        document.querySelector('header').style.transform = 'translateY(0)';
        document.querySelector('header').style.transition = 'transform 0.3s ease-out';
    }
    lastScrollTop = st <= 0 ? 0 : st;
    checkScroll();
    checkTimelineItems();
}, false);

window.addEventListener('load', function() {
    checkScroll();
    checkTimelineItems();
});