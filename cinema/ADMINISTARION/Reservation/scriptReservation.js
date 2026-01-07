let clientName = document.getElementById("clientName");
let clientEmail = document.getElementById("clientEmail");
let filmReserved = document.getElementById("filmReserved");
let reservationDate = document.getElementById("reservationDate");
let placesNumber = document.getElementById("placesNumber");
let submit = document.getElementById("submit");

let reservations = localStorage.Reservations ? JSON.parse(localStorage.Reservations) : [];

// ---------------- take data in film localStorage
function loadFilms(){
    filmReserved.innerHTML = `<option value="">-- Choisir un film --</option>`;
    let films = localStorage.Films ? JSON.parse(localStorage.Films) : [];
    if(films.length == 0){
        filmReserved.innerHTML = `<option value="">-- Aucun film disponible --</option>`;
    } else {
        for(let i=0; i<films.length; i++){
            filmReserved.innerHTML += `<option value="${films[i].title}">${films[i].title}</option>`;
        }
    }
}
loadFilms();

// create
submit.addEventListener("click", createReservation);
function createReservation(){
    if(clientName.value != '' && filmReserved.value != '' && filmReserved.value != '-- Aucun film disponible --'){
        let reservation = {
            clientName: clientName.value,
            clientEmail: clientEmail.value,
            filmReserved: filmReserved.value,
            reservationDate: reservationDate.value,
            placesNumber: placesNumber.value
        };
        reservations.push(reservation);
        localStorage.setItem("Reservations", JSON.stringify(reservations));
        clearInputs();
        readReservations();
    } else {
        alert("Vous devez entrer le nom du client et choisir un film disponible !");
    }
}

function clearInputs(){
    clientName.value = '';
    clientEmail.value = '';
    filmReserved.value = '';
    reservationDate.value = '';
    placesNumber.value = '';
}

// read
function readReservations(){
    let table = "";
    for(let i=0; i<reservations.length; i++){
        table += `<tr>
            <td>${i+1}</td>
            <td>${reservations[i].clientName}</td>
            <td>${reservations[i].clientEmail}</td>
            <td>${reservations[i].filmReserved}</td>
            <td>${reservations[i].reservationDate}</td>
            <td>${reservations[i].placesNumber}</td>
            <td><button onclick="updateReservation(${i})">Update</button></td>
            <td><button onclick="deleteReservation(${i})">Delete</button></td>
        </tr>`;
    }
    document.getElementById("tbodyReservation").innerHTML = table;
    document.getElementById("divDeleteAll").innerHTML = reservations.length > 0 ? 
        `<button onclick="deleteAllReservations()">Delete All (${reservations.length})</button>` : "";
}

function deleteReservation(i){
    reservations.splice(i,1);
    localStorage.setItem("Reservations", JSON.stringify(reservations));
    readReservations();
}

function deleteAllReservations(){
    reservations = [];
    localStorage.setItem("Reservations", JSON.stringify(reservations));
    readReservations();
}

// update
function updateReservation(i){
    clientName.value = reservations[i].clientName;
    clientEmail.value = reservations[i].clientEmail;
    filmReserved.value = reservations[i].filmReserved;
    reservationDate.value = reservations[i].reservationDate;
    placesNumber.value = reservations[i].placesNumber;

    submit.style.display = "none";
    let varUpdate = document.getElementById("update");
    varUpdate.style.display = "block";
    varUpdate.innerHTML = `<button onclick="updateData(${i})">UPDATE</button>`;
    scroll({top:0, behavior:"smooth"});
}

function updateData(i){
    reservations[i].clientName = clientName.value;
    reservations[i].clientEmail = clientEmail.value;
    reservations[i].filmReserved = filmReserved.value;
    reservations[i].reservationDate = reservationDate.value;
    reservations[i].placesNumber = placesNumber.value;

    localStorage.setItem("Reservations", JSON.stringify(reservations));
    clearInputs();
    document.getElementById("update").style.display = "none";
    submit.style.display = "block";
    readReservations();
}

// search
let srchmood = "client";
function searchMood(id){
    let search = document.getElementById("search");
    if(id=="btnName"){ srchmood="client"; search.placeholder = "Search by client"; }
    else { srchmood="film"; search.placeholder = "Search by film"; }
    search.value = "";
    search.focus();
    readReservations();
}

function filterData(value){
    let table = "";
    for(let i=0; i<reservations.length; i++){
        if(srchmood=="client" && reservations[i].clientName.toLowerCase().includes(value.toLowerCase())
        || srchmood=="film" && reservations[i].filmReserved.toLowerCase().includes(value.toLowerCase())){
            table += `<tr>
                <td>${i+1}</td>
                <td>${reservations[i].clientName}</td>
                <td>${reservations[i].clientEmail}</td>
                <td>${reservations[i].filmReserved}</td>
                <td>${reservations[i].reservationDate}</td>
                <td>${reservations[i].placesNumber}</td>
                <td><button onclick="updateReservation(${i})">Update</button></td>
                <td><button onclick="deleteReservation(${i})">Delete</button></td>
            </tr>`;
        }
    }
    document.getElementById("tbodyReservation").innerHTML = table;
}

// initial read
readReservations();
