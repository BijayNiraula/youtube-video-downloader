import { useState } from 'react'
import './App.css'
import Preview from './Component/preview';
import fetchData from './module/fetchData';
import PreviewLoading from './Component/PreviewLoading';
import ErrorMessage from './Component/errorMessage';
function App() {
  const [state, setstate] = useState(null);
 const getInfo=async (e)=>{
  setstate({loading:"loading"})
  e.preventDefault();
   const obj={
    "url":e.target[0].value
   }

   const result=await fetchData(import.meta.env.VITE_URL+"/api/getDetail",obj);
   if(result.error){
    setstate(result)
      
   }else{
    setstate(result)

   }
 }
 const download=async (e)=>{
  e.preventDefault();
  console.log("iam click")
   const obj={
    "url":state.url,
    "fname":state.title,
    "itag":e.target[2].value,
   }
    const result= await fetchData(import.meta.env.VITE_URL+"/api/downloadVideo",obj);
     console.log(result)
  

}
console.log("app.js rerender")
  return (
    <div className='container  mt-5 w-100 h-100'> 
        <h1 className='text-center  fw-bold    '>
          Youtube Video Downloader
        </h1>
        <p className='text-center mt-3 text-dark'>  Download Youtube video in Two Click ,Fastest  and Easy way</p>
         
         <form className="row d-flex justify-content-center mt-4" onSubmit={getInfo}>
          <input type="search" className='col-lg-6 col-sm-8 col-11  search-box ' placeholder='Enter the Youtube video url' />
          <input type="submit" className=' fw-bold  mt-sm-0 mt-4 col-sm-3 search-btn col-6 col-md-3 col-lg-2  ms-1 py-sm-0 py-2  ' value="Download" />
          </form>  
         {

        state?



          state.error?
          
          <ErrorMessage text={state.error}/>
           :
           state.loading?
           <PreviewLoading/>
           :
          <Preview download={download}   url={state.url} quality={state.quality}  title={state.title} img={state.thumbnail}/> 
          
            :''
            



         }
        

     
        
         
        

    </div>
  )
}

export default App
