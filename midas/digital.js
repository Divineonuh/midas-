console.log('tested')
setInterval(currentTime, 1000);

function currentTime(){
    let time = new Date();
    let dayName = time.getDay();
    let month = time.getMonth();
    let year = time.getFullYear();
    let date = time.getDate();
    let hour =time.getHours();
    let min =time.getMinutes();
    let sec = time.getSeconds();
    
    var am_pm = 'am'
    if( hour == 12 ){
        am_pm ='pm';
    }
    if(hour >12 ){
        hour -= 12; 
        am_pm='pm'
    }
    if(hour==0){
        hour = 12
        am_pm ='am'
    }

    hour = hour<10? "0" +hour : hour;
    min = min<10? "0" +min : min;
    sec = sec<10? "0" +sec : sec;

let currentTime = hour + ":" + min + ":" +sec +  am_pm

var monthArray =['janurary','feburary', 'march',
                 'april','may','june','july',
                 'august','september','october',
                 'november','december',

]
var week =[
'sunday','monday','tuesday','wednesday','thursday',
'friday','saturday',
]

var presentDay = week[dayName] + ", "+
monthArray[month] + " " +
date + ", " + year;

const clock =document.getElementById('time')
const dayIntro = document.getElementById('dayName')

clock.innerHTML=currentTime;
dayIntro.innerHTML=presentDay;
}
currentTime();

//document.querySelector('body').style.color='red'
document.querySelector('body').style.background='blue'
document.querySelector('body').style.fontSize='large'
document.querySelector('body').style.fontType='oblique'
dayIntro.classList.add('my_class')
dayName.classList.add('my_class')
digital.classList.add('my_class')
container.classList.add('my_class')
dispClock.classList.add('my_class')
time.classList.add('my_class')