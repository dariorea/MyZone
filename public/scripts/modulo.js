import { baseUrl } from "./config.js";

export function infiniteScrollLoader({
  containerId,
  scrollId,
  endpoint,
  renderItem,
}) {
  const container = document.getElementById(containerId);
  const scrollContainer = document.getElementById(scrollId);

  let currentPage = 1;
  let totalPages = Infinity;
  let isLoading = false;

  async function fetchData(page = 1) {
    if (isLoading || page > totalPages) return;
    isLoading = true;

    try {
      const res = await fetch(`${baseUrl}/${endpoint}?page=${page}`);
      if (!res.ok) throw new Error("Error al obtener los datos");
      const data = await res.json();

      totalPages = data.total_pages || totalPages;

      if (!data || !Array.isArray(data.results)) {
        console.warn("⚠️ No se encontraron resultados válidos:", data);
        console.log(`${baseUrl}/${endpoint}?page=${page}`)
        return;
      }
      
      data.results.forEach(item => renderItem(item, container));
      

      currentPage++;
      console.log(currentPage)
    } catch (error) {
      console.error("⚠️ Error:", error.message);
    } finally {
      isLoading = false;
    }
  }

  // Cargar la primera tanda
  fetchData();

  // Scroll infinito
  scrollContainer.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
        console.log("llegaste al fin")
      fetchData(currentPage);
    }
  });
}

const IMG_BASE = "https://image.tmdb.org/t/p/original";

export function renderCard(item, container, type = "serie") {
  const div = document.createElement("div");
  div.classList.add("card");

  const enlace = document.createElement("a");
  enlace.href = `${baseUrl}/pages/${type}.html?id=${item.id}`;

  const img = document.createElement("img");
  img.src = `${IMG_BASE}${item.poster_path}`;
  img.alt = item.name || item.title || "Sin título";

  const name = document.createElement("p");
  name.textContent = item.name || item.title || "Sin nombre";

  enlace.appendChild(img);
  div.append(enlace, name);
  container.appendChild(div);
}
