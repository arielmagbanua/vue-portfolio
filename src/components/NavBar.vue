<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<script lang="ts">
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<template>
  <nav
    class="px-6 lg:px-32 md:px-16 py-8 mx-auto md:flex md:justify-between md:items-center bg-gray-100"
  >
    <div class="flex items-center justify-between">
      <router-link
        to="/"
        class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400"
      >
        Ariel.
      </router-link>

      <!-- Mobile menu button -->
      <div
        class="flex md:hidden"
        @click="showMenu = !showMenu"
      >
        <button
          type="button"
          class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
        >
          <svg
            viewBox="0 0 24 24"
            class="w-6 h-6 fill-current"
          >
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
    >
      <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
        <router-link
          to="/"
          class="text-sm font-bold text-gray-800 hover:text-blue-400"
        >
          Home
        </router-link>
      </li>
      <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
        <router-link
          to="/projects"
          class="text-sm font-bold text-gray-800 hover:text-blue-400"
        >
          Projects
        </router-link>
      </li>
    </ul>
  </nav>
</template>
