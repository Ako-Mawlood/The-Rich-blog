import BlogList from './BlogList'
import UseFetch from './UseFetch'

const Home = () => {
 const {data:blogs,error,isLoading}=UseFetch('http://localhost:8000/blogs')


 return (
  <div className="home">
    { error && <div>{ error } </div> }
    { error && <h3>___ Please make sure that you have typed this command in your terminal: npx json-server --watch src/data.json --port 8000  </h3> }
    { isLoading && <div>Loading...</div> }
    { blogs && <BlogList blogs={blogs} />}
  </div>
);
}

export default Home