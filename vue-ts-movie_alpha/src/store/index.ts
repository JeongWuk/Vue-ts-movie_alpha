import { defineStore } from 'pinia'
import router from '../routes'
import axios from 'axios'

type Searches = Search[]
interface Search {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
interface Movie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export const useIndexStore = defineStore('index', {
  state: () => ({
    movies: [] as Searches,
    movie: {} as Movie,
    loading: false
  }),
  actions: {
    async fetchMovies(movieTitle: string = '', page: string = '1') {
      try {
        if (movieTitle !== localStorage.getItem('title')) {
          if (movieTitle !== '') {
            localStorage.setItem('title', movieTitle)
          }
        }
        movieTitle = localStorage.getItem('title')!
        this.loading = !this.loading
        const { data } = await axios.post('/api/fetch', {
          data: {
            info: movieTitle,
            page: page,
            flag: 'movies'
          }
        })
        setTimeout(() => {
          this.movies = data
          router.push('/movies')
          this.loading = !this.loading
        }, 2000)
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message)
        } else {
          console.error('An unknown error occurred:', error)
        }
      }
    },
    async fetchMovie(id: string = '') {
      try {
        if (id !== localStorage.getItem('id')) {
          if (id !== '') {
            localStorage.setItem('id', id)
          }
        }
        id = localStorage.getItem('id')!
        this.loading = !this.loading
        const { data } = await axios.post('/api/fetch', {
          data: {
            info: id,
            page: '',
            flag: 'movie'
          }
        })
        setTimeout(() => {
          this.movie = data
          router.push('/detail')
          this.loading = !this.loading
        }, 2000)
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message)
        } else {
          console.error('An unknown error occurred:', error)
        }
      }
    }
  }
})
