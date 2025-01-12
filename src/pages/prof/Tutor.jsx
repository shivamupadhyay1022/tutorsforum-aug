import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import Navbar from "../../components/Navbar";
const Tutor = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const tutorRef = ref(db, "tutors/" + id);
    onValue(
      tutorRef,
      (snapshot) => {
        const data = snapshot.val();
        setData(data);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    );
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-[90vh] bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-4 flex justify-center items-center">
              <figure>
                <img
                  src={
                    data.profilepic ||
                    "https://freerangestock.com/sample/119157/business-man-profile-vector.jpg"
                  }
                  alt="Profile"
                  className="w-64 h-64 bg-slate-600 rounded-xl object-cover"
                />
              </figure>
            </div>
            <div className="md:w-2/3 p-4">
              <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
              <p className="text-gray-700 mb-4">{data.bio}</p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> {data.email}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>About Class:</strong> {data.aboutclass}
              </p>
              <div className="mb-4">
                <strong>Languages:</strong>
                <ul className="list-disc list-inside">
                  {data.lang.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <strong>Subjects:</strong>
                <ul className="list-disc list-inside">
                  {data.sub.map((subject, index) => (
                    <li key={index}>{subject}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center mt-4">
                <a
                  href={`mailto:${data.email}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutor;
