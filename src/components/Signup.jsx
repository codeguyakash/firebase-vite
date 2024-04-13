import React, { useCallback, useState } from "react";
import { app } from "../firebase/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUpHandler = (e) => {
    console.log(email, password);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { email } = userCredential.user;
        const userObject = new Object(email);
        const user = JSON.stringify(userObject);
        if (user === "") {
          return;
        }
        localStorage.setItem("user", user);
        navigate("/dashboard");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
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
        <button className=" text-2xl bg-blue-700 text-white py-2 px-4 ">
          Signup
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
