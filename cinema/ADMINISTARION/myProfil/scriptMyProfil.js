// default data
const defaultData = {
    name: "John",
    surname: "Doe",
    email: "john@example.com",
    phone: "+212 600 000 000"
};

// load data from localStorage or use default
let userData = localStorage.getItem("myProfilData");
if(userData){
    userData = JSON.parse(userData);
}else{
    userData = defaultData;
}

// show in view mode
function showView(){
    document.getElementById("displayName").innerText = userData.name;
    document.getElementById("displaySurname").innerText = userData.surname;
    document.getElementById("displayEmail").innerText = userData.email;
    document.getElementById("displayPhone").innerText = userData.phone;
    document.querySelector(".cardView").style.display = "block";
    document.querySelector(".cardEdit").style.display = "none";
}

// show edit mode
function showEdit(){
    document.getElementById("inputName").value = userData.name;
    document.getElementById("inputSurname").value = userData.surname;
    document.getElementById("inputEmail").value = userData.email;
    document.getElementById("inputPhone").value = userData.phone;
    document.querySelector(".cardView").style.display = "none";
    document.querySelector(".cardEdit").style.display = "block";
}

// save changes
function saveData(){
    userData.name = document.getElementById("inputName").value;
    userData.surname = document.getElementById("inputSurname").value;
    userData.email = document.getElementById("inputEmail").value;
    userData.phone = document.getElementById("inputPhone").value;
    localStorage.setItem("myProfilData", JSON.stringify(userData));
    showView();
    alert("Profile updated successfully!");
}

// cancel edit
function cancelEdit(){
    showView();
}

// initial load
showView();

// event listeners
document.getElementById("editBtn").addEventListener("click", showEdit);
document.getElementById("saveBtn").addEventListener("click", saveData);
document.getElementById("cancelBtn").addEventListener("click", cancelEdit);
