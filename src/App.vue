<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex justify-between border p-4">
    <img alt="Vue logo" class="logo w-8 h-8" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HomeView class="text-3xl" />

      <nav class="flex space-x-4">
        <RouterLink class=" hover:border-b border-green-700 hover:text-green-700" to="/">Home</RouterLink>
        <RouterLink class=" hover:border-b border-green-700 hover:text-green-700" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
