import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import SignIn from './module/SignIn';
import SignUp from './module/SignUp';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SignUp}></Route>
          <Route path='/SignIn' component={SignIn}></Route>
        </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
