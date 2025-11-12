import { baseUrl } from "./config.js";

const obtenerAnime = () => {
    fetch(`${baseUrl}/lost/animation`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}






obtenerAnime()


