'use client';
import { Tab } from '@material-tailwind/react';
import React, {  useEffect, useState } from 'react';
import axios from 'axios';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [users , setUsers] =useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState([1,2,3,4,5,6,7]);
  const adValue=() =>{
    setTab( prev => {return [...prev, 11]});
  }
  console.log(tab);
 
  
useEffect(() => {    
    const fetchPhotos = async()=>{
  const res = await axios.get('https://dog.ceo/api/breeds/image/random/3');
  
        const data = res.data;
        setPhotos(data.message);
        setLoading(true);
       
        }
        
 }, [photos]);
 console.log(photos);




useEffect(() => {
  // code inside the useEffect hook
  fetch('https://api.github.com/users')
    .then((res) => res.json())
    .then((data) => {
      setUsers(data);
      console.log(data);
});
  
    }), [];

useEffect(() => {
  fetch('https://dog.ceo/api/breeds/image/random/7')
    .then((res) => res.json())
    .then((data) => {
      setPhotos(data.message);
      console.log(data);
    });
  }, []);
//console.log(datauser.data);



   /* id:637048
    Access Key:  WgeyDVBpoeYF4UpyPJPEFmCOA9b01OZ2MziyQEqx-_E 
    Secret Key: -4zJ2lo3Mv3Nhn7nCaOnTMXijmnLOJdPInBKei8fCoI 
    */ 

    

  return (
    <>
    <div className="photo-gallery">
        <h2>Voici les  photos de la gallery</h2>
      { photos.map((data) => (
        <div key={data} className="photo">
            <img src={data} alt="dog" />
          <p>photsos galerie de  l la  lqa la lala semaine</p>
          
        </div>
      
       
      ))}
        <div>
          <h3>Les users de github</h3>
          {users && users.map((user) => (
            <div key={user.id}>
              <h4>{user.id}</h4>
              <h3>{user.login}</h3>
              <img src={user.avatar_url} alt="user" />
              <h4>{user.url}</h4>
              <h4>{user.login}</h4>
              <h4>{user.node_id}</h4>
              <h4>{user.repos_url}</h4>
              <h4>{user.type}</h4>
              <h4>{user.site_admin}</h4>
              
            </div>
          ))}

        </div>

        

        <div>
        <button className=' rounded-xl bg-lime-500 m-3 p-2' onClick={adValue} >Ajouter un nom</button>
        {loading ? (<h3>Voici les phoyos</h3>):(<h1>Fin de la galerie</h1>)};
        </div>
    </div>
    </>
   
  );
};

export default PhotoGallery;
