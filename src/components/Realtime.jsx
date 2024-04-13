import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../firebase/firebase";

const Realtime = () => {
  const firestore = getFirestore(app);
  return (
    <>
      <div>
        <div>
          <h1 className="text-5xl text-center text-white font-bold my-10 uppercase">
            RealTime - Data
          </h1>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Realtime;
