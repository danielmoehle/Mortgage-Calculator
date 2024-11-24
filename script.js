
var clear = document.getElementById('clear-button')
var totalMortgage = document.getElementById('total-mortgage')
var years = document.getElementById('years')
var percent = document.getElementById('percent')
var repayment = document.getElementById('repayment')
var interest = document.getElementById('interest')
var calculate = document.getElementById('calc-button')
var rightBoxDiv = document.getElementById('right-div-display')
var resultsDiv = document.getElementById("results-div")
var totalPayment = document.getElementById("total-payment")
var resultTotal = document.getElementById("result-total")
var interestPlusMortgage = document.getElementById("interest+Mortgage")
var interestPlusMortgageInfo = document.getElementById("interestPlusMortgageInfo")

clear.addEventListener('click', function(){
    window.location.reload()
})



calculate.addEventListener('click', function(){
    if (totalMortgage.value.length == 0 || years.value.length == 0 || percent.value.length == 0) {
        alert("please fill in all boxes")
        return
    }
    var totalMortgageValue = parseFloat(totalMortgage.value)
    var yearsValue = parseFloat(years.value)
    var percentValue = parseFloat(percent.value)

    // calcultate button
    if (repayment.checked) {
        rightBoxDiv.style.display = "none"
        var monthlyRate = percentValue / 100 / 12; // Annual rate to monthly
        var totalPayments = yearsValue * 12; // Total number of months
        var monthlyPayment = 
            totalMortgageValue * 
            (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
            (Math.pow(1 + monthlyRate, totalPayments) - 1);
        // totalPayment.innerHTML = "$" + monthlyPayment.toFixed(2)
        totalPayment.innerHTML = "$" + monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        interestPlusMortgageInfo.innerHTML = "Total you'll repay over the term"

        resultTotal.innerHTML = "Your monthly repayment is"
        var totalRepay = monthlyPayment * yearsValue * 12
        interestPlusMortgage.innerHTML = totalRepay.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        resultsDiv.style.display = "block"
        
    } else if (interest.checked) {
        rightBoxDiv.style.display = "none"
        var monthlyRate = percentValue / 100 / 12;
        var totalPayments = yearsValue * 12;
        var monthlyPayment = 
            totalMortgageValue * 
            (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
            (Math.pow(1 + monthlyRate, totalPayments) - 1);
        var totalInterest = (monthlyPayment * totalPayments) - totalMortgageValue;
        resultTotal.innerHTML = "Total Interest owed"
        interestPlusMortgageInfo.style.display = "none"
        interestPlusMortgage.style.display = "none"
        // totalPayment.innerHTML = "$" + totalInterest.toFixed(2);
        totalPayment.innerHTML = "$" + totalInterest.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        interestPlusMortgageInfo.innerHTML = "Total interest you'll pay"
        resultsDiv.style.display = "block"

    } else {
        alert('Please select a mortgage type option')
    }
    
    // console.log(years.length)

}) 


