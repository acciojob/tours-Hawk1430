import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";


export const destinations = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    name: "Beach Paradise, Maldives",
    price: "$799",
    description: "Imagine waking up to the sound of gentle waves and stepping out onto your private deck suspended over crystal-clear waters. This unforgettable beach vacation in the Maldives offers luxury like no other. Enjoy sunrise yoga sessions, underwater adventures through coral reefs, world-class seafood dining, and spa treatments that rejuvenate your mind and body. It's the perfect escape for couples and dreamers seeking serenity, beauty, and indulgence."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1549887534-5303b7c03f77",
    name: "Mountain Escape, Switzerland",
    price: "$1299",
    description: "This exclusive tour takes you through the heart of the Swiss Alps where snow-capped peaks, green valleys, and pristine lakes await. Travel aboard panoramic trains like the Glacier Express, hike scenic mountain trails, and unwind in charming alpine villages. Whether skiing in Zermatt or sipping hot cocoa beside a fireplace in a chalet, you’ll experience a perfect balance of adventure and relaxation surrounded by awe-inspiring natural beauty."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    name: "Safari Adventure, Kenya",
    price: "$999",
    description: "Dive into the wild landscapes of Kenya on a guided safari that brings you face-to-face with lions, elephants, giraffes, and more in their natural habitat. Wake up to sunrise game drives across golden savannahs, dine under starlit skies, and connect with local Maasai communities. This tour blends thrilling wildlife encounters with luxurious lodging and cultural depth, offering an authentic African adventure you’ll remember forever."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    name: "City Lights, Tokyo",
    price: "$899",
    description: "Tokyo is a city where ancient traditions meet futuristic innovation. This tour takes you on a whirlwind journey through sacred temples, bustling food markets, quirky fashion districts, and neon-lit nightlife. Discover the serenity of a tea ceremony, the excitement of Shibuya Crossing, and the culinary excellence of sushi prepared by masters. Whether you're tech-savvy or culture-curious, Tokyo will fascinate you at every turn with its energy and elegance."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1560523160-754a9e2748a0",
    name: "Historic Europe Tour",
    price: "$1499",
    description: "Step back in time as you explore the cultural capitals of Europe—Rome, Paris, and Berlin. Walk through ancient ruins in Rome, gaze upon masterpieces at the Louvre, and witness modern history at the Berlin Wall. This 10-day tour offers a rich blend of architecture, art, cuisine, and storytelling. Perfect for history buffs and first-time visitors alike, it’s a chance to experience Europe’s legendary past and vibrant present in one incredible journey."
  }
];


const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);  

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setTours(destinations)
      setLoading(false);
    },2000)
  },[])

   const handleDelete = (id) => {
    setTours((prev) => prev.filter((item) => item.id !== id));
  };

    return(
      <main id="main">
        <div className="loader">{ loading && <Loading />}</div>
        {!loading && <Tours tours={tours} handleDelete={handleDelete} setTours={setTours}/>}
      </main>
    )
}
export default App;
