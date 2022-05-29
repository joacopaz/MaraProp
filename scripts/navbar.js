let nav = document.querySelector('.nav-menu')

let state = 0;

const switchNav = () => {
    if (!state) return showNav()
    return hideNav()
}

const showNav = () => {
    nav.style.bottom = '-16px'
    state = 1
    document.querySelector('.nav-menu a:nth-child(1)').tabIndex = 4;
    document.querySelector('.nav-menu a:nth-child(2)').tabIndex = 5;
    document.querySelector('.nav-menu a:nth-child(3)').tabIndex = 6;
    document.querySelector('.nav-menu a:nth-child(4)').tabIndex = 7;
    return false

}
const hideNav = () => {
    nav.style.bottom = '-46px'
    state = 0
    document.querySelector('.nav-menu a:nth-child(1)').tabIndex = ''
    document.querySelector('.nav-menu a:nth-child(2)').tabIndex = ''
    document.querySelector('.nav-menu a:nth-child(3)').tabIndex = ''
    document.querySelector('.nav-menu a:nth-child(4)').tabIndex = ''
    return false
}