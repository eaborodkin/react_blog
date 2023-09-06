import {useNavigate, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {useState} from "react";

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, error, isPending} = useFetch(`http://localhost:8000/blogs/${id}`)
    const [delError, setDelError] = useState(null)
    const [isDelPending, setIsDelPending] = useState(false)
    const navigate = useNavigate()

    const handleDelete = () => {
        setIsDelPending(true)
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
        }).then(response => {
            if (!response.ok) {
                throw Error('Something went wrong! Try your attempt later.')
            }
            setIsDelPending(false)
            setDelError(null)
            navigate('/')
        }).catch(error => {
            setIsDelPending(false)
            setDelError(error.message)
        })
    }

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    {delError && <div>{delError}</div>}
                    {!isDelPending && <button onClick={handleDelete}>Delete the blog</button>}
                    {isDelPending && <button disabled>Deleting the blog...</button>}
                </article>
            )}
        </div>
    )
}

export default BlogDetails