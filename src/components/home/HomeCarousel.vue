<template>
  <div class="py-4 mb-12 main-bg relative">
    <div class="slider-overlay">
      <div class="text-center px-2 lg:w-[749px] xl:w-[1100px] lg:mx-auto relative z-10">
        <h2
          class="title text-[#FFFFFF] lg:text-[59px] lg:leading-[72px] font-extrabold mb-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          With just about any gift, make your thoughts count.
        </h2>
        <p
          class="font-normal text-[12px] leading-[19.2px] pt-[20px] text-[#FAFAFA] lg:text-[25px] lg:leading-[40px]"
          data-aos="fade"
          data-aos-delay="500"
        >
          From Jewelry to Flower bouquets, Food, Gift cards and Crypto we've got your love
          covered. <br />
          And if you choose to go the digital way? Virtual gifts are available.
        </p>
      </div>
    </div>
    <div
      class="slider opacity-[0.5] mx-auto mt-5 overflow-hidden relative max-w-[2000px]"
    >
      <div class="slide-track gap-4">
        <div class="slide" v-for="image in images" :key="image">
          <img :src="image" alt="slide 01" width="520" height="760" />
        </div>
      </div>
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
  '/img/slide-05.svg'
]
</script>

<style scoped>
.slider-overlay {
  @apply absolute top-0 left-0 w-full h-full bg-[rgba(100,74,226,0.5)] flex justify-center items-center flex-col;
}

.slider .slide-track {
  animation: scroll 20s linear infinite;
  display: flex;
  width: calc(520px * 10);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-520px * 5));
  }
}

.slider .slide {
  width: 520px;
  height: 760px;
}
</style>
