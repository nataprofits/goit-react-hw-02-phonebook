import PropTypes from 'prop-types';
import { ListItem } from './Contacts.styled';
import { ButtonAddDeleteContact } from 'components/ContactForm/ContactForm.styled';

export const Contacts = ({ contact, onDelete }) => {
    return (
        <>
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonAddDeleteContact onClick={() => onDelete(contact.id)}>Delete</ButtonAddDeleteContact>
        </ListItem>
       </>
        
    )
}
Contacts.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired,
    onDelete:PropTypes.func.isRequired
};