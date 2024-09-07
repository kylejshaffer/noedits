import Header from './components/header/Header';
import NavBar from './components/navbar/Navbar';
import Body from './components/Body';
import './App.css';

function App() {
  return (
    <div className='App-header'>
      <Header headerstyle="App-header"/>
      <NavBar />
      <Body />
    </div>
  );
}

export default App;
