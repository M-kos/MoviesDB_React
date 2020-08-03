export default class MovieDbService {

  apiBase = 'https://api.themoviedb.org'

  imageBase = 'https://image.tmdb.org/t/p'

  apiKey = 'ffc039a22a092d2810e0b62437ad73e8'


  getMovies = async (query, page = 1) => {
    if (query.trim()) {
      const queryString = query.trim().replace(/\s/g, '+')

      try {
        this.checkOnLine()

        const result = await fetch(`${this.apiBase}/3/search/movie?api_key=${this.apiKey}&query=${queryString}&page=${page}`)

        if (!result.ok) {
          throw new Error('Response Error')
        }
        
        const movies = (await result.json()).results

        if (movies && !movies.length) {
          throw new Error('Nothing found')
        }
        

        return movies
      } catch (error) {
        throw new Error(error);
      }
    }
    return undefined
  }

  getImage = (path, weight = 300) => {
    return `${this.imageBase}/w${weight}${path}`
  }

  checkOnLine() {
    if (!navigator.onLine) {
      throw new Error('No network connection')
    }
  }
}