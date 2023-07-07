import axios from 'axios';

export async function doLogin(username : String, password: String) {
    const response = await axios.post('http://localhost:3678/login', {
      email: username,
      secret: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  
}
