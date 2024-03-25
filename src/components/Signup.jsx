import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUpHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <>
      <h1 className="text-3xl uppercase font-bold">Signup</h1>
      <form onSubmit={signUpHandler} className="flex flex-col gap-2">
        <label className="text-2xl font-semibold" htmlFor="email">
          Email
        </label>
        <input
          name="email"
          type="email"
          className="border text-2xl p-2"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-2xl font-semibold" htmlFor="password">
          Password
        </label>
        <input
          name="password"
          type="text"
          className="border text-2xl p-2"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className=" text-2xl bg-green-700 text-white py-2 px-4 ">
          Login
        </button>
        <button className=" text-1xl">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968863.png"
            alt="google-icon"
            width={100}
            className="block mx-auto"
          />
        </button>
      </form>
    </>
  );
};

export default Signup;
