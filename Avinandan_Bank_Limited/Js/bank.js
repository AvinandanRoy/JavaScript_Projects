// deposit , withdraw, balance
// inputDeposit, inputCashOut
// depositBtn, withdrawBtn

const getIdByInputField =(id)=>{
    const element = document.getElementById(id);
    return element;
}

const updateDeBa =(depo , bal, inputDepo)=>{
    const prevDeposit = parseFloat(getIdByInputField(depo).innerHTML);
    const prevBalance = parseFloat(getIdByInputField(bal).innerHTML);
    document.getElementById(depo).innerHTML = prevDeposit+ parseFloat(getIdByInputField(inputDepo).value) ;
    document.getElementById(bal).innerHTML = prevBalance+ parseFloat(getIdByInputField(inputDepo).value)
    getIdByInputField(inputDepo).value = '';
}

const updateWiBal= (withdraw, bal , inputCashOut)=>{
    const precWithDraw = parseFloat(getIdByInputField(withdraw).innerHTML);
    const prevBalance = parseFloat(getIdByInputField(bal).innerHTML);

    getIdByInputField(bal).innerHTML = prevBalance - parseFloat(getIdByInputField(inputCashOut).value);
    getIdByInputField(withdraw).innerHTML = precWithDraw + parseFloat(getIdByInputField(inputCashOut).value);
    getIdByInputField(inputCashOut).value ='';
}

document.getElementById('depositBtn').addEventListener('click',()=>{
    updateDeBa('deposit','balance','inputDeposit');
})

document.getElementById('withdrawBtn').addEventListener('click',()=>{
    updateWiBal('withdraw','balance','inputCashOut');
})