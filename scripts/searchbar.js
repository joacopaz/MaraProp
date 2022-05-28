const sb = document.getElementById('search-bar')
const sbContent = document.querySelector('#search-bar input')

let expanded = 0
let animation = false

const searchbar = () => {
    if (animation) return
    if (!expanded) return show();
    retract()
    return false
}
const show = async () => {
    animation = true
    sbContent.value = ''
    sbContent.style.opacity = '0'
    sb.style.display = 'flex';
    await wait(1)
    sb.style.width = '150px'
    sbContent.style.opacity = '100'
    await wait(1000)
    expanded = 1
    animation = false
}

const retract = async () => {
    animation = true
    if (typeof sbContent.value !== 'undefined' && sbContent.value.length > 0) console.log(`Value is ${sbContent.value}`)

    sb.style.width = '1px'
    sbContent.style.opacity = '0';
    expanded = 0
    await wait(1000)
    sb.style.display = ''
    animation = false
}