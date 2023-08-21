let amount = 0;
function addName(target) {
    const selectedItems = document.getElementById('selected-items');
    const itemName = target.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = itemName ;
    selectedItems.appendChild(li);
    const price = target.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(' ')[0];
    amount = parseFloat(amount) + parseFloat(price);
    document.getElementById('total-price').innerText = amount.toFixed(2);
}
function addName2(target) {
    const selectedItems = document.getElementById('selected-items');
    const itemName = target.parentNode.childNodes[3].childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = itemName ;
    selectedItems.appendChild(li);
    const price = target.parentNode.childNodes[3].childNodes[3].childNodes[5].innerText.split(' ')[0];
    amount = parseFloat(amount) + parseFloat(price);
    document.getElementById('total-price').innerText = amount.toFixed(2);
}
function addName3(target) {
    const selectedItems = document.getElementById('selected-items');
    const itemName = target.parentNode.childNodes[5].childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = itemName ;
    selectedItems.appendChild(li);
    const price = target.parentNode.childNodes[5].childNodes[3].childNodes[5].innerText.split(' ')[0];
    amount = parseFloat(amount) + parseFloat(price);
    document.getElementById('total-price').innerText = amount.toFixed(2);
}

const inputField =document.getElementById('coupon');
const totalPrice = document.getElementById('total-price');
const applyButton = document.getElementById('apply');
const total = document.getElementById('total')

applyButton.addEventListener('click',function(){
    const couponText = inputField.value;
    if (couponText === 'SELL200') {
      let  discount = Math.ceil(parseFloat(totalPrice.innerText) * 0.2);
      const total = parseInt(totalPrice.innerText) - discount
      document.getElementById('discount').innerText = discount.toFixed(2);
      document.getElementById('total').innerText = total.toFixed(2);
      console.log(discount)
    }
    const finalTotal = parseFloat(totalPrice.innerText) - discount.toFixed(2);
    discount.innerText = discount;
    finalTotal.innerText = finalTotal;
    totalPrice.innerText = parseFloat(totalPrice);
    console.log(totalPrice.toFixed(2));
    if (totalPrice >= 200) {
        applyButton.removeAttribute('disabled');
    } else {   
        applyButton.setAttribute('disabled', true);
    }
});
document.getElementById('modal').addEventListener('click',function(){
    window.location.href = 'index.html'
})
