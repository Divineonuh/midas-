let names  = ["Dara","Dayo","Soji"]
let [firstName , middleName] = names
console.log(firstName)
console.log(middleName)
let[,, lastname] = names
console.log(lastname)
let[, hisname] = names
console.log(hisname)
//the use of one comma showed that i skipped dara and i want to show only 'dayo'which means the use of two (,,)will give me'soji' the use of none(,) will give me'dara'