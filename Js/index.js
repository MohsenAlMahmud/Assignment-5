
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.innerText;
    return inputValueText;
}

function addCard1(){
    const card1Name = getInputValue('card-1-name');
    const card1Price = getInputValue('card-1-price');

    const cartListedItems = document.getElementById('added-product');
    const count = cartListedItems.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count+1}`+'.'+ '  ' +card1Name;
    cartListedItems.appendChild(p);
    const totalPrice = document.getElementById('total-price');
    
    const totalPriceAmount = totalPrice.innerText + card1Price;
    console.log(totalPriceAmount)
}
function addCard2(){
    const card2Name = getInputValue('card-2-name');

    const cartListedItems = document.getElementById('added-product');
    const count = cartListedItems.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count+1}`+'.'+ '  ' +card2Name;
    cartListedItems.appendChild(p);
}
