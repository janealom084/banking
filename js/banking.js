// handle diposit button
document.getElementById('Diposite-update').addEventListener('click', function () {
    //    get the amount inputed
    const dipositeFild = document.getElementById('Diposite-input');
    const newDipositeAmountText = dipositeFild.value;
    const newDipositeAmount = parseFloat(newDipositeAmountText)


    // put it in main diposite
    const dipositTotal = document.getElementById('diposit-total');
    const preivousDipositText = dipositTotal.innerText;
    const preivousDipositAmount = parseFloat(preivousDipositText);
    const newDipositeTotal = preivousDipositAmount + newDipositeAmount;

    dipositTotal.innerText = newDipositeTotal;
    // update balance total
    const balanceTotal = document.getElementById('balance-total');
    const PrivousTotalBalnceText = balanceTotal.innerText;
    const PrivousTotalBalnce = parseFloat(PrivousTotalBalnceText);

    const newTotalBalance = PrivousTotalBalnce + newDipositeTotal;
    balanceTotal.innerText = newTotalBalance;
    // clear input 
    dipositeFild.value = '';
});

// withwraw balance event handler

document.getElementById('Withdraw-update').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawInputAmountText);

    // set withwraw total 

    const withdrawTotal = document.getElementById('withdraw-total');
    const privousWithdrawTotalText = withdrawTotal.innerText;
    const privousWithdrawTotal = parseFloat(privousWithdrawTotalText);

    const newWithdrawTotal = privousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // balance update 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    const newTotalBalance = previousBalanceTotal - newWithdrawTotal;

    balanceTotal.innerText = newTotalBalance;
    // clear input 
    withdrawInput.value = '';
});

