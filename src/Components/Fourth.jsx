import axios from "axios";
import React, { useEffect, useState } from "react";

function Fourth() {
    const [article, setArtical] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const getArticals = async () => {
      try {
        const adal = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=389a2b1505604cbf99de0f2d92376e4a");
        setArtical(adal.data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    getArticals();
  }, []);
  return (
    <>
    <div className="flex flex-col w-[12rem] gap-[1rem] px-4">
    <p className="leading-relaxed antialiased text-sm text-red-700 font-semibold  break-words min-[5000px]:w-auto line-clamp-3">{article[0]?.title}</p>
    <img src={article[0]?.urlToImage} alt="petrol pump" />
    <hr className="mb-3" />
   </div>
    <div className='flex flex-col'>
    {article.map((item, index) =>(
      <div  key={index}  className="flex flex-col w-[12rem] gap-[1rem]  px-4">
      <h1 className="leading-relaxed antialiased hover:underline hover:text-red-800  text-sm text-gray-950 break-words min-[5000px]:w-auto line-clamp-2 font-semibold">{item.title}</h1>
      <hr className="mb-3"/>
      </div>
       ))}
    </div>
    </>
  )
}

export default Fourth
