import React from 'react';
import { useState } from 'react';
const people = [
  {
    id: 1,
    name: "John Smith",
    phone: "+1 202 555 0171",
    email: "john.smith@example.com",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    isFavorite: true
  },
  {
    id: 2,
    name: "Emily Johnson",
    phone: "+1 202 555 0123",
    email: "emily.johnson@example.com",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    isFavorite: false
  },
  {
    id: 3,
    name: "Michael Brown",
    phone: "+1 202 555 0456",
    email: "michael.brown@example.com",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    isFavorite: true
  },
  {
    id: 4,
    name: "Sarah Williams",
    phone: "+1 202 555 0345",
    email: "sarah.williams@example.com",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    isFavorite: false
  }
];

const Profile = () => {
    const [str,setStr] = useState(false)
    function change(){
        setStr(!str)
    }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {people.map((el) => (
        <div key={el.id}className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center text-center">
          <img  src={el.image} className="w-24 h-24 rounded-full object-cover mb-4"/>
          <h3 className="text-lg font-semibold">
            {el.name} {<b onClick={change} className={`${str && el.isFavorite ? 'text-yellow-500' : 'text-black'} cursor-pointer`}>⭐</b>}</h3>
          <p className="text-gray-600">{el.phone}</p>
          <p className="text-gray-500">{el.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Profile;
