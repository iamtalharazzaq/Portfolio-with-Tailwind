const sideMenu = document.querySelector('#side')

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)'
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)'
}