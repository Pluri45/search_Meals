<template>
  <div class="flex flex-col p-8 justify-center w-full h-[700px]">
    <input
      type="text"
      class="rounded border-2 border-gray-200 justify-center mx-10 mr-10"
      placeholder="Search for Meals"
    />

    <div class="flex justify-center gap-2 border-indigo-500 mt-2">
      <router-link :to="`/letter/${letter}`" v-for="letter in letters" :key="letter">
        {{ letter }}
      </router-link>
    </div> 
    <!-- <pre>{{ ingredients }}</pre> -->
  </div>
</template>


<script setup>

import {computed, onMounted, ref} from 'vue';
import store from '../store';
import axiosClient from '../axiosClient.js'
const letters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const ingredients = ref([])

onMounted(async () => {
  try {
    const response = await axiosClient.get('/list.php?i=list');
    ingredients.value = response.data.meals; 
  } catch (error) {
    console.error("Error fetching ingredients:", error);
  }
});

</script>

