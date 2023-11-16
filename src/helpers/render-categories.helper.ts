import { Category } from '../types/types.js'

const handleCategorChange = (category: Category) => {
  switch (category) {
    case Category.GENERAL:
      console.log('general')
      break
    case Category.GYM:
      alert('gym')
      break
    case Category.HOBBY:
      document.body.style.background = 'white'
      break
    case Category.WORK:
      console.log('work')
      document.body.style.background = 'lightgreen'
      break
    default:
      const never: never = category
      console.log(never)
  }
}

export const render = (
  categories: Category[],
  categoriesContainerElem: HTMLElement,
  inputChangeCallback: (category: Category) => void
) => {
  categories.forEach((category) => {
    const categoryElem: HTMLElement = document.createElement('li')
    categoryElem.classList.add(category)
    const radioElem: HTMLInputElement = document.createElement('input')
    radioElem.type = 'radio'
    radioElem.name = 'category'
    radioElem.value = category
    radioElem.id = `category-${category}`
    radioElem.addEventListener('change', () => {
      inputChangeCallback(category)
      handleCategorChange(category)
    })

    const labelElem: HTMLLabelElement = document.createElement('label')
    labelElem.innerText = category
    labelElem.setAttribute('for', `category-${category}`)

    categoryElem.appendChild(radioElem)
    categoryElem.appendChild(labelElem)

    categoriesContainerElem.appendChild(categoryElem)
  })
}
