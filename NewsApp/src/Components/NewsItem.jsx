const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="w-[300px] rounded-md border">
      <img
        src={src ? src : "https://static.toiimg.com/photo/msid-112691191/112691191.jpg?pl=1326042"}
        alt="News"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{title.slice(0,70)} ...</h1>
        <p className="mt-3 text-sm text-gray-600">
          {description ? description.slice(0,90) : "This news is based on current event."}
        </p>
        {/* <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button> */}
        <a href={url} className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" target="_blank">Read More</a>
      </div>
    </div>
  )
};

export default NewsItem;
