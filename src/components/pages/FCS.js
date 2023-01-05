import ArticleList from '../articles/ArticleList';
import useFetch from '../hooks/useFetch';

const FCS = () => {
    const {data: articles, isPending, error} = useFetch('http://localhost:8000/articles');

    return (
        <div className="fcs">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <ArticleList articles={articles} title="FCS Articles"/>
        </div>
    );
}

export default FCS;