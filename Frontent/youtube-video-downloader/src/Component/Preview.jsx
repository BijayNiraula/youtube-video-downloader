import React from 'react'
import { useRef } from 'react'

function Preview(props) {
console.log("preview rerender")
 
  return (
    <div className="preview mt-5  " >
    <div className="row py-4  d-flex justify-content-center " style={{backgroundColor:"#E7E7E7"}}>
    <div className="col-md-4 col-6  d-flex justify-content-center align-items-center">
       <img className='  px-1 img-fluid border border-dark p-1'  src={props.img} alt="" height='250px' />
      </div>
    <div className="col-md-4 col-6 "> 
       <div className="  ">
         <p className=' fw-bold small text-danger text-break'> {props.title} </p>
   
       </div>
       <div className=" d-flex mt-3 justify-content-center align-items-center ">
         <form  action={import.meta.env.VITE_URL+"/api/downloadVideo"} method='post' className='col-sm-10 col-12 d-flex justify-content-center align-items-center flex-column flex-sm-row '  >
         <input type="hidden" name="url" value={props.url} />
         <input type="hidden" name="fname" value={props.title} />
         <input type="hidden" name="auth" value={import.meta.env.VITE_KEY} />
         
         <select name='itag' className="form-select bg-light border border-dark ">
     {
     props.quality?
      props.quality.map(d=>{

        return <option value={d.itag}>{d.quality}</option>
      }) : <option>Not Found</option>
     }
</select>
<button  className='btn-primary btn ms-sm-2 mt-sm-0 mt-2 '>Download</button>
 
         </form>
        
       </div>
    
    </div>
    </div>
  


 </div>
  )
}

export default Preview