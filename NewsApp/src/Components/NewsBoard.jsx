import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({category, country}) => {

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    console.log(country)
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=ea3e8db4aa7347c2b9d1f7ace59c7da7`;

    fetch(url).then(response => response.json().then(data => setArticles(data.articles)));
  }, [category, country])
  return (
    <div>
      <h2 className="text-center text-xl font-bold my-5">{category.toUpperCase()} <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1.5 text-xs font-bold text-red-600 ring-1 ring-inset ring-red-600/10">NEWS</span></h2>
      <div className="flex flex-wrap py-3 px-5 gap-10 justify-center">
        {articles.map((news, index) => {
          return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })}
      </div>
    </div>
  )
}

export default NewsBoard