<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue'

</script>

<template>
  <div class="w-screen h-screen">
    <NavBar />

    <div class="grid place-items-center">
      <RouterView />
    </div>
  </div>
</template>
