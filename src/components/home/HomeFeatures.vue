<template>
  <div
    class="section bg-[#020335] flex justify-center items-center flex-col scroll-pt-16"
    id="features"
  >
    <div class="container flex justify-center items-center lg:h-[819px]">
      <div class="md:grid gap-4 grid-cols-2 items-center place-items-center">
        <div class="text-center md:text-left xl:w-[552px]">
          <p
            class="text-[#FAC764] font-bold leading-[21.6px] lg:leading-[32.4px] text-[12px] lg:text-[18px] uppercase"
          >
            With special MVP features to choose from, sending love is one click away
          </p>
          <h6
            class="title font-semibold text-[28px] lg:text-[40px] leading-[33.6px] lg:leading-[50px] text-[#ffffff] pt-[30px] lg:pt-[50px] pb-[15px] lg:pb-[25px]"
            data-aos="fade"
            data-aos-duration="1000"
            v-for="i in [currentIndex]"
            :key="i"
          >
            {{ currentTitle }}
          </h6>
          <p
            class="text-[#FAFAFA] font-normal text-[12px] lg:text-[18px] lg:leading-[28.8px] leading-[19.2px]"
            data-aos="fade"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            Gifts that suits every pocket; Show some love without breaking the bank.
            <br />
            With a list of premium curated gifts from the best brands within a budget,
            your love can be expressed and felt for as low as 5k
          </p>
          <div class="md:flex justify-start items-center pt-[6rem] hidden">
            <p
              class="text-[18px] lg:text-[24px] font-bold leading-[28.8px] lg:leading-[38.4px] text-[#989898] pr-3.5 lg:pr-6"
            >
              <span class="text-white">0{{ currentIndex }} </span>/ 0{{ images.length }}
            </p>
            <div class="flex justify-center items-center gap-6">
              <span
                class="mdi mdi-arrow-left text-2xl cursor-pointer"
                :class="[currentIndex === 1 ? 'text-[#989898]' : 'text-white']"
                @click="previousSlide"
              ></span>
              <span
                class="mdi mdi-arrow-right text-2xl cursor-pointer"
                :class="[
                  currentIndex === images.length ? 'text-[#989898]' : 'text-white'
                ]"
                @click="nextSlide"
              ></span>
            </div>
          </div>
        </div>
        <div class="pt-[3.5rem] md:pt-[0] basis-1/2 xl:basis-[652px] order-first">
          <img
            :src="currentImage"
            v-for="i in [currentIndex]"
            :key="i"
            class="w-full h-full lg:w-[610px] 2xl:w-[750px]"
            data-aos="fade"
            data-aos-delay="3500"
            data-aos-duration="1000"
          />
          <div class="flex justify-center items-center pt-[2.5rem] md:hidden">
            <p
              class="text-[18px] font-bold leading-[28.8px] text-[#989898] pr-3.5 lg:pr-6"
            >
              <span class="text-white">0{{ currentIndex }} </span>/ 0{{ images.length }}
            </p>
            <div class="flex justify-center items-center gap-6">
              <span
                class="mdi mdi-arrow-left text-2xl cursor-pointer"
                :class="[currentIndex === 1 ? 'text-[#989898]' : 'text-white']"
                @click="previousSlide"
              ></span>
              <span
                class="mdi mdi-arrow-right text-2xl cursor-pointer"
                :class="[
                  currentIndex === images.length ? 'text-[#989898]' : 'text-white'
                ]"
                @click="nextSlide"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = reactive<string[]>([
  '/img/slider-01.svg',
  '/img/slider-02.svg',
  '/img/slider-03.svg'
])

const titles = reactive<string[]>([
  'Have automated one- time and recurring gift packages',
  'Create a personal Love Basket and Wishlist',
  'Have automated one- time and recurring gift packages'
])

const currentIndex = ref<number>(1)

const currentImage = computed(() => {
  return images[Math.abs(currentIndex.value - 1) % images.length]
})
const currentTitle = computed(() => {
  return titles[Math.abs(currentIndex.value - 1) % titles.length]
})

const previousSlide = () => {
  if (currentIndex.value === 1) currentIndex.value
  else currentIndex.value--
}

const nextSlide = () => {
  if (currentIndex.value < images.length) currentIndex.value++
  else currentIndex.value
}

const startSlide = () => {
  setInterval(() => {
    if (currentIndex.value < images.length) currentIndex.value++
    else currentIndex.value = 1
  }, 5000)
}

// startSlide()
</script>

<style scoped></style>
