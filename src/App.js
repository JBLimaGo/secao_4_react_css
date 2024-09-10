import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React Com CSS</h1>
      {/* CSS Componente - CSS utilizando com componentes */}
      <MyComponent />
      <p>Este paragrafo e do App.js</p>

      {/* Inline CSS - Não se usa muito pois se tiver que criar tera que dar manutenção em cada linha onde estiver. 
          O correto e usar Componente pois posso padronizar para todos lugares onde estiver usando*/}

      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este Elemento foi estilazado de forma inline
      </p>
    </div>
  );
}

export default App;
