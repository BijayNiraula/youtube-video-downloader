import React from 'react'

function ErrorMessage(props) {
  return (
    <div className="preview mt-5  " >
    <div className=" py-5  d-flex justify-content-center  " style={{backgroundColor:"#E7E7E7"}}>
    <h4 className='text-danger'>

  {props.text}

    </h4>
   
    
    
    </div></div>
  )
}

export default ErrorMessage