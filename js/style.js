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
    // Fungsi untuk efek ketikan
  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.getElementById("typed-name").innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';
      
      // Kecepatan ketikan (dalam milidetik)
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }

  // Fungsi untuk menghapus teks
  function eraseText(text, i, fnCallback) {
    if (i > 0) {
      document.getElementById("typed-name").innerHTML = text.substring(0, i-1) + '<span aria-hidden="true"></span>';
      
      // Kecepatan penghapusan (dalam milidetik)
      setTimeout(function() {
        eraseText(text, i - 1, fnCallback)
      }, 50);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }

  // Fungsi untuk memulai animasi
  function startTextAnimation(i) {
    const names = ['Kgs. Azzam Nizar', 'Azzam'];  // Nama lengkap dan alias
    
    if (i < names.length) {
      typeWriter(names[i], 0, function() {
        // Tunggu sebentar sebelum menghapus
        setTimeout(function() {
          eraseText(names[i], names[i].length, function() {
            startTextAnimation(i + 1);
          });
        }, 2000);
      });
    } else {
      // Mulai lagi dari awal setelah semua nama ditampilkan
      setTimeout(function() {
        startTextAnimation(0);
      }, 1000);
    }
  }

  // Mulai animasi
  startTextAnimation(0);


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

