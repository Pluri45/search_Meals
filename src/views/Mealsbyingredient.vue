<template>  
     <Meals :meals="meals"/>
  </template>
  

<script setup>
import { computed } from '@vue/reactivity';  
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from "../components/Meals.vue";


const route = useRoute();
const meals = computed (() => store.state.Mealsbyingredient)

onMounted(() =>{
    store.dispatch('setMealsbyingredient', route.params.ingredient);
});

</script>





