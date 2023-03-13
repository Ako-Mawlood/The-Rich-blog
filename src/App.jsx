import { BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css"
import Home from "./components/Home";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";


const App = () => {
  
  return ( 
   <Router>
    <div>
     <Navbar />
     <Switch>
          <Route  exact path="/">
            <Home />
          </Route>
          <Route path="/create">
             <Create />
          </Route>

          <Route path='/blogs/:id'>
            <BlogDetails/>
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>
     </Switch>
     </div>
      
   </Router>
     
  )

  }
  export default App;