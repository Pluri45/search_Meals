import axiosClient from '../axiosClient';

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setSearchedMeals', data.meals)
    })
}

export function Mealsbyletter ({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
      commit('Mealsbyletter', data.meals)
    }).catch(e => {
      console.log(e)
    })
}

export function setMealsbyingredient({commit}, ing) {
  axiosClient.get(`filter.php?i=${ing}`)
    .then(({ data }) => {
      commit('setMealsbyingredient', data.meals)
    })
}

