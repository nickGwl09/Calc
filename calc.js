let display = document.getElementById('display');
        let currentOperand = '';
        let previousOperand = '';
        let operation = null;

        function appendNumber(number) {
            if (currentOperand.includes('.') && number === '.') return;
            currentOperand = currentOperand.toString() + number.toString();
            updateDisplay();
        }

        function chooseOperation(op) {
            if (currentOperand === '') return;
            if (previousOperand !== '') {
                compute();
            }
            operation = op;
            previousOperand = currentOperand;
            currentOperand = '';
        }

        function compute() {
            let computation;
            const prev = parseFloat(previousOperand);
            const current = parseFloat(currentOperand);
            if (isNaN(prev) || isNaN(current)) return;
            switch (operation) {
                case '+':
                    computation = prev + current;
                    break;
                case '-':
                    computation = prev - current;
                    break;
                case '*':
                    computation = prev * current;
                    break;
                case '/':
                    computation = prev / current;
                    break;
                default:
                    return;
            }
            currentOperand = computation;
            operation = null;
            previousOperand = '';
            updateDisplay();
        }

        function clearDisplay() {
            currentOperand = '';
            previousOperand = '';
            operation = null;
            updateDisplay();
        }

        function updateDisplay() {
            display.innerText = currentOperand;
            if (currentOperand.length > 10) {
                display.style.fontSize = '1.5em';
            } else {
                display.style.fontSize = '2em';
            }
        }

        clearDisplay();
