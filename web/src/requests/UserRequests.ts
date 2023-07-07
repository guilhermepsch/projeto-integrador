import axios from "axios";

export type User = {
  id: number;
	email: string;
	secret: string;
	createdAt: Date;
	updatedAt: Date;
};

export async function getUsers() {
  try {
    const response = await axios.request({
      method: "GET",
      url: "http://localhost:5000/user",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
}
  export async function getUser(id: number) {
    try {
      const response = await axios.request({
        method: "GET",
        url: "http://localhost:5000/user" + id,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const user: User = response.data;
      return user;
    } catch (err) {
      console.log(err);
    }
}
