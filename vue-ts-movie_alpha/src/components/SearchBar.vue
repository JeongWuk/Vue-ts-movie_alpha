<template>
  <div class="container">
    <nav>
      <a href="/"
        ><img
          src="../assets/home.png"
          alt=""
      /></a>
      <div class="search">
        <form @submit.prevent="fetchMovies">
          <input
            v-model="movieTitle"
            type="text"
            placeholder="Search" />
          <button type="submit">
            <i class="fa fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div class="contect">
        <i class="fa fa-brands fa-twitter fa-2xl"></i>
        <a href="https://www.instagram.com/jw_99__/"
          ><i class="fa fa-brands fa-instagram fa-2xl"></i
        ></a>
        <a href="https://github.com/JeongWuk"
          ><i class="fa fa-brands fa-github fa-2xl"></i
        ></a>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIndexStore } from '../store/index'

const indexStore = useIndexStore()
const movieTitle = ref('')

const fetchMovies = async () => {
  await indexStore.fetchMovies(movieTitle.value)
  movieTitle.value = ''
}
</script>

<style scoped lang="scss">
.container {
  background-image: url('https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  animation: fadeIn 3s;

  nav {
    display: flex;
    justify-content: space-between;

    img {
      width: 200px;
      height: 75px;
      margin: 15px;
      cursor: pointer;
    }
    .search {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;

      form {
        border: 2px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;

        input {
          width: 370px;
          height: 40px;
          border: none;
          padding: 10px;
          font-size: 20px;
          outline: none;
          color: white;
          background: transparent;

          &::placeholder {
            color: white;
          }
        }

        button {
          width: 30px;
          height: 30px;
          background: transparent;
          border: none;
          font-size: 15px;
          cursor: pointer;
        }
        i {
          color: white;
        }
      }
    }
    .contect {
      width: 200px;
      height: 105px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0 15px;

      i {
        color: white;
      }
    }
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
    width: 200%;
    height: 200%;
  }
  to {
    opacity: 1;
  }
}
</style>
