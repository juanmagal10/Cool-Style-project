const menu = document.querySelectorAll('.menu');
const submenu = document.querySelectorAll('.submenu')


menu.forEach(i => {
        if (i.firstElementChild == <br>) {
              i.firstElementChild.nextSibling.classList.replace('submenu-hidden','submenu-show')
        } else {
                i.addEventListener('mouseover', () => {
                        i.firstElementChild.classList.replace('submenu-hidden','submenu-show')
                    })
                i.addEventListener('mouseout', () => {
                    i.firstElementChild.classList.replace('submenu-show',"submenu-hidden")
                })
      }
        
});







