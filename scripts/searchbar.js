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
    sbContent.style.visibility = 'hidden'
    sb.style.display = 'flex';
    await wait(1)
    sb.style.width = '150px'
    await wait(1000)
    sbContent.style.visibility = 'visible'
    expanded = 1
    animation = false
}

const retract = async () => {
    animation = true
    if (typeof sbContent.value !== 'undefined' && sbContent.value.length > 0) console.log(`Value is ${sbContent.value}`)

    sb.style.width = '1px'
    sbContent.style.visibility = 'hidden';
    expanded = 0
    await wait(1000)
    sb.style.display = ''
    animation = false
}