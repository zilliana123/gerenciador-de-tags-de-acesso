import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Gerenciador de Tags</p>
      </header>

      <div className="Container-sections">
        <section>
          <p>Gerenciador de Tags</p>
          <Form />
        </section>
        <section>
          <p>Gerenciador de Tags</p>
        </section>
      </div>
    </div>
  );
}

export default App;
