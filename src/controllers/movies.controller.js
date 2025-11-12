import axios from "axios";

export const getTrendings = async (req, res) => {
    const API_KEY = "612c33b2066027ae382dafa6ee3e75c2"

    try {
        const url = `https://api.themoviedb.org/3/trending/all/day?language=es-ES&page=1&region=AR&api_key=${API_KEY}`
        const result = await axios.get(url)
        const data = result.data
        res.json(data)        
    } catch (error) {
        res.json({mensaje:"error al pedir las tendencias", error: error})
    }

}
export const getMovies = async (req, res)=> {
    const API_KEY = "612c33b2066027ae382dafa6ee3e75c2"
    try {
        const url = `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1&region=AR&api_key=${API_KEY}`;
        const result = await axios.get(url)
        const data = result.data
        res.json(data)
    } catch (error) {
        res.json({mensaje: "error", error: error})
    }
}
export const getSeries = async (req, res) => {
    const API_KEY = "612c33b2066027ae382dafa6ee3e75c2"

    try {
        const url = `https://api.themoviedb.org/3/trending/tv/day?language=es-ES&page=1&region=AR&api_key=${API_KEY}`
        const result = await axios.get(url)
        const data = result.data

        res.json(data)
    } catch (error) {
        res.json({mensaje: "error al pedir las series", error: error})
    }
}
export const getMovieID = async (req, res) => {
    const id = req.params.id
    const API_KEY = "612c33b2066027ae382dafa6ee3e75c2"
    try {
        const url = `https://api.themoviedb.org/3/movie/${id}?language=es-ES&page=1&region=AR&api_key=${API_KEY}`
        const result = await axios.get(url)
        const data = result.data

        res.json(data)
    } catch (error) {
        res.json({mensaje:"error al buscar la pelicula", error: error})
    }
}
export const getSerieID = async (req, res) => {
    const id = req.params.id
    const API_KEY = "612c33b2066027ae382dafa6ee3e75c2"
    try {
        const url = `https://api.themoviedb.org/3/tv/${id}?language=es-ES&page=1&region=AR&api_key=${API_KEY}`
        const result = await axios.get(url)
        const data = result.data;
        res.json(data)
    } catch (error) {
        res.json({mensaje:"error al pedir las series", error: error})
    }
}