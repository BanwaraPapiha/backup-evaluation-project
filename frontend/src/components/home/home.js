import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  // addDoc,
  // updateDoc,
  // deleteDoc,
  // doc,
} from "firebase/firestore";

function Home() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "features for evaluation");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      console.log("gfyg");
      console.log(data.docs);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
        <div>
            <div>
                Multiple step form <br/>
                <div>
                {users.map((user) => {
                  return (
                      <div>
                        {" "}
                        <h5>id: {user.id}</h5>
                        <h5>feature: {user.feature}</h5>
                        <h5>total_score: {user.total_score}</h5>
                      </div>
                  );
                })}

                </div>
                React Hook form <br/>
                Grid View / List View <br/>
                Form Submission <br/>
                This is Main Form for Evaluation. <br/>
                ... <br/>
            </div>
        </div>
  );
}

export default Home;
