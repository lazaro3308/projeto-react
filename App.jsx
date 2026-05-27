import { useState } from "react";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Livros from "./pages/Livros/Livros";
import Usuarios from "./pages/Usuarios/Usuarios";
import Emprestimos from "./pages/Emprestimos/Emprestimos";

function App() {
  // Página atual
  const [paginaAtual, setPaginaAtual] =
    useState("home");

  // Login persistente
  const [logado, setLogado] =
    useState(() => {
      return (
        localStorage.getItem(
          "usuarioLogado"
        ) === "true"
      );
    });

  // Livros persistentes + exemplos
  const [livros, setLivros] =
    useState(() => {
      const livrosSalvos =
        localStorage.getItem(
          "livros"
        );

      // Se já tiver livros salvos
      if (livrosSalvos) {
        return JSON.parse(
          livrosSalvos
        );
      }

      // Livros de exemplo
      return [
        {
          id: 1,
          nome:
            "Harry Potter e a Pedra Filosofal",
          autor:
            "J.K. Rowling",
          categoria:
            "Fantasia",
          ano: 1997,
          status:
            "Disponível",
        },

        {
          id: 2,
          nome:
            "Percy Jackson e o Ladrão de Raios",
          autor:
            "Rick Riordan",
          categoria:
            "Aventura",
          ano: 2005,
          status:
            "Disponível",
        },

        {
          id: 3,
          nome:
            "Dom Casmurro",
          autor:
            "Machado de Assis",
          categoria:
            "Romance",
          ano: 1899,
          status:
            "Emprestado",
        },

        {
          id: 4,
          nome:
            "O Pequeno Príncipe",
          autor:
            "Antoine de Saint-Exupéry",
          categoria:
            "Fábula",
          ano: 1943,
          status:
            "Disponível",
        },

        {
          id: 5,
          nome:
            "A Revolução dos Bichos",
          autor:
            "George Orwell",
          categoria:
            "Política",
          ano: 1945,
          status:
            "Disponível",
        },
      ];
    });

  function logout() {
    localStorage.removeItem(
      "usuarioLogado"
    );

    setLogado(false);
  }

  function renderizarPagina() {
    switch (paginaAtual) {
      case "livros":
        return (
          <Livros
            livros={livros}
            setLivros={setLivros}
          />
        );

      case "usuarios":
        return <Usuarios />;

      case "emprestimos":
        return (
          <Emprestimos
            livros={livros}
            setLivros={setLivros}
          />
        );

      default:
        return <Home />;
    }
  }

  // Tela login
  if (!logado) {
    return (
      <Login
        setLogado={setLogado}
      />
    );
  }

  return (
    <>
      <Header />

      <div className="container">
        <Sidebar
          setPaginaAtual={
            setPaginaAtual
          }
        />

        <main>
          <button
            onClick={logout}
            style={{
              marginBottom:
                "20px",
              padding: "10px",
            }}
          >
            Logout
          </button>

          {renderizarPagina()}
        </main>
      </div>
    </>
  );
}

export default App;