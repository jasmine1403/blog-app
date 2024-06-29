
import Navbar from './Navbar';
import Home from './home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './create'
import BlogDetails from './BlogDetails';
import NotFound from './notFound';

function App() {

  return (
    //jsx code

    <Router>

<div className="App">
      <Navbar />
 {/* navbar is always going to show */}
  <div className="content">
    <Switch>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route exact  path='/create'>
       <Create />
      </Route>  
      <Route exact  path="/blogs/:id">
      {/* we can't hard code every id so what we do is use this syntax */}
    <BlogDetails />
      </Route> 

      <Route path="*">
        <NotFound />
        </Route> 
 </Switch>
  
 
   </div>
    </div>
    </Router>
    
  );
}

export default App;
