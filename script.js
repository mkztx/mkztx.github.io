let vertical = false;
if (Math.floor(window.innerHeight) > Math.floor(window.innerWidth)) {
	console.log('phone');
	// change main flex-direction to column
	const main = document.querySelector('.main');
	main.style.flexDirection = 'column';
	const name = document.querySelector('.name');
	name.style.position = 'relative';
	name.style.top = 'unset';
	name.style.left = 'unset';
	name.classList.add('placeholder');
	vertical = true;
	const pages = document.querySelectorAll('.page');
	pages.forEach((page) => {
		page.style.transform = 'translateX(100%)';
	});
} else {
	console.log('desktop');
	// change main flex-direction to row
	const main = document.querySelector('.main');
	main.style.flexDirection = 'row';
}
console.log(vertical);
setDisplayMode();

//TODO learn about that code (code from stack-overflow https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript)
window
	.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', (event) => {
		setDisplayMode();
	});

function setDisplayMode() {
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		console.log('dark mode');
		const main = document.querySelector('.main');
		main.classList.add('mainDarkMode');
		const box = document.querySelectorAll('.box');
		box.forEach((box) => {
			box.classList.add('boxDarkMode');
		});
		const name = document.querySelector('.name');
		const h1 = name.querySelector('h1');
		h1.classList.add('nameDarkBackground');
		h1.style.color = '#fff';
	} else {
		console.log('light mode');
		const main = document.querySelector('.main');
		main.classList.remove('mainDarkMode');
		const box = document.querySelectorAll('.box');
		box.forEach((box) => {
			box.classList.remove('boxDarkMode');
		});
		const name = document.querySelector('.name');
		const h1 = name.querySelector('h1');
		h1.classList.remove('nameDarkBackground');
	}
}

// ! LEARN THIS PART OF CODE
const timer = (ms) => new Promise((res) => setTimeout(res, ms));
async function deleteAnimation(box, name) {
	await timer(1000);
	box.classList.remove(`${name}`);
}
async function animationOnLoad() {
	const boxes = document.querySelectorAll('.box');
	await timer(200);
	for (let i = 0; i < boxes.length; i++) {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			boxes[i].classList.add('animationLength');
			boxes[i].classList.add('boxAnimationOnLoadDark');
			deleteAnimation(boxes[i], 'boxAnimationOnLoadDark');
		} else {
			boxes[i].classList.add('animationLength');
			boxes[i].classList.add('boxAnimationOnLoad');
			deleteAnimation(boxes[i], 'boxAnimationOnLoad');
		}
		await timer(500);
	}
	await timer(1000);
	boxes.forEach((box) => {
		box.classList.remove('animationLength');
	});
}

async function animateNameOnLoad() {
	const name = document.querySelector('.name');
	const h1 = name.querySelector('h1');
	h1.style.opacity = '1';
}

function swipeBody(ifBack) {
	if (ifBack) {
		if (vertical) {
			const body = document.querySelector('body');
			body.style.transform = `translateX(0)`;
		} else {
			const body = document.querySelector('body');
			body.style.transform = `translateY(0)`;
		}
	} else {
		if (vertical) {
			const body = document.querySelector('body');
			body.style.transform = `translateX(-100vw)`;
		} else {
			const body = document.querySelector('body');
			body.style.transform = `translateY(-100vh)`;
		}
	}
}
// TODO on mobile switch projects place with plans
