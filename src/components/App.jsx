
import React ,{Component} from "react";
import ContactForm from "./form/form";
import ContactList from "./contactList/contactList";
import Filter from "./filter/filter";
import GlobalStyle from "./globalStyled";

let filtredComponents = null;

class App extends Component {

  
  state = {
    contacts: [],
    filter: ''
  }
  
  deleteClick = (name) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }
    ));
  }

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts', this.state.contacts);
    const contactsParse = JSON.parse(localContacts);
    if (contactsParse) {
      this.setState(
       { contacts: contactsParse}
      )
    }
  }


  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts' , JSON.stringify(this.state.contacts))
    }
  }
  
  formSubmitHandler = (data) => {
    const filterdContacts = this.state.contacts.map(contact => contact.name);
    const someName = filterdContacts.some(name => name === data.name)
    if (someName) {
      return alert(`${data.name}, is already in contacts`);
    } 
    else {
          this.setState(prevState => {
        return {
        contacts: [...prevState.contacts, {...data},],
      }
}
      )
}
  }

  chengeFilter = e => {
     this.setState({ filter: e.currentTarget.value })
  }
  
  render() {
   
  
    const {filter } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();
    filtredComponents = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.chengeFilter} />
        {filtredComponents.length > 0 &&  <ContactList items={filtredComponents} onDeleteClick={this.deleteClick} />}
      </div>
    );
  }
};

export default App;