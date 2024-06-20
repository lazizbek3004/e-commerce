const menu = document.querySelector('.bars')
const exit = document.querySelector('.exit')
const nav = document.querySelector('.littleNav')

menu.addEventListener('click', () => {
	nav.style.display = 'block' 
})	

exit.addEventListener('click', () => {
	nav.style.display = 'none' 
})




function updateClass() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1085) {
    nav.style.display = 'none' 
  }
}

updateClass();

window.addEventListener('resize', updateClass);