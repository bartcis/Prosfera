import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';

import H3 from './h-three';
import Button from './button';
import spinner from '../../images/prosfera_logo_favi.svg';

const Form = styled.form`
  box-shadow: 0px 10px 40px 0px ${({theme}) => theme.colors.shadow};
  max-width: 600px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
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

const Opacity = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, .9);
  top: 0;
  left: 0;
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  p {
    width: 100%;
    line-height: 1.5;
    font-size: 1.25rem;
    font-family: 'Montserrat';
  }
`;

const rotate = keyframes`
  0% { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
`

const Spinner = styled.div`
  background-image: url(${spinner});
  background-repeat: no-repeat;
  width: 80px;
  height: 80px;
  animation: ${rotate} 2s infinite;
`;

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      title: '',
      message: '',
      errorMessage : '',
      loader: false,
      success: false,
      failed: false,
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.resetState = this.resetState.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();

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
      this.sendForm();
    }
  }

  async sendForm () {
    this.setState(prevState => ({
      loader: !prevState.loader,
    }));

    const body = JSON.stringify({
      name: this.state.name,
      email: this.state.email,
      title: this.state.title,
      message: this.state.message
    });

    const request = await fetch('http://localhost:4000/form', {
      method: 'post',
      body,
      headers: {
        'content-type': 'application/json',
      }
    })
    .catch(error => console.log(Error(error)));

    const response = await request.json();

    if (response.status === '200') {
      this.setState(prevState => ({
        loader: !prevState.loader,
        success: !prevState.success,
      }));
    } else {
      this.setState(prevState => ({
        loader: !prevState.loader,
        failed: !prevState.failed,
      }));
    }
  }

  resetForm () {
    this.setState({
      name: '',
      email: '',
      title: '',
      message: '',
      errorMessage : '',
      loader: false,
      success: false,
      failed: false,
    });
  }

  resetState () {
    this.setState({
      errorMessage : '',
      loader: false,
      success: false,
      failed: false,
    });
  }

  render() {

    const spinner = (
      <Opacity>
        <Spinner></Spinner>
      </Opacity>
    );

    const success = (
      <Opacity>
        <div>
          <p>Dziękujemy! <br/>
            Twoja wiadomość została wysłana. <br/>
            Odezwiemy się do Ciebie jak najszybciej.
          </p>
          <Button onClick={this.resetForm}>Ok</Button>
        </div>
      </Opacity>
    );

    const failure = (
      <Opacity>
        <div>
          <p>Przepraszamy... <br/>
            Coś poszło nie tak <br/>
            Spróbuj proszę za parę chwil.
          </p>
          <Button onClick={this.resetState}>Ok</Button>
        </div>
      </Opacity>
    );

    return (
      <Form onSubmit={this.handleSubmit}>
        {this.state.loader ? spinner : ''}
        {this.state.success ? success : ''}
        {this.state.failed ? failure : ''}
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