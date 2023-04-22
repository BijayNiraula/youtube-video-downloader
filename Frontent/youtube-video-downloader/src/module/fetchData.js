const fetchData=async(url,data)=>{
    let d={...data};
    d.auth=import.meta.env.VITE_KEY
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
        return {"error":" :)  Server Errro rr too many request ?"}
    }
}

export default fetchData