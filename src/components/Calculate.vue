<script setup>

import { ref, reactive,defineProps } from 'vue';
 import Display from "./Display.vue"

const value ={
    data() {
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
                    default:
                        this.result = "Invalid operation"
            }
        },
       
    },
}


</script>

<template>
         <div>
          <h2>Calculator</h2>
          <input type="number" v-model="num1">
          <select v-model="operation">
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
          </select>
          <input type="number" v-model="num2">
          <button @click="calculate" type="submit">Calculate</button>
          <p>Result: {{ result }}</p>
        </div>
</template>