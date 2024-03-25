import { getDatabase, ref, set, onValue } from "firebase/database";
import { app } from "../firebase";
import Signup from "./Signup";
import SignInPage from "./Signin";
import { useEffect, useState } from "react";

const db = getDatabase(app);

const Home = () => {
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("user");
    user ? setIsUser(true) : setIsUser(false);
  }, []);
  return (
    <>
      <div className="mt-10 mx-auto w-1/2 flex flex-col items-center justify-center gap-10 h-1/2">
        <h1 className="text-6xl font-bold text-center">Firebase - React</h1>
        {isUser ? <SignInPage /> : <Signup />}
      </div>
    </>
  );
};

export default Home;
