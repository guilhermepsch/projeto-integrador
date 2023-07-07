import React, { ChangeEvent, useEffect, useState } from "react";
import { doLogin } from "../../requests/LoginRequest";
import "./Login.css";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    secret: ''
  });
  let [loginSuccess, setLoginSuccess] = useState(false); // Novo estado para controlar o sucesso do login

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Calling doLogin function");
    try {
      const response = await doLogin(loginForm.email, loginForm.secret);
      console.log(response);
      setLoginSuccess(true);
      alert("Bem Vindo a Summer Time Store");
      window.location.href = "/"; // Redirect to home page
    } catch (error: any) {
      alert("Login failed vefiry your email or password");
      console.error(error);
    }
   
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  }

  const handleVoltar = () => {
    window.location.href = "/"; // Redirect to home page

  };
  
  
  return (
    useEffect(() => {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }, []),
   

    <><h1>Bem vindo de volta</h1>
<div className="login-container">
  <div className="login-input">
    <form onSubmit={submitForm}>
      <div className="input-group">
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={loginForm.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input
          type="password"
          name="secret"
          value={loginForm.secret}
          onChange={handleInputChange}
        />
      </div>
      <div className="cadastro"> 
       <a href="/user">Criar cadastro agora</a>
      </div>
      <div className="button-group">
        <button type="submit">Submit</button>
        <button type="reset" onClick={handleVoltar}>Voltar</button>
      </div>
    </form>
  </div>
</div>


</>
  );
};

export default Login;
