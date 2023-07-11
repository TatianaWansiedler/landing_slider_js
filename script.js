// SLIDER
const slider = document.querySelector('.slider')
const wrapper = document.querySelector('.wrapper')
const right_btn = document.querySelector('.slider_right_btn')
const left_btn = document.querySelector('.slider_left_btn')
let slider_index = 0
let slider_width = 1110

const data = [
    { id: 1, title: 'Бухгалтерские услуги в вашем городе', text_btn: 'Наша презентация' },
    { id: 2, title: 'Преимущества работы с нашей компанией', text_btn: 'Узнать больше' },
    { id: 3, title: 'Расcчитать стоимость бухгалтерских услуг', text_btn: 'Заказать услуги' },
    { id: 4, title: 'Почему клиенты выбирают именно Нас', text_btn: 'Перейти к отзывам' },
]

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


function go_right() {
    const control_next = document.querySelector(`#control-${slider_index + 1}`)
    const control_prev = document.querySelector(`#control-${slider_index}`)
    if (control_next) {
        control_next.classList.add(`item-activ`);
    }

    if (control_prev) {
        control_prev.classList.remove(`item-activ`);
    }
    if (slider_index < data.length - 1) {
        slider_index++
        wrapper.style.left = `${slider_index * -slider_width}px`

    } else {
        slider_index = 0
        wrapper.style.left = `${slider_index * -slider_width}px`

        const control_last = document.querySelector(`#control-${data.length - 1}`);
        const control_first = document.querySelector(`#control-${slider_index}`);
        if (control_last) {
            control_last.classList.remove(`item-activ`);
            control_first.classList.add(`item-activ`);
        }
    }
}
function go_left() {
    const control_next = document.querySelector(`#control-${slider_index}`)
    const control_prev = document.querySelector(`#control-${slider_index - 1}`)
    if (control_next) {
        control_next.classList.remove(`item-activ`);
    }

    if (control_prev) {
        control_prev.classList.add(`item-activ`);
    }

    if (slider_index != 0) {
        slider_index--
        wrapper.style.left = `${slider_index * -slider_width}px`
    } else {
        slider_index = data.length - 1
        wrapper.style.left = `${slider_index * -slider_width}px`

        const control_last = document.querySelector(`#control-${slider_index}`);
        const control_first = document.querySelector(`#control-0`);
        if (control_last) {
            control_last.classList.add(`item-activ`);
            control_first.classList.remove(`item-activ`);
        }
    }
}

right_btn.addEventListener('click', go_right)
left_btn.addEventListener('click', go_left)


// BURGER MENU

// let state = false;