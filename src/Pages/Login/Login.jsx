import { useState } from "react";
import "./Login.css";

function Login({ setLogado }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    if (email === "" || senha === "") {
      alert("Preencha os campos");
      return;
    }

    setLogado(true);
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login Biblioteca</h1>

        <input
          type="email"
          placeholder="Digite email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Digite senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <div>
          <button onClick={entrar}>Entrar</button>
        </div>
      </div>
    </div>
  );
}

export default Login;