//caclculator ,tic-tac-toe ,todo list
let result = document.getElementById("result-el");

function insertValue (value) {
    result.value += value;
}

function calculate () {
    try {
        result.value = eval(result.value).toFixed(2);     
    } catch (error) {
        result.value = "Invalid Operation";
    }
}

function clearValue (){
    result.value = '';
}

function calculatePercentage (){
    result.value = eval(result.value);
    result.value = result.value/100;
}

function deletePrevious () {    
    let a = result.value;
    result.value = a.slice(0,-1);
}