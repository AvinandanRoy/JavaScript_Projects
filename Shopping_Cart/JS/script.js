// subtotal , tax , total 
// product-1 : p1Price,p1Increase,p1Decrease,p1Quantity,p1TotalPrice
// product-2 : p2Price ,

const p1IncreBtn = document.getElementById('p1Increase');
const p1DecreBtn = document.getElementById('p1Decrease')
const p1Price = document.getElementById('p1Price');

const p1TotalPrice = document.getElementById('p1TotalPrice');
const p1Quantity = document.getElementById('p1Quantity');

const subtotal = document.getElementById('subtotal');
const total = document.getElementById('total');


const increaseQuntatity =()=>{
    const quantity = parseFloat(p1Quantity.innerHTML)+ 1 ;
    return quantity;
}
const increasePrice= ()=>{
    p1TotalPrice.innerHTML = 0 ;
    const quantity = increaseQuntatity()-1;
    p1TotalPrice.innerHTML = quantity* parseFloat(p1Price.innerHTML);
    return p1TotalPrice.innerHTML;
}

const subTotals =()=>{
    subtotal.innerHTML = increasePrice();
    return subtotal.innerHTML ;
}

const taxes =()=>{
    const eachTax = 500 ;
    const quantity = increaseQuntatity()-1;
    let totalTax = 0 ;
    for(let i= 0 ; i < quantity ;i++){
        totalTax = eachTax * (i+1);
    }
    tax.innerHTML = totalTax;
    return tax.innerHTML ;
}

const totalPrice =()=>{
    total.innerHTML = parseFloat(subTotals()) + parseFloat(taxes());
}

p1IncreBtn.addEventListener('click',()=>{
    p1Quantity.innerHTML= increaseQuntatity();
    increasePrice();
    subTotals();
    taxes();
    totalPrice();
})

// Decrement Buttton 
const decreaseQuntatity =()=>{
    const quantity = parseFloat(p1Quantity.innerHTML)-1 ;
    return quantity;
}

p1DecreBtn.addEventListener('click',(event)=>{
    p1Quantity.innerHTML = decreaseQuntatity();
    increasePrice();
    subTotals();
    taxes();
    totalPrice();
})
