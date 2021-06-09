import React, {useState } from 'react';
import { Link } from 'react-router-dom'
import Button from '../Components/button/Button';
import Form from '../Components/form/Form';
import Input from '../Components/input/Input';

const SignIn = ({history,match}) => {
console.log(history)
console.log(match)

  const initialSignIn = {
    name: '',
    password: '',
  }

const [stateIn, setStateIn] = useState(initialSignIn)

const onChangeHandlerIn = ({target}) => {
  // console.log(target.value)
  setStateIn({
    ...stateIn,
  [target.name]: target.value
  }) 
}



const getStorage = (e) => {
  localStorage.getItem(stateIn.name) === stateIn.password ? history.push() : console.log(2)
}

  return (
  <div className='FormIn'>
    <Form onChange={ onChangeHandlerIn }>
  <div>
  <Input 
  name='name' 
  value={stateIn.name} 
  placeholder='name' 
  type='text'>
  </Input>
  </div>
  <div>
  <Input 
  name='password' 
  value={stateIn.password} 
  placeholder='password' 
  type='password'>
  </Input>
  </div>
  <Link to='FilmsMain'><Button  onClick = { getStorage }text = 'Log In'></Button></Link>
 </Form>
  </div>
  )
}
export default SignIn