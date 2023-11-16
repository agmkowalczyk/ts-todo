import { TaskClass as Task } from '../classes/task.js'

export const render = (tasks: Task[], tasksContainerElem: HTMLElement) => {
  tasksContainerElem.innerHTML = ''
  tasks.forEach((task, idx) => {
    const taskElem: HTMLElement = document.createElement('li')
    if (task.category) {
      taskElem.classList.add(task.category)
    }
    const id: string = `task-${idx}`

    const labelElem: HTMLLabelElement = document.createElement('label')
    labelElem.innerText = task.title
    labelElem.setAttribute('for', id)

    const checkboxElem: HTMLInputElement = document.createElement('input')
    checkboxElem.type = 'checkbox'
    checkboxElem.name = task.title
    checkboxElem.id = id
    checkboxElem.checked = task.done
    checkboxElem.addEventListener('change', () => {
      task.done = !task.done
    })

    taskElem.appendChild(checkboxElem)
    taskElem.appendChild(labelElem)

    tasksContainerElem.appendChild(taskElem)
  })
}
