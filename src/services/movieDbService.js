export default class MovieDbService {

  apiBase = 'https://api.themoviedb.org'

  imageBase = 'https://image.tmdb.org/t/p'

  apiKey = 'ffc039a22a092d2810e0b62437ad73e8'


  getMovies = async (query, page = 1) => {
    if (query.trim()) {
      const queryString = query.trim().replace(/\s/g, '+')

      try {
        const result = await fetch(`${this.apiBase}/3/search/movie?api_key=${this.apiKey}&query=${queryString}&page=${page}`)

        if (!result.ok) {
          throw new Error('Response Error')
        }
        return result.json()
      } catch (error) {
        console.error(error);
      }
    }
    return undefined
  }

  getImage = async (path, weight = 300) => {
    if (path) {
      try {
        const result = await fetch(`${this.imageBase}/w${weight}${path}`)

        if (!result.ok) {
          throw new Error('Image Error')
        }

        return result
      } catch (error) {
        console.error(error);
      }
    }
    return undefined
  }
}