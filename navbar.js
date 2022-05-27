let nav = document.querySelector('.nav-menu')
let menuButton = document.querySelector('.menu')

let state = 0;

const switchNav = () => {
    if (!state) return showNav()
    return hideNav()
}

const showNav = () => {
    nav.style.bottom = '-16px'
    state = 1
    return false
}
const hideNav = () => {
    nav.style.bottom = '-46px'
    state = 0
    return false
}