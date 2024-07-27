<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
    </div>    
    <div class="p-8"> 
          <router-link 
          :to="{
              name:'byIngredient',
              params:{ingredient: ingredient.strIngredient
                },
          }"
          v-for="ingredient of ingredients" 

          :key="ingredient.idIngredient" 
          class=" block bg-white rounded p-3 mb-3 shadow"
          >
          <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
          <pre>{{ingredient.strDescription }}</pre>
          </router-link>
  </div>
</template>



<script setup>
import axiosClient from '../axiosClient';
import {computed, onMounted, ref, watch} from 'vue';

const keyword = ref('')
const ingredients = ref([])
const computedIngredients = computed(() => {
  if (!keyword.value) return ingredients;
  return ingredients.value.filter(i => 
    i.strIngredients.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

watch(computedIngredients, () => {
  console.log(computedIngredients.value)
})


onMounted(() =>{
    axiosClient.get('list.php?i=list')
    .then(({ data }) => {
     ingredients.value = data.meals;
});


});
 

</script>





