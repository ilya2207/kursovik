const listItems = document.querySelectorAll('.coach_times_item_wrapper')
const select = document.querySelector('.coach__select_time')
const popup = document.querySelector('.popup')
const popupBack = document.querySelector('.popup__background')
const popupDate = document.querySelector('.poup__date_value')
const popupTime = document.querySelector('.poup__time_value')
let currentDate = listItems[0].dataset.day
let currentTime = null
function showTab(e) {
  listItems.forEach((item) => {
    if (item.dataset.day != e.target.value) {
      return item.classList.add('coach_times_item_wrapper_hidden')
    }
    currentDate = item.dataset.day
    return item.classList.remove('coach_times_item_wrapper_hidden')
  })
}

select.addEventListener('change', showTab)

window.addEventListener('click', (e) => {
  if (e.target.closest('.coach_times_item')) {
    e.preventDefault()
    popupDate.textContent += currentDate
    popupTime.textContent += e.target.dataset.time
    popup.classList.add('popup__active')
    return popupBack.classList.add('popup__background_active')
  }
  if (
    (!e.target.closest('.popup') &&
      popup.classList.contains('popup__active')) ||
    e.target.closest('.popup__close') ||
    e.target.closest('.popup__close_btn')
  ) {
    popup.classList.remove('popup__active')
    popupBack.classList.remove('popup__background_active')
    popupDate.textContent = 'Дата:'
    popupTime.textContent = 'Время:'
  }
})
