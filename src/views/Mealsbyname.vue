<template>
  <div class="p-8 pb-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-gray-300 border-gray-200 justify-center w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
    <Meals :meals="meals"/>
</template>

<script setup>

import {computed} from '@vue/reactivity';
import {onMounted, ref, watch} from 'vue';
import {useRoute} from "vue-router";
import Meals from "../components/Meals.vue";
import Mealitems from '../components/Mealitems.vue';
import store from '../store';
import Youtubebutton from "../components/Youtubebutton.vue"


const route = useRoute();
const keyword = ref('');
const meals= computed(()=> store.state.searchedMeals)

function searchMeals(){
   if(keyword.value) {
    store.dispatch('searchMeals', keyword.value);
   } else{
    store.commit("setSearchedMeals", []);
   }
  
    
}


onMounted(() =>{
  keyword.value = route.params.name
  if (keyword.value){
     searchMeals()
     
  }
})

</script>


