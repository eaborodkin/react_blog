import {useParams} from "react-router-dom";
import useFetch from "./useFetch";
import BlogList from "./BlogList";

const BlogDetails = () => {
    const {id} = useParams()

    const {data: blog, error, isPending} = useFetch(`http://localhost:8000/blogs/${id}`)

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
            <h2>Blog Details {id}.</h2>
        </div>
    )
}

export default BlogDetails