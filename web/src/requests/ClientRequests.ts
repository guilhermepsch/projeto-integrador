import axios from "axios";

export type Client = {
  id : number;
  age : number;
  user_id: number;
  created_at : Date;
  updated_at : Date;
};

export async function getClient(client_id: number) {
  try {
    const response = await axios.request({
      method: "GET",
      url: "http://localhost:5000/client" + client_id,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const client: Client = response.data;
    return client;
  } catch (err) {
    console.log(err);
    return null;
  }
}