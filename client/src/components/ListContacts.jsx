import React, { useState, useEffect } from "react";
import * as ioicons from "react-icons/io5";
import MyForm from "./Form";
import Contact from "./Contact";
import { Card } from 'semantic-ui-react'

const ListContacts = () => {
  // this is my original state with an array of students
  const [contacts, setContacts] = useState([]);

  //this is the state needed for the UpdateRequest
  const [editingContact, setEditingContact] = useState(null);

  const loadContacts = () => {
    // A function to fetch the list of students that will be load anytime that list change
    fetch("http://localhost:8080/api/contacts")
      .then((response) => response.json())
      .then((contacts) => {
        setContacts(contacts);
      });
  };

  useEffect(() => {
    loadContacts();
  }, [contacts]);

  const onSaveContact = (newContact) => {
    //console.log(newStudent, "From the parent - List of Students");
    setContacts((contacts) => [...contacts, newContact]);
  };

  //A function to control the update in the parent (student component)
  const onUpdateContact = (onSaveContact) => {
    // console.log("Line 29 savedStudent", savedStudent);
    // This function should update the whole list of students -
    loadContacts();
  };

  //A function to handle the Delete funtionality
  const onDelete = (contact) => {
    //console.log(student, "delete method")
    return fetch(`http://localhost:8080/api/contacts/${contact.id}`, {
      method: "DELETE",
    }).then((response) => {
      //console.log(response);
      if (response.ok) {
        loadContacts();
      }
    });
  };

  //A function to handle the Update functionality
  const onUpdate = (onUpdateContact) => {
    //console.log(toUpdateStudent);
    setEditingContact(onUpdateContact);
  };

  return (
    <div className="mybody">
        <div className="formDiv">
      <MyForm
        key={editingContact ? editingContact.id : null}
        onSaveContact={onSaveContact}
        editingContact={editingContact}
        onUpdateContact={onUpdateContact}
      />
        </div>
      <div className="list-contacts">
        <h2>Contacts</h2>
        <Card.Group>
          {contacts.map((contact) => (
                <Contact
                  contact={contact}
                  toDelete={onDelete}
                  toUpdate={onUpdate}
                />
            ))}

        </Card.Group>
      </div>
    </div>
  );
};

export default ListContacts;
