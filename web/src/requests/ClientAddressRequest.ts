import axios from 'axios';

export type ClientAddress = {
  clad_id: number;
  clad_street: string;
  clad_number: string;
  clad_other: string;
  clad_cep: string;
  clad_city: string;
  clad_state: string;
  client_id: number;
  created_at: Date;
  updated_at: Date;
};

export async function getClientAddressByClientId(client_id: number): Promise<ClientAddress | null> {
  try {
    const response = await axios.request({
      method: 'GET',
      url: 'http://localhost:5000/clientAddress/client' + client_id,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const clientAddress: ClientAddress = response.data;
    return clientAddress;
  } catch (err) {
    console.log(err);
    return null;
  }
}