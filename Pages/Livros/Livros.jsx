import { useState } from "react";
import "./Livros.css";

import BookCard from "../../components/BookCard/BookCard";

function Livros({
  livros,
  setLivros,
}) {
  const [nome, setNome] =
    useState("");

  const [autor, setAutor] =
    useState("");

  const [categoria, setCategoria] =
    useState("");

  const [ano, setAno] =
    useState("");

  const [pesquisa, setPesquisa] =
    useState("");

  function cadastrarLivro() {
    if (
      nome === "" ||
      autor === "" ||
      categoria === "" ||
      ano === ""
    ) {
      alert(
        "Preencha todos os campos"
      );
      return;
    }

    const novoLivro = {
      id: Date.now(),
      nome,
      autor,
      categoria,
      ano,
      status: "Disponível",
    };

    setLivros([
      ...livros,
      novoLivro,
    ]);

    setNome("");
    setAutor("");
    setCategoria("");
    setAno("");
  }

  function removerLivro(id) {
    const novaLista =
      livros.filter(
        (livro) =>
          livro.id !== id
      );

    setLivros(novaLista);
  }

  function emprestarLivro(id) {
    const atualizar =
      livros.map((livro) => {
        if (livro.id === id) {
          return {
            ...livro,
            status:
              "Emprestado",
          };
        }

        return livro;
      });

    setLivros(atualizar);
  }

  const livrosFiltrados =
    livros.filter((livro) =>
      livro.nome
        .toLowerCase()
         .includes(
          pesquisa.toLowerCase()
        )
    );

  return (
    <div className="livros-container">
      <h1>
        Gerenciamento de Livros
      </h1>

      <div className="formulario">
        <input
          type="text"
          placeholder="Nome do livro"
          value={nome}
          onChange={(e) =>
            setNome(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Autor"
          value={autor}
          onChange={(e) =>
            setAutor(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Categoria"
          value={categoria}
          onChange={(e) =>
            setCategoria(
              e.target.value
            )
          }
        />

        <input
          type="number"
          placeholder="Ano"
          value={ano}
          onChange={(e) =>
            setAno(e.target.value)
          }
        />

        <button
          onClick={
            cadastrarLivro
          }
        >
          Cadastrar Livro
        </button>
      </div>

      <input
        className="pesquisa"
        type="text"
        placeholder="Pesquisar livro..."
        value={pesquisa}
        onChange={(e) =>
          setPesquisa(
            e.target.value
          )
        }
      />

      <div className="lista-livros">
        {livrosFiltrados.map(
          (livro) => (
            <BookCard
              key={livro.id}
              livro={livro}
              removerLivro={
                removerLivro
              }
              emprestarLivro={
                emprestarLivro
              }
            />
          )
        )}
      </div>
    </div>
  );
}

export default Livros;