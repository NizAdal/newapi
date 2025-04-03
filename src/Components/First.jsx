import axios from "axios";
import React, { useEffect, useState } from "react";


function First() {
  const [article, setArtical] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const getArticals = async () => {
      try {
        const adal = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
        setArtical(adal.data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    getArticals();
  }, []);
  return (
    <>
    <div className="flex flex-col xl:w-[16rem] lg:w-[16rem] md:w-[10rem] w-[20rem] ml-[2rem]  gap-[1rem] md:ml-24 2xl:ml-6 xl:ml-20 lg:ml-[5rem]">
        <h1 className="leading-relaxed antialiased font-bold">{article[0]?.title}</h1>
        <img src={article[0]?.urlToImage} alt="petrol pump" />
        <p className="leading-relaxed antialiased text-sm text-gray-950 break-words min-[5000px]:w-auto line-clamp-3">
            {article[0]?.description}
        </p>
        <hr className="mb-3" />
    </div>
    


      <div className='flex flex-col '>
        
       {article.slice(1).map((item,index) =>(
        <div  key={index}  className="flex flex-col xl:w-[28rem]  lg:w-[34rem] md:w-[25rem] w-[22rem] px-8  gap-[1rem]  md:px-24 2xl:px-2 xl:px-20 lg:px-[5rem]">
        <h5 className="leading-relaxed antialiased font-semibold">{item.title}</h5>
        <div className="flex flex-row gap-2">
        <div>   
        <img src={item.urlToImage} alt="petrol pump" />
        </div>
        <p className="leading-relaxed antialiased text-sm text-gray-950 break-words min-[5000px]:w-auto xl:line-clamp-3  lg:line-clamp-7 line-clamp-3">{item.description}</p>
        </div>
        <hr className="mb-3"/>
      </div> 
      ))}
      </div>
    
    </>
  )
}

export default First
