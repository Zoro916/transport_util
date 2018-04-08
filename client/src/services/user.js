import post from '../utils/request';

export function login(body) {
  return post('/login', body);
}

