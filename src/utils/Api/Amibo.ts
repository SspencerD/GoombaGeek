import {Get} from '../config';
import {API_URL} from '@env';

export const getAllAmibos = async () => {
  const response = await Get(`${API_URL}/amiibo`);

  const status = response.status;

  if (status !== 200) {
    console.error('ERROR NETWORKING CONNECT API', response);
  }
  return response;
};
