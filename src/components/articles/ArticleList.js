import { Link } from 'react-router-dom';

const ArticleList = ({articles, title}) => {

    return (
        <div className="article-list">
            <h2>{title}</h2>
            {articles.map(article => (
                <div className="article-preview" key={article.id}>
                    <Link to={`/articles/${article.category}/${article.id}`}>
                        <h2>{article.title}</h2>
                        <p>Written by {article.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ArticleList;