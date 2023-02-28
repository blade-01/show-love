<template>
  <div
    class="section bg-[#020335] lg:h-[800px] flex justify-center items-center flex-col"
  >
    <div class="container">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="opacity-0 invisible absolute top-0 transition-all ease-linear duration-700 clear-right"
        :class="{ show: currentIndex === index + 1 }"
      >
        <div
          class="md:grid md:grid-cols-2 md:gap-4 md:place-items-center transition-all ease-in-out duration-300"
        >
          <div class="text-center md:text-left xl:w-[552px]">
            <p
              class="text-[#FAC764] font-bold leading-[21.6px] lg:leading-[32.4px] text-[12px] lg:text-[18px] uppercase"
            >
              With special MVP features to choose from, sending love is one click away
            </p>
            <h6
              class="title font-semibold text-[28px] lg:text-[40px] leading-[33.6px] lg:leading-[50px] text-[#ffffff] pt-[30px] lg:pt-[50px] pb-[15px] lg:pb-[25px]"
            >
              {{ slide.title }}
            </h6>
            <p
              class="text-[#FAFAFA] font-normal text-[12px] lg:text-[18px] lg:leading-[28.8px] leading-[19.2px]"
            >
              {{ slide.body }}
            </p>
            <div class="md:flex justify-start items-center md:pt-[3rem] pt-[6rem] hidden">
              <p
                class="text-[18px] lg:text-[24px] font-bold leading-[28.8px] lg:leading-[38.4px] text-[#989898] pr-3.5 lg:pr-6"
              >
                <span class="text-white">0{{ currentIndex }} </span>/ 0{{ slides.length }}
              </p>
              <div class="flex justify-center items-center gap-6">
                <span
                  class="mdi mdi-arrow-left text-2xl cursor-pointer"
                  :class="[currentIndex === 1 ? 'text-[#989898]' : 'text-white']"
                  @click="slideHandler('decrease')"
                ></span>
                <span
                  class="mdi mdi-arrow-right text-2xl cursor-pointer"
                  :class="[
                    currentIndex === slides.length ? 'text-[#989898]' : 'text-white'
                  ]"
                  @click="slideHandler('increase')"
                ></span>
              </div>
            </div>
          </div>
          <div class="pt-[3.5rem] md:pt-[0] order-first">
            <img :src="slide.src" />
            <div class="flex justify-center items-center pt-[2.5rem] md:hidden">
              <p
                class="text-[18px] font-bold leading-[28.8px] text-[#989898] pr-3.5 lg:pr-6"
              >
                <span class="text-white">0{{ currentIndex }} </span>/ 0{{ slides.length }}
              </p>
              <div class="flex justify-center items-center gap-6">
                <span
                  class="mdi mdi-arrow-left text-2xl cursor-pointer"
                  :class="[currentIndex === 1 ? 'text-[#989898]' : 'text-white']"
                  @click="slideHandler('decrease')"
                ></span>
                <span
                  class="mdi mdi-arrow-right text-2xl cursor-pointer"
                  :class="[
                    currentIndex === slides.length ? 'text-[#989898]' : 'text-white'
                  ]"
                  @click="slideHandler('increase')"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const slides: {
  title: string
  body: string
  src: string
  show: boolean
}[] = [
  {
    title: 'Have automated one- time and recurring gift packages',
    body:
      'Gifts that suits every pocket; Show some love without breaking the bank. With a list of premium curated gifts from the best brands within a budget, your love can be expressed and felt for as low as 5k',
    src: '/img/slider-01.svg',
    show: true
  },
  {
    title: 'Create a personal Love Basket and Wishlist',
    body:
      'Gifts that suits every pocket; Show some love without breaking the bank. With a list of premium curated gifts from the best brands within a budget, your love can be expressed and felt for as low as 5k',
    src: '/img/slider-02.svg',
    show: false
  },
  {
    title: 'Have automated one- time and recurring gift packages',
    body:
      'Gifts that suits every pocket; Show some love without breaking the bank. With a list of premium curated gifts from the best brands within a budget, your love can be expressed and felt for as low as 5k',
    src: '/img/slider-03.svg',
    show: false
  }
]
const currentIndex = ref<number>(1)
const slideHandler = (value: string) => {
  if (value === 'increase' && currentIndex.value < slides.length) currentIndex.value++
  else if (value === 'decrease' && currentIndex.value === 1) currentIndex.value
  else if (value === 'decrease' && currentIndex.value <= slides.length)
    currentIndex.value--
}
// setInterval(() => {
//   if (currentIndex.value < slides.length) currentIndex.value++
//   // else if (currentIndex.value === 1) currentIndex.value === 1
//   else if (currentIndex.value <= slides.length)
//     currentIndex.value--
// }, 3000);
</script>

<style scoped>
/* .show {
  @apply;
} */
.show {
  @apply opacity-100 visible relative !important;
}
</style>
