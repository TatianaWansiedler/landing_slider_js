// в работе еще 2 слайдера !!!!!!!!

// SLIDER - 1
const slider = document.querySelector('.slider')
const wrapper = document.querySelector('.wrapper')
const right_btn = document.querySelector('.slider_right_btn')
const left_btn = document.querySelector('.slider_left_btn')

let slider_index = 0
let slider_width = 1110

if (window.innerWidth <= 1200 && window.innerWidth > 950) {
    slider_width = 900
} else if (window.innerWidth <= 950) {
    slider_width = 590
}

const data = [
    { id: 1, title: 'Бухгалтерские услуги в вашем городе', text_btn: 'Наша презентация' },
    { id: 2, title: 'Преимущества работы с нашей компанией', text_btn: 'Узнать больше' },
    { id: 3, title: 'Расcчитать стоимость бухгалтерских услуг', text_btn: 'Заказать услуги' },
    { id: 4, title: 'Почему клиенты выбирают именно Нас', text_btn: 'Перейти к отзывам' },
]

// -- create elem of slider

for (const elem of data) {
    const slide = document.createElement('div')
    const h1_title = document.createElement('h1')
    const banner_button = document.createElement('button')

    slide.className = 'slide'
    h1_title.classList = 'title_services'
    banner_button.classList = 'presentation_btn'

    h1_title.innerText = elem.title
    banner_button.innerText = elem.text_btn

    slide.append(h1_title, banner_button)
    wrapper.append(slide)
}

slider.append(wrapper)

// -----------create controls buttons----------------
let slider_btns = document.querySelector('#controls_1')

for (const index in data) {
    const button = document.createElement('button')
    button.className = 'slider_controls_item'

    if (+index === slider_index) {
        button.classList.add('item-active')
    }

    button.onclick = () => {
        slider_index = +index
        move_slider('click', button)
    }

    slider_btns.append(button)
}

function move_slider(side, button) {

    const all_btns = document.querySelectorAll('.slider_controls_item')

    if (side === 'left') {
        if (slider_index !== 0) {
            slider_index--
            all_btns[slider_index + 1].classList.remove('item-active')
        } else {
            slider_index = data.length - 1
            all_btns[0].classList.remove('item-active')
        }
        all_btns[slider_index].classList.add('item-active')

    } else if (side === 'right') {
        if (slider_index < data.length - 1) {
            slider_index++
            all_btns[slider_index - 1].classList.remove('item-active')
        } else {
            slider_index = 0
            all_btns[all_btns.length - 1].classList.remove('item-active')
        }
        all_btns[slider_index].classList.add('item-active')

    } else if (side === 'click') {
        all_btns.forEach(elem => elem.classList.remove('item-active'))
        button.classList.add('item-active')
    }

    wrapper.style.left = `${slider_index * -slider_width}px`
}

function go_right() {
    move_slider('right')
}
function go_left() {
    move_slider('left')
}

right_btn.addEventListener('click', go_right)
left_btn.addEventListener('click', go_left)


// MENU 

const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");
const burger_span = document.querySelector(".burger span");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        burger_span.classList.remove('active')
    } else {
        menu.classList.add("showMenu");
        burger_span.classList.add('active')
    }
}

burger.addEventListener("click", toggleMenu);