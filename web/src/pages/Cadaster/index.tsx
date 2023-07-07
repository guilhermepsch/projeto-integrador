import React, { ChangeEvent, useEffect, useState } from "react";
import { doCreateAddress, doCreateUser } from "../../requests/CreateUserRequest";
import "./Cadaster.css";
import { doCreateClient, selectUserId } from "../../requests/CreateClient";

const Cadaster = () => {
  const [cadasterForm, setCadasterForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    age: ''
  });

  const submitForm = async (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Verificar se a senha e a confirmação de senha são iguais
    if (cadasterForm.password !== cadasterForm.confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }
    console.log("Calling doCreateUser function");
    try {
      const response = await doCreateUser(cadasterForm.email, cadasterForm.password);
      console.log(response);
      const userId = response.data.id;
      alert("Cadastro realizado com sucesso");
      window.location.href = "/"; // Redirect to home page
    } catch (error) {
      alert("Cadastro falhou, tente novamente");
      console.error(error);
    }
  };

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setCadasterForm({ ...cadasterForm, [name]: value });
  };

  const handleVoltar = () => {
    window.location.href = "/"; // Redirect to home page
  };

  return (
    <>
      <h1>Bem vindo a nossa familia</h1>
      <div className="cadaster-container">
        <div className="cadaster-input">
          <form onSubmit={submitForm}>
          <div className="user-fields">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={cadasterForm.email}
              onChange={handleInputChange}
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={cadasterForm.password}
              onChange={handleInputChange}
            />
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={cadasterForm.confirmPassword}
              onChange={handleInputChange}
            />
            </div>
            <div className="button-group">
            <button type="button" onClick={handleVoltar}>Voltar</button>
              <button type="submit" onClick={submitForm}>Cadastrar</button>
            </div>
          
          </form>
        </div>

      </div>
      <div className="img-container">
      </div>
    </>
  );
};

export default Cadaster;
