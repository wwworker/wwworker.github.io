function calc() {
    k = parseInt(document.getElementById("number").value);
    var inputs = document.getElementById("inputs");
    for (i=0; i<k; i++) {
        var inpt = document.createElement("input");
        inpt.value = i;
        inputs.appendChild(inpt);
    }
}