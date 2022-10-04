const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



const displayPasswordOne = document.querySelector('.display-one');
const displayPasswordTwo = document.querySelector('.display-two');
const button = document.querySelector('p');

// generate password

function generateRandomPassword(arr, num) {

    const randomPasswordOne = [...arr].sort(() => 0.5 - Math.random());
    const fromArrayToString = randomPasswordOne.join('');
    return fromArrayToString.slice(0, num);   
}

// click button to render password

function clickButton () {

    const newPassword = characters.map(function(character) {

        displayPasswordOne.textContent = generateRandomPassword(characters, 15)

        displayPasswordTwo.textContent = generateRandomPassword(characters, 15)
       
    })
}

// event listener

button.addEventListener('click', clickButton)
    
    
