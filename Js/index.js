
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.innerText;
    return inputValueText;
}


function addCard1() {
    const card1Name = getInputValue('card-1-name');

    const cartListedItems = document.getElementById('added-product');
    const count = cartListedItems.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}` + '.' + '  ' + card1Name;
    cartListedItems.appendChild(p);

    const card1PriceString = getInputValue('card-1-price');
    const card1Price = parseFloat(card1PriceString);
    const previousBalance = document.getElementById('total-price');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);

    const newBalanceTotal = previousBalanceAmount + card1Price;
    previousBalance.innerText = newBalanceTotal.toFixed(2);

    const purchaseButton = document.getElementById('btn-purchase');
    if (newBalanceTotal > 0) {
        purchaseButton.disabled = false;
    } else {
        purchaseButton.disabled = true;
    }
    const couponButton = document.getElementById('btn-coupon');
    if (newBalanceTotal >= 200) {
        couponButton.disabled = false;
    } else {
        couponButton.disabled = true;
    }
}

function addCard2() {
    const card2Name = getInputValue('card-2-name');

    const cartListedItems = document.getElementById('added-product');
    const count = cartListedItems.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}` + '.' + '  ' + card2Name;
    cartListedItems.appendChild(p);

    const card2PriceString = getInputValue('card-2-price');
    const card2Price = parseFloat(card2PriceString);

    const previousBalance = document.getElementById('total-price');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);

    const newBalanceTotal = previousBalanceAmount + card2Price;
    previousBalance.innerText = newBalanceTotal.toFixed(2);

    const purchaseButton = document.getElementById('btn-purchase');
    if (newBalanceTotal > 0) {
        purchaseButton.disabled = false;
    } else {
        purchaseButton.disabled = true;
    }
    const couponButton = document.getElementById('btn-coupon');
    if (newBalanceTotal >= 200) {
        couponButton.disabled = false;
    } else {
        couponButton.disabled = true;
    }
}

function addCard3() {
    const card3Name = getInputValue('card-3-name');

    const cartListedItems = document.getElementById('added-product');
    const count = cartListedItems.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}` + '.' + '  ' + card3Name;
    cartListedItems.appendChild(p);

    const card3PriceString = getInputValue('card-3-price');
    const card3Price = parseFloat(card3PriceString);

    const previousBalance = document.getElementById('total-price');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);

    const newBalanceTotal = previousBalanceAmount + card3Price;
    previousBalance.innerText = newBalanceTotal.toFixed(2);

    const purchaseButton = document.getElementById('btn-purchase');
    if (newBalanceTotal > 0) {
        purchaseButton.disabled = false;
    } else {
        purchaseButton.disabled = true;
    }
    const couponButton = document.getElementById('btn-coupon');
    if (newBalanceTotal >= 200) {
        couponButton.disabled = false;
    } else {
        couponButton.disabled = true;
    }
}

function addCard4() {
    const card4Name = getInputValue('card-4-name');

    const cartListedItems = document.getElementById('added-product');
    const count = cartListedItems.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}` + '.' + '  ' + card4Name;
    cartListedItems.appendChild(p);

    const card4PriceString = getInputValue('card-4-price');
    const card4Price = parseFloat(card4PriceString);

    const previousBalance = document.getElementById('total-price');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);

    const newBalanceTotal = previousBalanceAmount + card4Price;
    previousBalance.innerText = newBalanceTotal.toFixed(2);

    const purchaseButton = document.getElementById('btn-purchase');
    if (newBalanceTotal > 0) {
        purchaseButton.disabled = false;
    } else {
        purchaseButton.disabled = true;
    }
    const couponButton = document.getElementById('btn-coupon');
    if (newBalanceTotal >= 200) {
        couponButton.disabled = false;
    } else {
        couponButton.disabled = true;
    }
}

function addCard5() {
    const card5Name = getInputValue('card-5-name');

    const cartListedItems = document.getElementById('added-product');
    const count = cartListedItems.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}` + '.' + '  ' + card5Name;
    cartListedItems.appendChild(p);

    const card5PriceString = getInputValue('card-5-price');
    const card5Price = parseFloat(card5PriceString);

    const previousBalance = document.getElementById('total-price');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);

    const newBalanceTotal = previousBalanceAmount + card5Price;
    previousBalance.innerText = newBalanceTotal.toFixed(2);

    const purchaseButton = document.getElementById('btn-purchase');
    if (newBalanceTotal > 0) {
        purchaseButton.disabled = false;
    } else {
        purchaseButton.disabled = true;
    }
    const couponButton = document.getElementById('btn-coupon');
    if (newBalanceTotal >= 200) {
        couponButton.disabled = false;
    } else {
        couponButton.disabled = true;
    }
}

function addCard6() {
    const card6Name = getInputValue('card-6-name');

    const cartListedItems = document.getElementById('added-product');
    const count = cartListedItems.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}` + '.' + '  ' + card6Name;
    cartListedItems.appendChild(p);

    const card6PriceString = getInputValue('card-6-price');
    const card6Price = parseFloat(card6PriceString);

    const previousBalance = document.getElementById('total-price');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);

    const newBalanceTotal = previousBalanceAmount + card6Price;
    previousBalance.innerText = newBalanceTotal.toFixed(2);

    const purchaseButton = document.getElementById('btn-purchase');
    if (newBalanceTotal > 0) {
        purchaseButton.disabled = false;
    } else {
        purchaseButton.disabled = true;
    }
    const couponButton = document.getElementById('btn-coupon');
    if (newBalanceTotal >= 200) {
        couponButton.disabled = false;
    } else {
        couponButton.disabled = true;
    }
}

