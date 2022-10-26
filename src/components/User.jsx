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

console.log(user)

  return (
    <div>User</div>
  )
}

export default User