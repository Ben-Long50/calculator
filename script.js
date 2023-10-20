const calculator = document.querySelector('#calculator');
const outputBox = document.querySelector('#output-box');
const calculateButton = document.querySelector('#calculate-button');

calculator.addEventListener('click', function(e){
    if(e.target.matches('.input-button')){
        if(outputBox.children.length === 0){
            outputBox.appendChild(document.createElement('div'));
        }
        outputBox.lastChild.textContent += e.target.textContent
        outputBox.lastChild.classList.add('output-format');
    }
})

calculator.addEventListener('click', function(e){
    if(e.target.matches('.operator-button') && !e.target.matches('#calculate-button')){
        outputBox.appendChild(document.createElement('div'));
        outputBox.lastChild.textContent = e.target.textContent
        outputBox.lastChild.classList.add('output-format');
        outputBox.appendChild(document.createElement('div'));
    }
})

calculator.addEventListener('click', function(e){
    if(e.target.matches('.clear-button')){
        while(outputBox.firstChild){
            outputBox.removeChild(outputBox.firstChild);
        }
    }
})

const inputArray = [];
const operators = ['+', '-', '*', '/'];

calculateButton.addEventListener('click', function(e){
    //collects the text content form each div found under output-box into an array
    inputArray.length = 0;
    for(let i = 0; i < outputBox.children.length; i++){
        inputArray.push(outputBox.children[i].textContent);
    }
    console.log(inputArray);
    //turns the number strings contained in the previous array into numbers
    const equationArray = inputArray.map(function(item){
        if(operators.includes(item)){
            return item;
        }
        else{
            return +item;
        }
    })
    console.log(equationArray);
    let equationResult = evaluateEquationArray(equationArray);

    while(outputBox.firstChild){
        outputBox.removeChild(outputBox.firstChild);
    }

    outputBox.appendChild(document.createElement('div'));
    outputBox.lastChild.textContent = equationResult;
    outputBox.lastChild.classList.add('output-format');
})

function evaluateEquationArray(array){
    while(array.length != 1){
        const num1 = array[0];
        const num2 = array[2];
        let result = 0;
        if (array[1] === '+') {
            result = num1 + num2;
        } 
        else if (array[1] === '-') {
            result = num1 - num2;
        } 
        else if (array[1] === '*') {
            result = num1 * num2;
        } 
        else if (array[1] === '/') {
            result = num1 / num2;
        }
        array.splice(0, 3, result);
    }
    return array;
}

function clickClear(e){
    if(e.target.matches('.clear-button')){
        e.target.classList.add('clicked-clear');
    }
}

function unclickClear(e){
    setTimeout(function(){
        if(e.target.matches('.clear-button')){
            e.target.classList.remove('clicked-clear');
        }
    }, 350);
}

calculator.addEventListener('mousedown', clickClear);
calculator.addEventListener('mouseup', unclickClear);
calculator.addEventListener('mouseout', unclickClear);

function clickInput(e){
    if(e.target.matches('.input-button')){
        e.target.classList.add('clicked-input');
    }
}

function unclickInput(e){
    setTimeout(function(){
        if(e.target.matches('.input-button')){
            e.target.classList.remove('clicked-input');
        }
    }, 350);
}

calculator.addEventListener('mousedown', clickInput);
calculator.addEventListener('mouseup', unclickInput);
calculator.addEventListener('mouseout', unclickInput);

function clickOperator(e){
    if(e.target.matches('.operator-button')){
        e.target.classList.add('clicked-operator');
    }
}

function unclickOperator(e){
    setTimeout(function(){
        if(e.target.matches('.operator-button')){
            e.target.classList.remove('clicked-operator');
        }
    }, 350);
}

calculator.addEventListener('mousedown', clickOperator);
calculator.addEventListener('mouseup', unclickOperator);
calculator.addEventListener('mouseout', unclickOperator);