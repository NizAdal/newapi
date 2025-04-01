import axios from "axios";
import React, { useEffect, useState } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";




function Home() {
  const [article, setArtical] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const getArticals = async () => {
      try {
        const news = await axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=389a2b1505604cbf99de0f2d92376e4a");
        const adal = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=389a2b1505604cbf99de0f2d92376e4a");
        console.log("here is adal", adal.data);
        setArtical(adal.data.articles);
        setStories(news.data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    getArticals();
  }, []);
  

  return (
    <div className='flex md:flex-row flex-col cursor-pointer 2xl:w-[100rem] xl:w-[75rem] lg:w-[70rem] w-[48rem] justify-center gap-[0rem] mt-2 2xl:mx-[0rem] xl:mx-[0rem]'>
    <div>
      <First/>
      </div>
    <div>
      <Second/>
    </div>
    <div>
      <Third/>
    </div>
 <div className="xl:block hidden">
  <Fourth/>
 </div>
 <div>
 </div>

</div>
  )
}

export default Home
