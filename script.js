if (Math.floor(window.innerHeight) > Math.floor(window.innerWidth)) {
	console.log('phone');
	// change main flex-direction to column
	const main = document.querySelector('.main');
	main.style.flexDirection = 'column';
	const name = document.querySelector('.name');
	name.style.position = 'relative';
	name.style.top = 'unset';
	name.classList.add('placeholder');
} else {
	console.log('desktop');
	// change main flex-direction to row
	const main = document.querySelector('.main');
	main.style.flexDirection = 'row';
}

// const main = document.querySelector('.main');
// main.classList.add('mainDarkMode');
// const box = document.querySelectorAll('.box');
// box.forEach((box) => {
// 	box.classList.add('boxDarkMode');
// });

//check for dark mode
// const box = document.querySelectorAll('.box');
// box.forEach((box) => {
// 	box.setAttribute('aria-haspopup', 'true');
// });
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
			about.style.display = 'block';
			changeFullScreenBox();
			fullScreenBox.addEventListener('click', () => {
				about.style.display = 'none';
				fullScreenBox.style.display = 'none';
			});
			break;
		case 'Projects':
			const Projects = document.querySelector('.myProjects');
			Projects.style.display = 'block';
			changeFullScreenBox();
			fullScreenBox.addEventListener('click', () => {
				Projects.style.display = 'none';
				fullScreenBox.style.display = 'none';
			});
			break;
		case 'Plans':
			const Future = document.querySelector('.myPlans');
			Future.style.display = 'block';
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
// function hiddingFullScreenBox(window) {
// 	const fullScreenBox = document.querySelector('.fullScreenBox');
// 	fullScreenBox.style.display = 'none';
// 	window.style.display = 'none';
// }
