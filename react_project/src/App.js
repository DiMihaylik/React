import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SignIn from './module/SignIn';
import SignUp from './module/SignUp';
import FilmsMain from './module/FilmsMain';


function App() {
  return (
  
    <div className="App">
      <div>
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SignUp}></Route>
          <Route path='/SignIn' component={SignIn}></Route>
          <Route path='FilmsMain' component={FilmsMain}></Route>
        </Switch>
        </BrowserRouter>
      </div>
    </div> 
  );
}

export default App;
