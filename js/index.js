function openSidebar() {
    document.getElementById('sidebar').style.right = "0px"
    document.getElementById('bg-sidebar').style.display = "block"
    document.querySelector('html').style.overflow = "hidden"
}
function closeSidebar() {
    document.getElementById('sidebar').style.right = "-270px"
    document.getElementById('bg-sidebar').style.display = "none"
    document.querySelector('html').style.overflow = "scroll"
    document.querySelector('.gmae-show').classList.remove('show')
}
function openSubmenuGame() {
    document.querySelector('.gmae-show').classList.toggle('show')
    document.querySelector('.btn-open-show-game').classList.toggle('rotate')
}