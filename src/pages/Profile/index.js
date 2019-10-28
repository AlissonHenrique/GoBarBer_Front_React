import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import { updateProfileRequest } from '../../store/modules/user/actions';
import AvatarInput from './AvatarInput';
import { signOut } from '../../store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  function handleSignOut() {
    dispatch(signOut);
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome" />
        <Input name="email" type="email" placeholder="Seu email" />
        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de nova senha"
        />
        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="submit" onClick={handleSignOut}>
        Sair do Gobarber
      </button>
    </Container>
  );
}
