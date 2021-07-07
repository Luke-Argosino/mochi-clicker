import './App.css';
import Header from './Header';
import Footer from './Footer';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Game className={App.css}></Game>
      <Footer></Footer>
    </div>
  );
}

export default App;
