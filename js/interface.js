var operations = ['+', '-', '/', '*'];

export function draw () {
    makeForm();
    makeButton();
    makeEmpty();
}

function makeForm() {
    var body = document.getElementsByTagName('body')[0];
    var form = document.createElement('form');
    var container = document.createElement('div');
    container.setAttribute('id', 'container');

    form.style.marginTop = '20px';
    for (var i = 1; i < 3; i++) {
        var input = document.createElement('input');
        var br = document.createElement('br');
        input.setAttribute('type', 'text');
        input.setAttribute('id', `input${i}`);
        input.setAttribute('autocomplete', 'off');
        input.style.marginTop = '10px';
        input.style.marginBottom = '5px';
        form.appendChild(input);
        form.appendChild(br);
    }

    container.appendChild(form);
    body.appendChild(container);    
}

function makeButton() {
    var form = document.getElementsByTagName('form')[0];
    for (var i = 0; i < operations.length; i++) {
        var button = document.createElement('button');
        button.setAttribute('id', operations[i]);
        button.innerHTML = operations[i];
        button.style.marginRight = '5px';
        form.appendChild(button);
    }
}

function makeEmpty () {
    var container = document.getElementById('container');
    var emptyField = document.createElement('div');
    emptyField.setAttribute('id', 'output');
    emptyField.style.marginTop = '10px';
    container.appendChild(emptyField);
}