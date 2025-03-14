let userInput = document.getElementById("Input-Calculator");
let FinalResult = "";

function appendNumber(Number) {
    FinalResult += Number;
    userInput.value = FinalResult;
}
function appendOperator(Operator) {
    FinalResult += " " + Operator + " ";
    userInput.value = FinalResult;
}
function clearDisplay() {
    FinalResult = "";
    userInput.value = "";
}
function DeletOneItemToDisplay() {
    FinalResult = FinalResult.slice(0, -1);
    userInput.value = FinalResult
}

function CalculateFinalResult() {
    try {
        userInput.value = eval(FinalResult);
    }
    catch {
        userInput.value = "Error";
    }
}

