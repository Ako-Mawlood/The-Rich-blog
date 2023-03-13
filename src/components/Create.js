
import { useState} from 'react'
import { useHistory } from 'react-router-dom';
const Create = () => {
      const [title, setTitle] = useState('');
      const [body, setBody] = useState('');
      const [author, setAuthor] = useState('mario');
      const [isLoading,setIsLoading]=useState(false)
      const history=useHistory()
         function handleSubmit(e){
          e.preventDefault();
          setIsLoading(true)
          const blog={title,body,author}
           fetch('http://localhost:8000/blogs',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
           }).then(()=>{
            setIsLoading(false)
            history.push("/")
           })
         }
  return (
    <div className='create'>
       <h2>Add a new blog</h2>
       <form onSubmit={handleSubmit}>

         <label>Title:</label>
         <input 
         type="text"
         required
         value={title}
         onChange={(e)=>setTitle(e.target.value)} />


        <label>Body:</label>
         <textarea 
             required
             value={body}
             onChange={(e)=>setBody(e.target.value)}
             ></textarea>

         <label>Author:</label>
         
         <select required value={author} onChange={(e)=>{setAuthor(e.target.value)}}>
            <option value="yoshi">yoshi</option>
            <option value="mario">mario</option>
            <option value="Abdlbarry">Abdlbarry</option>
            <option value="Sangar">Sangar</option>
            <option value="Ako">Ako</option>
         </select>
         
         {isLoading && <button disabled >Adding...</button>}
         {!isLoading && <button>Add blog</button>}

       </form>
       
    </div>
  )
  
}

export default Create;