import calc from './calc'

function first () {
    return parseFloat(document.getElementById('input1').value);
}

function second () {
    return parseFloat(document.getElementById('input2').value);
}

function check () {
    if (isNaN(first()) || isNaN(second())) {
        return 'Please enter valid numbers'
    }
}

export function showResult () {
    
    document.getElementById('+').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('output').innerHTML = check() || calc.sum(first(), second());
    }, false);

    document.getElementById('-').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('output').innerHTML = check() || calc.sub(first(), second());
    }, false);

    document.getElementById('*').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('output').innerHTML = check() || calc.mul(first(), second());
    }, false);

    document.getElementById('/').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('output').innerHTML = check() || calc.div(first(), second());
    }, false);
}