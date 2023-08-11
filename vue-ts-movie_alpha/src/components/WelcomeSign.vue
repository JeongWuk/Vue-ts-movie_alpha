<template>
  <div class="welcome">
    <span class="greeting">{{ greeting }}</span>
    <span class="name">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const greeting = ref('💛Yuri Team💛')
const name = ref('Jeong Wuk')

onMounted(() => {
  setTimeout(() => {
    const $name = document.querySelector('.name') as HTMLElement
    $name.style.opacity = '1'
  }, 2550)
})

setTimeout(() => {
  const $welcome = document.querySelector('.welcome') as HTMLElement
  $welcome.style.opacity = '0'
}, 4000)
</script>

<style scoped lang="scss">
.welcome {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  transition: all 1s;

  span {
    color: white;
    text-transform: uppercase;
    display: block;
  }
  .greeting {
    font-size: 70px;
    font-weight: bold;
    letter-spacing: 5px;
    margin-bottom: 20px;
    position: relative;
    animation: text 3s 1;
  }
  .name {
    opacity: 0;
    font-size: 30px;
    transition: opacity 1.5s;
  }
}

@keyframes text {
  0% {
    color: #000;
    margin-bottom: -40px;
  }
  30% {
    letter-spacing: 20px;
    margin-bottom: -40px;
  }
  85% {
    letter-spacing: 5px;
    margin-bottom: -40px;
  }
}
</style>
