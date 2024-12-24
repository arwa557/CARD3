function calculateSum() {  
    const num1 = document.getElementById('num1').value;  
    const num2 = document.getElementById('num2').value;  

    
    if (!isNaN(num1) && !isNaN(num2) && num1 !== '' && num2 !== '') {  
        const sum = Number(num1) + Number(num2);  
        document.getElementById('result').innerText = 'The Result: ' + sum;  
    } else {  
        document.getElementById('result').innerText = 'يرجى إدخال أرقام صحيحة.';  
    }  
} 