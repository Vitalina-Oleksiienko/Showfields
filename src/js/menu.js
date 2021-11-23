
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header-menu--js');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})