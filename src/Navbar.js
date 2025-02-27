import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return ( 
    <div className="navbar">
      <h1>
        The Dojo Blog
      </h1>
      <div className="links">
       <Link to="/">Home</Link> 
       <Link to="/create" style={{
        color: "white",
        backgroundColor: "#f1356d",
        borderRadius: '8px',
       }}>New Blog</Link>
      </div>
    </div>
   );
}
 
export default Navbar;