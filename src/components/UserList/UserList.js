import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import UserCard from '../UserCard/UserCard';
import './userlist.css';
import { Slide } from 'react-reveal';

const UserList = () => {
  const [users, setUsers] = useState([]);
  
  // Wrap imageUrls in its own useMemo hook
  const imageUrls = useMemo(() => [
    'https://static.businessnews.com.au/sites/default/files/styles/wabn_kb_company_logo/public/Leanne%20Graham.jpg?itok=3znToz31',
    'https://smalssymbiose.be/wp-content/uploads/2020/05/Erik-Vandeloise-choix-recadre-854x1024.jpg',
    'https://www.challenges.fr/assets/img/2021/06/18/cover-r4x3w1000-627e5c1fbcb48-c90ec4bde5091df0d756d6b3140b93fba1e7dfb3-jpg.jpg',
    'https://cdn-s-www.republicain-lorrain.fr/images/B92F4A4F-9AE9-40C4-B923-6D4E5F5ED11A/NW_raw/patricia-kaas-fete-ses-50-ans-ses-trente-ans-de-carriere-et-signe-un-10-e-album-un-album-qui-me-ressemble-aime-rappeler-l-artiste-lorraine-mondialement-reconnue-photo-marc-wirtz-1481122737.jpg',
    'https://thefirstacademy.org/wp-content/uploads/2017/01/Chelsea-Han.jpeg',
    'https://flxt.tmsimg.com/assets/77657_v9_bb.jpg',
    'https://media.licdn.com/dms/image/D4E03AQE9beLarcvdqQ/profile-displayphoto-shrink_800_800/0/1684266419588?e=2147483647&v=beta&t=RrCRkdvIzOL8ztbCNGU1NXSr_TrlkZD4NehpWTZ3ywE',
    'https://flxt.tmsimg.com/assets/174263_v9_bc.jpg',
    'https://amadeus.labex.u-bordeaux.fr/News/files/Info/image/large/47a15adba6b3d33add9a18298efebf81.jpg',
    'https://pbs.twimg.com/profile_images/1633631647240269824/cuN556Jh_400x400.jpg',
  ], []);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const usersWithImages = res.data.map((user, index) => ({
          ...user,
          imageUrl: imageUrls[index], // Assign the image URL to the user
        }));
        setUsers(usersWithImages);
      })
      .catch((err) => console.log(err));
  }, [imageUrls]); // Now imageUrls is in the dependency array

  return (
    <div className='list'>
      {users.map((user) => (
        <Slide bottom><UserCard user={user} key={user.id} /></Slide>
      ))}
    </div>
  );
};

export default UserList;
