console.log ('tested')
let myInformation = {
    name:'divine',
    age:'11',
    class:'jss2',
    subject:{
        art:['CCA','ENGLISH','PHOTOGRAPHY'],
        science:['geography','biology','physics']
    },
}
console.log(myInformation.subject['science'])
let animals = [
   'duck','cat','goat'
]
animals.push('dog') //a method to add smth at the end of animal array('dog')
console.log(animals)
function add (num1,num2){
let ans = num1 + num2
// return ans 
}
add(2,3)
console.log(add('2,3'))
function multiply(num1,num2){
    let ans= num1 * num2
    return ans
}


// function name(firstname,lastname){
//     console.log(`my fullname is ${firstname} ${lastname}`)
// }
//  name('divine' ,'onuh')

//  let myArray = [1,2,3]
//  myArray.map((item)=>{console.log(item)})
//  function mul2(num1){
//  let ans=[]
//  num1.map((item)=> {
//    const multiplied= item*2
//  ans.push(multiplied)
//  } )
//  return ans
//  }
//  console.log(mul2(myArray))
 
//  let day="monday"

//  if (day == 'monday'){

//      alert('today is monday')
//  } else if( day=='tuesday' ){
// alert('today is tuesday')
//  }else if(day=='wednesday'){
//     alert('today is wednesday')
//  }else{
// alert('today is not monday,tuesday or wednesday')
//  }
//  while loop
let i = 0;
while(i<3){
    console.log(i)
    i=i+1
}
// let name = prompt('what is your name')
// while (name !=  'onuh divine' ){
//     name = prompt('name is not corret')
//}
//  Assignment
// let password = prompt('type in your password') 
// while (password.length < 8){
//     password = prompt('password is to short')
// }

let j = 0;
do { 
    console.log(j)
    j++;
 }while(j < 3) //it first does the syntax before checking the condition and doing it
for(let i =0; i<10; i++){
    console.log(i)
}//the for loop does a particular syntax of the code at a time, the amount of time depends on what is providedby the condition
//for..of
//the for..of itirate through an array or an itirable an then it return the value of each array or the itirable
const index = [10,20,30,40,60,90,110 ]
// for(const index in iterable){
//     console.log(index)
// }

for(const key in myInformation){
    console.log(`the key is ${key} and the value is ${myInformation}
    [key]`)
}
