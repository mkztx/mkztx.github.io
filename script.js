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
}
