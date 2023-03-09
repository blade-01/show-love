<template>
  <div class="py-5 main-bg h-screen overflow-hidden md:h-auto">
    <TheHeader />
    <div
      class="container md:flex flex-col justify-center md:h-[calc(100vh-60px)] overflow-visible mb-5"
    >
      <div
        class="md:w-[500px] lg:w-[730px] mx-auto flex flex-col justify-center items-center text-center"
      >
        <h1
          class="text-[#070707] mb-4 lg:mb-6 text-[34px] sm:text-[45px] leading-[66.11px] lg:text-[72px] lg:leading-[113.33px] font-bold"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          Show <span class="text-primary">Some</span> Love
        </h1>
        <p
          class="mb-4 lg:mb-6 text-priText text-sm lg:text-lg"
          data-aos="fade"
          data-aos-delay="500"
        >
          We let you stay on top of your game by reminding you of Special dates and
          anniversaries, so you never have to forget to plan ahead and show your love
          through gifts.
        </p>
        <div class="relative get-app">
          <button
            class="btn hover:scale-100 custom-shadow lg:font-bold cursor-pointer"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="500"
            data-aos-offset="0"
          >
            <img src="/img/small-barcode.svg" alt="small-barcode" />
            <span>GET THE APP</span>
          </button>
          <div
            class="absolute left-0 bottom-0 bg-primary rounded-[32px] px-6 text-white max-h-0 overflow-hidden qr-code transition-all ease-in-out duration-500"
          >
            <div class="pt-[15px] pb-5">
              <p class="font-bold lg:text-[18px] leading-[18px] max-w-[122px] mx-auto">
                SCAN TO DOWNLOAD THE APP
              </p>
              <img
                src="/img/qr-code.svg"
                alt="qr-code"
                class="my-3.5"
                height="148"
                width="148"
              />
              <div class="flex justify-between items-end">
                <div class="flex gap-1">
                  <p class="font-baloo text-sm">iOS</p>
                  <img src="/img/apple-icon.svg" alt="apple-icon" />
                </div>
                <div class="flex gap-1">
                  <p class="font-baloo text-sm">Andriod</p>
                  <img src="/img/android-icon.svg" alt="android-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Illus01
        data-aos="fade-up"
        data-aos-delay="650"
        data-aos-duration="700"
        class="hidden sm:block w-full"
      />
    </div>
    <img
      src="/img/mobile-illus.svg"
      alt="illustration"
      data-aos="fade-up"
      data-aos-delay="650"
      data-aos-duration="700"
      class="w-full h-[285px] lg:h-auto sm:hidden"
    />
    <!-- <img
        src="/img/illus-01.svg"
        alt="illustration"
        data-aos="fade-up"
        data-aos-delay="650"
        data-aos-duration="700"
        class="w-full hidden sm:flex"
      />
    </div> -->
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

.get-app:hover > .qr-code {
  max-height: 300px;
}
</style>
