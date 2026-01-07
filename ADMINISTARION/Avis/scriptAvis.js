let clientName = document.getElementById("clientName");
let clientEmail = document.getElementById("clientEmail");
let filmAvis = document.getElementById("filmAvis");
let note = document.getElementById("note");
let commentaire = document.getElementById("commentaire");
let submit = document.getElementById("submit");

let avisList = localStorage.Avis ? JSON.parse(localStorage.Avis) : [];

// load films
function loadFilms(){
    filmAvis.innerHTML = `<option value="">-- Choisir un film --</option>`;
    let films = localStorage.Films ? JSON.parse(localStorage.Films) : [];
    if(films.length == 0){
        filmAvis.innerHTML = `<option value="">-- Aucun film disponible --</option>`;
    } else {
        for(let i=0; i<films.length; i++){
            filmAvis.innerHTML += `<option value="${films[i].title}">${films[i].title}</option>`;
        }
    }
}
loadFilms();

// create
submit.addEventListener("click", createAvis);
function createAvis(){
    if(clientName.value != '' && filmAvis.value != '' && filmAvis.value != '-- Aucun film disponible --'){
        let avis = {
            clientName: clientName.value,
            clientEmail: clientEmail.value,
            filmAvis: filmAvis.value,
            note: note.value,
            commentaire: commentaire.value
        };
        avisList.push(avis);
        localStorage.setItem("Avis", JSON.stringify(avisList));
        clearInputs();
        readAvis();
    } else {
        alert("Vous devez entrer le nom du client et choisir un film disponible !");
    }
}

function clearInputs(){
    clientName.value = '';
    clientEmail.value = '';
    filmAvis.value = '';
    note.value = '';
    commentaire.value = '';
}

// read
function readAvis(){
    let table = "";
    for(let i=0; i<avisList.length; i++){
        table += `<tr>
            <td>${i+1}</td>
            <td>${avisList[i].clientName}</td>
            <td>${avisList[i].clientEmail}</td>
            <td>${avisList[i].filmAvis}</td>
            <td>${avisList[i].note}</td>
            <td>${avisList[i].commentaire}</td>
            <td><button onclick="updateAvis(${i})">Update</button></td>
            <td><button onclick="deleteAvis(${i})">Delete</button></td>
        </tr>`;
    }
    document.getElementById("tbodyAvis").innerHTML = table;
    document.getElementById("divDeleteAll").innerHTML = avisList.length > 0 ? 
        `<button onclick="deleteAllAvis()">Delete All (${avisList.length})</button>` : "";
}

function deleteAvis(i){
    avisList.splice(i,1);
    localStorage.setItem("Avis", JSON.stringify(avisList));
    readAvis();
}

function deleteAllAvis(){
    avisList = [];
    localStorage.setItem("Avis", JSON.stringify(avisList));
    readAvis();
}

// update
function updateAvis(i){
    clientName.value = avisList[i].clientName;
    clientEmail.value = avisList[i].clientEmail;
    filmAvis.value = avisList[i].filmAvis;
    note.value = avisList[i].note;
    commentaire.value = avisList[i].commentaire;

    submit.style.display = "none";
    let varUpdate = document.getElementById("update");
    varUpdate.style.display = "block";
    varUpdate.innerHTML = `<button onclick="updateData(${i})">UPDATE</button>`;
    scroll({top:0, behavior:"smooth"});
}

function updateData(i){
    avisList[i].clientName = clientName.value;
    avisList[i].clientEmail = clientEmail.value;
    avisList[i].filmAvis = filmAvis.value;
    avisList[i].note = note.value;
    avisList[i].commentaire = commentaire.value;

    localStorage.setItem("Avis", JSON.stringify(avisList));
    clearInputs();
    document.getElementById("update").style.display = "none";
    submit.style.display = "block";
    readAvis();
}

// search
let srchmood = "client";
function searchMood(id){
    let search = document.getElementById("search");
    if(id=="btnClient"){ srchmood="client"; search.placeholder = "Search by client"; }
    else { srchmood="film"; search.placeholder = "Search by film"; }
    search.value = "";
    search.focus();
    readAvis();
}

function filterData(value){
    let table = "";
    for(let i=0; i<avisList.length; i++){
        if(srchmood=="client" && avisList[i].clientName.toLowerCase().includes(value.toLowerCase())
        || srchmood=="film" && avisList[i].filmAvis.toLowerCase().includes(value.toLowerCase())){
            table += `<tr>
                <td>${i+1}</td>
                <td>${avisList[i].clientName}</td>
                <td>${avisList[i].clientEmail}</td>
                <td>${avisList[i].filmAvis}</td>
                <td>${avisList[i].note}</td>
                <td>${avisList[i].commentaire}</td>
                <td><button onclick="updateAvis(${i})">Update</button></td>
                <td><button onclick="deleteAvis(${i})">Delete</button></td>
            </tr>`;
        }
    }
    document.getElementById("tbodyAvis").innerHTML = table;
}

// initial read
readAvis();
