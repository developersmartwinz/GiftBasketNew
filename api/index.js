import axios from 'axios';
import { apiRoot } from '../config';

const instance = axios.create({
    baseURL: apiRoot,
    timeout: 3000,
    headers:{
        'Authorization': 'Bearer KiQSsELLtoGzn10AUvDqK_ML2nH171vAb5wCiYwj',
        'Content-Type': 'multipart/form-data' 
    },
    validateStatus: function (status) {
      return (status >= 200 && status < 300) || (status >= 400 && status < 500);
    }
});

instance.login = async (username, password) => {
	
    let res = await instance.post('login', { username, password });
    if (!res) {
      throw new Error('No response');
    }
    if (res.status === 200) {
      return res.data;
    }
    return res.status;
};

instance.getstores = async (userId,page) => {
  
	
  let res = await instance.post('getretailstores', { userId,page });
  if (!res) {
    throw new Error('No response');
  }
  console.log(res);
  if (res.status === 200) {
    return res.data;
  }
  return res.status;
};

instance.registeruser = async (userdata) => {
  
	
  let res = await instance.post('registeruser',userdata);
  if (!res) {
    throw new Error('No response');
  }
  console.log(res);
  if (res.status === 200) {
    return res.data;
  }
  return res.status;
};

instance.addNewStore = async (formdata) => {
  console.log(formdata);
	
  let res = await instance.post('addnewstore',formdata);
  if (!res) {
    throw new Error('No response');
  }
  console.log(res);
  if (res.status === 200) {
    return res.data;
  }
  return res.status;
};

instance.updateProfile = async (formdata) => {
  console.log(formdata);
	
  let res = await instance.post('updateprofile',formdata);
  if (!res) {
    throw new Error('No response');
  }
  console.log(res);
  if (res.status === 200) {
    return res.data;
  }
  return res.status;
};

instance.getusers = async (userId,page,search) => {
  
	
  let res = await instance.post('getusers', { userId,page,search });
  if (!res) {
    throw new Error('No response');
  }
  console.log(res);
  if (res.status === 200) {
    return res.data;
  }
  return res.status;
};
export default instance;