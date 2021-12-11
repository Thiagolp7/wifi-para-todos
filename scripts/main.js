// Change menu bar background when close at header intro
const headerIntro = document.querySelector('#intro')
const menuBar = document.querySelector('#menu')
const logoTexts = document.querySelectorAll('.logo__text')
const menuLinks = document.querySelectorAll('.menu__link')
const headerIntroPosition = headerIntro.offsetTop
let menuBarBgColorOn = false

// menu mobile
const btnMenuMobile = document.querySelector('#btn-menu-mobile')
const btnMenuLines = document.querySelectorAll('.menu-mobile__line')
const menuNav = document.querySelector('#menu__links-container')
const btnSwitchThemeImg = document.querySelectorAll('.btn-switch-theme__img')

function changeMenuBarBgcolor() {
  const pagePosition = window.scrollY
  const menuBarBgOn = pagePosition > headerIntroPosition

  if (menuBarBgOn) {
    menuBar.classList.add('bg-active')

    logoTexts.forEach(text => {
      text.classList.add('bg-active')
    })

    btnSwitchThemeImg.forEach(img =>{
      img.classList.add('bg-active')
    })

    menuLinks.forEach(link => {
      link.classList.add('bg-active')
    })

    btnMenuLines.forEach(line => {
      line.classList.add('bg-active')
    })

    menuBarBgColorOn = true
  } else {
    menuBar.classList.remove('bg-active')

    logoTexts.forEach(text => {
      text.classList.remove('bg-active')
    })

    btnSwitchThemeImg.forEach(img =>{
      img.classList.remove('bg-active')
    })

    menuLinks.forEach(link => {
      link.classList.remove('bg-active')
    })

    btnMenuLines.forEach(line => {
      line.classList.remove('bg-active')
    })

    menuBarBgColorOn = false
  }
}

function menuMobileOnOff() {
  btnMenuLines.forEach(lines => {
    lines.classList.toggle('active')
  })
  menuNav.classList.toggle('active')

  if (!menuBarBgColorOn) {
    menuBar.classList.toggle('bg-active')

    logoTexts.forEach(text => {
      text.classList.toggle('bg-active')
    })

    btnMenuLines.forEach(line => {
      line.classList.toggle('bg-active')
    })
  }
}

window.addEventListener('load', () => {
  document.addEventListener('scroll', changeMenuBarBgcolor)
  btnMenuMobile.addEventListener('click', menuMobileOnOff)
})


// form-container

const formTabs = document.querySelectorAll('.tab')
const formContents = document.querySelectorAll('.form__content')

formTabs.forEach(tab => {
  tab.addEventListener('click', event => {
    formTabs.forEach(tab => {
      tab.classList.remove('active')
    })

    tab.classList.add('active')

    formContents.forEach(content =>{
      content.classList.remove('active')

      const contentId = content.id.replace('form-', '')
      const tabID = tab.id.replace('tab-', '')
      if(contentId === tabID ){
        content.classList.add('active')
      }
    })
  })
})


// close menu-mobile on move scroll
function MenuMobileClose(){
  btnMenuLines.forEach(lines => {
    lines.classList.remove('active')
  })
  menuNav.classList.remove('active')
}

window.addEventListener('scroll', MenuMobileClose)


// switch theme button
const htmlElement = document.querySelector('html')
const switchBtn = document.querySelector('#switch-theme')

switchBtn.addEventListener('click', click =>{
  switchBtn.classList.toggle('active')
  
  if(switchBtn.classList.contains('active')){
    htmlElement.setAttribute('data-theme', 'dark')
    btnSwitchThemeImg.forEach(img => {
      img.classList.remove('active')
      if(img.id == 'dark-theme'){
        img.classList.add('active')
      }
    })
  } else {
    htmlElement.removeAttribute('data-theme')
    btnSwitchThemeImg.forEach(img => {
      img.classList.remove('active')
      
      if(img.id == 'light-theme'){
        img.classList.add('active')
      }
    })
  }
})