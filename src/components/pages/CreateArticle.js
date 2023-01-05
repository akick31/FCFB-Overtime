import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateArticle = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Shubham');
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const article = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/articles', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(article)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create-article">
            <h2>Add a New Article</h2>
            <form onSubmit={handleSubmit}>
                <label>Article Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Article Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                {!isPending && <button>Add Article</button>}
                {isPending && <button disabled>Adding Article</button>}
            </form>
        </div>
    );
}

export default CreateArticle;