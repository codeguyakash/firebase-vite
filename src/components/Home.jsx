import { getDatabase, ref, set, onValue } from "firebase/database";
import { app } from "../firebase/firebase";
import Signup from "./Signup";
import SignInPage from "./Signin";
import { useEffect, useState } from "react";

const db = getDatabase(app);

const Home = () => {
  const [isUser, setIsUser] = useState(true);
  useEffect(() => {
    const user = localStorage.getItem("user");
    user ? setIsUser(true) : setIsUser(false);
  }, []);
  return (
    <>
      <div className="mt-10 mx-auto w-1/2 flex flex-col items-center justify-center gap-10 h-1/2">
        <h1 className="text-6xl font-bold text-center">Firebase - React</h1>
        <h1 className="text-3xl font-bold text-center">CRUD Operation</h1>
        {isUser ? <SignInPage /> : <Signup />}
      </div>
    </>
  );
};

export default Home;
