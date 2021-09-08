// [
//     "id1" => 'element',
//     "id2" => 'element',
//     "id3" => 'element',
//     "id4" => 'element',
// ]

// ************* querying ************ //
// 1: getElementById
// const mainP = document.getElementById('mainP')

// 2: querySelector
// const mainP = document.querySelector('.main')
// 3: querySelectorAll
// const allMain = document.querySelectorAll('.main')
// console.log(allMain)

// const parentContainer = document.querySelector('.container')
// const subheader = parentContainer.querySelector('.subheader')
// const about = parentContainer.querySelector('.About')
// console.log(about)

// ***** Create & render Elements **** //
// 1: create element
const h1 = document.createElement('h1')
// 2: control attributes
// setAttribute
h1.setAttribute('class', 'mainHeader bold')
h1.setAttribute('data', 'headerData')
h1.setAttribute('style', 'color:red')
// getAttribute
console.log(h1.getAttribute("class"));
console.log(h1.getAttribute("style"));
// removeAttribute
h1.removeAttribute('data')

// h1.setAttribute('class', 'd-flex')

// 3: control classes
// add
h1.classList.add('d-flex')
// remove
h1.classList.remove('bold')
// toggle
h1.classList.toggle('smooth')
// contains
console.log(h1.classList.contains("smooth"));

// 4: control content

// => textContent
h1.textContent = 'Hello'
// => innerText
// h1.innerText = 'Hello'

// => innerHTML
// h1.innerHTML = '<span>test</span>'
// 5: child control
const span = document.createElement('span')
span.textContent = 'World'
h1.appendChild(span)

// console.log(h1)
// 6: append element to document or Other Element in Document
document.body.appendChild(h1)
// document.body.prepend(h1)
// 7: Event Control

h1.addEventListener('mouseenter', () => {
    console.log('H1 Hovered')
})

h1.addEventListener('mouseleave', () => {
    console.log('H1 Leaved')
})
