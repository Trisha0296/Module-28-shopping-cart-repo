// 01 ful-case
function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product + '-number');
  let productNumber = productInput.value;
  if (isIncreasing == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  //update  total
  const ProductTotal = document.getElementById(product + '-total');
  ProductTotal.innerText = productNumber * price;
  // calculate Total
  calculateTotal();
}

// phoner increase decrease events----
/* phone-plus */
document.getElementById("phone-plus").addEventListener('click', function () {
  updateProductNumber('phone', 1219, true);
});
/* phone-minus*/
document.getElementById('phone-minus').addEventListener('click', function () {
  updateProductNumber('phone', 1219, false);
})
// handle case increase decrease events----
/* cese-plus */
document.getElementById('cese-plus').addEventListener('click', function () {
  updateProductNumber('case', 59, true);
});
// /* case-minus */
document.getElementById('case-minus').addEventListener('click', function () {
  updateProductNumber('case', 59, false);
})

/* 02 */
/* second-part */
function getInputValu(product) {
  const productInput = document.getElementById(product + '-number')
  const productNumber = parseInt(productInput.value);
  return productNumber;
}
/* 01 */
// total-price
function calculateTotal() {
  const phoneTotal = getInputValu('phone') * 1219;
  const caseTotal = getInputValu('case') * 59;
  const subTotal = phoneTotal + caseTotal;
  // update tax
  const taxAmount = subTotal / 10;
  // total amount
  const totalPrice = subTotal + taxAmount;
  // update on the html
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-amount').innerText = taxAmount;
  document.getElementById('total-price').innerText = totalPrice;
}



// function calculateTotal() {
//   const phoneInput = document.getElementById('phone-number')
//   const phoneNumber = parseInt(phoneInput.value);
//   const phoneTotal = phoneNumber * 1219;
// }