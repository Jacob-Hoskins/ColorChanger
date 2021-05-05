const btn = document.querySelector(".btn");

btn.addEventListener('click', buttonClicked);

function buttonClicked(e){
	document.querySelector('body').style.background = 'black';
}