const langLinks = document.querySelectorAll('.header__lang-link-url');
const allLang = ['en', 'ru'];
const defaultLang = localStorage.getItem('lang') || 'en';

const changeImageLanguage = (lang) => {
  for (let key in langImagesObj) {
    const image = document.getElementById(key);
    if (image) image.src = langImagesObj[key][lang];
  }
};

const changeTextLanguage = (lang) => {
  for (let key in langTextObj) {
    const elem = document.getElementById(key);
    if (elem) {
      if (elem.childNodes.length > 1) {
        elem.childNodes[0].textContent = langTextObj[key][lang];
      } else {
        elem.textContent = langTextObj[key][lang];
      }
    }
  }
};

const changeLanguage = (lang) => {
  changeImageLanguage(lang);
  changeTextLanguage(lang);
};

const selectLang = (lang) => {
  changeLanguage(lang);
  langLinks.forEach((link) => {
    const linkText = link.textContent.trim().toLowerCase();
    const linkActive = 'header__lang-link-url_active';

    link.classList.remove(linkActive);
    if (linkText === lang) {
      link.classList.add(linkActive);
      localStorage.setItem('lang', lang);
    }
  });
};

langLinks.forEach((lang) => {
  const selectedLang = lang.textContent.trim().toLowerCase();
  lang.addEventListener('click', () => selectLang(selectedLang));
});

selectLang(defaultLang);
