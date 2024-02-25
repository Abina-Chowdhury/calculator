<script setup>

import { ref, reactive } from 'vue';
import Display from "./Display.vue"

const num1 = ref( "");
const num2 = ref( "");


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
          <button type="submit">Calculate</button>
          <p  >Result: {{ num1 }}</p>
        </div>
</template>