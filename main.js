const mobileToggle = document.querySelector('.mobile-toggle')
const mobileToggleIcons = document.querySelectorAll('.mobile-toggle img')
const primaryNavigation = document.getElementById('primary-navigation')
const menuItems = document.querySelectorAll('.menu-items')


let toggleMenu = ()=> { //opens and closes the side menu when menu button is pressed
    primaryNavigation.classList.toggle('active')
    

    mobileToggleIcons.forEach(icon => { // changes hamburger and close icon depending on the state
        icon.classList.toggle('active')
    })
}

menuItems.forEach(menu => { // for selecting individual menu links
    menu.addEventListener('click', ()=>{ // closes the menubar when menu link is clicked
        primaryNavigation.classList.remove('active')

        mobileToggleIcons.forEach(icon => {// changes hamburger and close icon depending on the state
            icon.classList.toggle('active')
        })
        ariaExpandedCheck()
    })
});


// sets aria expanded state depends on the menu bar state
let ariaExpandedCheck = () => {
    if (primaryNavigation.classList.contains('active')) {
        primaryNavigation.setAttribute('aria-expanded', 'true')
    } else {
        primaryNavigation.setAttribute('aria-expanded', 'false')
    }
}

//calls the menubar toggle when hamburger button is pressed
mobileToggle.addEventListener('click', toggleMenu)
mobileToggle.addEventListener('click', ariaExpandedCheck)

