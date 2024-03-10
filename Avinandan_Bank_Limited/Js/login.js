
document.getElementById('submititBtn').addEventListener("click",(event)=>{
    // get email address  emailIdget ,passwordGet
    const userEmail = document.getElementById('emailIdget').value;
    const userPass = document.getElementById('passwordGet').value ;

    if(userEmail === 'avinandan@gmail.com' && userPass === '1234'){
        location.replace('../bank.html')
    }
    else{
        alert("Areh...Beta ..! email id : avinandan@gmail.com ar password : 1234 ...Vul krle colbe na ...Taratari Dhuke por web site e ")
    }

});