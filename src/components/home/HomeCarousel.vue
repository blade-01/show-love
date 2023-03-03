<template>
  <div class="py-4 mb-12 main-bg relative">
    <div class="container homemain">
      <div class="text-center px-2 lg:w-[749px] lg:mx-auto">
        <h2
          class="title text-[#FFFFFF] lg:text-[42px] lg:leading-[50.4px] lg:font-semibold mb-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          With just about any gift, make your thoughts count.
        </h2>
        <p
          class="font-normal text-[12px] leading-[19.2px] pt-[20px] text-[#FAFAFA] lg:text-[18px] lg:leading-[28px]"
          data-aos="fade"
          data-aos-delay="500"
        >
          From Jewelry to Flower bouquets, Food, Gift cards and Crypto we've got
          your love covered. And if you choose to go the digital way? Virtual
          gifts are available.
        </p>
      </div>
    </div>
    <div
      class="slider opacity-[0.5] m-auto overflow-hidden relative max-w-[1500px]"
    >
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
  "/img/slide-01.svg",
  "/img/slide-02.svg",
  "/img/slide-03.svg",
  "/img/slide-04.svg",
  "/img/slide-05.svg",
  "/img/slide-01.svg",
  "/img/slide-02.svg",
  "/img/slide-03.svg",
  "/img/slide-04.svg",
  "/img/slide-05.svg",
];
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
  /* height: 395px; */
  height: 380px;
}

.main-bg {
  background: rgba(100, 74, 226, 0.5);
}

.homemain {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 10;
}
</style>
