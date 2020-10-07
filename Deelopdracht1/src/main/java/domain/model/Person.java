package domain.model;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Person {
    private String firstName, lastName, gsm, email;
    private Date date;
    private Room room;

    public Person(String firstName, String lastName, Room room, Date date,String email, String gsm) {
        super();
        setFirstName(firstName);
        setLastName(lastName);
        setRoom(room);
        setDate(date);
        setEmail(email);
        setGsm(gsm);
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGsm() {
        return gsm;
    }

    public void setGsm(String gsm) {
        this.gsm = gsm;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }


}
