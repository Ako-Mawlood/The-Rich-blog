import { useState,useEffect } from "react"

const UseFetch = (url) => {
   const [data,setData]=useState(null)
   const [error,setError]=useState(null)
   const [isLoading,setIsLoading]=useState(true)
     
useEffect(()=>{
   const abortCont=new AbortController()
   fetch(url,{signal:abortCont.signal})
   .then(response => !response.ok ? null:response.json())

   .then(data=>{ 
      setData(data)
     setIsLoading(false)
     setError(null)
   })
   .catch((err)=>{
      if(err.name==="AbortEroor"){

      }else{
          setIsLoading(false)
      setError(err.message)
      }
     
   })
    return()=>abortCont.abort()
},[url])

  return {data,error,isLoading}

}


export default UseFetch;