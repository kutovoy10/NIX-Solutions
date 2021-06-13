const prev = document.querySelector('.prev');
const current = document.querySelector('.current');
const btnClear = document.querySelector('.btn-ac');
const btnDelete = document.querySelector('.btn-delete');
const btnOperation = document.querySelectorAll('.btn-operation');
const btnNumbers = document.querySelectorAll('.btn-num');
const btnSum = document.querySelector('.btn-sum');

class Calculator {
    constructor(prev, current) {
        this.prev = prev;
        this.current = current;
        this.clear()
    }

    clear () {
        this.operandPrev = '';
        this.operandCurrent = '';
        this.operation = undefined;
    }

    delete() {
        this.operandCurrent = this.operandCurrent.toString().slice(0, -1);
    }

    innerNum(number) {
        if(number === '.' && this.operandCurrent.includes('.')) {
            return
        }
        this.operandCurrent = this.operandCurrent.toString() + number.toString();
        if(this.operandCurrent.length >= 10) {
            this.operandCurrent = this.operandCurrent.substring(0, 10);

        }
    }

    chooseOperation(operation) {
        if (this.operandCurrent === '') {
            return
        }
        if (this.operandPrev !== '') {
            this.compute()
        }
        this.operation = operation ;
        this.operandPrev = this.operandCurrent;
        this.operandCurrent = '';
    }

    compute() {
        let computed;
        const prev = parseFloat(this.operandPrev);
        const current = parseFloat(this.operandCurrent);
        if(isNaN(prev) || isNaN(current)) {
            return
        }
        switch (this.operation) {
            case '%':
                computed = ((prev / current) *100);
                break;
            case '÷':
                computed = prev / current;
                break;
            case '×':
                computed = prev * current;
                break;
            case '-':
                computed = prev - current;
                break;
            case '+':
                computed = prev + current;
                break;
            default:
                break;
        }
        this.operandCurrent = computed.toString().substring(0, 10);
        this.operation = undefined;
        this.operandPrev = '';
    }

    getDisplayNumber(number) {
        const floatNumber = parseFloat(number);
        if(isNaN(floatNumber)) {
            return '';
        }
        return floatNumber.toLocaleString('en')
    }

    updateDisplay() {
        this.current.innerHTML = this.getDisplayNumber(this.operandCurrent);
        if (this.operation != null) {
            this.prev.innerHTML = `${this.getDisplayNumber(this.operandPrev)} ${this.operation}`;
        } else {
            this.prev.innerHTML = '';
        }
    }
}

const calculator = new Calculator(prev, current);

btnNumbers.forEach (button => {
    button.addEventListener('click', () => {
        calculator.innerNum(button.innerHTML);
        calculator.updateDisplay();
    });
});

btnOperation.forEach (button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerHTML)
        calculator.updateDisplay()
    });
});

btnSum.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

btnClear.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

btnDelete.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});