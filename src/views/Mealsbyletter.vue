
<template>
  <!-- <div class="flex flex-col p-8 justify-center w-full h-[700px]"> -->
    <div class="flex justify-center gap-2 mt-2">
      <router-link 
        :to="`/letter/${letter}`" 
        v-for="letter in letters" 
        :key="letter">
        {{ letter }}
      </router-link>
    </div> 
   <Meals :meals="meals"/> 

</template>

<script setup>
import { computed } from '@vue/reactivity';  
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Meals from "../components/Meals.vue";
import store from '../store';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");

const meals = computed(() => store.state.Mealsbyletter);


watch(route,() =>{
  store.dispatch('Mealsbyletter', route.params.letter);

})

onMounted(() => {
  store.dispatch('Mealsbyletter', route.params.letter);
});
</script>


