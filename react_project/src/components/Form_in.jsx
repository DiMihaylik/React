
import React from 'react'
import { Link } from 'react-router-dom'
import './Form_in.css'

class FormIn extends React.Component {
 

usersTable = () => {

  const arr = [{id: 1, name: 'Vasya', lasName: 'Test1'}, {id: 2, name: 'Vova', lasName: 'Test2'}, {id: 3, name: 'Petya', lasName: 'Test3'}]
  return arr.map(item => {
    return (
      <React.Fragment key = {item.id}>
        <tr> 
        <td>{item.name}</td>
        <td>{item.lasName}</td>
        </tr>
       
      </React.Fragment>
    )
  })
}

render() {

  return (
    <div>

    <form>
      <p>Sign In</p>
      </form>

      <div> 
        <Link to='/formUp'><button>To Sign Up</button></Link>
      </div>

      <div>
        
        <table border = "1" cols = '2' className='table'>
          <tbody>
          <tr>
          <td>Имя</td>
          <td>Фамилия</td>
          </tr>
        {this.usersTable()}
         </tbody>
        </table>
      </div>
    </div>
  )
 }
}
export default FormIn