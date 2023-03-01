<template>
  <div class="py-5 main-bg">
    <TheHeader />
    <div class="container flex flex-col justify-center items-center">
      <div
        class="md:w-[500px] lg:w-[740px] mx-auto flex flex-col justify-center items-center text-center"
      >
        <h1
          class="text-[#070707] mb-4 lg:mb-6 text-[42px] leading-[66.11px] lg:text-[72px] lg:leading-[113.33px] font-bold mt-12 lg:mt-0"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          Show <span class="text-primary">Some</span> Love
        </h1>
        <p
          class="mb-4 lg:mb-6 text-priTex text-sm lg:text-lg"
          data-aos="fade"
          data-aos-delay="500"
        >
          We let you stay on top of your game by reminding you of Special dates and
          anniversaries, so you never have to forget to plan ahead and show your love
          through gifts.
        </p>
        <button
          class="btn hover:scale-100 custom-shadow lg:font-bold"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          <img src="/img/small-barcode.svg" alt="small-barcode" />
          <span>GET THE APP</span>
        </button>
      </div>
      <img
        src="/img/illus-01.svg"
        alt="illustration"
        data-aos="fade-up"
        data-aos-delay="650"
        data-aos-duration="700"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.main-bg {
  background: #f3f2f5;
  background-image: url('/img/main-bg.svg');
}
.custom-shadow {
  box-shadow: 0px 1px 24px rgba(162, 91, 255, 0.4);
}
</style>
