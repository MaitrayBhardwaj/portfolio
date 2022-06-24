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
const projectsBtn = document.querySelector('div.menuLabel.projects')

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
projects.addEventListener('click', toggleNavbar)

homeBtn.addEventListener('click', () => toggleSection(home))
aboutBtn.addEventListener('click', () => toggleSection(about))
projectsBtn.addEventListener('click', () => toggleSection(projects))

const copyMailToClipboard = () => {
	let copyText = "maitraybhardwaj@gmail.com";
	navigator.clipboard.writeText(copyText).then(() => {
		const copyNotif = document.createElement('div')
		copyNotif.classList.add('notif')
		copyNotif.innerHTML = "Copied to clipboard"
		document.body.append(copyNotif)
		setTimeout(() => copyNotif.remove(), 2500)
	});
}

const email = document.querySelector('.email')

email.addEventListener('click', copyMailToClipboard)

const projList = document.querySelector('.projectList')

const projectList = [
	{
		name: "StudentForums",
		url: "https://github.com/MaitrayBhardwaj/StudentForums",
		hostedOn: "https://studentforums.maitraybhardwaj.repl.co/",
		desc: "A full stack student-specific forums website",
		techUsed: [
			"HTML5", "CSS3", "JS", "NodeJS", "ExpressJS", "MongoDB"
		]
	},
	{
		name: "50Days50Projects",
		url: "https://github.com/MaitrayBhardwaj/50Days50Projects",
		hostedOn: "https://maitraybhardwaj.github.io/50Days50Projects/",
		desc: "50 mini HTML, CSS, JS projects in 50 days",
		techUsed: [
			"HTML5", "CSS3", "JS", "Axios"
		]
	},
	{
		name: "OrderIn",
		url: "https://github.com/MaitrayBhardwaj/OrderIn",
		hostedOn: null,
		desc: "A simple interface which makes ordering food on outlets easy and fast(under development)",
		techUsed: [
			"HTML5", "CSS3", "JS", "Bootstrap", "NodeJS", "ExpressJS", "MongoDB"
		]
	}
]

projectList.forEach((proj) => {
	let techUsed = ''
	proj.techUsed.forEach((tech) => {
		techUsed += `<span class="projTech">${tech}</span>`
	})

	projList.innerHTML += `
		<div class="proj">
			<h2 class="projName">${proj.name}</h2>
			<div class="projDesc">${proj.desc}</div>
			<div class="projLinks">
				<a href="${proj.url}" target="_blank"><i class="bi bi-github"></i></a>
				${proj.hostedOn == null ? '' : `<a href="${proj.hostedOn}" target="_blank"><i class="bi bi-box-arrow-up-right"></i></a>`}
			</div>
			<div class="projTechList">
				${techUsed}
			</div>
		</div>
	`
})