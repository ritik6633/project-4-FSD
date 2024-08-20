document.getElementById('generateButton').addEventListener('click', function() {
    var minValue = parseInt(document.getElementById('minValue').value);
    var maxValue = parseInt(document.getElementById('maxValue').value);
    var resultText = document.getElementById('resultText');

    if (!isNaN(minValue) && !isNaN(maxValue) && minValue < maxValue) {
        var randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        resultText.textContent = 'Random Number: ' + randomNumber;
    } else {
        resultText.textContent = 'Please enter valid minimum and maximum values!';
    }
});
