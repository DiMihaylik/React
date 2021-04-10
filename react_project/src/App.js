import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FormIn from './components/Form_in'
import FormUp from './components/Form_up'


function App() {
  return (
   <div>
   <BrowserRouter>
   <Switch>
   <Route exact path="/" component={FormIn}></Route>
   <Route path="/formup" component={FormUp}></Route>
   </Switch>
   </BrowserRouter>
   </div>
  );
}

export default App;
