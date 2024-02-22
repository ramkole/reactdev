"use client";
import React, { useState } from "react";

const UserLogin = () => {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  //@ts-ignore
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  //@ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("userData", userData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">User Name</label>
        <input
          id="userName"
          name="userName"
          type="text"
          className="border border-orange-900 p-3"
          onChange={handleChange}
        />
        <label htmlFor="password">Pasword</label>
        <input
          id="password"
          name="password"
          type="password"
          className="border border-orange-900 p-3"
          onChange={handleChange}
        />
        <button type="submit" className="border border-orange-900 p-3 mb-5">
          submit
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
