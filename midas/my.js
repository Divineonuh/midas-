//uerName = prompt('what is your name')
//let
//const newElement = document.createElement('h5')
//newElement.innerHTML = ${`userName`}

//function displayWelcome(){
  //  alert('welcome')
//}
const number = document.querySelector('h1')
//number.onclick = displayWelcome
//number.addEventListener("click", displayWelcome)
//number.addEventListener("click", ()=>{
    //number.innerText='wonderfull'
//})
number.addEventListener( "click", (e)=>{
    number.innerText= e
    console.log(e)
})
//use an event called input to track the changes in an input field under the input tag there should be an p tag 
document.body.addEventListener("mousemove", (e)=>{
    number.innerText=`your mouse is currently at x:${e.clientX} y:${e.clientY}`
    console.log(e)
} )
//event.target.value
function display(){
    const button = document.getElementById('enter').value;           
    alert('welcome ' + button)
}


console.log('hello')

