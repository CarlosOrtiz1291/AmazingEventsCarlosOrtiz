const arrayDeEventos = data.events;
const containerCard = document.getElementById("contenedorIndexCard");


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


