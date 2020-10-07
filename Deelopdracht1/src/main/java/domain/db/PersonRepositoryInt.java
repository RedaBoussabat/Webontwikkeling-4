package domain.db;

import domain.model.Person;
import domain.model.Room;

import java.util.Date;
import java.util.List;

public interface PersonRepositoryInt {

    public abstract void addPerson(Person person);

    public abstract List<Person> getLastTwentyPersons();

    public abstract List<Person> searchPerson(Date date, Room room);

}
