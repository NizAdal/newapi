import axios from "axios";
import React, { useEffect, useState } from "react";

function Second() {
  const [article, setArtical] = useState([]);
  const [stories, setStories] = useState([]);
  
  useEffect(() => {
    const getArticals = async () => {
      try {
        const news = await axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=389a2b1505604cbf99de0f2d92376e4a");
        const adal = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=389a2b1505604cbf99de0f2d92376e4a");
  
        console.log("here is adal", adal.data);
  
        const articles = adal.data.articles;
        const storiesData = news.data.articles;
  
        // Ensure both arrays have the same length
        const minLength = Math.min(articles.length, storiesData.length);
  
        // Set state with adjusted arrays
        setArtical(articles.slice(0, minLength));
        setStories(storiesData.slice(0, minLength));
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
  
    getArticals();
  }, []);
  
  return (
    <div className="xl:w-[20rem] lg:w-[16rem] md:w-[10rem] w-full   md:ml-0  ml-[2rem]">
    <a href="/must-read" class="text-red-800   text-xs mb-3 inline-block">
        MUST READ STORIES                  
    <span class="border-l-4 border-t-4 border-b-4 border-red-custom border-t-transparent border-b-transparent inline-flex ml-0.5"></span>
    </a> 

    <div className="flex flex-col ">
      {stories.map((item, index) =>(
        <div key={index}  className="flex flex-col lg:w-52 md:w-[10rem] w-[20rem]  gap-[1rem]">
        <img src={item.urlToImage} alt="petrol pump" />
        <h1 className="leading-relaxed antialiased font-semibold">{item.title}</h1>
        <hr className="mb-3"/>
        </div>
         ))}
      </div>
    </div>
  )
}

export default Second
