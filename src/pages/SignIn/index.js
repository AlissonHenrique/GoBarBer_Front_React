import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup';

export default function SignIn() {
  const schema = Yup.object().shape({
    email: Yup.string().email('Insira um email válido').required('O email é obrigatório'),
    password: Yup.string().required('A senha é obrigatório'),
  })

  function handleSubmit(data) {

  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
