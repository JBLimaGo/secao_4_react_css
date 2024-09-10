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
    </div>
  );
}

export default App;
