import { baseUrl } from "./config.js"


const obtenerPeliculas = () => {

	const divConteiner = document.getElementById("estrenos")
	const IMG_BASE = "https://image.tmdb.org/t/p/original";

    fetch(`${baseUrl}/request`)
    .then(result => result.json())
    .then(data => {
        console.log("peliculas:", data)
		data.results.forEach(item => {
			const divEstrenos = document.createElement("div")
			divEstrenos.classList.add("card")
			const img = document.createElement("img")
			img.src = `${IMG_BASE}${item.poster_path}`
			img.alt =`${item.title}`
			const name = document.createElement("p")
			name.textContent = `${item.title}`

			divEstrenos.append(img, name)
			divConteiner.appendChild(divEstrenos)
		});
    })
}
const obtenerSeries = () => {
	const IMG_BASE = "https://image.tmdb.org/t/p/original";
	const divConteiner = document.getElementById("series");

	fetch(`${baseUrl}/request/series`)
	.then(result => result.json())
	.then(data => {
		data.results.forEach(item => {
			const divSeries = document.createElement("div")
			divSeries.classList.add("card")
			const img = document.createElement("img")
			img.src = `${IMG_BASE}${item.poster_path}`
			img.alt =`${item.title}`
			const name = document.createElement("p")
			name.textContent = `${item.name}`

			divSeries.append(img, name)
			divConteiner.appendChild(divSeries)
		})
		console.log("series:", data)
	})
}
const obtenerTendencias = () => {
	const IMG_BASE = "https://image.tmdb.org/t/p/original";
	const divConteiner = document.getElementById("trendings")
	fetch(`${baseUrl}/request/trendings`)
	.then(result => result.json())
	.then(data => {
		data.results.forEach(item => {
			const enlace = document.createElement("a")
			enlace.href
			const divTrendings = document.createElement("div")
			divTrendings.classList.add("card")
			const img = document.createElement("img")
			img.src = `${IMG_BASE}${item.poster_path}`
			img.alt =`${item?.name || item.title}`
			const name = document.createElement("p")
			name.textContent = `${item?.name || item.title}`
			
			divTrendings.append(img, name)
			divConteiner.appendChild(divTrendings)
		})
		console.log("tendencias", data)
	})
}
const scrollContainer = document.getElementById("estrenos");
const btnLeft = document.querySelector(".scroll-btn.left");
const btnRight = document.querySelector(".scroll-btn.right");

btnLeft.addEventListener("click", () => {
	const scrollAmount = scrollContainer.clientWidth; // 👈 ancho visible del contenedor
	scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
	const scrollAmount = scrollContainer.clientWidth; // 👈 igual aquí
	scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
});
obtenerTendencias()
obtenerPeliculas()
obtenerSeries()