import { TuneOutlined, TurnedInOutlined } from '@material-ui/icons'
import React,{useState,useEffect} from 'react'
import './SearchPage.css'
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"
import {useParams} from 'react-router-dom';

function SearchPage() {
const {searchTerm}=useParams();
const [videos, setVideos] = useState([
{
title:'How to become full stack developer in 2020',
channel:"Tiff In Tech",
views:"132k",
timestamp:"1 month ago",
channelImage:'/image/fullstack.jpg',
image:'/image/fullstack.webp'
},

{
title:'Become a developer in 2021',
channel:"Alexander vatkin",
views:"24k",
timestamp:"4 months ago",
channelImage:'/image/becomdeveloper.jpg',
image:'/image/become.webp'
},

{
title:'Build Airbnb with react js',
channel:"clever programmer",
views:"77k",
timestamp:"streamed 4 months ago",
channelImage:'/image/cleverqazi.jpg',
image:'/image/airbnb.webp'
},

{
title:'A day in the live of a google software Engineer | work from home',
channel:"Sierra Nguyen",
views:"2.6M ",
timestamp:"7 months ago",
channelImage:'/image/google.jpg',
image:'/image/google.webp'
},

{
title:'A day in the live of a google software Engineer | work from home',
channel:"Sierra Nguyen",
views:"2.6M",
timestamp:"7 months ago",
channelImage:'/image/google.jpg',
image:'/image/google.webp'
},

{
title:'دختر گف کرد کاملا دوربین مخفی',
channel:"Vahid Yari",
views:"138k",
timestamp:"1 week ago",
channelImage:'/image/vahid.jpg',
image:'/image/dokh.webp'
},

{
title:'What makes you special mariana Atencio',
channel:"Tedx Talks",
views:"14M",
timestamp:"3 years ago",
channelImage:'/image/mak.jpg',
image:'/image/mak.webp'
},
]);
const [filterVideos,setFilterVideos]=useState([]);

 useEffect(()=>{
     let keyword=searchTerm.split(' ');
     let fillter=[];
     for(let x=0;x<videos.length;x++){
         for(let i=0;i<keyword.length;i++){
           if(videos[x].title.search(keyword[i]) != -1 ||  videos[x].channel.search(keyword[i]) != -1){
               fillter.push(videos[x]);
               i=keyword.length;
           }
        }
     }
     setFilterVideos(fillter);
        
     
 },[]);
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlined/>
                <h3>FILTER</h3>
            </div>
            <hr/>
            <ChannelRow
              verified
              subs="22k"
              noOfVideo={1}
              description="Helloooo!

              This is my first video on the topic of Career - Job Shadowing where I follow people at work to learn more about what they do. My hope is that this video and the future ones will offer you a useful glimpse into the different career fields if you are considering them.
              
              In this video, I am following Neil Fraser - a senior software engineer at Google - to see what his typical workday looks like during COVID-19 quarantine where a lot of people have been working from home. The video also includes some of Neil's tips for aspired software engineers out there! 
              Besides being a software engineer, Neil also does a lot of cool projects, and occasionally, he'd upload videos of what he does on his channel: https://www.youtube.com/user/Odo987. Check it out!"
                
                channel="Sierra Nguyen"
                 image='/image/google.jpg'
            />
             <hr/>
             {filterVideos.map(v=>(
               <VideoRow
               title={v.title}
               views={v.views}
               timestamp={v.timestamp}
               channel={v.channel}
               image={v.image}
               description=""
               subs=""
               
               /> 
             ))}

        </div>
    )
}

export default SearchPage
