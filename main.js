// Change menu bar background when close at header intro
const headerIntro = document.querySelector('#intro')
const menuBar = document.querySelector('#menu')
const logoTexts = document.querySelectorAll('.logo__text')
const menuLinks = document.querySelectorAll('.menu__link')

document.addEventListener('scroll', (event)=>{
  const headerIntroPosition = headerIntro.offsetTop
  console.log(headerIntroPosition)
  const pagePosition = window.scrollY
  const menuBarBgOn = pagePosition > headerIntroPosition - 25

  if(menuBarBgOn){
    menuBar.classList.add('bg-active')
  
    logoTexts.forEach(text => {
      text.classList.add('bg-active')
    })
  
    menuLinks.forEach(link => {
      link.classList.add('bg-active')
    })
  } else {
    menuBar.classList.remove('bg-active')
  
    logoTexts.forEach(text => {
      text.classList.remove('bg-active')
    })
  
    menuLinks.forEach(link => {
      link.classList.remove('bg-active')
    })
  }
} )