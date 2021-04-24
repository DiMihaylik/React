import React from 'react'

const Form = (props) => {

  const spawnItems = () => {
    return props.children.map((item,i) => {
      return (

        <React.Fragment key ={i}>
          {React.cloneElement (item, 
            {onChange: props.onChange })}
        </React.Fragment>
      )
    })
  }
  return (
    <>
    {spawnItems()}
    </>
  )
}

export default Form