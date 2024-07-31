"use client";
import { useState, useEffect} from 'react';
import Navigation from 'swiper';
import Pagination from 'swiper';
import Ally from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image'; // Import the 'Image' component from 'next/image'

const url= fetch( 'https://fakestoreapi.com/products') ;
function Picture ()  {
  const [products, setProducts] = useState<{ id: number, src: { medium: string }, url: string }[]>([]);
  const getImages = async () => {  };
  useEffect(() => { getImages(); 
    console.log(products);

   }, [products]);
  
  return (
    
    <div className="flex flex-col w-full min-h-screen  bg-blue-600">
      <h1>Photos</h1>
      <Swiper
         >
        {products.map((item) => (
          <SwiperSlide key={item.id}> 
            <div>
              <Image src={item.src.medium} alt={item.url} 
              width={150}
              height={150}/>
            </div> 
          </SwiperSlide> ))}
      </Swiper>
          <p> Ggsgsgbriendzgzggz</p>
    </div>
  );
    

}

export default Picture;


