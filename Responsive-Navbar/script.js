
bar = document.getElementById("bar");
nav = document.getElementById("nav-element");
close =  document.getElementById("close");

if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove('active')
    })
}