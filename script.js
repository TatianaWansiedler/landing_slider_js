// оптимизация функций еще не реализована, 
// при изменении размера экрана необходимо обновить страницу для корректной работы слайдеров

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

function go_right(callback) {
    callback('right')
}
function go_left(callback) {
    callback('left')
}

right_btn.addEventListener('click', () => go_right(move_slider))
left_btn.addEventListener('click', () => go_left(move_slider))


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
    wrapper_clients.style.left = `${slider_index_2 * -slider_width}px`
}


right_btn_2.addEventListener('click', () => go_right(move_slider2))
left_btn_2.addEventListener('click', () => go_left(move_slider2))

// SLIDER-3

let slider_index_3 = 0
const wrapper_reviews = document.querySelector('.wrapper_reviews')
const right_btn_3 = document.querySelector('#btn_blue_right1')
const left_btn_3 = document.querySelector('#btn_blue_left1')

const reviews = [
    'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis deleniti ducimus illum. Consequuntur quibusdam quis sunt excepturi molestias ullam at totam illo, eligendi vitae qui quas neque alias, eius veniam?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, molestias? Lorem ipsum dolor sit amet.",
]

// -- create elem of slider-2

for (const elem of reviews) {
    const review_item = document.createElement('div')
    review_item.className = 'review_item'

    const review_text = document.createElement('p')
    review_text.innerText = elem
    review_text.className = 'feedback_text'

    const user = document.createElement('div')
    user.innerHTML = `
        <div class="user">
            <img src="./images/user.png" alt="user_photo">
            <div class="user_info">
                <h5 class="user_name">Екатерина Иванова</h5>
                <p class="user_job">Директор ООО “Раз-два”</p>
            </div>
        </div>
    `
    review_item.append(review_text, user)
    wrapper_reviews.append(review_item)
}

// -----------create controls buttons 2----------------

let slider_btns_3 = document.querySelector('#controls_3')

for (const index in reviews) {
    const button = document.createElement('button')
    button.className = 'slider3_controls_item-blue'

    if (+index === slider_index_3) {
        button.classList.add('item-active-blue')
    }

    button.onclick = () => {
        slider_index_3 = +index
        move_slider3('click', button)
    }

    slider_btns_3.append(button)
}

function move_slider3(side, button) {
    const all_btns = document.querySelectorAll('.slider3_controls_item-blue')

    if (side === 'left') {
        if (slider_index_3 !== 0) {
            slider_index_3--
            all_btns[slider_index_3 + 1].classList.remove('item-active-blue')
        } else {
            slider_index_3 = reviews.length - 1
            all_btns[0].classList.remove('item-active-blue')
        }
        all_btns[slider_index_3].classList.add('item-active-blue')

    } else if (side === 'right') {
        if (slider_index_3 < reviews.length - 1) {
            slider_index_3++
            all_btns[slider_index_3 - 1].classList.remove('item-active-blue')
        } else {
            slider_index_3 = 0
            all_btns[all_btns.length - 1].classList.remove('item-active-blue')
        }
        all_btns[slider_index_3].classList.add('item-active-blue')

    } else if (side === 'click') {
        all_btns.forEach(elem => elem.classList.remove('item-active-blue'))
        button.classList.add('item-active-blue')
    }
    wrapper_reviews.style.left = `${slider_index_3 * -slider_width}px`
}
right_btn_3.addEventListener('click', () => go_right(move_slider3))
left_btn_3.addEventListener('click', () => go_left(move_slider3))

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