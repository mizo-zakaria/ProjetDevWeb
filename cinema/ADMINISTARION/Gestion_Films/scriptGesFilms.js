let title = document.getElementById("title");
let description = document.getElementById("description");
let genre = document.getElementById("genre");
let duration = document.getElementById("duration");
let releaseDate = document.getElementById("releaseDate");
let lang_org = document.getElementById("lang_org");
let lang_doub = document.getElementById("lang_doub");
let file = document.getElementById("file");
let auteur = document.getElementById("auteur");
let director = document.getElementById("director");
let submit = document.getElementById("submit");

//----------------------------------------------------------- create film -----------------------------------------------------------
let dataPro;
if(localStorage.Films != null){
    dataPro = JSON.parse(localStorage.Films);
}else{
    dataPro=[];
}
//  ----------------------------------------------------------- save in local storage -----------------------------------------------------------
submit.addEventListener("click",createData);
 function createData(){
    let objData = {
        title:title.value.toLowerCase(),
        description:description.value,
        genre:genre.value.toLowerCase(),
        duration:duration.value,
        releaseDate:releaseDate.value,
        lang_org:lang_org.value,
        lang_doub:lang_doub.value,
        file:file.value,
        auteur:auteur.value,
        director:director.value,
    }
    if (objData.title != '' && objData.genre != '') {
        dataPro.push(objData);
        localStorage.setItem('Films',JSON.stringify(dataPro));
        clearDataBrow();
        ReadData();
    }
    else{
        alert("You must enter title and genre");
    }
    
 }
// -----------------------------------------------------------  clear inputs -----------------------------------------------------------
function clearDataBrow(){
    title.value = "";
    description.value = '';
    genre.value = '';
    duration.value = '';
    releaseDate.value = '';
    lang_org.value='';
    lang_doub.value='';
    file.value='';
    auteur.value='';
    director.value='';
}
// ----------------------------------------------------------- read data -----------------------------------------------------------
function ReadData(){
    let table;
    for (let i = 0; i < dataPro.length; i++) {
        table += `<tr>
                                <td>none</td>
                                <td>${i+1}</td>
                                <td>${dataPro[i].title}</td>
                                <td>${dataPro[i].description}</td>
                                <td>${dataPro[i].genre}</td>
                                <td>${dataPro[i].duration}</td>
                                <td>${dataPro[i].releaseDate}</td>
                                <td>${dataPro[i].auteur}</td>
                                <td>${dataPro[i].director}</td>
                                <td>${dataPro[i].duration}</td>
                                <td>${dataPro[i].lang_org}</td>
                                <td>${dataPro[i].lang_doub}</td>
                                <td><button onclick="update(${i})">update</button></td>
                                <td><button onclick="delateData(${i})">delate</button></td>
                            </tr>`;}
                            
    tbody.innerHTML=table;
    let divDeleteAll=document.getElementById("divDeleteAll");
    if(dataPro.length > 0){
        divDeleteAll.innerHTML=`<button onclick="delateAlldata()">delete all (${dataPro.length})</button>`;
    }else{
        divDeleteAll.innerHTML=``;
    }
}
// -----------------------------------------------------------  delate data -----------------------------------------------------------
function delateData(i){
    dataPro.splice(i,1);
    localStorage.setItem('Films',JSON.stringify(dataPro));
    ReadData();
}
function delateAlldata(){
    localStorage.clear();
    dataPro.splice(0);
    ReadData();
}
ReadData();
// update data 
function update(i){
    title.value=dataPro[i].title;
    description.value = dataPro[i].description;
    genre.value = dataPro[i].genre;
    duration.value = dataPro[i].duration;
    releaseDate.value = dataPro[i].releaseDate;
    lang_org.value=dataPro[i].lang_org;
    lang_doub.value=dataPro[i].lang_doub;
    file.value=dataPro[i].file;
    auteur.value=dataPro[i].auteur;
    director.value=dataPro[i].director;
    submit.style.display=`none`;
    window.varUpdate = document.getElementById("update");
    varUpdate.style.display=`block`;
    scroll({
        top:0,
        behavior:'smooth',
    });
    varUpdate.innerHTML=`<button onclick="updateData(${i})">UPDATE</button>`;
    
}
function updateData(i){
        for(let ind = 0; ind < dataPro.length; ind++) {
            if(ind ==i){
                dataPro[i].title=title.value;
                dataPro[i].description=description.value;
                dataPro[i].genre=genre.value ;
                dataPro[i].duration=duration.value;
                dataPro[i].releaseDate=releaseDate.value ;
                dataPro[i].lang_org=lang_org.value;
                dataPro[i].lang_doub=lang_doub.value;
                dataPro[i].file=file.value;
                dataPro[i].auteur=auteur.value;
                dataPro[i].director=director.value;
            }
        }
    localStorage.setItem('Films',JSON.stringify(dataPro));
    clearDataBrow();
    varUpdate.style.display=`none`;
    submit.style.display=`block`;
    ReadData();
    }
// serach
let srchmood=`title`;
function searchMood(id){
    let serach = document.getElementById("search");
    if(id == "btnTitle"){
        srchmood = "title";
        serach.placeholder="Search by title";
    }else{
        srchmood ="genre";
        serach.placeholder="Search by genre";
        serach.style.padding=`9px`;
    }
    serach.focus();
    serach.value=``;
    ReadData();   
}
function filterData(value){
    let table=``;
    console.log(srchmood)
    if (srchmood=="title") {
        for(let i = 0; i < dataPro.length; i++){
            if (dataPro[i].title.includes(value.toLowerCase())){
                table += `<tr>
                                <td>none</td>
                                <td>${i+1}</td>
                                <td>${dataPro[i].title}</td>
                                <td>${dataPro[i].description}</td>
                                <td>${dataPro[i].genre}</td>
                                <td>${dataPro[i].duration}</td>
                                <td>${dataPro[i].releaseDate}</td>
                                <td>${dataPro[i].auteur}</td>
                                <td>${dataPro[i].director}</td>
                                <td>${dataPro[i].duration}</td>
                                <td>${dataPro[i].lang_org}</td>
                                <td>${dataPro[i].lang_doub}</td>
                                <td><button onclick="update(${i})">update</button></td>
                                <td><button onclick="delateData(${i})">delate</button></td>
                            </tr>`;}
        }
        
    }
    else{
        for(let i = 0; i < dataPro.length; i++){
            if (dataPro[i].genre.includes(value.toLowerCase())){
                table += `<tr>
                                <td>none</td>
                                <td>${i+1}</td>
                                <td>${dataPro[i].title}</td>
                                <td>${dataPro[i].description}</td>
                                <td>${dataPro[i].genre}</td>
                                <td>${dataPro[i].duration}</td>
                                <td>${dataPro[i].releaseDate}</td>
                                <td>${dataPro[i].auteur}</td>
                                <td>${dataPro[i].director}</td>
                                <td>${dataPro[i].duration}</td>
                                <td>${dataPro[i].lang_org}</td>
                                <td>${dataPro[i].lang_doub}</td>
                                <td><button onclick="update(${i})">update</button></td>
                                <td><button onclick="delateData(${i})">delate</button></td>
                            </tr>`;}
        }
    }
    document.getElementById("tbody").innerHTML=table;
}
// clean data