function addCard7() {
    const card7Name = getInputValue('card-7-name');

    const cartListedItems = document.getElementById('added-product');
    const count = cartListedItems.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}` + '.' + '  ' + card7Name;
    cartListedItems.appendChild(p);

    const card7PriceString = getInputValue('card-7-price');
    const card7Price = parseFloat(card7PriceString);

    const previousBalance = document.getElementById('total-price');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);

    const newBalanceTotal = previousBalanceAmount + card7Price;
    previousBalance.innerText = newBalanceTotal.toFixed(2);

    const purchaseButton = document.getElementById('btn-purchase');
    if (newBalanceTotal > 0) {
        purchaseButton.disabled = false;
    } else {
        purchaseButton.disabled = true;
    }
    const couponButton = document.getElementById('btn-coupon');
    if (newBalanceTotal >= 200) {
        couponButton.disabled = false;
    } else {
        couponButton.disabled = true;
    }
}

function addCard8() {
    const card8Name = getInputValue('card-8-name');

    const cartListedItems = document.getElementById('added-product');
    const count = cartListedItems.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}` + '.' + '  ' + card8Name;
    cartListedItems.appendChild(p);

    const card8PriceString = getInputValue('card-8-price');
    const card8Price = parseFloat(card8PriceString);

    const previousBalance = document.getElementById('total-price');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);

    const newBalanceTotal = previousBalanceAmount + card8Price;
    previousBalance.innerText = newBalanceTotal.toFixed(2);

    const purchaseButton = document.getElementById('btn-purchase');
    if (newBalanceTotal > 0) {
        purchaseButton.disabled = false;
    } else {
        purchaseButton.disabled = true;
    }
    const couponButton = document.getElementById('btn-coupon');
    if (newBalanceTotal >= 200) {
        couponButton.disabled = false;
    } else {
        couponButton.disabled = true;
    }
}

function addCard9() {
    const card9Name = getInputValue('card-9-name');

    const cartListedItems = document.getElementById('added-product');
    const count = cartListedItems.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}` + '.' + '  ' + card9Name;
    cartListedItems.appendChild(p);

    const card9PriceString = getInputValue('card-9-price');
    const card9Price = parseFloat(card9PriceString);
    const previousBalance = document.getElementById('total-price');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);

    const newBalanceTotal = previousBalanceAmount + card9Price;
    previousBalance.innerText = newBalanceTotal.toFixed(2);

    const purchaseButton = document.getElementById('btn-purchase');
    if (newBalanceTotal > 0) {
        purchaseButton.disabled = false;
    } else {
        purchaseButton.disabled = true;
    }
    const couponButton = document.getElementById('btn-coupon');
    if (newBalanceTotal >= 200) {
        couponButton.disabled = false;
    } else {
        couponButton.disabled = true;
    }

}

function applyDiscount() {
    const couponField = document.getElementById('coupon-field');
    const discountBalanceField = document.getElementById('discount-amount');
    const newBalanceTotal = parseFloat(document.getElementById('total-price').innerText);
    
    if (couponField.value === 'SELL200') {
        const discountAmount = newBalanceTotal * 0.20;
        discountBalanceField.innerText = discountAmount.toFixed(2);
        const grandTotalField = document.getElementById('grand-total');
        const grandTotal = newBalanceTotal - discountAmount;
        grandTotalField.innerText = grandTotal.toFixed(2);
    } else {
        discountBalanceField.innerText = '0.00';
    }

}

function resetAll(){
    const couponField = document.getElementById('coupon-field');
    couponField.value = ''; 

    const cartListedItems = document.getElementById('added-product');
    cartListedItems.innerText = '';

    const previousBalance = document.getElementById('total-price');
    previousBalance.innerText = '0.00';

    const discountBalanceField = document.getElementById('discount-amount');
    discountBalanceField.innerText = '0.00';

    const grandTotalField = document.getElementById('grand-total');
    grandTotalField.innerText = '0.00';

    const purchaseButton = document.getElementById('btn-purchase');
    purchaseButton.disabled = true;

    const couponButton = document.getElementById('btn-coupon');
    couponButton.disabled = true;
}

// function resetAll() {
   
//     const cartListedItems = document.getElementById('added-product');
//     cartListedItems.innerHTML = '';

    
//     const previousBalance = document.getElementById('total-price');
//     previousBalance.innerText = '0.00';

    
//     const purchaseButton = document.getElementById('btn-purchase');
//     purchaseButton.disabled = true;

//     const couponButton = document.getElementById('btn-coupon');
//     couponButton.disabled = true;

    
//     const discountBalanceField = document.getElementById('discount-amount');
//     discountBalanceField.innerText = '0.00';

//     const grandTotalField = document.getElementById('grand-total');
//     grandTotalField.innerText = '0.00';

//     const couponField = document.getElementById('coupon-field');
//     couponField.value = '';
// }

// Call the resetAll function when the page loads
window.onload = resetAll;

// window.onload = resetCouponField;