window.onload = updateTwenty;

let registerButton = document.getElementById('registerButton');
registerButton.onclick = addPerson;


let updateTwentyRequest = new XMLHttpRequest();

let newPersonRequest = new XMLHttpRequest();

function updateTwenty(){
    updateTwentyRequest.open("GET", "Controller", true);
    updateTwentyRequest.onreadystatechange = showTwenty;
    updateTwentyRequest.send();
}

function showTwenty(){
    if(updateTwentyRequest.readyState == 4){
        if (updateTwentyRequest.status == 200) {
            let persons = JSON.parse(updateTwentyRequest.responseText);
            let personsTable = document.getElementById("twenty");
            personsTable.innerHTML = "";
            for (let i = 0; i < persons.length; i++){
                let personTr = personsTable.childNodes[i];

                if (personTr == null){
                    personTr = document.createElement('tr');
                    personTr = fillPersonTr(personTr, i, persons);
                    personsTable.appendChild(personTr);
                } else {
                    personTr.removeChild(personTr.childNodes[i]);
                    personTr = fillPersonTr(personTr, i, persons);
                }
            }
        }
    }
}

function fillPersonTr(personTr, i, persons){
    let firstName = document.createTextNode(persons[i].firstName);
    let lastName = document.createTextNode(persons[i].lastName);
    let date = document.createTextNode(persons[i].date);
    let room = document.createTextNode(persons[i].room);
    let email = document.createTextNode(persons[i].email);
    let gsm = document.createTextNode(persons[i].gsm);


    let firstNameTd = personTr.childNodes[0];
    let lastNameTd = personTr.childNodes[1];
    let dateTd = personTr.childNodes[2];
    let roomTd = personTr.childNodes[3];
    let emailTd = personTr.childNodes[4];
    let gsmTd = personTr.childNodes[5];


    firstNameTd = document.createElement('td');
    firstNameTd.appendChild(firstName);
    personTr.appendChild(firstNameTd);

    lastNameTd = document.createElement('td');
    lastNameTd.appendChild(lastName);
    personTr.appendChild(lastNameTd);

    dateTd = document.createElement('td');
    dateTd.appendChild(date);
    personTr.appendChild(dateTd);

    roomTd = document.createElement('td');
    roomTd.appendChild(room);
    personTr.appendChild(roomTd);

    emailTd = document.createElement('td');
    emailTd.appendChild(email);
    personTr.appendChild(emailTd);

    gsmTd = document.createElement('td');
    gsmTd.appendChild(gsm);
    personTr.appendChild(gsmTd);

    return personTr;
}

function addPerson(){
    let firstNameText = document.getElementById("firstName").value;
    let lastNameText = document.getElementById("lastName").value;
    let dateText = document.getElementById("date").value;
    let roomText = document.getElementById("room").value;
    let emailText = document.getElementById("email").value;
    let gsmText = document.getElementById("gsm").value;

    // Parameter moet & voor hebben staan

    firstName = "firstName=" + encodeURIComponent(firstNameText);
    lastName = "lastName=" + encodeURIComponent(lastNameText);
    date = "date=" + encodeURIComponent(dateText);
    room = "room=" + encodeURIComponent(roomText);
    email = "email=" + encodeURIComponent(emailText);
    gsm = "gsm=" + encodeURIComponent(gsmText);




    let information= firstName + "&" + lastName + "&" + date + "&" + room + "&" + email + "&" + gsm;
    newPersonRequest.open("POST", "Controller?" +information, true);
    newPersonRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    newPersonRequest.send(information);
    updateTwenty();
}
