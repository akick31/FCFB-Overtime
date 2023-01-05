import ArticleList from '../articles/ArticleList';
import useFetch from '../hooks/useFetch';

const FBS = () => {
    const {data: articles, isPending, error} = useFetch('http://localhost:8000/articles');

    return (
        <div className="fbs">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <ArticleList articles={articles} title="FBS Articles"/>
        </div>
    );
}

export default FBS;