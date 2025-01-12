import React, { useContext, useLayoutEffect, useState } from "react";
import Tutorcard from "./Tutorcard";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
function Tutors() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [seed, setSeed] = useState(1);
  useLayoutEffect(() => {
    fetchData();
    setSeed(Math.random());
  }, []);
  const fetchData = async () => {
    const dataRef = ref(db, "tutors/"); // Replace with your reference
    // dataRef.orderByChild('nestedObject.subject').equalTo('Chemistry')
    onValue(
      dataRef,
      (snapshot) => {
        const retrievedData = [];
        snapshot.forEach((childSnapshot) => {
          const item = childSnapshot.val();
          const uid = childSnapshot.key;
          retrievedData.push({ uid, ...item });
        });
        setData(retrievedData);
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
    console.log(data);
  };


  return (
    <div className=" flex justify-center items-center space-y-10 flex-col ">
      <div className="hidden md:flex flex-row space-x-8 ">
        {currentUser ? (
          <button
            className="btn bg-[#ffded5]"
            onClick={() => {
              navigate("/profdash");
            }}
          >
            Tutor Dashboard
          </button>
        ) : (
          <button
            className="btn bg-[#ffded5]"
            onClick={() => {
              navigate("/signup-prof");
            }}
          >
            Join As tutor
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {data &&
            Object.values(data).map((item) => (
                <Tutorcard id={item.uid} name={item.name} aboutclass={item.aboutclass} profilepic={item.profilepic} bio={item.bio} sub={item.sub} />
            ))}
      </div>
    </div>
  );
}

export default Tutors;
