<script setup lang="ts">
import ProfileIntroduction from '@/components/ProfileIntroduction.vue';
</script>

<template>
  <main class="container py-16">
    <div class="grid grid-cols-2">
      <div class="grid grid-cols-1">
        <ProfileIntroduction />
        <!-- Education and Contact Info -->
        <div class="grid grid-cols-1 py-8">
          <div class="flex flex-auto py-4">
            <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-gray-800 w-8 h-8 mr-2" />
            <h2 class="text-gray-800 text-2xl font-bold">Education</h2>
          </div>
          <div class="grid grid-cols-1 ml-4">
            <h3 class="text-gray-800 text-2xl font-semibold">Bachelor of Science (BS), Computer Engineering</h3>
            <h4 class="text-gray-500 text-lg">Holy Cross of Davao College, Davao City, Philippines</h4>
            <h5 class="text-gray-500 text-sm mb-2">2007 - 2012</h5>
            <p class="text-gray-500 text-lg">
              Studied electronics, computer networks, and software engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="skills">
      <p>Skills here</p>
    </div>
  </main>
</template>
