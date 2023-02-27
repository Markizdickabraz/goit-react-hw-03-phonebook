import React, { Component } from "react";
import { FormBtn, FormStyled, InputStyled, LabelStyled } from "./FormStyled";

class ContactForm extends Component {
    state ={
        name: '',
        number: ''
    }

  handleChacge = e => {
      const {name, value} = e.currentTarget;
      this.setState({ [name]: value })
  }

 

  formSubmit = e => {

      e.preventDefault();
      this.props.onSubmit(this.state);
      this.reset();
    }
  
 
  
    reset = () => {
    this.setState({name: '', number: ''})
}

render(){
return (
  <FormStyled onSubmit={this.formSubmit}>
          <LabelStyled>Name
             <InputStyled
              type="text"
              name="name"
              value={this.state.name}
              onChange = {this.handleChacge}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
          </LabelStyled>

          <LabelStyled>number
            <InputStyled
                type="tel"
                name="number"
                value={this.state.number}
                onChange = {this.handleChacge}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
/>
          </LabelStyled>
    <FormBtn disabled={!this.state.name || !this.state.number} type='submit'>Add contact</FormBtn>
        </FormStyled>
)
    
}
}

export default ContactForm;