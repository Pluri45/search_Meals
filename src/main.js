import {createApp} from "vue";
import router from "./router";
import store from "./store";
import "./style.css";
import App from "./App.vue";


const app = createApp(App);
app.use(router).use(store).mount("#app");





// <template>
//   <div class="flex flex-col p-8 justify-center">
//     <input
//       type="text"
//       class="rounded border-2 border-gray-200 w-full"
//       placeholder="Search for Meals"
//     />

//     <div class="flex justify-center gap-2 mt-2">
//       <router-link :to="{ name: 'byletter', params: { letter } }" v-for="letter in letters" :key="letter">
//         {{ letter }}
//       </router-link>
//     </div>

//     <pre>{{ ingredients }}</pre>
//   </div>
// </template>


// {/* <script setup>
// import { onMounted, ref } from 'vue';
// import axiosClient from '../axiosClient.js';

// const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
// const ingredients = ref([]);

// onMounted(async () => {
//   try {
//     const response = await axiosClient.get('/list.php?i=list');
//     console.log(response.data); // Check the structure in the browser console
//     ingredients.value = response.data.meals; // Adjust based on the actual data structure
//   } catch (error) {
//     console.error("Error fetching ingredients:", error);
//   }
// }); */}






