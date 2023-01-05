import ArticleList from '../articles/ArticleList';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const {data: articles, isPending, error} = useFetch('http://localhost:8000/articles');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <ArticleList articles={articles} title="All Articles"/>
        </div>
    );
}

export default Home;