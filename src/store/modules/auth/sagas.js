import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password
    })
    const { token, user } = response.data;

    ///verifica se o user é prestador de serviço
    if (!user.provider) {
      toast.error('usuario não é prestrador ')
      return;
    }
    yield put(signInSuccess(token, user))
    toast.error('falha na autenticação, verifique seus da dados');
    history.push('/dashboard')
  } catch (err) {
    yield put(signFailure())
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)])
