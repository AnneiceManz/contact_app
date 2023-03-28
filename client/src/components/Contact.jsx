import React from "react";
import { Card, Button } from "semantic-ui-react";
import * as ioicons from "react-icons/io5";
import moment from 'moment'

const Contact = ({ contact, toUpdate, toDelete }) => {
  const onUpdate = (toUpdateContact) => {
    toUpdate(toUpdateContact);
  };

  const onDelete = (toDeleteContact) => {
    toDelete(toDeleteContact);
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header>{contact.name}</Card.Header>
        <Card.Meta>{moment(contact.birthday).format('MMMM Do')}</Card.Meta>
        <Card.Description>
            <strong>Phone:</strong> {contact.phone}
        </Card.Description>
        <Card.Description>
            <strong>Email:</strong> {contact.email}
        </Card.Description>
        <Card.Description>
            <strong>Address:</strong> {contact.address}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          color="red"
          onClick={() => {
            onDelete(contact);
          }}
          style={{ padding: "0.6em", marginRight: "0.9em" }}
        >
          <ioicons.IoTrash />
        </Button>
        <Button
          color="teal"
          onClick={() => {
            onUpdate(contact);
          }}
          style={{ padding: "0.6em" }}
        >
          {" "}
          <ioicons.IoSync />
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Contact;
