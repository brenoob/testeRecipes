import type { Receita } from '@/types/recipesTypes';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useApiReciveStore = defineStore('apiReceitas', () => {
  const apiReceitas = ref<Receita[]>([]);

  async function fetchReceitas() {
    try {
      const response = await fetch("https://api-receitas-pi.vercel.app/receitas/todas");
      apiReceitas.value = await response.json();
    } catch (error) {
      console.error('Erro ao buscar receitas:', error);
    }
  }

  return { apiReceitas, fetchReceitas };
});
