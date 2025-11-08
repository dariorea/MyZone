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
			enlace.href = `${baseUrl}/pages/movie.html?id=${item.id}`
			const divTrendings = document.createElement("div")
			divTrendings.classList.add("card")
			const img = document.createElement("img")
			img.src = `${IMG_BASE}${item.poster_path}`
			img.alt =`${item?.name || item.title}`
			const name = document.createElement("p")
			name.textContent = `${item?.name || item.title}`

			enlace.appendChild(img)
			divTrendings.append(enlace, name)
			divConteiner.appendChild(divTrendings)
		})
		console.log("tendencias", data)
	})
}
//const scrollContainer = document.getElementById("estrenos");
//const btnLeft = document.querySelector(".scroll-btn.left");
//const btnRight = document.querySelector(".scroll-btn.right");

document.querySelectorAll(".scroll-wrapped").forEach(wrapper => {
	const scrollContainer = wrapper.querySelector(".container-cards");
	const btnLeft = wrapper.querySelector(".scroll-btn.left");
	const btnRight = wrapper.querySelector(".scroll-btn.right");
  
	const scrollByAmount = () => scrollContainer.clientWidth;
  
	btnLeft.addEventListener("click", () => {
	  scrollContainer.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });
	});
  
	btnRight.addEventListener("click", () => {
	  scrollContainer.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
	});
  });
  
obtenerTendencias()
obtenerPeliculas()
obtenerSeries()