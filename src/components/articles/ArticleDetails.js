import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const ArticleDetails = () => {
    const { id } = useParams();
    const { category } = useParams();
    const { data: article, error, isPending } =  useFetch('http://localhost:8000/articles/' + category + "/" + id);
    const history = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/articles/'+ article.category + "/" + article.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="article-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article >
                <h2>{article.title}</h2>
                <p>Written by {article.author}</p>
                <div>{article.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        </div>
    );
}

export default ArticleDetails;