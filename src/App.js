import './App.css';
import { Content } from './components/contents/Content';
import { Header } from './components/headers/Header';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='container'>
        <div className='container-header'>
          <Header></Header>
        </div>
        <div className='container-content'>
          <Content></Content>
        </div>
      </div>
    </Router>
  );
}

export default App;
