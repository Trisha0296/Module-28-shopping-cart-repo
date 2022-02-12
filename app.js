// console.log('I am in a separate file')

/* 01-case*/
document.getElementById('cese-plus').addEventListener('click', function () {
  /*   02 */
  const caseInput = document.getElementById('case-number');
  let caseNumber = caseInput.value;
  caseInput.value = caseNumber;
  caseNumber = parseInt(caseNumber) + 1;
  //update case total
  /* 04 */
  const caseTotal = document.getElementById('case-total');
  caseTotal.innerText = caseNumber * 59
  caseInput.value = caseNumber;
});
/* 03 */
document.getElementById('case-minus').addEventListener('click', function () {
  const caseInput = document.getElementById('case-number');
  let caseNumber = caseInput.value;
  caseNumber = parseInt(caseNumber) - 1;
  //update case total
  /* 04 */
  const caseTotal = document.getElementById('case-total');
  caseTotal.innerText = caseNumber * 59
  caseInput.value = caseNumber;
})
// phoner increase decrease events----
/* 01-phoner */
/* plus */
document.getElementById("phone-plus").addEventListener('click', function () {
  const phoneInput = document.getElementById('phone-number');
  let phoneNumber = phoneInput.value;
  phoneNumber = parseInt(phoneNumber) + 1;
  //update phone total
  const phoneTotal = document.getElementById('phone-total');
  phoneTotal.innerText = phoneNumber * 1219;
  phoneInput.value = phoneNumber;
})
/*  minus*/
document.getElementById("phone-minus").addEventListener('click', function () {
  const phoneInput = document.getElementById('phone-number');
  let phoneNumber = phoneInput.value;
  phoneNumber = parseInt(phoneNumber) - 1;
  //update phone total
  const phoneTotal = document.getElementById('phone-total');
  phoneTotal.innerText = phoneNumber * 1219;
  phoneInput.value = phoneNumber;
  console.log(phoneNumber);
})