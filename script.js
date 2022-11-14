if (Math.floor(window.innerHeight) > Math.floor(window.innerWidth)) {
	console.log('phone');
	// change main flex-direction to column
	const main = document.querySelector('.main');
	main.style.flexDirection = 'column';
	const name = document.querySelector('.name');
	name.style.position = 'relative';
	name.style.top = 'unset';
	name.classList.add('placeholder');
	const info = document.querySelector('.info');
	info.style.marginTop = '20px';
} else {
	console.log('desktop');
	// change main flex-direction to row
	const main = document.querySelector('.main');
	main.style.flexDirection = 'row';
}
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
		const popUpBox = document.querySelectorAll('.popUpBox');
		popUpBox.forEach((popUpBox) => {
			popUpBox.classList.add('popUpBoxDarkMode');
		});
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
		const popUpBox = document.querySelectorAll('.popUpBox');
		popUpBox.forEach((popUpBox) => {
			popUpBox.classList.remove('popUpBoxDarkMode');
		});
	}
}

//buttons to open windows
const buttons = document.querySelectorAll('.box');
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		const window = button.getAttribute('class').split(' ')[1];

		openingWindow(window);
	});
});

function openingWindow(name) {
	const fullScreenBox = document.querySelector('.fullScreenBox');
	switch (name) {
		case 'About':
			const about = document.querySelector('.aboutME');
			about.style.display = 'flex';
			changeFullScreenBox();
			fullScreenBox.addEventListener('click', () => {
				about.style.display = 'none';
				fullScreenBox.style.display = 'none';
			});
			break;
		case 'Projects':
			const Projects = document.querySelector('.myProjects');
			Projects.style.display = 'flex';
			changeFullScreenBox();
			fullScreenBox.addEventListener('click', () => {
				Projects.style.display = 'none';
				fullScreenBox.style.display = 'none';
			});
			break;
		case 'Plans':
			const Future = document.querySelector('.myPlans');
			Future.style.display = 'flex';
			changeFullScreenBox();
			fullScreenBox.addEventListener('click', () => {
				Future.style.display = 'none';
				fullScreenBox.style.display = 'none';
			});
			break;
	}
}

function changeFullScreenBox() {
	const fullScreenBox = document.querySelector('.fullScreenBox');
	fullScreenBox.style.display = 'block';
}
// function hidingFullScreenBox(window) {
// 	const fullScreenBox = document.querySelector('.fullScreenBox');
// 	fullScreenBox.style.display = 'none';
// 	window.style.display = 'none';
// }

const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach((closeButton) => {
	closeButton.addEventListener('click', () => {
		const window = closeButton.parentElement
			.getAttribute('class')
			.split(' ')[0];
		const toClose = document.querySelector(`.${window}`);
		toClose.style.display = 'none';
		const fullScreenBox = document.querySelector('.fullScreenBox');
		fullScreenBox.style.display = 'none';
	});
});

// ! LEARN THIS PART OF CODE
const timer = (ms) => new Promise((res) => setTimeout(res, ms));
// async function animationOnLoad() {
// 	const boxes = document.querySelectorAll('.box');
// 	for (let i = 0; i < boxes.length; i++) {
// 		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
// 			boxes[i].classList.add('animationLength');
// 			boxes[i].classList.add('boxAnimationOnLoadDark');
// 			if (i > 0) boxes[i - 1].classList.remove('boxAnimationOnLoadDark');
// 		} else {
// 			boxes[i].classList.add('animationLength');
// 			boxes[i].classList.add('boxAnimationOnLoad');
// 			if (i > 0) boxes[i - 1].classList.remove('boxAnimationOnLoad');
// 		}
// 		await timer(500);
// 		// boxes[i].classList?.remove('boxAnimationOnLoadDark');
// 		// boxes[i].classList?.remove('boxAnimationOnLoad');
// 		// await timer(150);
// 	}
// 	const last = boxes.length;
// 	boxes[last - 1].classList?.remove('boxAnimationOnLoad');
// 	boxes[last - 1].classList?.remove('boxAnimationOnLoadDark');
// 	boxes.forEach((box) => {
// 		box.classList.remove('animationLength');
// 	});
// }
async function deleteAnimation(box, name) {
	await timer(1000);
	box.classList.remove(`${name}`);
}
async function animationOnLoad() {
	const boxes = document.querySelectorAll('.box');
	for (let i = 0; i < boxes.length; i++) {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			boxes[i].classList.add('animationLength');
			boxes[i].classList.add('boxAnimationOnLoadDark');
		} else {
			boxes[i].classList.add('animationLength');
			boxes[i].classList.add('boxAnimationOnLoad');
			deleteAnimation(boxes[i], 'boxAnimationOnLoad');
		}
		await timer(500);
		// boxes[i].classList?.remove('boxAnimationOnLoadDark');
		// boxes[i].classList?.remove('boxAnimationOnLoad');
		// await timer(150);
	}
	boxes.forEach((box) => {
		box.classList.remove('animationLength');
	});
}
