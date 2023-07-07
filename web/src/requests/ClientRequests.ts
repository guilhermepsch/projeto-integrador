import axios from "axios";

export type Client = {
  id : number;
  age : number;
  user_id: number;
  created_at : Date;
  updated_at : Date;
};

export async function getClient(id: number) {
  try {
    const response = await axios.request({
      method: "GET",
      url: "http://localhost:5000/client/" + id,
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