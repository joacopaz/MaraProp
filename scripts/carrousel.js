let slide1 = document.getElementById('slide_1')
let slide2 = document.getElementById('slide_2')
let slide3 = document.getElementById('slide_3')
let slide4 = document.getElementById('slide_4')
let slide5 = document.getElementById('slide_5')
let slide6 = document.getElementById('slide_6')
let slide7 = document.getElementById('slide_7')
let slide8 = document.getElementById('slide_8')
let slide9 = document.getElementById('slide_9')
let slide10 = document.getElementById('slide_10')
let animating;
let slideIndex = 1;

// Functions

const wait = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const next = async () => {
    if (animating) return false
    animating = true;
    let currentSlide;
    let nextSlide;
    switch (slideIndex) {
        case 1:
            currentSlide = slide1
            nextSlide = slide2
            break;
        case 2:
            currentSlide = slide2
            nextSlide = slide3
            break;
        case 3:
            currentSlide = slide3
            nextSlide = slide4
            break;
        case 4:
            currentSlide = slide4
            nextSlide = slide5
            break;
        case 5:
            currentSlide = slide5
            nextSlide = slide6
            break;
        case 6:
            currentSlide = slide6
            nextSlide = slide7
            break;
        case 7:
            currentSlide = slide7
            nextSlide = slide8
            break;
        case 8:
            currentSlide = slide8
            nextSlide = slide9
            break;
        case 9:
            currentSlide = slide9
            nextSlide = slide10
            break;
        case 10:
            currentSlide = slide10
            nextSlide = slide1
            slideIndex = 0;
            break;
        default:
            currentSlide = slide1
            nextSlide = slide2
            break;
    }
    currentSlide.style.animationName = 'left'
    nextSlide.style.left = '100%'
    nextSlide.style.visibility = 'visible'
    nextSlide.style.animationName = 'left'
    slideIndex++
    await wait(500)
    nextSlide.style.left = ''
    nextSlide.style.animationName = ''
    currentSlide.style.visibility = 'hidden'
    currentSlide.style.animationName = ''
    animating = false;
    return false
}

const prev = async () => {
    if (animating) return false
    animating = true;
    let currentSlide;
    let nextSlide;
    switch (slideIndex) {
        case 1:
            currentSlide = slide1
            nextSlide = slide10
            slideIndex = 11;
            break;
        case 2:
            currentSlide = slide2
            nextSlide = slide1
            break;
        case 3:
            currentSlide = slide3
            nextSlide = slide2
            break;
        case 4:
            currentSlide = slide4
            nextSlide = slide3
            break;
        case 5:
            currentSlide = slide5
            nextSlide = slide4
            break;
        case 6:
            currentSlide = slide6
            nextSlide = slide5
            break;
        case 7:
            currentSlide = slide7
            nextSlide = slide6
            break;
        case 8:
            currentSlide = slide8
            nextSlide = slide7
            break;
        case 9:
            currentSlide = slide9
            nextSlide = slide8
            break;
        case 10:
            currentSlide = slide10
            nextSlide = slide9
            break;
        default:
            currentSlide = slide1
            nextSlide = slide2
            break;
    }
    currentSlide.style.animationName = 'right'
    nextSlide.style.right = '100%'
    nextSlide.style.visibility = 'visible'
    nextSlide.style.animationName = 'right'
    slideIndex--
    await wait(500)
    nextSlide.style.right = ''
    nextSlide.style.animationName = ''
    currentSlide.style.visibility = 'hidden'
    currentSlide.style.animationName = ''
    animating = false;
    return false
}

const focusFirst = () => {
    document.querySelector('button[tabindex="1"]').focus()
}


// Event listeners for next and previous buttons

const nxt = document.querySelector('.next')
const nxtI = document.querySelector('.next i')
const prv = document.querySelector('.prev')
const prvI = document.querySelector('.prev i')

// onclick functions
nxt.addEventListener('click', (e) => {
    e.preventDefault();
    next();
    return false;
})
prv.addEventListener('click', (e) => {
    e.preventDefault();
    prev();
    return false;
})

// keystrokes for carrousel
nxt.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (document.activeElement === nxt && (e.keyCode === 32 || e.keyCode == 13)) next();
    return false;
})
prv.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (document.activeElement === prv && (e.keyCode == 32 || e.keyCode == 13)) prev();
    return false;
})

// Beat styling
nxt.addEventListener('mouseover', (e) => {
    e.preventDefault()
    nxtI.classList.add('fa-beat')
    return false
})
nxt.addEventListener('mouseleave', (e) => {
    e.preventDefault()
    nxtI.classList.remove('fa-beat')
    return false
})
prv.addEventListener('mouseover', (e) => {
    e.preventDefault()
    prvI.classList.add('fa-beat')
    return false
})
prv.addEventListener('mouseleave', (e) => {
    e.preventDefault()
    prvI.classList.remove('fa-beat')
    return false
})

alert('Este sitio se encuentra en construcción, el acceso es sólo para debugging')