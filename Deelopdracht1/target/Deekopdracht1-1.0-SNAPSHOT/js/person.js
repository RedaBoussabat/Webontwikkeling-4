window.onload = getNewPerson;

let personbutton = document.getElementById('personbutton');
personbutton.onclick = addPerson;

let getNewPersonRequest = new XMLHttpRequest();

let newPersonRequest = new XMLHttpRequest();

function getNewPerson(){
    getNewPersonRequest.open("GET", "ManageRoomServlet",true);
    getNewPersonRequest.onreadystatechange = showPersons;
    getNewPersonRequest.send();
}

function showPersons(){
    if(getNewPersonRequest.readyState == 4){
        if(getNewPersonRequest.status == 200){
            let person = JSON.parse(getNewPersonRequest.responseText);

            let personDiv = document.getElementById("person");
            let personParagraph = personDiv.childNodes[0];
            let personText = document.createTextNode(person.text);

            if (personParagraph == null){
                personParagraph = document.createElement('p');
                personParagraph.appendChild(personText);
                personDiv.appendChild(personParagraph);
            } else {
                personParagraph.removeChild(personParagraph.childNodes[0]);
                personParagraph.removeChild(personText);
            }
            setTimeout(getNewPerson, 1000);
        }
    }
}

function addPerson() {
    let personText = document.getElementById("qoutetext").value;
    let information = "person=" + encodeURIComponent(personText);
    newPersonRequest.open("POST", "ManageRoomServlet", true);
    newPersonRequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    newPersonRequest.send(information);
}