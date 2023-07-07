import axios from "axios";

export async function createOrder(
  order_nf: string,
  order_status: number,
  cart_id: number
): Promise<boolean> {
  try {
    const response = await axios.request({
      method: "POST",
      url: "http://localhost:5000/order",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        order_nf,
        order_status,
        cart_id,
      },
    });
    return response.status === 201;
  } catch (err) {
    console.log(err);
    return false;
  }
}