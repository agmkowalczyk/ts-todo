console.log('test2346578')

const inputEl1: HTMLInputElement = document.querySelector('#input1')
const inputEl2: HTMLInputElement = document.querySelector('#input2')
const buttonElAdd = document.querySelector('button')

const add = (v1: number, v2: number) => v1 + v2
buttonElAdd.addEventListener('click', () => {
  const sum = add(Number(inputEl1.value), Number(inputEl2.value))
  console.log(sum)
})

let age = 29
const age3 = '20'


const logAge = (age: number | string) => {
    console.log(`jej ${age}`)
}
logAge('20')




const buyEl = document.querySelector('#buy');
const calculatePrice = (originalPrice: number, hasDiscount: boolean) => {
    return hasDiscount ? originalPrice * 0.8 : originalPrice
}
// buyEl.addEventListener('click', () => {
//     const originalPrice: number = 50
//     const hasDiscount: boolean = new URLSearchParams(window.location.search).get('discount') == 'true'
//     console.log(calculatePrice(originalPrice, hasDiscount))
// })



// type narrowing
 let get = (response: unknown) => response
 const logFixed = (v: number) => {
    console.log(v.toFixed())
 }

 logFixed(2.1)

 let value = get(2.3)
 if (typeof value === 'number') {
    logFixed(value)
 }


 // User-defined Type Guard - is valid response