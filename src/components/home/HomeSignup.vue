<template>
  <div class="section main-bg flex justify-center items-center h-[500px] lg:h-[700px]">
    <div class="container">
      <div class="text-center md:w-[600px] lg:w-[697px] md:m-auto relative z-50">
        <h6
          class="font-semibold text-[#ffffff] text-[20px] lg:text-[40px] lg:leading-[48px] lg:font-medium leading-[24px] py-[2.5rem]"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          Sign up today to create a virtual account and fund your wallet via card or
          virtual top-up
        </h6>
        <button
          class="btn-signup w-[80%] md:w-[392.19px] md:h-[60.8px]"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          <img class="mr-2" src="/img/apple-google.svg" />
          Sign up
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.main-bg {
  background-image: url('/img/signup-bg.png'), url('/img/slant-bg.svg');
  background-repeat: no-repeat;
  background-position: top 0 left 50%, bottom 0 left 0;
  position: relative;
  z-index: 100;
}

.main-bg::before,
.main-bg::after {
  content: '';
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(116, 2, 192, 0) 5.41%,
    rgba(64, 19, 162, 0.9) 28.6%,
    #050e4c 98.03%
  );
  width: 100%;
  height: 80%;
}
.main-bg::before {
  top: 0;
  height: 50%;
  background: linear-gradient(180deg, #020335 0%, rgba(2, 3, 53, 0) 100%);
}

.btn-signup {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 61px;
  color: white;
  background: linear-gradient(297.72deg, #9467ff 0%, #a441ff 111.1%);
  box-shadow: 0px 0px 32px 5px rgba(178, 143, 255, 0.3),
    inset 1px 1px 0px rgba(102, 0, 255, 0.1);
  border-radius: 100px;
}
</style>
