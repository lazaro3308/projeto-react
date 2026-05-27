import "./BookCard.css";

function BookCard({
  livro,
  removerLivro,
  emprestarLivro,
}) {
  return (
    <div className="book-card">
      <h2>{livro.nome}</h2>

      <p>
        <strong>Autor:</strong>{" "}
        {livro.autor}
      </p>

      <p>
        <strong>
          Categoria:
        </strong>{" "}
        {livro.categoria}
      </p>

      <p>
        <strong>Ano:</strong>{" "}
        {livro.ano}
      </p>

      <span
        className={
          livro.status ===
          "Disponível"
            ? "disponivel"
            : "emprestado"
        }
      >
        {livro.status}
      </span>

      {livro.status ===
      "Disponível" ? (
        <button
          onClick={() =>
            emprestarLivro(
              livro.id
            )
          }
        >
          Emprestar
        </button>
      ) : (
        <button disabled>
          Já emprestado
        </button>
      )}

      <button
        onClick={() =>
          removerLivro(
            livro.id
          )
        }
      >
        Remover
      </button>
    </div>
  );
}

export default BookCard;