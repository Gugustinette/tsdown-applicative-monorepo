<script setup lang="ts">
import { ref } from 'vue';
import { MyButton } from '@mymonorepo/my-ui-package';

const randomString = ref(undefined);

const getRandomString = async () => {
  // Call the api to get a random string
  const response = await fetch('http://localhost:9001/api/get-random-string');
  if (response.ok) {
    const data = await response.json();
    randomString.value = data.randomString;
  } else {
    console.error('Failed to fetch random string');
  }
};
</script>

<template>
  <h1>My App</h1>
  <p>Random String: {{ randomString }}</p>
  <p>Click the button to get a random string from the API:</p>
  <MyButton type="primary" @click="getRandomString" />
</template>
