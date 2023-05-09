import Header from './jsx/Header';
import Experiencia from './jsx/Experiencia';
import Cartao from './jsx/Cartao';
import Novidades from './jsx/Novidades';
import Celular from './jsx/Celular';
import Beneficios from './jsx/Beneficios';
import Footer from './jsx/Footer'
import Tempo from './jsx/Tempo';
import Voce from './jsx/Voce';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Experiencia />
      <Cartao />
      <Novidades />
      <Voce />
      <Celular />
      <Beneficios />
      <Tempo />
      <Footer />
    </div>
  );
}

export default App;
