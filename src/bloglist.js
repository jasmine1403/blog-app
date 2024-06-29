import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs,title}) => {
  // // this is the syntax to use props
  // const blogs=props.blogs;
  // const title=props.title;

  // we are grabbing the blogs and title from props and storing it in variable blogs and title


  return ( 
    <div className="blog-list">
      <h2>
        {title}
      </h2>
      {/* // we are cycling through the blogs */}
      {blogs.map((blog)=>(
      <div className="blog-preview" key={BlogList.id}>
        <Link to={`/blogs/${blog.id}`} >
        {/* path is not hardcoded so this syntax is used */}
        <h2>{blog.title}</h2>
<p>Written by {blog.author}</p>
        </Link>


      </div>
      ))}

    </div>
   );
}
 
export default BlogList;