import Notes from "./Components/Notes";
import './global.css'
import './sidebar.css';
import './app.css'
import './main.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form>
          <div className="input-block">
            <label htmlFor="title">Titulo da Anotação</label>
            <input />
          </div>
          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea></textarea>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <Notes />
          <Notes />
          <Notes />
          <Notes />
        </ul>
      </main>
    </div>
  );
}

export default App;
