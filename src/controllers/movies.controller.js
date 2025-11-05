import axios from "axios";

export const getMovies = async (req, res)=> {
    const API_KEY = "612c33b2066027ae382dafa6ee3e75c2"
    try {
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`;
        
        const result = await axios.get(url)
        const data = result.data

        res.json(data)
    } catch (error) {
        res.json({mensaje: "error", error: error})
    }
}