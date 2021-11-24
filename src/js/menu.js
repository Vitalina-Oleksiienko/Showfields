
let menuBtn = document.querySelector('.header__menu--mobile');
let menu = document.querySelector('.header-menu--js');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

