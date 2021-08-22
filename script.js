const fontBtn = document.getElementById('font-btn');
const menu = document.getElementById('menu');
const navBar = document.getElementById('nav-bar');
const settingBtn = document.getElementById('setting-btn');
const undoBtn = document.getElementById('undo-btn');

const menuCloser = () => {
  navBar.classList.replace('open', 'closed');
};

const menuOpener = () => {
  navBar.classList.replace('closed', 'open');
};

const menuBtnClickAnime = () => {
  settingBtn.classList.add('clicked');
  setTimeout(() => {
    settingBtn.classList.remove('clicked');
  }, 500);
};

settingBtn.addEventListener('click', () => {
  if (navBar.classList.contains('open')) {
    menuCloser();
    menuBtnClickAnime();
  } else if (navBar.classList.contains('closed')) {
    menuOpener();
    menuBtnClickAnime();
  }
});

fontBtn.addEventListener('click', () => {
  menu.classList.add('font-setting');
});
undoBtn.addEventListener('click', () => {
  menu.classList.remove('font-setting');
});

document.body.addEventListener('click', (event) => {
  if (event.target === document.body) menuCloser();
});
