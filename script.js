const calculator = document.querySelector('#calculator');

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