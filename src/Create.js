import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsPending(true)

        const blog = {title, body, author}

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog),
        }).then((response) => {
            if (!response.ok) {
                throw Error('Something went wrong! Try your attempt later.')
            }
            setIsPending(false)
            setError(null)

            const url = new URL(response.headers.get('location'))
            navigate(url.pathname)
        }).catch(error => {
            setIsPending(false)
            setError(error.message)
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">
                    Blog's title:
                    <input
                        id="title"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label htmlFor="body">
                    Blog's body:
                    <textarea
                        id="body"
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </label>
                <label htmlFor="author">
                    Blog's author:
                    <select
                        id="author"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                        <option value="luigi">luigi</option>
                    </select>
                </label>
                {error && <div>{error}</div>}
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    )
}

export default Create