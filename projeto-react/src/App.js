import './App.css';
import Componente01 from './Components/Componente01';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 className='titulo'>BlusBeauty</h1>
          <p className ="colecao">Nova Coleção</p>
          <button className="botao">Compre aqui</button>
      </header>
      <main className='App-main'>
        <h2>Produtos</h2>
        <Componente01/>
      </main>
    </div>
  );
}

export default App;
