import { getDatabase, ref, set, onValue } from "firebase/database";
import { app } from "../firebase";
import Signup from "./Signup";

const db = getDatabase(app);

const Home = () => {
  const writeData = () => {
    set(ref(db, "users/codeguyakash"), {
      id: 2,
      name: "ramesh",
      age: 23,
      role: "Super User",
    });
  };
  const readData = () => {
    onValue(ref(db, "users/codeguyakash"), (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  };
  return (
    <>
      <div className="mt-10 mx-auto w-1/2 flex flex-col items-center justify-center gap-10 h-1/2">
        <h1 className="text-6xl font-bold text-center">Firebase - React</h1>
        <button
          onClick={writeData}
          className="bg-blue-500 py-2 px-5 text-white text-2xl"
        >
          Send Data
        </button>
        <button
          onClick={readData}
          className="bg-blue-500 py-2 px-5 text-white text-2xl"
        >
          Get Data
        </button>
        <Signup />
      </div>
    </>
  );
};

export default Home;
