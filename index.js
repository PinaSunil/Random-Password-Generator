
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4","5", "6", "7", "8", "9","~","`","!","@","#","$",
"%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



const btn = document.getElementById("btn")

let firstPassword = document.querySelector("#first-password");
let secondPassword = document.querySelector("#second-password");

const copied1 = document.querySelector(".copied1")
const copied2 = document.querySelector(".copied2")

copied1.classList.remove("copied1")
copied2.classList.remove("copied2")




function generatePassword(){
    let newPassWord1 = "";
    let newPassWord2 = "";

    firstPassword.textContent = "" ;
        secondPassword.textContent = "" ;
  
    for (let i = 0; i < 12; i++) {
        let random1 = Math.floor(Math.random()*characters.length);
        let random2 = Math.floor(Math.random()*characters.length);

        let randomPass1 = characters[random1]
        let randomPass2 = characters[random2]
        newPassWord1 += randomPass1
        newPassWord2 += randomPass2
    }

     firstPassword.textContent = newPassWord1
     secondPassword.textContent = newPassWord2

}

firstPassword.addEventListener('click', function() {
    navigator.clipboard.writeText(firstPassword.textContent)

    copied1.classList.add("copied1")
    copied1.textContent = "Copied"
    setTimeout(() => {
        copied1.style.display = "none"
    }, 800)

})

secondPassword.addEventListener('click', function() {
    navigator.clipboard.writeText(firstPassword.textContent)

    copied2.classList.add("copied2")
    copied2.textContent = "Copied"
    setTimeout(() => {
        copied2.style.display = "none"
    }, 800)

})
