
import { BrowserRouter as Router,Routes ,  Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element= {<Home/>}/>
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
