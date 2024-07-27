
import { createRouter, createWebHistory } from 'vue-router';
import defaultlayout from '../components/defaultlayout.vue';
import Guestlayout from  '../components/Guestlayout.vue';
import home from '../views/home.vue'; 
import Mealsbyingredient from '../views/Mealsbyingredient.vue'; 
import MealsbyName from '../views/Mealsbyname.vue'; 
import Mealsbyletter from '../views/Mealsbyletter.vue'; 
import MealDetails from '../views/MealDetails.vue';
import ingredients from '../views/Ingredients.vue'; 

const routes = [
  {
    path: '/',
    component: defaultlayout ,
    children:[

      {
        path: '/',
        name: 'home',
        component: home,
      }, 



      {
        path: '/',
        name: 'home',
        component: home,
      },

      {
        path: "/by-name/:name?",
        name: "byName",  
        component: MealsbyName,
      },
    
    
      {
        path: "/letter/:letter?",
        name: "byLetter",  
        component: Mealsbyletter,
      },
    
      {
        path: "/ingredients",
        name: "ingredients",  
        component: ingredients,
      },

    
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",  
        component: Mealsbyingredient,
      },

    
      {
        path: '/meal/:id',
        name: 'mealDetails',  
        component: MealDetails,
      }
    ]
  },

  {
    path: '/guest',
    component: Guestlayout,
  }, 


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;







