// Ma kali

const passwordBox = document.getElementById("password");

const copyBtn = document.getElementById("copyBtn");

const generateBtn = document.querySelector("#generateBtn");

const length = 12 ;
const upperCase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const specialSymbol = '@#$%^&*()_-+=<>?*/[]{}|-';

const allChars = upperCase+ lowerCase + number + Symbol;

const createPassword = ()=>{
    let password = "";
    password +=upperCase[Math.floor(Math.random()*upperCase.length)];
    password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password +=number[Math.floor(Math.random()*number.length)];
    password +=specialSymbol[Math.floor(Math.random()*specialSymbol.length)];
    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
}

const copyPassword =()=>{
    passwordBox.select();
    document.exeCommand("copy");
}
copyBtn.addEventListener("click",()=>{
    copyPassword();
})

generateBtn.addEventListener("click",()=>{
    createPassword();
})