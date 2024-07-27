import { createStore} from 'vuex'
import state from './state'
import {searchMeals, Mealsbyletter, setMealsbyingredient }  from './action'
import * as mutations from './mutations'
import * as getters from './getters'


const store = createStore({
    state,
    actions: {
      searchMeals,
      Mealsbyletter,
      setMealsbyingredient  
    },
    mutations,
    getters,
}); 


export default store;


// src/store/index.js
// import { createStore } from 'vuex';
// import state from './state';
// import { searchMeals } from './action';
// import { setSearchedMeals } from './mutations';

// const store = createStore({
//   state,
//   mutations: {
//     setSearchedMeals, // Register mutation
//   },
//   actions: {
//     searchMeals,
//   },
//   getters: {}, // Include getters if you have any
// });

// export default store;




