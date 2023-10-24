const calculator = document.querySelector('#calculator');
const outputBox = document.querySelector('#output-box');
const calculateButton = document.querySelector('#calculate-button');
const clearButton = document.querySelector('.clear-button');
const backspaceButton = document.querySelector('.backspace-button');

calculator.addEventListener('click', function(e){
    if(e.target.matches('.input-button')){
        if(outputBox.children.length === 0 || operators.includes(outputBox.lastChild.textContent)){
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
    }
})

backspaceButton.addEventListener('click', function(e){
            outputBox.removeChild(outputBox.lastChild);
})

clearButton.addEventListener('click', function(e){
    while(outputBox.firstChild){
        outputBox.removeChild(outputBox.firstChild);
    }
})

const inputArray = [];
const operators = ['+','-','*','/','(',')'];

calculateButton.addEventListener('click', function(e){
    //collects the text content from each div found under output-box into an array
    inputArray.length = 0;
    for(let i = 0; i < outputBox.children.length; i++){
        inputArray.push(outputBox.children[i].textContent);
    }
    //turns the number strings contained in the previous array into numbers
    const equationArray = inputArray.map(function(item){
        if(operators.includes(item)){
            return item;
        }
        else{
            return +item;
        }
    })
    while(equationArray.includes('(')){
        removeParenthesis(equationArray);
    }

    //removes all input divs from the output-box parent and creates a new div displaying the equation result
    let equationResult = evaluateEquationArray(equationArray);

    while(outputBox.firstChild){
        outputBox.removeChild(outputBox.firstChild);
    }

    outputBox.appendChild(document.createElement('div'));
    outputBox.lastChild.textContent = equationResult;
    outputBox.lastChild.classList.add('output-format');
})

function removeParenthesis(array){
    const startingIndex = array.indexOf('(')
    const endingIndex = array.indexOf(')')
    parentheticalEquation = array.slice(startingIndex, endingIndex + 1);
    indexCount = parentheticalEquation.length;
    parentheticalEquation.shift();
    parentheticalEquation.pop();
    parentheticalSolution = evaluateEquationArray(parentheticalEquation);
    array.splice(startingIndex, indexCount, parentheticalSolution[0]);
    return array;
}

function evaluateEquationArray(array){
    while(array.length != 1){
        let result = 0;
        if (array.includes('*') || array.includes('/')){
            const middleIndex = array.findIndex(function(operator){
                return operator === '*' || operator === '/';
            });
            const num1 = array[middleIndex - 1];
            const num2 = array[middleIndex + 1];
            if(array[middleIndex] === '*'){
                result = num1 * num2;
            }
            else if(array[middleIndex] === '/'){
                result = num1 / num2;
            }
            array.splice(middleIndex - 1, middleIndex + 2, result);
        }
        else if (array.includes('+') || array.includes('-')){
            const middleIndex = array.findIndex(function(operator){
                return operator === '+' || operator === '-';
            });
            const num1 = array[middleIndex - 1];
            const num2 = array[middleIndex + 1];
            if(array[middleIndex] === '+'){
                result = num1 + num2;
            }
            else if(array[middleIndex] === '-'){
                result = num1 - num2;
            }
            array.splice(middleIndex - 1, middleIndex + 2, result);
        }
    }
    return array;
}

function clickClear(e){
    if(e.target.matches('.clear-button') || e.target.matches('.backspace-button')){
        e.target.classList.add('clicked-clear');
    }
}

function unclickClear(e){
    setTimeout(function(){
        if(e.target.matches('.clear-button') || e.target.matches('.backspace-button')){
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