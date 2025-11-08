import { baseUrl } from "./config.js";

const obtenerPeliculaID = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const itemContainer = document.querySelector(".item-container");
  const itemImgContainer = document.getElementById("item-img")
  const itemInfoContainer = document.getElementById("item-info")

  fetch(`${baseUrl}/request/${id}`)
    .then(result => result.json())
    .then(data => {
        console.log(data);
        itemContainer.style.backgroundImage = `url("https://image.tmdb.org/t/p/original${data.backdrop_path}")`;
        itemContainer.style.backgroundSize = "cover";
        itemContainer.style.backgroundPosition = "center";
        itemContainer.style.backgroundRepeat = "no-repeat";

        const img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/original${data.poster_path}`;
        img.alt = `${data.title}`;


        const year = new Date(data.release_date).getFullYear();
        const title = document.createElement("h1");
        title.textContent = `${data.title}(${year})`;

        const overview = document.createElement("article")
        overview.textContent = `${data.overview}`


        itemImgContainer.appendChild(img)
        itemInfoContainer.append(title, overview)


    });
};

obtenerPeliculaID();
