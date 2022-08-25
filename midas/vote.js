console.log('tested')

function enter(){
    const input = document.getElementById('age').value;
    if(input<18){
        alert('sorry, you are not eligible to vote');
        return
    } else if(input>=18);{
        alert(' congratulations, you can vote')
        return
    }
}



