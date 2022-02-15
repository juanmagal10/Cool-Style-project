const menu = document.getElementById('menu');
const submenu = document.getElementById('submenu')
// submenu.addEventListener('mouseover', () => {
//     submenu.classList.replace('submenu-hidden','submenu')
    
// })

// submenu.addEventListener('mouseout', () => {
//     submenu.classList.add('submenu-hidden')
//     submenu.classList.remove('submenu')
// })

menu.addEventListener('click', () => {
        submenu.classList.toggle('submenu-hidden')
   
})

