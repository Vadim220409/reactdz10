import React from 'react';

const ContactItem = ({ contact, onDeleteContact }) => (
  <li>
    {contact.name}: {contact.number}
    <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
  </li>
);

export default ContactItem;