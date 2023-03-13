import UseFetch from "./UseFetch"
import { useHistory, useParams } from "react-router-dom"

const BlogDetails = () => {
  const {id}=useParams()
  const history=useHistory()
    const{data:blog,error,isLoading}=UseFetch(`http://localhost:8000/blogs/`+id)
    function handleClick(){
     
     fetch(`http://localhost:8000/blogs/`+id,{
          method:"Delete"
        }).then(()=>{
          history.push("/")
        })
      
     
    }
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blog &&  <article> <h2>{blog.title}</h2>
      <p>Written by:{blog.author}</p>
      <div>{blog.body}</div>
      <button onClick={handleClick}>Delete</button>
      </article>
    
      }
   
    </div>
  )
}

export default BlogDetails;