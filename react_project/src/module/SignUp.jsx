import { useState } from 'react';
import Form from '../Components/form/Form';
import Input from '../Components/input/Input';
import Button from '../Components/button/Button';
import { Link } from 'react-router-dom'
import './style.css'

const SignUp = () => {

  const initialSignUp = {
    name: '',
    password: '',
    repeatPassword: '',
  }

  const [state, setState] = useState(initialSignUp)

  const error = 'You have diferend password';

  const onChangeHandler = ({ target }) => {
    // console.log(target.value)
    setState({
      ...state,
    [target.name]: target.value
    }) 
  }

const setStorage = (e) => {

  if (state.value !== ''){
    localStorage.setItem(state.name, state.password)
  } else {
    console.log('=(')
  }
}

  
return (
  <>
  <div className='FormUp'>
  <Form onChange = {onChangeHandler}>
    <div>
    <Input 
    name = 'name' 
    value = {state.name} 
    type = 'text' 
    placeholder  = 'name'/>
    </div>
    <div>
    <Input 
    name = 'password' 
    value = {state.password} 
    type = 'password' 
    placeholder  = 'password'/>
    </div>
    <div>
    <Input 
    name = 'repeatPassword' 
    value = {state.repeatPassword} 
    type = 'password' 
    placeholder  = 'repeat password'/>
    </div>
    <Link to='/SignIn'><Button onClick = { setStorage } text = 'Submit'/></Link>
  </Form>
  </div>

  <div> <Link to='/SignIn'><a>You have a registered account?</a></Link></div>

  {state.password !== state.repeatPassword ? <div>{error}</div> : null}
  </>
  ) 
}
export default SignUp