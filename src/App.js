import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 15;
  const name = "Jeff";
  const redTitle = true;

  //const redTitle = false;

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

      {/* CSS Inline Dinânmico - Pode ser usado o if Ternario com isso pode ser implementado varios estilos no CSS */}
      <h2 style={n < 10 ? { color: "black" } : { color: "pink" }}>
        CSS Dinâmico
      </h2>

      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS Dinâmico
      </h2>

      <h2
        style={
          name === "Jeff" ? { color: "green", backgroundColor: "#000" } : null
        }
      >
        Teste Nome
      </h2>
      {/* Classe Dinâmica - Efeito de clase dinaminca com if ternario */}

      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>

      {/* CSS Modules - Modularizando o CSS  */}
      <Title />
    </div>
  );
}

export default App;
