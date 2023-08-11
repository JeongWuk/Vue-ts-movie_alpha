<template>
  <div class="buttons">
    <div
      @click="switchActive"
      class="button active"
      data-page="1"></div>
    <div
      @click="switchActive"
      class="button"
      data-page="2"></div>
    <div
      @click="switchActive"
      class="button"
      data-page="3"></div>
    <div
      @click="switchActive"
      class="button"
      data-page="4"></div>
    <div
      @click="switchActive"
      class="button"
      data-page="5"></div>
  </div>
  <div class="movie-container">
    <ul>
      <li
        v-for="(movie, index) in indexStore.movies"
        :key="index"
        @click="showDetails(movie.imdbID)">
        <img :src="movie.Poster" />
        <h3 class="title">{{ movie.Title }}</h3>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useIndexStore } from '../store/index'

const indexStore = useIndexStore()

function switchActive(event: MouseEvent) {
  const clickedButton = event.target as HTMLElement
  if (clickedButton.classList.contains('active')) {
    return false
  } else {
    const activeButton = document.querySelector('.button.active') as HTMLElement
    activeButton.classList.remove('active')
    clickedButton.classList.add('active')
  }
  indexStore.fetchMovies(
    localStorage.getItem('title')!,
    clickedButton.dataset.page
  )
}

const showDetails = (keyValue: string) => {
  indexStore.fetchMovie(keyValue)
}
</script>

<style scoped lang="scss">
.buttons {
  display: flex;
  position: absolute;
  top: 13%;
}
.button {
  width: 15px;
  height: 15px;
  float: left;
  margin-right: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(#262d3a, 0.2);
  cursor: pointer;
  transition: width 300ms ease;
  &:last-child {
    margin-right: 0;
  }
  &.active {
    width: 50px;
    cursor: auto;
  }
}
.movie-container {
  position: absolute;
  top: 18%;
  left: 0%;
  height: 85%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    padding: 0 70px 70px 70px;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      position: relative;
      margin: 20px;
      transition: transform 0.2s;

      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }

      &:hover .title {
        visibility: visible;
        text-shadow:
          0 0 5px #000,
          0 0 10px #000,
          0 0 15px #fff,
          0 0 20px #fff,
          0 0 25px #fff,
          0 0 30px #fff,
          0 0 35px #fff;
      }

      img {
        width: 300px;
        height: 443px;
        margin: 20px;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 1);
      }
      h3 {
        visibility: hidden;
        width: 300px;
        height: 50px;
        font-size: 30px;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
