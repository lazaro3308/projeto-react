import "./Emprestimo.css";

function Emprestimos({
  livros,
  setLivros,
}) {
  const livrosEmprestados =
    livros.filter(
      (livro) =>
        livro.status ===
        "Emprestado"
    );

  function devolverLivro(id) {
    const atualizar =
      livros.map((livro) => {
        if (livro.id === id) {
          return {
            ...livro,
            status:
              "Disponível",
          };
        }

        return livro;
      });

    setLivros(atualizar);
  }

  return (
    <div>
      <h1>Empréstimos</h1>

      {livrosEmprestados.length ===
      0 ? (
        <p>
          Nenhum livro
          emprestado.
        </p>
      ) : (
        livrosEmprestados.map(
          (livro) => (
            <div
              key={livro.id}
              style={{
                background:
                  "white",
                padding:
                  "20px",
                marginBottom:
                  "15px",
                borderRadius:
                  "10px",
              }}
            >
              <h2>
                {livro.nome}
              </h2>

              <p>
                Status:{" "}
                {livro.status}
              </p>

              <button
                onClick={() =>
                  devolverLivro(
                    livro.id
                  )
                }
              >
                Devolver
              </button>
            </div>
          )
        )
      )}
    </div>
  );
}

export default Emprestimos;