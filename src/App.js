import Header from './components/header/Header';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='App-header'>
      <Header headerstyle="App-header"/>
      <Body/>
    </div>
  );
}

export default App;
