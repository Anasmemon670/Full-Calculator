let userInput = document.getElementById("Input-Calculator");
let FinalResult = "";


function appendNumber(Number){
    FinalResult += Number;
    userInput.value = FinalResult;
}
function appendOperator(Operator){
    FinalResult += " " + Operator + " ";
    userInput.value = FinalResult;
}
function clearDisplay(){
    FinalResult  = "";
    userInput.value = "";
}
function DeletOneItemToDisplay(){
    // let arr = [];
    // for(let i = 0; i < arr.length; i++){
    //     FinalResult += arr.pop();
    //      userInput.value = FinalResult;
    // } 
    FinalResult = userInput.value.tostring().slice(0 , -1);
      
   
}