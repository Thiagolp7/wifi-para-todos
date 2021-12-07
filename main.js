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
const menuNav = document.querySelector('#menu__nav')


function changeMenuBarBgcolor(){
  const pagePosition = window.scrollY
  const menuBarBgOn = pagePosition > headerIntroPosition - 25

  if (menuBarBgOn) {
    menuBar.classList.add('bg-active')

    logoTexts.forEach(text => {
      text.classList.add('bg-active')
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

    menuLinks.forEach(link => {
      link.classList.remove('bg-active')
    })

    btnMenuLines.forEach(line => {
      line.classList.remove('bg-active')
    })

    menuBarBgColorOn = false
  }
}

function menuMobileOnOff(){
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

  menuLinks.forEach(link => {
    link.addEventListener('click', menuMobileOnOff)
  })
})



