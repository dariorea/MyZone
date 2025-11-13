//import { baseUrl } from "./config.js";
//
//const obtenerkids = () => {
//    const divConteiner = document.getElementById("container");
//    const IMG_BASE = "https://image.tmdb.org/t/p/original";
//    fetch(`${baseUrl}/lost/kids`)
//    .then(res => res.json())
//    .then(data => {
//        console.log(data, "love");
//        data.results.forEach(item => {
//			const divSeries = document.createElement("div")
//			divSeries.classList.add("card")
//			const enlace = document.createElement("a")
//			enlace.href = `${baseUrl}/pages/serie.html?id=${item.id}`;
//			const img = document.createElement("img")
//			img.src = `${IMG_BASE}${item.poster_path}`
//			img.alt =`${item.title}`
//			const name = document.createElement("p")
//			name.textContent = `${item.title}`
//
//			enlace.appendChild(img)
//			divSeries.append(enlace, name)
//			divConteiner.appendChild(divSeries)
//		})
//    })
//}

import { infiniteScrollLoader, renderCard } from "./modulo.js";

//obtenerkids()
infiniteScrollLoader({
    containerId: "container",
    scrollId: "fin",
    endpoint: "lost/kids", // ✅ ruta completa del backend
    renderItem: (item, container) => renderCard(item, container, "movie"),
})

