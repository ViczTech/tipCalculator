const BTN = document.getElementById("btn");
const BILL = document.getElementById("bill");
const TIP = document.getElementById("tip");
const TOTAL = document.getElementById("total");
function calcTotal() {
    const billVal = BILL.value;
    const tipVal = TIP.value;
    const totalVal = billVal * (1 + tipVal / 100);

    TOTAL.textContent = `$${totalVal.toFixed(2)}`
}



BTN.addEventListener('click', calcTotal)