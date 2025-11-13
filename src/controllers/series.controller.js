import axios from "axios";

export const getAllSeries = async (req, res) => {
    const API_KEY = "612c33b2066027ae382dafa6ee3e75c2";
    const { page = 1 } = req.query; // valor por defecto: 1

    try {
        const url = `https://api.themoviedb.org/3/trending/tv/day?language=es-ES&page=${page}&region=AR&api_key=${API_KEY}`;
        const result = await axios.get(url);
        res.json(result.data);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al pedir las series", error: error.message });
    }
};
