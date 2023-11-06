const arrayDeEventos = data.events;
const currentDate = new Date(data.currentDate); // Convierte la fecha actual en un objeto de fecha
const contenedorComingCard = document.getElementById('contenedorComingCard');

for (const event of arrayDeEventos) {
    const eventDate = new Date(event.date); // Convierte la fecha del evento en un objeto de fecha

    if (eventDate > currentDate) {
        const creadorCards = document.createElement('div');
        creadorCards.innerHTML = `
            <div class="card my-5" style="width: 25rem;">
                <img src="${event.image}" class="card-img-top" height="185" alt="food fair">
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text text-truncate">${event.description}</p>
                    <div class="d-flex justify-content-between">
                        <p>$ ${event.price}</p>
                        <a href="#" class="btn btn-dark">Details</a>
                    </div>
                </div>
            </div>`;
        contenedorComingCard.appendChild(creadorCards);
    }
}


