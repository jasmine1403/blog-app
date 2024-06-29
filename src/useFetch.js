import {useState,useEffect} from 'react'
const useFetch = (url) => {

  
  const [data, setData] = useState(null);
const[isPending,setIspending]=useState(true);
const[error,setError]=useState(null);

// this function fires on every render
  useEffect(()=>{
const abortCont= new AbortController();


    setTimeout(  ()=>{
      fetch(url,{signal: abortCont.signal})
    .then(res=>{
   
      if(!res.ok){
      
        throw Error('Could not fetch that data for that resource');
        
      }
      return res.json()
    }
  )
  .then((data)=>{
  
    setData(data);
    setError(null);
    setIspending(false);
  })
  .catch((e)=>{
    if(e.name==='AbortError'){
      console.log('fetch aborted')
    }
    else{
      setError(e.message);
      setIspending(false);
    }
    
  })
  
  
  //to wait additional 1 sec,so the loading message is visible 
  },1000)

  return ()=> abortCont.abort();
   
  },[url]); 
  return {data,isPending,error} 
}

// in our case we return an object
export default useFetch;

