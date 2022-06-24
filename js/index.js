const welcomeH1 = document.querySelector('.welcome')

const welcomeStringNBSP = "> Hello! I'm Maitray.&nbsp;"
const welcomeStringUS = "> Hello! I'm Maitray._"

const welcomeText = welcomeStringUS.split("")

let currLetter = 0
let hasUnderscore = false

const timerID = setInterval(() => {
		if(currLetter < welcomeText.length){
			welcomeH1.innerHTML += welcomeText[currLetter]
			currLetter++
		}
		if(currLetter === welcomeText.length){
			const cursorIntrv = setInterval(() => {
				if(!hasUnderscore){
					welcomeH1.innerHTML = welcomeStringUS
					hasUnderscore = true
				}
				else{
					welcomeH1.innerHTML = welcomeStringNBSP
					hasUnderscore = false
				}
			}, 1000)
			clearInterval(timerID)
		}
	}, 200)

const menuBtns = document.querySelectorAll('button.menuToggle')
const navbar = document.querySelector('.navbar')

const navMenu = document.querySelector('div.menuLabel.menu')
const homeBtn = document.querySelector('div.menuLabel.home')
const aboutBtn = document.querySelector('div.menuLabel.about')

let activeSection = home

const toggleNavbar = () => {
	if(!navbar.classList.contains('w-0')){
		navbar.classList.add('w-0')
	}
}

const toggleSection = (section) => {
	if(activeSection !== section){
		section.classList.remove('d-none')
		activeSection.classList.add('d-none')
		activeSection = section
	}
	navbar.classList.add('w-0')
}

for(let i = 0; i < menuBtns.length; i++){
	menuBtns[i].addEventListener('click', (ev) => {
		ev.stopPropagation()
		navbar.classList.remove('w-0')
	})
}

navMenu.addEventListener('click', toggleNavbar)
home.addEventListener('click', toggleNavbar)
about.addEventListener('click', toggleNavbar)

homeBtn.addEventListener('click', () => toggleSection(home))
aboutBtn.addEventListener('click', () => toggleSection(about))