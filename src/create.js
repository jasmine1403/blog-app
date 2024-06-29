import {useState} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
//to redirect them to new route pr send it back to previous route
const Create = () => {

const[title,setTitle]= useState('');
const[body,setBody]= useState('');
const[author,setAuthor]=useState('');
const[isPending,setIspending]=useState(false);
const hist=useHistory();
//can go forward as well as back in history

const handleSubmit = (e) => {
  setIspending(true);
e.preventDefault();
const blog={title,body,author};
fetch('http://localhost:8000/blogs/',{
  method: 'POST',

headers: {"Content-Type" : "application/json"},

body: JSON.stringify(blog)

}).then(()=>{
  setIspending(false);
  hist.push('/')
}

)
}
  return ( 
    <div className="create">
      <h2>
        Add a new Blog
      </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Blog title:
        </label>
        <input 
        type="text"
        required
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
         />
         <label>Blog body:</label>
         <textarea
           required
 value={body}
           onChange={(e)=> setBody(e.target.value)}  
          > </textarea>
           <label>Blog author: </label>
           <select 
           value={author}
           onChange={(e)=> setAuthor(e.target.value)}>
            <option >mario</option>
            <option >yoshi</option>
           </select>
        {!isPending &&  <button>Add Blog</button>}  
        {isPending && <button disabled>Adding Blog...</button>}
         
      </form>
    </div>
   );
}
 
export default Create;