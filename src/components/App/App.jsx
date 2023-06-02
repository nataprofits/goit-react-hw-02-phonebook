import { Component } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { Title, Container } from "./App.styled";
 

export class App extends Component {
    state = {
      contacts: [],
      filter: ""
    }
    
    formSubmitHandle = ({ name, number }) => {
      const { contacts } = this.state;
      const isDuplicateName = contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      );
      if (isDuplicateName) {
        alert(`${name} is already in contacts`)
      } else {
        const contact = {
          id: nanoid(),
          name: name,
          number: number
        };
        this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts]
        }))
    
      }
    }
    changeFilter = evt => {
      this.setState({ filter: evt.currentTarget.value });
  
    }
    
    getFilteredContacts = () => {
      const { filter, contacts } = this.state;
      const normalizedFilter = filter.toLowerCase();
      if (filter) {
        return contacts.filter((contact) =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
      } else {
        return contacts;
      }
    }
  
    deleteContact = contactId => {
     this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactId)
      }));
    }
    
  render() {
      const { filter } = this.state;
      const visibleContacts = this.getFilteredContacts();
      console.log(visibleContacts);
      return (
       <Container>
         <> <Title>Phonebook</Title>
          <ContactForm onSubmit={this.formSubmitHandle} /></>
          
           <> <Title>Contacts</Title>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList filteredContacts={visibleContacts} onDelete={this.deleteContact} />
          </></Container>
   )
    
    };
  }