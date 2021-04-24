import React from 'react' 

const Input = (props) => {
  const { type, name, value, onChange, placeholder} = props;
  const error = 'this field shouldn`t be empty'

  if(value === ''){
    return (
    <>
    <input 
    type = {type} 
    name = {name}
    placeholder={placeholder} 
    value = {value} 
    onChange = {onChange}/>
    <div style={{color:'red'}}>{error}</div>
    </>
    )
  }
  else {
  return (
    <input type = {type} 
    name = {name}
    placeholder={placeholder} 
    value = {value} 
    onChange = {onChange}/>
  )}
}

export default Input