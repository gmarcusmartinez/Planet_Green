import axios from 'axios';
import { SIGNIN, GET_CURRENT_USER, SIGNOUT } from './types';
import history from '../../core/history';

export const getCurrentUser = () => async (dispatch) => {
  const res = await axios.get('/api/auth/me');
  dispatch({
    type: GET_CURRENT_USER,
    payload: res.data,
  });
};

const config = { headers: { 'Content-Type': 'application/json' } };

export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/auth/signin', formData, config);
    dispatch({ type: SIGNIN, payload: data });
    history.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const register = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/auth/signup', formData, config);
    dispatch({ type: SIGNIN, payload: data });
    history.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const signout = () => async (dispatch) => {
  const { data } = await axios.post('/api/auth/signout');
  dispatch({ type: SIGNOUT, payload: data });
  history.push('/');
};
