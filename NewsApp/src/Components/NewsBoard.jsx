import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";
import Loader from "./Loader";

const NewsBoard = ({ category, country }) => {

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setLoading] = useState(false);

  // This code work but i want to change some thing
  // useEffect(() => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=ea3e8db4aa7347c2b9d1f7ace59c7da7&page=${page}&pageSize=15`;

  //   fetch(url).then(response => response.json().then(data => setArticles(data.articles)));

  //   console.log(articles);
  // }, [category, country, page])

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=ea3e8db4aa7347c2b9d1f7ace59c7da7&page=${page}&pageSize=15`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setPageCount(Math.ceil(data.totalResults/15));

      if (isMounted) {
        setArticles(data.articles);
        setLoading(false);
        console.log(articles);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };

  }, [category, country, page]);

  useEffect(()=>{
    setPage(1);
  }, [category, country]);

  const handlePrevPage = () => {
    setPage(page - 1);
  }

  const handleNextPage = () => {
    setPage(page + 1);
  }
  return (
    <div>
      <h2 className="text-center text-xl font-bold my-5">{category.toUpperCase()} <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1.5 text-xs font-bold text-red-600 ring-1 ring-inset ring-red-600/10">NEWS</span></h2>
      {isLoading && <Loader/>}

      {!isLoading && <div className="flex flex-wrap py-3 px-5 gap-10 justify-center">
        {articles.map((news, index) => {
          return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })}
      </div>}
      <div className="flex justify-center items-center gap-10">
        <button disabled={page <= 1} className="bg-blue-400 py-2 px-3 rounded font-bold hover:bg-blue-500 text-white disabled:bg-red-400" onClick={handlePrevPage}>{"< Prev"}</button>
        <button disabled={page >= pageCount} className="bg-blue-400 py-2 px-3 rounded font-bold hover:bg-blue-500 text-white disabled:bg-red-400" onClick={handleNextPage}>{"Next >"}</button>
      </div>
    </div>
  )
}

export default NewsBoard