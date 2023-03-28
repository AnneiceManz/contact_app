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
    <Card centered>
      <Card.Content>
        <Card.Header className="contact_header">{contact.name}</Card.Header>
        <Card.Meta className="contact_header">{moment(contact.birthday).format('MMMM Do')}</Card.Meta>
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
        <Button.Group size="mini" floated="right">

        <Button
          color="red"
          onClick={() => {
            onDelete(contact);
          }}
        >
          <ioicons.IoTrash />
        </Button>
        <Button.Or />
        <Button
          color="teal"
          onClick={() => {
            onUpdate(contact);
          }}
        >
          <ioicons.IoSync />
        </Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default Contact;
