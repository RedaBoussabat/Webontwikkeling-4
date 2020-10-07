window.onclick = getSearched;

function getSearched(){
    fetch("Controller?command=search")
        .then(response => response.json())
        .then(data => searchPersons(data));
}

function searchPersons(persons) {
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