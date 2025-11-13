import { baseUrl } from "./config.js";

document.addEventListener("DOMContentLoaded", () => {
    const divContainer = document.getElementById("container");
    const scrollContainer = document.getElementById("fin");
    const IMG_BASE = "https://image.tmdb.org/t/p/original"; 

    let currentPage = 1;
    let isLoading = false;
    let totalPages = Infinity; // se actualizará cuando lleguen los datos

    const obtenerSeries = async (page = 1) => {
        // Evitar llamadas simultáneas
        if (isLoading || page > totalPages) return;
        isLoading = true;

        try {
            const res = await fetch(`${baseUrl}/gods?page=${page}`);
            if (!res.ok) throw new Error("Error al obtener las series");
            const data = await res.json();

            totalPages = data.total_pages || totalPages;

            // Renderizar las series
            data.results.forEach(item => {
                const divSeries = document.createElement("div");
                divSeries.classList.add("card");

                const enlace = document.createElement("a");
                enlace.href = `${baseUrl}/pages/serie.html?id=${item.id}`; // 👈 link del frontend

                const img = document.createElement("img");
                img.src = `${IMG_BASE}${item.poster_path}`;
                img.alt = item.name || item.title || "Sin título";

                const name = document.createElement("p");
                name.textContent = item.name || item.title || "Sin nombre";

                enlace.appendChild(img);
                divSeries.append(enlace, name);
                divContainer.appendChild(divSeries);
            });
            currentPage++;
        } catch (error) {
            console.error("⚠️ Error cargando series:", error.message);
        } finally {
            isLoading = false;
        }
    }   
    // Cargar la primera tanda
    obtenerSeries();

    // Detectar scroll en el contenedor
    scrollContainer.addEventListener("scroll", () => {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
        if (scrollTop + clientHeight >= scrollHeight - 100) {
            obtenerSeries(currentPage);
        }
    });
});
