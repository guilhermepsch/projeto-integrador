import axios from "axios";

export async function getQrCodePix(): Promise<string> {
  try {
    const response = await axios.request({
      method: "GET",
      url: "http://localhost:5000/pix",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.pix;
  } catch (err) {
    console.log(err);
    return "";
  }
}