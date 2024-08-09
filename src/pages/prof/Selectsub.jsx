import React, { useState } from "react";
let myArray = [];

function Selectsub() {
  let [selectPhysics, setSelectPhysics] = useState(true);
  let [selectMaths, setSelectMaths] = useState(true);
  let [selectBio, setSelectBio] = useState(true);
  let [selectChem, setSelectChem] = useState(true);

  const addSubject = (subject) => {
    myArray.push(subject);
    console.log(myArray);
  };

  const removeSubject = (subject) => {
    myArray = myArray.filter((myArray) => myArray !== subject);
    console.log(myArray);
  };

  return (
    <div className="bg-gradient-to-br from-white  to-[#ffded5]" >
        <div className="flex mx-4 mt-2">
        <p className="text-lg font-semibold text-indigo-950">tutorsforum</p>
      </div>
    <div className=" h-[95vh] flex flex-col justify-center items-center ">
      
      <div className="flex flex-col md:flex-row items-center justify-center mx-8 md:space-x-8 mt-16 md:mx-[18vw] xl:mx-[24vw]">
        {/* left  */}
        <div className="flex flex-col space-y-6 items-start justify-start">
          <p className="text-2xl font-serif text-indigo-900 font-semibold">
            Choose Subject you would like to teach
          </p>
          <p className="text-lg font-medium">
            Choose from the list the subjects you would like to teach
          </p>
          
        </div>

        {/* right */}
        <div className="flex flex-col justify-center items-center my-8">
          <div>
            {/* opted */}
            <div className="mb-2 mt-2">
              <label className="mb-2 block text-2xl font-medium text-[#07074D]">
                You Teach
              </label>
              {myArray.map((element, index) => {
                return (
                  <div key={index}>
                    <ul className="flex w-max">
                      <li className="flex flex-row w-max">• {element}</li>
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* choose */}
            <div>
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Subjects
              </label>
              <div className="flex-wrap md:flex-row gap-2">
                <button
                  className="my-2 w-64 btn flex flex-row justify-between "
                  style={{
                    background: selectMaths === false ? "#1565C0" : "#ffffff",
                    color: selectMaths === false ? "#ffffff" : "#000000",
                  }}
                  onClick={() => {
                    setSelectMaths(!selectMaths);
                    if (selectMaths) {
                      addSubject("Maths");
                    } else {
                      removeSubject("Maths");
                      console.log(myArray);
                    }
                  }}
                >
                  Maths{" "}
                  {selectMaths === false ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                    </svg>
                  )}
                </button>
                <button
                  className="my-2 w-64 btn flex flex-row justify-between "
                  style={{
                    background: selectChem === false ? "#1565C0" : "#ffffff",
                    color: selectChem === false ? "#ffffff" : "#000000",
                  }}
                  onClick={() => {
                    setSelectChem(!selectChem);
                    if (selectChem) {
                      addSubject("Chemistry");
                    } else {
                      myArray = myArray.filter(
                        (myArray) => myArray !== "Chemistry"
                      );
                      console.log(myArray);
                    }
                  }}
                >
                  Chemistry{" "}
                  {selectChem === false ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                    </svg>
                  )}
                </button>
                <button
                  className="my-2 w-64 btn flex flex-row justify-between "
                  style={{
                    background: selectPhysics === false ? "#1565C0" : "#ffffff",
                    color: selectPhysics === false ? "#ffffff" : "#000000",
                  }}
                  onClick={() => {
                    setSelectPhysics(!selectPhysics);
                    if (selectPhysics) {
                      addSubject("Physics");
                    } else {
                      myArray = myArray.filter(
                        (myArray) => myArray !== "Physics"
                      );
                      console.log(myArray);
                    }
                  }}
                >
                  Physics{" "}
                  {selectPhysics === false ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                    </svg>
                  )}
                </button>
                <button
                  className="my-2 w-64 btn flex flex-row justify-between "
                  style={{
                    background: selectBio === false ? "#1565C0" : "#ffffff",
                    color: selectBio === false ? "#ffffff" : "#000000",
                  }}
                  onClick={() => {
                    setSelectBio(!selectBio);
                    if (selectBio) {
                      addSubject("Bio");
                    } else {
                      myArray = myArray.filter((myArray) => myArray !== "Bio");
                      console.log(myArray);
                    }
                  }}
                >
                  Bio{" "}
                  {selectBio === false ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Selectsub;
