/*const urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");


const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      event: {}, 
    };
  },
  created() {
    this.getData(urlApi);
  },
  methods: {
    getData(url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.event = data;
        });
    },
  },
}).mount("#app");*/

// details.js
// details.js

// Obtén el parámetro de la URL
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Muestra los detalles del evento
function showDetails() {
  // Obtén el nombre del evento de la URL
  const eventName = getParameterByName("name");

  // Simula obtener los detalles del evento desde alguna fuente de datos
  const eventDetails = {
    name: "Evento de ejemplo",
    category: "Categoría de ejemplo",
    date: "Fecha de ejemplo",
    price: "Precio de ejemplo",
    // Otros detalles que desees mostrar
  };

  // Rellena la página con los detalles
  document.querySelector(".card-title").innerText = eventDetails.name;
  document.querySelector(".card-text-category").innerText = "Categoría: " + eventDetails.category;
  document.querySelector(".card-text-date").innerText = "Fecha: " + eventDetails.date;
  document.querySelector(".card-text-price").innerText = "Precio: " + eventDetails.price;
}

// Ejecuta la función showDetails cuando la página se carga
document.addEventListener("DOMContentLoaded", showDetails);
