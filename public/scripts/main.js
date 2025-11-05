import { baseUrl } from "./config.js"


const obtenerPeliculas = () => {

	const divConteiner = document.getElementById("container")
	const IMG_BASE = "https://image.tmdb.org/t/p/original";

    fetch(`${baseUrl}/request`)
    .then(result => result.json())
    .then(data => {
        console.log(data)
		data.results.forEach(item => {
			const img = document.createElement("img")
			img.src = `${IMG_BASE}${item.poster_path}`
			img.alt =`${item.title}`

			divConteiner.appendChild(img)
		});
    })
}

obtenerPeliculas()