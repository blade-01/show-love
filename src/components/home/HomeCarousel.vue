<template>
  <div class="pt-4 pb-12">
    <div class="slider m-auto overflow-hidden relative max-w-[1500px]">
      <!-- <div class=""> -->
      <div class="slide-track gap-4">
        <div class="slide" v-for="image in images" :key="image">
          <img :src="image" alt="slide 01" />
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
const images: string[] = [
  '/img/slide-01.svg',
  '/img/slide-02.svg',
  '/img/slide-03.svg',
  '/img/slide-04.svg',
  '/img/slide-05.svg',
  '/img/slide-01.svg',
  '/img/slide-02.svg',
  '/img/slide-03.svg',
  '/img/slide-04.svg',
  '/img/slide-05.svg',
]
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-270px * 5));
  }
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  animation: scroll 20s linear infinite;
  display: flex;
  width: calc(270px * 10); 
}
.slider .slide {
  width: 270px;
  height: 395px;
}
</style>
