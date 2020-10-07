package domain.db;

import domain.model.Person;
import domain.model.Room;

import java.util.*;

public class PersonRepository implements PersonRepositoryInt {
    private ArrayList<Person> persons = new ArrayList<>();

    public PersonRepository() {
        // Added persons
        super();
        Person test  = new Person("test", "test", Room.C001,new Date(), "test", "test");
        Person reda  = new Person("Reda", "Boussabat", Room.C002,new Date(), "test", "test");
        persons.add(test);
        persons.add(reda);
    }

    @Override
    public void addPerson(Person person) {
        if (person.getRoom().getAmount() < person.getRoom().getMax()){
            persons.add(new Person(person.getFirstName(), person.getLastName() ,person.getRoom(), person.getDate(), person.getEmail(), person.getGsm()));
            int hoeveelheid = person.getRoom().getAmount();
            hoeveelheid++;
            person.getRoom().setAmount(hoeveelheid);
        } else {
            throw new IllegalArgumentException("Lokaaal is vol");
        }
    }

    @Override
    public List<Person> getLastTwentyPersons() {
        if (this.persons.size() > 20){
            List<Person> twenty = new ArrayList<>();
            for (int i = (this.persons.size() - 20) ; i < this.persons.size(); i++){
                twenty.add(this.persons.get(i));
            }
            return twenty;
        }
        else {
            return persons;
        }
    }

    @Override
    public List<Person> searchPerson(Date date, Room room) {
        ArrayList found = new ArrayList();
        for (Person person : persons){
            if (date == person.getDate() && room == person.getRoom()){
                found.add(person);
            }
        }
        return found;
    }


}
