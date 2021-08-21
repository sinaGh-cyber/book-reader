const fontBtn = document.getElementById('font-btn');
const menu = document.getElementById('menu');
const navBar = document.getElementById('nav-bar');
const settingBtn = document.getElementById('setting-btn');
const undoBtn = document.getElementById('undo-btn');

settingBtn.addEventListener('click', () => {
  navBar.classList.toggle('open');
  settingBtn.classList.toggle('clicked');
});

fontBtn.addEventListener('click', () => {
  menu.classList.add('font-setting');
});
undoBtn.addEventListener('click', () => {
  menu.classList.remove('font-setting');
});
