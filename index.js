const display = document.getElementById('display');
let memory = 0

function appendToDisplay(input) {
    const currentValue = display.value
    if (input === '.') {
        const parts = currentValue.split(/[\+\-\*\/\^]/)
        const lastPart = parts[parts.length - 1];
        if (lastPart.includes('.')) {
            return
        }
    }
    
    if (currentValue.length >= 10) {
        return
    }

    display.value += input;
}

function clearDisplay() {
    display.value = ""
}

function isInt(n) {
    return n % 1 === 0
}

function calculate() {
    try {
        let expression = display.value;
        expression = expression.replace(/\^/g, '**')
        let result = eval(expression)
        if (isInt(result)) {
            display.value = parseInt(result)
        } else {
            display.value = Number(result).toFixed(8)
        }
        display.value = display.value.slice(0, 10)
    } catch (error) {
        display.value = "Syntax Error"
    }
}

function memoryAdd() {
    memory += Number(display.value)
}

function memorySub() {
    memory -= Number(display.value)
}

function recall() {
    display.value = memory.toString().slice(0, 10)
}

function setMode(mode) {
    const standardButton = document.getElementById('standard-button')
    const scientificButton = document.getElementById('scientific-button')
    
    if (mode === 'standard') {
        document.body.classList.remove('scientific-mode')
        standardButton.classList.add('active')
        scientificButton.classList.remove('active')
    } else if (mode === 'scientific') {
        document.body.classList.add('scientific-mode')
        scientificButton.classList.add('active')
        standardButton.classList.remove('active')
    }
}

function applyScientificFunction(func) {
    try {
        const value = eval(display.value)
        if (!isNaN(value)) {
            let result = func(value)
            if (Math.abs(result) < 1e-8) {
                display.value = "0"
            }
            else if (isInt(result)) {
                display.value = parseInt(result).toString().slice(0, 10)
            } else {
                display.value = Number(result).toFixed(10).slice(0, 10)
            }
        } else {
            display.value = "Syntax Error"
        }
    } catch (error) {
        display.value = "Syntax Error"
    }
}

function appendConstant(constant) {
    if (display.value.length < 10) {
        display.value += constant.toString().slice(0, 10 - display.value.length)
    }
}

setMode('standard')
