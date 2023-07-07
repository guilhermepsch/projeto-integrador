import axios from "axios";

export async function doCreateClient (age: String , user_id: number ) {

  const response = await axios.post("http://localhost:3678/client",{
    age: age,
    user_id: user_id,
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response;

}

export async function selectUserId (email: String) {
  const response = await axios.get("http://localhost:3678/user", {
    params: {
      email: email,
    }
  });
  return response.data[0].user_id;
}