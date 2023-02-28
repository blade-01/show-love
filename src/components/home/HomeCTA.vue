<template>
  <div class="py-5 main-bg">
    <TheHeader />
    <div class="container flex flex-col justify-center items-center">
      <div
        class="md:w-[500px] lg:w-[740px] mx-auto flex flex-col justify-center items-center text-center"
      >
        <h1
          class="text-[#070707] mb-4 lg:mb-6 text-[42px] leading-[66.11px] lg:text-[72px] lg:leading-[113.33px] font-bold mt-12 lg:mt-0"
        >
          Show <span class="text-primary">Some</span> Love
        </h1>
        <p class="mb-4 lg:mb-6 text-priTex text-sm lg:text-lg">
          We let you stay on top of your game by reminding you of Special dates
          and anniversaries, so you never have to forget to plan ahead and show
          your love through gifts.
        </p>
        <button class="btn lg:font-bold">
          <img src="/img/small-barcode.svg" alt="small-barcode" />
          <span>GET THE APP</span>
        </button>
      </div>
      <img src="/img/illus-01.svg" alt="illustration" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.main-bg {
  background: #f3f2f5;
  background-image: url("/img/main-bg.svg");
}
</style>
