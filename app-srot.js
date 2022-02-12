// 01 ful-case
function updateCaseNumber(isIncreasing) {
  const caseInput = document.getElementById('case-number');
  const caseNumber = caseInput.value;
  if (isIncreasing == true) {
    caseInput.value = parseInt(caseNumber) + 1;
  } else if (caseNumber > 0) {
    caseInput.value = parseInt(caseNumber) - 1;
  }
}
/* cese-plus */
document.getElementById('cese-plus').addEventListener('click', function () {
  updateCaseNumber(true);
});
/* case-minus */
document.getElementById('case-minus').addEventListener('click', function () {
  updateCaseNumber(false);
})