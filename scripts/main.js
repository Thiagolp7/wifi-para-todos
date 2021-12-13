// Elements
const htmlElement = document.querySelector('html');
const menuSection = document.querySelector('#menu');
const headerIntro = document.querySelector('#intro');
const logoTexts = document.querySelectorAll('.logo__text');
const btnSwitchTheme = document.querySelector('#btn-switch-theme');
const btnSwitchThemeImg = document.querySelectorAll('.btn-switch-theme__img');
const btnSwitchThemeImgLight = document.querySelector('#light-theme-img');
const btnSwitchThemeImgDark = document.querySelector('#dark-theme-img');
const menuLinksContainer = document.querySelector('#menu__links-container');
const menuLinks = document.querySelectorAll('.menu__link');
const btnMenuMobile = document.querySelector('#btn-menu-mobile');
const btnMenuLines = document.querySelectorAll('.menu-mobile__line');
const formTabs = document.querySelectorAll('.tab');
const formContents = document.querySelectorAll('.form__content');

// Controllers
const menuSectionBottom = menuSection.offsetTop + menuSection.offsetHeight;
const headerIntroTop = headerIntro.offsetTop;
let menuSectionHasBackground = false;

// Functions
function AddClassInElements(elements, className) {
  elements.forEach(element => {
    element.classList.add(className);
  })
}

function RemoveClassInElements(elements, className) {
  elements.forEach(element => {
    element.classList.remove(className);
  })
}

function MenuSectionBackgroundOn() {
  const active = 'bg-active'
  menuSection.classList.add(active);
  AddClassInElements(logoTexts, active);
  AddClassInElements(btnSwitchThemeImg, active);
  AddClassInElements(menuLinks, active);
  AddClassInElements(btnMenuLines, active);
  menuSectionHasBackground = true;
}

function MenuSectionBackgroundOff() {
  const active = 'bg-active';
  menuSection.classList.remove(active);
  RemoveClassInElements(logoTexts, active);
  RemoveClassInElements(btnSwitchThemeImg, active);
  RemoveClassInElements(menuLinks, active);
  RemoveClassInElements(btnMenuLines, active);
  menuSectionHasBackground = false;
}

function CheckIfMenuCrossedIntro() {
  const pagePosition = window.scrollY;
  const crossed = pagePosition + menuSectionBottom > headerIntroTop;
  if (crossed) {
    return true
  } else {
    return false
  }
}

function MenuSectionSetBackground() {
  if (CheckIfMenuCrossedIntro()) {
    MenuSectionBackgroundOn();
  } else {
    MenuSectionBackgroundOff();
  }
}

function MenuMobileOpenClose() {
  menuLinksContainer.classList.toggle('active');
  if (!menuSectionHasBackground && !CheckIfMenuCrossedIntro()) {
    MenuSectionBackgroundOn();
  } else if (menuSectionHasBackground && !CheckIfMenuCrossedIntro()) {
    MenuSectionBackgroundOff();
  }
}

function MenuMobileClose() {
  menuLinksContainer.classList.remove('active');
}

function FormTabChange(){
  formTabs.forEach(tab => {
    tab.addEventListener('click', event => {
      const active = 'active'
      
      RemoveClassInElements(formTabs, active);
      
      tab.classList.add(active)
      
      formContents.forEach(content =>{
        content.classList.remove(active);
        
        const contentId = content.id.replace('form-', '');
        const tabId = tab.id.replace('tab-', '');
  
        if(contentId === tabId ){
          content.classList.add(active);
        }
      })
    })
  })
}

function CheckDataTheme(){
  const currentTheme = htmlElement.getAttribute('data-theme');
  return currentTheme
} 

function SaveDataTheme(theme){
  localStorage.setItem('theme', theme);
}

function LoadDataTheme(){
  const theme = localStorage.theme;
  if(theme){
    SetTheme(theme)
  }
}

function SetTheme(theme){
  const setTheme = theme;
  const active = 'active';

  if (setTheme == 'dark'){
    RemoveClassInElements(btnSwitchThemeImg, active);
    btnSwitchThemeImgDark.classList.add(active);
    htmlElement.setAttribute('data-theme', 'dark');
    SaveDataTheme('dark');
  } else if(setTheme == 'light'){
    RemoveClassInElements(btnSwitchThemeImg, active);
    btnSwitchThemeImgLight.classList.add(active);
    htmlElement.setAttribute('data-theme', 'light');
    SaveDataTheme('light');
  }
}

function ChangeTheme(){
  if(CheckDataTheme() == 'light'){
    SetTheme('dark');
  } else if (CheckDataTheme() == 'dark'){
    SetTheme('light');
  }
}

// Executations
window.addEventListener('load', LoadDataTheme);
window.addEventListener('load', CheckIfMenuCrossedIntro);
window.addEventListener('load', MenuSectionSetBackground);
window.addEventListener('load', FormTabChange);
window.addEventListener('scroll', CheckIfMenuCrossedIntro);
window.addEventListener('scroll', MenuSectionSetBackground);
btnMenuMobile.addEventListener('click', MenuMobileOpenClose);
window.addEventListener('scroll', MenuMobileClose);
btnSwitchTheme.addEventListener('click', ChangeTheme);