import {Link} from "react-router-dom";

const BlogList = ({blogs, title}) => {
    const isEmpty = blogs.length <= 0

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {!isEmpty && blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
            {isEmpty && (
                <div className="blog-empty-list">
                    <p>The list is empty.</p>
                </div>
            )}
        </div>
    )
}

export default BlogList 