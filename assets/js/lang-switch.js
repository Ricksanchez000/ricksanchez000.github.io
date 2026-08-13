document.addEventListener('DOMContentLoaded', function() {
  var isEn = document.documentElement.lang.toLowerCase().indexOf('en') === 0;

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
