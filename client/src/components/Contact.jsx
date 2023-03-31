import React from "react";
import { Card, Button, Accordion, Icon } from "semantic-ui-react";
import * as ioicons from "react-icons/io5";
import moment from "moment";

const Contact = ({ contact, toUpdate, toDelete }) => {
  const panels = [
    {
      key: "details",
      title: "Details",
      content: {
        content: (
          <div>
            <strong>Phone: </strong>
            {contact.phone}
            <br />
            <strong>Email: </strong> {contact.email}
            <br />
            <strong>Address: </strong>
            {contact.address} USA
          </div>
        ),
      },
    },
  ];

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
        <Card.Meta className="contact_header">
          {moment(contact.birthday).format("MMMM Do")}
        </Card.Meta>
        <Accordion panels={panels} />
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
