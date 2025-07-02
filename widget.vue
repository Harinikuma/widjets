<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');

function handleSubmit() {
  console.log('hello');
  // You can also log values if needed:
  // console.log('Value 1:', value1.value, 'Value 2:', value2.value);
}
</script>

<template>
  <div
    style="display: flex; gap: 10px; align-items: center; margin-top: 20px; padding: 30px;"
  >
    <input
      v-model="value1"
      type="text"
      placeholder="Enter value 1"
      style="margin: 10px;"
    />
    <input
      v-model="value2"
      type="text"
      placeholder="Enter value 2"
      style="margin: 10px;"
    />
    <button
      @click="handleSubmit"
      style="margin:10px;padding: 8px 16px; cursor: pointer; background-color: #07a3eb; border-radius: 10px;"
    >
      Submit
    </button>
  </div>
</template>
