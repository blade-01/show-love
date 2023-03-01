<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({
  duration: 800,
  once: true
})
useHead({
  title: "Show Love",
  meta: [
    {
      name: "description",
      content:
        "We let you stay on top of your game by reminding you of Special dates and anniversaries,so you never have to forget to plan ahead and show your love through gifts.",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image",
      href: "/favicon.ico",
    },
  ],
});
</script>

<template>
  <!-- <TheHeader /> -->
  <HomeCTA />
  <HomeMain />
  <HomeCarousel />
  <HomeNeeds />
  <HomeTimeline />
  <HomePadi />
  <HomeFeatures />
  <HomeSignup />
  <TheFooter />
</template>

<style scoped></style>
