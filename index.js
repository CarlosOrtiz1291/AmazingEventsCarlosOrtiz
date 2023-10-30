import{data} from "./data.js"
const arrayEvents = data.events
arrayCategories = Array.from(new Set(arrayEvents.map((event) => event.category.replace(" ", "-"))));

const containerCard = document.getElementById("contenedorIndexCard");

function checks(arrayCategories) {
    arrayEvents.forEach(event => {
    const checkbox = document.createElement("div");
    checkbox.classList.add("form-check", "form-switch");
    checkbox.innerHTML = `
    <input class="form-check-input" type="checkbox" role="switch" id=${category} value=${category}>
    <label class="form-check-label text-light" for=${category}>${category.replace("-", " ")}</label>
    `;
    contenedorCheckbox.appendChild(checkbox);
    });
}



for (let event of arrayDeEventos) {
    contenedorIndexCard.classList.add('d-flex', 'justify-content-around', 'flex-wrap', 'cardaround');
    const creadorCards = document.createElement("div");
    creadorCards.innerHTML = `<div class="card my-3" style="width: 25rem;">
            <img src=${event.image}" class="card-img-top" height="185"
            alt="food fair">
            <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text text-truncate">${event.description}</p>
                <div class="d-flex justify-content-between">
                    <p>$ ${event.price}</p>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div>`
    containerCard.appendChild(creadorCards);
}
