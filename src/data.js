const data = {
    data1() {
        return {
            num1: ref(""),
            num2: ref(""),
            operation: "+",
            result: null,
        }
    },
    methods: {
        calculate() {
            switch (this.operation) {
                case "+":
                    this.result = this.num1 + this.num2;
                    break;
                case "-":
                    this.result = this.num1 - this.num2;
                    break;
                case "*":
                    this.result = this.num1 * this.num2;
                    break;
                case "/":
                    this.result = this.num1 / this.num2;
                    break;
            }
        }
    },
}
