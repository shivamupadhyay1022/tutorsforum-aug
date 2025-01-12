import React, { useState } from "react";
import Tutorcard from "./Tutorcard";
import { useLayoutEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

function Autocarousel() {
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
    //   const filteredData = data.filter(
    //     (item) => item.email === "nilesh@gma.com"
    //   );
    //   setFilteredData(filteredData);
  };
  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
      className="w-full my-3 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <div className="w-full inline-flex flex-nowrap">
        <ul
          key={seed}
          className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
        >
          {data &&
            Object.values(data).map((item) => (
              <li>
                <Tutorcard id={item.uid} name={item.name} aboutclass={item.aboutclass} profilepic={item.profilepic} bio={item.bio} sub={item.sub} />
              </li>
            ))}
          {/* <li>
            <Tutorcard />
          </li>
          <li>
            <Tutorcard />
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Autocarousel;
