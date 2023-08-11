<template>
  <div class="detail">
    <div
      class="container"
      v-if="!indexStore.loading">
      <img :src="indexStore.movie.Poster" />
      <div class="contents">
        <h1>{{ indexStore.movie.Title }}</h1>
        <div class="info1">
          <h3 class="year">{{ indexStore.movie.Year }}</h3>
          <h3 class="runtime">{{ indexStore.movie.Runtime }}</h3>
        </div>
        <div class="info2">
          <h3 class="genre">{{ indexStore.movie.Genre }}</h3>
          &nbsp;&nbsp;
          <h3 class="country">{{ indexStore.movie.Country }}</h3>
        </div>
        <p>{{ indexStore.movie.Plot }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIndexStore } from '../store/index'

const indexStore = useIndexStore()
</script>

<style scoped lang="scss">
.detail {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 600px;
  padding: 70px;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;

    img {
      width: 300px;
      height: 433px;
      border-radius: 20px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 1);
      margin: 0 30px;
    }
    .contents {
      display: flex;
      flex-direction: column;
      padding: 20px;
      h1 {
        color: white;
        padding: 10px;
        text-shadow:
          0 0 5px #fff,
          0 0 10px #fff,
          0 0 15px #000000,
          0 0 20px #000000,
          0 0 25px #000000,
          0 0 30px #000000,
          0 0 35px #000000;
        font-size: 45px;
      }
      .info1 {
        display: flex;
        padding: 10px;
        font-size: 30px;
        color: #fff;
        h3 {
          margin-right: 10px;
          font-weight: 100;
          text-shadow:
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 15px #000000,
            0 0 20px #000000,
            0 0 25px #000000,
            0 0 30px #000000,
            0 0 35px #000000;
        }
      }
      .info2 {
        display: flex;
        padding: 10px;
        font-size: 20px;
        color: #fff;
        h3 {
          margin-right: 10px;
        }
        .genre {
          text-shadow:
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 15px #fb8c77,
            0 0 20px #fb8c77,
            0 0 25px #fb8c77,
            0 0 30px #fb8c77,
            0 0 35px #fb8c77;
        }
        .country {
          text-shadow:
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 15px #ffe694,
            0 0 20px #ffe694,
            0 0 25px #ffe694,
            0 0 30px #ffe694,
            0 0 35px #ffe694;
        }
      }
      p {
        color: white;
        font-size: 25px;
        padding: 10px;
        text-shadow:
          0 0 5px #fff,
          0 0 10px #fff,
          0 0 15px #000000,
          0 0 20px #000000,
          0 0 25px #000000,
          0 0 30px #000000,
          0 0 35px #000000;
      }
    }
  }
}
</style>
