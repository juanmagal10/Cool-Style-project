const menu = document.querySelectorAll('.menu');
const submenu = document.querySelectorAll('.submenu')
const br = document.querySelector('br')

menu.forEach(i => {
        if (i.firstElementChild == br) {
                i.addEventListener('mouseover', () => {
                        i.firstElementChild.nextElementSibling.classList.replace('submenu-hidden', 'submenu-show')       
                })
                i.addEventListener('mouseout', () => {
                        i.firstElementChild.nextElementSibling.classList.replace('submenu-show',"submenu-hidden")
                    })
        } else {
                i.addEventListener('mouseover', () => {
                        i.firstElementChild.classList.replace('submenu-hidden','submenu-show')
                    })
                i.addEventListener('mouseout', () => {
                    i.firstElementChild.classList.replace('submenu-show',"submenu-hidden")
                })
      }
        
});







