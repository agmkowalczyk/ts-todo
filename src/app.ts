import { render as renderTasks } from './helpers/render-tasks.helper.js'
import { render as renderCategories } from './helpers/render-categories.helper.js'
import { Category } from './types/types.js'
import { TaskClass as Task } from './classes/task.js'

const taskNameInputElem: HTMLInputElement = document.querySelector('#name')
const addButtonElem: HTMLButtonElement = document.querySelector('button')
const tasksContainerElem: HTMLElement = document.querySelector('.tasks')
const categoriesContainerElem: HTMLElement =
  document.querySelector('.categories')

let selectedCategory: Category

const categories: Category[] = [
  Category.GENERAL,
  Category.WORK,
  Category.GYM,
  Category.HOBBY,
]

const tasks: Task[] = [
  new Task('task 1', false, Category.HOBBY),
  new Task('task 2', true, Category.GYM),
  new Task('task 3', false, Category.WORK),
  // { title: 'task 1', done: false, category: Category.HOBBY },
  // { title: 'task 2', done: true, category: Category.GYM },
  // { title: 'task 3', done: false, category: Category.WORK },
] // before: string[] or Array<string>

const addTask = (task: Task) => {
  tasks.push(task)
}

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory
}

addButtonElem.addEventListener('click', (event: Event) => {
  event.preventDefault()
  //   const selectedRadioElem: HTMLInputElement = document.querySelector('input[type="radio"]:checked')
  //   const selectedCategory: Category = selectedRadioElem.value as Category

  // addTask({ title: taskNameInputElem.value, done: false, category: selectedCategory })
  const newTask: Task = new Task(
    taskNameInputElem.value,
    false,
    selectedCategory
  )
  addTask(newTask)
  newTask.logCreationDate('!!!')
  renderTasks(tasks, tasksContainerElem)
  taskNameInputElem.value = ''
})

// tuple
// type alias
type TaskAsTuple = [string, Category, boolean]
const task: TaskAsTuple = ['task 4', Category.GYM, false]

const taskName = task[0]
const taskCategory = task[1]
const taskDoneStatus = task[2]
// addTask({ title: taskName, done: taskDoneStatus, category: taskCategory })
addTask(new Task(taskName, taskDoneStatus, taskCategory))

const taskClassInstance = new Task('task 9', false, Category.GENERAL)
addTask(taskClassInstance)
console.log(taskClassInstance.logCreationDate('super!'))

renderCategories(categories, categoriesContainerElem, updateSelectedCategory)
renderTasks(tasks, tasksContainerElem)
