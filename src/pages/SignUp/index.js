import React from 'react';
import { useDispatch } from 'react-redux'
import { signInRequest } from '../../store/modules/auth/actions'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string('Insira um email válido').required('O nom é obrigatório'),
  email: Yup.string().email('Insira um email válido').required('O email é obrigatório'),
  password: Yup.string(6, 'a senha deve ter no mínimo 6 carateres').min().required('A senha é obrigatório'),
})

export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password }) {
    dispatch(signInRequest(name, email, password))
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
