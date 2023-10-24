const calculator = document.querySelector('#calculator');
const outputBox = document.querySelector('#output-box');
const calculateButton = document.querySelector('#calculate-button');
const clearButton = document.querySelector('.clear-button');
const backspaceButton = document.querySelector('.backspace-button');
const inputArray = [];
const operators = ['+','-','*','/','(',')'];

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
    removeAllChildren(outputBox);
})

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
        solveParenthesis(equationArray);
    }

    let equationResult = evaluateEquationArray(equationArray);

    removeAllChildren(outputBox);

    outputBox.appendChild(document.createElement('div'));
    outputBox.lastChild.textContent = equationResult;
    outputBox.lastChild.classList.add('output-format');
})

function removeAllChildren(parentElement){
    while(parentElement.firstChild){
        parentElement.removeChild(parentElement.firstChild);
    }
}
function solveParenthesis(array){
    const startingIndex = array.indexOf('(')
    const endingIndex = array.indexOf(')')
    if(endingIndex === -1){
        array.splice(startingIndex, 1);
    }
    else{
        parentheticalEquation = array.slice(startingIndex, endingIndex + 1);
        indexCount = parentheticalEquation.length;
        parentheticalEquation.shift();
        parentheticalEquation.pop();
        parentheticalSolution = evaluateEquationArray(parentheticalEquation);
        array.splice(startingIndex, indexCount, parentheticalSolution[0]);
        return array;
    }
}

function evaluateEquationArray(array){
    if(typeof array[0] != 'number'){
        return 'ERROR';
    }
    while(array.length != 1){
        let result = 0;
        if (array.includes('*') || array.includes('/')){
            const middleIndex = array.findIndex(function(operator){
                return operator === '*' || operator === '/';
            });
            const num1 = array[middleIndex - 1];
            const num2 = array[middleIndex + 1];
            if(operators.includes(num1) || operators.includes(num2)){
                return 'ERROR';
            }
            else if(array[middleIndex] === '*'){
                result = num1 * num2;
            }
            else if(array[middleIndex] === '/'){
                if(num1 === 0){
                    return 'ERROR';
                }
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
            if(operators.includes(num1) || operators.includes(num2)){
                return 'ERROR';
            }
            else if(array[middleIndex] === '+'){
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