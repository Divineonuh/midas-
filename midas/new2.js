// alert(document.head.innerHTML)
document.querySelector('h1').style.color='red'
document.querySelector('#author').style.color='blue'
const quote =document.querySelector('.quote')
quote.classList.add('my_class')
const id =document.getElementById('bottom-content')
id.innerText='this is the js inner text'
const newElement=document.createElement('h1')
newElement.innerText='this is a new element' 
newElement.style.color='green'
// document.body.prepend(newElement)
quote.prepend(newElement)
document.querySelector('.container').insertBefore(newElement,quote)
const clonedElement = quote.cloneNode(true)
author.prepend(clonedElement)
document.querySelector('.container').insertBefore(clonedElement,author)

