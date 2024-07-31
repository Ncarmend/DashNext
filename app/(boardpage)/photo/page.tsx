import React from 'react'
import Header from '@/app/header/page';
import Sidnav from '@/app/dashboard/sidnav/page';
import PageFooter from '@/app/footer/page';
import Photo from '@/app/(boardpage)/photo/page';
import { usePathname } from 'next/navigation';
//import Picture from '@/app/ui/picture';
import PhotoGallery from '@/app/ui/photoapi';


function Photos() {
    return(
    <div className="flex flex-col w-full min-h-screen  bg-blue-600">
    <Header />
    <div className="flex h-screen flex-col md:flex-row    md:overflow-hidden">
      
      <div className="w-full flex-none md:w-64  min-h-screen ">
        <Sidnav />
      </div>
      
      
      <div className="flex-grow flex-col p-6    md:overflow-y-auto md:p-12">
      <div> {/* Added opening div tag */}
        <PhotoGallery />
       
      </div> {/* Added closing div tag */}
        
        
        
      </div>
    </div>

      <PageFooter />
  </div>
  );
  
}

export default Photos
