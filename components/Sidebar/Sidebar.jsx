import "./Sidebar.css";

function Sidebar({ setPaginaAtual }) {
  return (
    <aside className="sidebar">
      <h2>Menu</h2>

      <button
        onClick={() => setPaginaAtual("home")}
      >
        Home
      </button>

      <button
        onClick={() => setPaginaAtual("livros")}
      >
        Livros
      </button>

      <button
        onClick={() =>
          setPaginaAtual("usuarios")
        }
      >
        Usuários
      </button>

      <button
        onClick={() =>
          setPaginaAtual("emprestimos")
        }
      >
        Empréstimos
      </button>
    </aside>
  );
}

export default Sidebar;