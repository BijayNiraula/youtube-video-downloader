const fetchData=async(url,data)=>{
    let d={...data};
    d.API_KEY=import.meta.env.VITE_API_KEY
     try{
        const res= await fetch(url,{
        body:JSON.stringify(d),
        method:"POST",
        headers:{
            'content-type':'application/json'
        }
     });
     const result= await res.json();
     return result;
    }catch(e){
        return {"error":" :)  Server Error or too many request ?"}
    }
}

export default fetchData