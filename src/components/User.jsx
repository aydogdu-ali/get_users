import React from 'react';
import { useState, useEffect } from "react";

const User = () => {
    const [user, setUser] = useState("");


    // veriyi fetch yöntemi ile çekiyorum
    const getUsers = () => {
        fetch("https://randomuser.me/api")
          .then((res) => res.json())
          .then((data) => setUser(data.results[0]));
      };
    
      // veriyi Dom' a çağırmak için useEffect kullanıyorum
      useEffect(() => {
        getUsers();
      }, []);

console.log(user);
// api den çekeçeğim bilgileri decsturcturing yöntemiyle parçalıyorum.
const { name, dob, email, picture, location } = user;

  return (
    
    <div className= "container text-center w-75">
        <div className= " container bg-warning rounded-circle mt-5 p-5 text center w-50">      
                <h2 className="mt-3 text-danger fw-bold">
        {/* Optional Chaining */}
        {/* Bunun anlamı varsa bilgiyi getirir yoksa boş bırakır. */}
        {name?.first} {name?.last}
      </h2>
      <img className=" p-3 rounded-circle w-50" src={picture?.large} alt="img" />
      <p>{email}</p>
      <p className="fw-bolder">{location?.country}</p>
      <h6>{new Date(dob?.date).toLocaleDateString("tr-TR")}</h6>
      <button className="btn btn-success my-3" onClick={getUsers}>
        Get User
      </button>
      </div> 
    </div>
  )
}

export default User