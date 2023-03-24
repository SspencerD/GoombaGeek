import axios from 'axios';

export async function Get(api: string) {
  //console.log(api);
  return await axios.get(api);
}

export async function Post(api: string, data: any) {
  //console.log(api);

  return await axios.post(api, data);
}

export async function Put(api: string, data: any) {
  //console.log(api);

  return await axios.put(api, data);
}

export async function Delete(api: string) {
  //console.log(api);

  return await axios.delete(api);
}

export async function Method(api: string, method: string, data?: any) {
  method = method.toLowerCase();

  if (method === 'get') {
    return await axios.get(api);
  }
  if (method === 'post') {
    return await axios.post(api, data);
  }
  if (method === 'put') {
    return await axios.put(api, data);
  }
  if (method === 'delete') {
    return await axios.delete(api);
  }
}
