import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
export default function SignUp() {
  const schema = Yup.object().shape({
    name: Yup.string('Insira um email válido').required('O nom é obrigatório'),
    email: Yup.string().email('Insira um email válido').required('O email é obrigatório'),
    password: Yup.string(6, 'a senha deve ter no mínimo 6 carateres').min().required('A senha é obrigatório'),
  })

  function handleSubmit(data) {

  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Nome Completo" />
        <Input type="email" name="email" placeholder="Seu email" />
        <Input type="password" name="password" placeholder="Sua senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
