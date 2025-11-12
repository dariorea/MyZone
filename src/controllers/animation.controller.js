import axios from "axios";

export const getAnime = async (req, res) => {
    const API_KEY = "612c33b2066027ae382dafa6ee3e75c2";

    try {
        const url =  `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=es-ES&with_genres=16&with_origin_country=JP&sort_by=popularity.desc`
        const result = await axios.get(url)
        const data = result.data

        res.json(data)
    } catch (error) {
        res.json({mensaje: "error al pedir los anime", error: error})
    }
}

export const getKids = async (req, res) => {
    const API_KEY = "612c33b2066027ae382dafa6ee3e75c2";

    try {
        const url =  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&with_genres=16,10751&sort_by=popularity.desc`
        const result = await axios.get(url)
        const data = result.data

        res.json(data)
    } catch (error) {
        res.json({mensaje: "error al pedir los anime", error: error})
    }
}

