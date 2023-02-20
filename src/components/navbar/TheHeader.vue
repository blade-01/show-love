<template>
  <div class="container lg:mb-[100px]">
    <div class="flex justify-center md:justify-between items-center">
      <img src="/img/logo.svg" alt="Show Love Logo" />
      <button class="btn bg-[#020335] hidden md:flex">
        <img src="/img/apple-google.svg" alt="Apple_Google_logo" />
        <span>Download the app</span>
      </button>
    </div>
    <div
      class="fixed top-0 left-1/2 -translate-x-1/2 text-primary rounded-[100px] blurred hidden lg:flex justify-between items-center gap-2.5 px-6 py-12 h-[73px] w-[413px]"
    >
      <div v-for="{ name, route, active } in links">
        <a :href="route" :class="{ 'active-link': active }">{{ name }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    name: 'Home',
    route: '#',
    active: true
  },
  {
    name: 'Features',
    route: '#',
    active: false
  },
  {
    name: 'Download',
    route: '#',
    active: false
  }
]
</script>

<style scoped>
.blurred {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
}
.active-link {
  @apply relative after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:content-[''] after:bg-[#FAC764] after:w-1 after:h-1 after:rounded-full text-lg font-semibold text-primary;
}
</style>
