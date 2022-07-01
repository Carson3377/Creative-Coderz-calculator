// Clear button
function clr() {
    document.getElementById('result').value = "";
}

// Any buttons to display respective values
function dis(value) {
    document.getElementById('result').value += value;
}

// Equal button to evaluate values
function solve() {
    var textareaElement = document.getElementById('displays');
    var x = document.getElementById('result').value;
    var y = eval(x);
    clr();
    textareaElement.value = textareaElement.value + x + '=' + y + '\n';
}

