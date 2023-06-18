import axios from 'axios';

export async function getUser() {
  try{
    const response = await axios.request({
      method: 'GET',
      url: 'http://localhost:5000/user',
      headers: {
        'Content-Type': 'application/json'
      }
      });
    return response;
  }
  catch(err){
    console.log(err);
  }
}
