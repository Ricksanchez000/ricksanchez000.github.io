document.addEventListener('DOMContentLoaded', function() {
  var isEn = window.location.pathname.indexOf('/en/') !== -1;

  // Switch nav language toggle
  var links = document.querySelectorAll('.greedy-nav a');
  for (var i = 0; i < links.length; i++) {
    if (links[i].href.indexOf('/en/') !== -1 && links[i].textContent.indexOf('EN') !== -1) {
      if (isEn) {
        links[i].href = '/';
        links[i].textContent = '\uD83C\uDF10 中文';
      } else {
        links[i].textContent = '\uD83C\uDF10 English';
      }
      break;
    }
  }

  // Switch sidebar author profile for English pages
  if (isEn) {
    var nameEl = document.querySelector('.author__name');
    if (nameEl) nameEl.textContent = 'Qiyang Liu';

    var bioEl = document.querySelector('.author__bio');
    if (bioEl) bioEl.textContent = 'Assistant Professor, Peking University';

    var locEl = document.querySelector('.author__desktop');
    if (locEl) locEl.innerHTML = '<i class="fa-solid fa-location-dot icon-pad-right" aria-hidden="true"></i>Shenzhen';

    var desktopItems = document.querySelectorAll('.author__desktop');
    if (desktopItems.length > 1) {
      desktopItems[1].innerHTML = '<i class="fa fa-solid fa-building-columns icon-pad-right" aria-hidden="true"></i>Peking University';
    }
  }
});
