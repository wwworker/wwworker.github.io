function createInputs() {
    k = parseInt(document.getElementById("number").value);
    var inputs = document.getElementById("inputs");
    for (i=0; i<k; i++) {
        var inpt = document.createElement("input");
        inpt.value = i;
        inputs.appendChild(inpt);
    }
}

function calc() {
    var divInputs = document.getElementById("inputs");
    inputs = divInputs.getElementsByTagName('input');
    var sum = 0;
    console.log("Собранные поля input и их количество:", inputs, inputs.length);
    for (let item of inputs) {
        sum += parseInt(item.value);
    }
    var avg = sum/inputs.length;
    console.log("Средний балл", avg);
    document.getElementById('result').innerHTML = avg;
}