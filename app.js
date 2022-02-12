// console.log('I am in a separate file')

/* 01 */
document.getElementById('cese-plus').addEventListener('click', function () {
  /*   02 */
  const caseInput = document.getElementById('case-number');
  const caseNumber = caseInput.value;
  caseInput.value = parseInt(caseNumber) + 1;
});
/* 03 */
document.getElementById('case-minus').addEventListener('click', function () {
  const caseInput = document.getElementById('case-number');
  const caseNumber = caseInput.value;
  caseInput.value = parseInt(caseNumber) - 1;
})