import axios from "axios";
import React, { useEffect, useState } from "react";


function Third() {
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
    <div>
      <div className='flex flex-col '>
       {article.map((item,index) =>(
        <div  key={index}  className="flex flex-col xl:w-[20rem]  lg:w-[20rem] md:w-[20rem] w-[23.5rem]  gap-[1rem] px-7  md:px-4">
        <div className="flex flex-row gap-2">
        <div>   
        <p className="leading-relaxed antialiased text-sm font-semibold text-gray-950 break-words min-[5000px]:w-auto line-clamp-3 hover:underline">{item.title}</p>
        </div>
        <img src={item.urlToImage} alt="petrol pump" className="w-[7rem] h-[4rem]" />
        </div>
        <hr className="mb-3 bg-zinc-300"/>
      </div> 
      ))}
      </div>
    </div>
  )
}

export default Third
