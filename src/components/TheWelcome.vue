<script setup lang="ts">
import { useApiReciveStore } from '@/stores/apiReceitas';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

defineProps<{ msg: string }>()

const storeRecives = useApiReciveStore();

// Pegando apiReceitas como reativo
const { apiReceitas } = storeToRefs(storeRecives);

// Buscando os dados ao montar o componente
onMounted(() => {
  storeRecives.fetchReceitas(); // Certifique-se de que existe um método no Pinia para buscar as receitas
});
</script>

<template>
  <div>
    <h1 class="text-3xl text-center text-green-700">{{ msg }}</h1>
    <ul v-if="apiReceitas.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 w-[80%] mx-auto">
      <li class="border p-4 rounded-lg shadow-lg" v-for="recive in apiReceitas" :key="recive.id">
        <h3 class="text-2xl py-2">{{ recive.receita }}</h3>
        <img class="w-full h-48 object-cover mb-4 rounded-md" :src="recive.link_imagem" alt="Imagem da receita" v-if="recive.link_imagem">
        <p><strong>Ingredientes:</strong> {{ recive.ingredientes }}</p>
        <p><strong>Modo de preparo:</strong> {{ recive.modo_preparo }}</p>
      </li>
    </ul>
    <p v-else>Carregando receitas...</p>
  </div>
</template>
