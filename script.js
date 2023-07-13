// в работе последний слайдер !!!!!!!!

// screen sizes
let slider_width = 1110

if (window.innerWidth <= 1200 && window.innerWidth > 950) {
    slider_width = 900
} else if (window.innerWidth <= 900) {
    slider_width = 590
}

// SLIDER - 1
let slider_index = 0
const wrapper = document.querySelector('.wrapper')
const right_btn = document.querySelector('.slider_right_btn')
const left_btn = document.querySelector('.slider_left_btn')

const data = [
    { id: 1, title: 'Бухгалтерские услуги в вашем городе', text_btn: 'Наша презентация' },
    { id: 2, title: 'Преимущества работы с нашей компанией', text_btn: 'Узнать больше' },
    { id: 3, title: 'Расcчитать стоимость бухгалтерских услуг', text_btn: 'Заказать услуги' },
    { id: 4, title: 'Почему клиенты выбирают именно Нас', text_btn: 'Перейти к отзывам' },
]

// -- create elem of slider-1

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

// func move
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


// SLIDER-2

let slider_index_2 = 0
const wrapper_clients = document.querySelector('.wrapper_clients')
const right_btn_2 = document.querySelector('#btn_blue_right')
const left_btn_2 = document.querySelector('#btn_blue_left')

const images = [
    ['images/microsoft.png', 'images/microsoft.png', 'images/microsoft.png', 'images/microsoft.png',],
    ['images/microsoft.png', 'images/microsoft.png', 'images/microsoft.png', 'images/microsoft.png',],
    ['images/microsoft.png', 'images/microsoft.png', 'images/microsoft.png', 'images/microsoft.png',],
    ['images/microsoft.png', 'images/microsoft.png', 'images/microsoft.png', 'images/microsoft.png',],
]

// -- create elem of slider-2

for (const elem of images) {
    const client = document.createElement('div')
    client.className = 'client'

    if (slider_width > 590) {
        elem.forEach(img_src => {
            const img = document.createElement('img')
            img.className = 'clients_img'
            img.src = img_src
            img.alt = 'client'
            client.append(img)
        })
    }
    wrapper_clients.append(client)
}

// -----------create controls buttons 2----------------

let slider_btns_2 = document.querySelector('#controls_2')

for (const index in images) {
    const button = document.createElement('button')
    button.className = 'slider_controls_item-blue'

    if (+index === slider_index_2) {
        button.classList.add('item-active-blue')
    }

    button.onclick = () => {
        slider_index_2 = +index
        move_slider2('click', button)
    }

    slider_btns_2.append(button)
}

function move_slider2(side, button) {
    const all_btns = document.querySelectorAll('.slider_controls_item-blue')

    if (side === 'left') {
        if (slider_index_2 !== 0) {
            slider_index_2--
            all_btns[slider_index_2 + 1].classList.remove('item-active-blue')
        } else {
            slider_index_2 = images.length - 1
            all_btns[0].classList.remove('item-active-blue')
        }
        all_btns[slider_index_2].classList.add('item-active-blue')

    } else if (side === 'right') {
        if (slider_index_2 < images.length - 1) {
            slider_index_2++
            all_btns[slider_index_2 - 1].classList.remove('item-active-blue')
        } else {
            slider_index_2 = 0
            all_btns[all_btns.length - 1].classList.remove('item-active-blue')
        }
        all_btns[slider_index_2].classList.add('item-active-blue')

    } else if (side === 'click') {
        all_btns.forEach(elem => elem.classList.remove('item-active-blue'))
        button.classList.add('item-active-blue')
    }
    console.log(slider_width);
    wrapper_clients.style.left = `${slider_index_2 * -slider_width}px`
}

function go_right2() {
    move_slider2('right')
}
function go_left2() {
    move_slider2('left')
}

right_btn_2.addEventListener('click', go_right2)
left_btn_2.addEventListener('click', go_left2)

// SLIDER-3

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