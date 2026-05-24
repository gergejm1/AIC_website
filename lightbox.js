/* Click-to-enlarge lightbox for the banquet hall gallery images.
   Included on index.html (banquet section) and banquethall.html (gallery).
   Uses event delegation so Swiper's cloned loop slides work too. */
(function () {
  function init() {
    var ov = document.createElement('div');
    ov.className = 'img-lightbox';
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-modal', 'true');
    ov.innerHTML =
      '<span class="img-lightbox-close" role="button" aria-label="Close">&times;</span>' +
      '<img class="img-lightbox-img" alt="Enlarged banquet hall photo">';
    document.body.appendChild(ov);
    var lbImg = ov.querySelector('.img-lightbox-img');

    function open(src) {
      lbImg.src = src;
      ov.classList.add('open');
      document.documentElement.style.overflow = 'hidden';
    }
    function close() {
      ov.classList.remove('open');
      lbImg.removeAttribute('src');
      document.documentElement.style.overflow = '';
    }

    document.addEventListener('click', function (e) {
      var img = e.target.closest ? e.target.closest('.swiper-slide img') : null;
      if (img && img.getAttribute('src')) { e.preventDefault(); open(img.src); return; }
      if (e.target === ov || (e.target.classList && e.target.classList.contains('img-lightbox-close'))) {
        close();
      }
    }, true);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.keyCode === 27) close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
