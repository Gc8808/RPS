//Get user name

let userName = prompt('What is your Name?');

let responceImg = document.getElementById('response-img')
let responceText= document.getElementById('responce-Text')
let greeting = document.getElementById ('greeting') 

//Imput user name to website
userName ? document.getElementById('userName').innerText=`${userName}:`: document.getElementById('userName').innerText = 'Imagine not typing your name'



function Adp(){
    //Get user question
    let userQuestion = prompt('Aditya has chosen... (click enter)') 

  
    
    //Do not touch
    let randomNumber = Math.floor(Math.random() * 3);
    
    
    let choicePro = '';
    
    if (randomNumber === 0) {
        choicePro = 'Rock';
      imageChoice = 'img1.jpg'
    } else if (randomNumber === 1) {
        choicePro = 'Paper';
      imageChoice = 'img7.png'
    } else if (randomNumber === 2) {
        choicePro = 'Scissor';
      imageChoice = 'istockphoto-1162198273-612x612.jpg'
    } 
    
    
    
    console.log(` ${choicePro}`);
     
    document.getElementById('choose').innerText = `${choicePro}`
    responceImg.src = imageChoice

}
//Add Users input to the system
function Logging1(){ 

    let userChoice = ('Rock')
console.log (userChoice)
}

function Logging2(){ 
    let userChoice = ('Paper')
    console.log ('userChoice')
    }

    function Logging3(){ 
        let userChoice = ('Scissor')
        console.log ('userChoice')
        }



        let Final = '';
    
    if (userChoice = Rock && choicePro = Rock); {
        Final = 'Tie';
      console.log (Final)
    } else if (randomNumber === 1) {
        Final = 'Paper';
      imageChoice = 'img7.png'
    } else if (randomNumber === 2) {
        Final = 'Scissor';
      imageChoice = 'istockphoto-1162198273-612x612.jpg'
    } 