async function searchPersons(){
    let response = await fetch("/Controller?command=search");
    let persons = await response.json();
    showSearchPerson(persons);
    await searchPersons();
}

searchPersons();

function showSearchPerson(persons){
    let personDiv = document.getElementById("searched");
    personDiv.innerHTML = "";
    for(let i=0; i<persons.length; i++){

    }
    personDiv.innerHTML += "<p>" + person.firstName + " " + person.lastName + "</p>";
}