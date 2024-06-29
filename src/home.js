
import BlogList from './bloglist';
import useFetch from './useFetch';
const Home = () => {

  const {data: blogs,isPending, error} = useFetch('http://localhost:8000/blogs')
//grab the data but call it blogs

  return ( 
    <div className="home">
      {isPending && <div>Loading...</div>} 
      {error && <div> {error}</div>}
 {blogs && <BlogList blogs={blogs} title="My Blogs" />} 
  {/* <BlogList blogs={blogs.filter((b)=> (b.author==='mario'))} title="Mario's Blogs" /> */}

  {/* this is a prop ,first blogs is the variable..this is the child component*/}
    </div>
   );
}
 
export default Home;