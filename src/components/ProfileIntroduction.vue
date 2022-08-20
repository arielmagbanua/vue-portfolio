<script lang="ts">
import profileImage from '../assets/id.jpg';

export default {
  data() {
    return {
      profileImage: profileImage,
    };
  },
};
</script>

<template>
  <div
    id="intro"
    class="grid grid-cols-2"
  >
    <div class="flex justify-center">
      <img
        class="inline object-cover w-48 h-48 rounded-full"
        :src="profileImage"
        alt="Profile image"
      >
    </div>

    <div>
      <h1 class="text-gray-800 text-4xl pb-4 font-semibold">
        Hello!
      </h1>
      <p class="text-gray-800">
        Skilled and passionate software engineer who enjoys coding and building applications for both web and mobile.
        Writes tech blog and interested working with Flutter and Machine Learning projects.
      </p>
    </div>
  </div>
</template>
