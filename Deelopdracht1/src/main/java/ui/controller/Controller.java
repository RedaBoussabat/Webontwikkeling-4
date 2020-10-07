package ui.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import domain.db.PersonRepository;
import domain.db.PersonRepositoryInt;
import domain.model.Person;
import domain.model.Room;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@WebServlet("/Controller")
public class Controller extends HttpServlet {

    private static final long getSerialVersionUID = 1L;
    private final PersonRepositoryInt personRepository;

    public Controller() {
        super();
        personRepository = new PersonRepository();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Person> twenty = personRepository.getLastTwentyPersons();
        String personJSON = this.toJSON(twenty);
        response.setContentType("application/json");
        response.getWriter().write(personJSON);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        Room room = Room.valueOf(request.getParameter("room"));
        String dateString = request.getParameter("date");
        String email = request.getParameter("email");
        String gsm = request.getParameter("gsm");

        Date date = null;
        try {
            date = new SimpleDateFormat("Y-m-d").parse(dateString);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Person person = new Person(firstName,lastName,room, date, email, gsm);

        personRepository.addPerson(person);
    }

    private String toJSON(List<Person> persons) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(persons);
    }



}
