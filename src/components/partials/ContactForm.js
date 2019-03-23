import React, {Component} from 'react';
import styled from 'styled-components';

import H3 from '../partials/H3';
import Button from '../partials/Button';


const Form = styled.form`
  box-shadow: 0px 10px 40px 0px ${({theme}) => theme.colors.shadow};
  max-width: 600px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: .75rem;
  font-weight: 200;
  font-family: 'Montserrat';
  margin: .5rem 0 1rem;
  width: 100%;
  border: 1px solid ${({theme}) => theme.colors.blue};
  font-size: .9rem;
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  &.error {
    border: 1px solid ${({theme}) => theme.colors.red};
  }
`;

const Textarea = styled.textarea`
  padding: .75rem;
  font-weight: 200;
  font-family: 'Montserrat';
  margin: .5rem 0 1rem;
  width: 100%;
  border: 1px solid ${({theme}) => theme.colors.blue};
  font-size: .9rem;
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  &.error {
    border: 1px solid ${({theme}) => theme.colors.red};
  }
`;

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    title: '',
    message: '',
    errorMessage : ''
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    if (!value) {
      target.classList.add('error');

    } else {
      target.classList.remove('error');
    }
    
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.name ||
      !this.state.email ||
      !this.state.title ||
      !this.state.message ) {
      this.setState({
        errorMessage: 'Wypełnij wszystkie pola'
      });
    } else {
      this.setState({
        errorMessage: ''
      });

      alert(`Welcome ${this.state.name} ${this.state.name}!`);
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <H3>Imię i Nazwisko *</H3>
        <Input
          type='text'
          name='name'
          placeholder='Twoje Imię i Nazwisko'
          value={this.state.name}
          onChange={this.handleInputChange}
          onBlur={this.handleInputChange}
        ></Input>
        <H3>Adres E-mail *</H3>
        <Input
          type='email'
          name='email'
          placeholder='Twój adres e-mail'
          value={this.state.email}
          onChange={this.handleInputChange}
          onBlur={this.handleInputChange}
        ></Input>
        <H3>Tytuł Wiadomości *</H3>
        <Input
          type='text'
          name='title'
          placeholder='Podaj tytuł'
          value={this.state.title}
          onChange={this.handleInputChange}
          onBlur={this.handleInputChange}
        ></Input>
        <H3>Wiadomość *</H3>
        <Textarea
          type='text'
          name='message'
          placeholder='Podaj tytuł'
          rows='5'
          value={this.state.message}
          onChange={this.handleInputChange}
          onBlur={this.handleInputChange}
        ></Textarea>
        <H3 isRed>{this.state.errorMessage}</H3>
        <Button type='submit'>Wyślij</Button>
      </Form>
    )
  }
}

export default ContactForm;