
function hoverButton(e){
    if(e.target.matches('button')){
        e.target.classList.add('hovered-button');
    }
}

function unhoverButton(e){
    if(e.target.matches('button')){
        e.target.classList.remove('hovered-button');
    }
}

calculator.addEventListener('mouseover', hoverButton);
calculator.addEventListener('mouseout', unhoverButton);

function clickClear(e){
    if(e.target.matches('.clear-button')){
        e.target.classList.add('clicked-clear');
        outputBox.classList.add('cleared-output');
    }
}

function unclickClear(e){
    setTimeout(function(){
        if(e.target.matches('.clear-button')){
            e.target.classList.remove('clicked-clear');
            outputBox.classList.remove('cleared-output');
        }
    }, 300);
}

function pressDelete(e){
    if(e.key === 'Delete'){
        clearButton.classList.add('clicked-clear');
        outputBox.classList.add('cleared-output');
    }
}

function unpressDelete(e){
    setTimeout(function(){
        if(e.key === 'Delete'){
            clearButton.classList.remove('clicked-clear');
            outputBox.classList.remove('cleared-output');
        }
    }, 300);
}

calculator.addEventListener('mousedown', clickClear);
document.addEventListener('keydown', pressDelete);
calculator.addEventListener('mouseup', unclickClear);
calculator.addEventListener('mouseout', unclickClear);
document.addEventListener('keyup', unpressDelete);

function clickBackspace(e){
    if(e.target.matches('.backspace-button')){
        e.target.classList.add('clicked-clear');
    }
}

function unclickBackspace(e){
    setTimeout(function(){
        if(e.target.matches('.backspace-button')){
            e.target.classList.remove('clicked-clear');
        }
    }, 300);
}

function pressBackspace(e){
    if(e.key === 'Backspace'){
        backspaceButton.classList.add('clicked-clear');
    }
}

function unpressBackspace(e){
    setTimeout(function(){
        if(e.key === 'Backspace'){
            backspaceButton.classList.remove('clicked-clear');
        }
    }, 300);
}

calculator.addEventListener('mousedown', clickBackspace);
document.addEventListener('keydown', pressBackspace);
calculator.addEventListener('mouseup', unclickBackspace);
calculator.addEventListener('mouseout', unclickBackspace);
document.addEventListener('keyup', unpressBackspace);

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
    }, 300);
}

function pressInput(e){
    if(inputButtonsContent.includes(e.key)){
        inputButtons.forEach(function(inputButton){
            if(inputButton.textContent === e.key){
                inputButton.classList.add('clicked-input');
            }
        })
    }
}

function unpressInput(e){
    setTimeout(function(){
        if(inputButtonsContent.includes(e.key)){
            inputButtons.forEach(function(inputButton){
                if(inputButton.textContent === e.key){
                    inputButton.classList.remove('clicked-input');
                }
            })
        }
    }, 300);
}

calculator.addEventListener('mousedown', clickInput);
document.addEventListener('keydown', pressInput);
calculator.addEventListener('mouseup', unclickInput);
calculator.addEventListener('mouseout', unclickInput);
document.addEventListener('keyup', unpressInput);

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
    }, 300);
}

function pressOperator(e){
    if(operatorButtonsContent.includes(e.key)){
        operatorButtons.forEach(function(operatorButton){
            if(operatorButton.textContent === e.key){
                operatorButton.classList.add('clicked-operator');
            }
        })
    }
    else if(e.key === 'Enter'){
        calculateButton.classList.add('clicked-operator');
    }
}

function unpressOperator(e){
    setTimeout(function(){
        if(operatorButtonsContent.includes(e.key)){
            operatorButtons.forEach(function(operatorButton){
                if(operatorButton.textContent === e.key){
                    operatorButton.classList.remove('clicked-operator');
                }
            })
        }
        else if(e.key === 'Enter'){
            calculateButton.classList.remove('clicked-operator');
        }
    }, 300);
}

calculator.addEventListener('mousedown', clickOperator);
document.addEventListener('keydown', pressOperator);
calculator.addEventListener('mouseup', unclickOperator);
calculator.addEventListener('mouseout', unclickOperator);
document.addEventListener('keyup', unpressOperator);