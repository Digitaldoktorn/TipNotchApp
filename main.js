

function calculateTipAmount() {
    let billAmount = document.getElementById('bill_amount').value;
    let service = document.getElementById('service').value;
    let numberOfPersons = document.getElementById('people').value;
    let tipAmount = 0;

    // validation
    if(isNaN(billAmount)) {
        alert('Bill Amount: Please enter a number')
    }

    if(billAmount < 1) {
        alert('Bill Amount: Please enter a number greater than 1')
    }

    if(service == 0) {
        alert('Please evaluate the service')
    }

    if(isNaN(numberOfPersons)) {
        alert('Number of persons: Please enter a number')
    }

    if(numberOfPersons < 1) {
        alert('Number of persons: Please enter a number greater than 1')
    }

    else {
        // Calculate tip
        let total = (billAmount * service) / numberOfPersons;
        total = total.toFixed(2);

        // display the tip
        document.getElementById('totalTip').style.display = 'block';
        document.getElementById('tipAmount').innerHTML = total;
    }
}

// Hide result on load
document.getElementById('totalTip').style.display = 'none';
document.getElementById('button').onclick = function() {
    calculateTipAmount(); 
}




