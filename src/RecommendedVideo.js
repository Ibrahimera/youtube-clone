import React,{useState} from 'react'
import './RecommendedVideo.css'
import Video from './Video'
function RecommendedVideo() {
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
    return (
        <div className="recommendedVideo"> 
         <h2>Recommended</h2>
         <div className="recommendedVideo__videos">
             {videos.map(v=>(
                 <Video
                 title={v.title}
                 views={v.views}
                 timestamp={v.timestamp}
                 channelImage={v.channelImage}
                 channel={v.channel}
                 image={v.image}
                 
                 />
             ))}
            
             
         </div>
        </div>
    )
}

export default RecommendedVideo
