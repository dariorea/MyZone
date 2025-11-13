import axios from "axios";

export const searchItem = async (req, res) => {
    const API_KEY = "612c33b2066027ae382dafa6ee3e75c2";
    const { name } = req.query
    try {
        const url = `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(name)}&language=es-ES&api_key=${API_KEY}`
        const result = await axios.get(url)
        const data = result.data
        res.json(data)
    } catch (error) {
        res.json({mensaje: "No hay resultados", error: error})
    }
}