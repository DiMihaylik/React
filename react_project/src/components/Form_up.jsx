import React from 'react'
import { Link } from 'react-router-dom'


class FormUp extends React.Component{
    

render () {

return (
    <div>
      <form><p>Sign Up</p></form>
      <div>
        <Link to='/'><button>To Sign In</button></Link>
      </div>
    </div>
    )
  } 
}
export default FormUp