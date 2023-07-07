import axios from "axios";

export async function doCreateUser(username: String, password: String) {
  const response = await axios.post("http://localhost:3678/user", {
    email: username,
    secret: password
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response;
}
export async function doCreateEmployee(username: String, password: String) {
  const response = await axios.post("http://localhost:3678/employee", {
    email: username,
    secret: password
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response;
}

export async function doCreateAddress (user_id: Number, rua: String, numero: String, complemento: String, cidade: String, estado: String, cep: String) {
  const response = await axios.post("http://localhost:3678/user",{
    user_id: user_id,
    rua: rua,
    numero: numero,
    complemento: complemento,
    cidade: cidade,
    estado: estado,
    cep:cep,
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response;
}