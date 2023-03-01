<template>
  <div class="container lg:mb-[100px]">
    <div class="flex justify-center lg:justify-between items-center">
      <img src="/img/logo.svg" alt="Show Love Logo" />
      <button class="btn bg-[#020335] hidden lg:flex">
        <img src="/img/apple-google.svg" alt="Apple_Google_logo" />
        <span>Download the app</span>
      </button>
    </div>
    <div
      class="fixed z-[1000] top-0 left-1/2 -translate-x-1/2 text-primary rounded-[100px] blurred hidden lg:flex justify-between items-center gap-2.5 px-12 py-[22px] h-[73px] w-[417px]"
    >
      <div v-for="(link, index) in links" :key="index" @click="handleRouting(link)">
        <a
          :href="link.route"
          :class="{ 'active-link': link.active }"
          class="font-baloo"
          >{{ link.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = ref([
  {
    name: 'Home',
    route: '#',
    active: true
  },
  {
    name: 'Features',
    route: '#features',
    active: false
  },
  {
    name: 'Download',
    route: '#download',
    active: false
  }
])

const handleRouting = (status: { name: string; route: string; active: boolean }) => {
  links.value.forEach((link) => (link.active = false))
  status.active = !status.active
  console.log(status)
  // if (status) status = false
  // else status = true
}
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
