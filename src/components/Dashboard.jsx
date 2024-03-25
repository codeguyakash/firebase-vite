import { getDatabase, ref, set, onValue } from "firebase/database";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const db = getDatabase(app);
const userObject = localStorage.getItem("user");
const user = JSON.parse(userObject);

const Dashboard = () => {
  const navigate = useNavigate();
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
  const signOutHandler = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <div className="mt-10 mx-auto w-1/2 flex flex-col items-center justify-center gap-10 h-1/2">
        <h1 className="text-6xl font-bold text-center">Welcome ({user})</h1>
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
        <button
          onClick={signOutHandler}
          className="bg-blue-500 py-2 px-5 text-white text-2xl"
        >
          Sign Out
        </button>
      </div>
    </>
  );
};

export default Dashboard;
