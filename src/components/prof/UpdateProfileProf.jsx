import React, { useState } from "react";
import Profdashnav from "../../components/prof/Profdashnav";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
let mylang = [];
let myArray = [];
let myloc = [];

function UpdateProfileProf() {
  let [eng, setEng] = useState(true);
  let [hindi, setHindi] = useState(true);
  let [odia, setOdia] = useState(true);

  let [selectPhysics, setSelectPhysics] = useState(true);
  let [selectMaths, setSelectMaths] = useState(true);
  let [selectBio, setSelectBio] = useState(true);
  let [selectChem, setSelectChem] = useState(true);

  const [bio, SetBio] = useState();
  const [sub, SetSub] = useState();
  const [aboutclass, SetAboutclasss] = useState();
  const [lang, SetLang] = useState();
  const [name, SetName] = useState();

  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState("...");
  const [statename, setstatename] = useState("...");
  const [cityname, setcityname] = useState("...");
  const [longitude, setLongitude] = useState("000");
  const [latitude, setLatitude] = useState("000");

  const [online, setonline] = useState(false);
  const [onloc, setonloc] = useState(false);
  const [showdelaytext, setShowDelayedText] = useState(true);

  const addSubject = (subject) => {
    myArray.push(subject);
    console.log(myArray);
  };

  const removeSubject = (subject) => {
    myArray = myArray.filter((myArray) => myArray !== subject);
    console.log(myArray);
  };

  const addLang = (language) => {
    mylang.push(language);
    console.log(mylang);
  };

  const removeLang = (language) => {
    mylang = mylang.filter((mylang) => mylang !== language);
    console.log(mylang);
  };

  const addloc = (language) => {
    myloc.push(language);
    console.log(myloc);
  };

  const removeloc = (language) => {
    myloc = myloc.filter((myloc) => myloc !== language);
    console.log(myloc);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {/* name */}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      {/* About you */}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">About You</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      {/* Subjects */}
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
                myArray = myArray.filter((myArray) => myArray !== "Chemistry");
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
                myArray = myArray.filter((myArray) => myArray !== "Physics");
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
      {/* About Class */}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">About Class</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      {/* Language */}
      {/* opted */}
      <div className="mb-2 mt-2">
        <label className="mb-2 block text-2xl font-medium text-[#07074D]">
          You Teach in
        </label>
        {mylang.map((element, index) => {
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
      <label className="mb-3 block text-base font-medium text-[#07074D]">
        Languages
      </label>
      <div className="flex-wrap md:flex-row gap-2">
        <button
          className="my-2 w-64 btn flex flex-row justify-between "
          style={{
            background: eng === false ? "#1565C0" : "#ffffff",
            color: eng === false ? "#ffffff" : "#000000",
          }}
          onClick={() => {
            setEng(!eng);
            if (eng) {
              addLang("English");
            } else {
              removeLang("English");
              console.log(mylang);
            }
          }}
        >
          English{" "}
          {eng === false ? (
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
            background: hindi === false ? "#1565C0" : "#ffffff",
            color: hindi === false ? "#ffffff" : "#000000",
          }}
          onClick={() => {
            setHindi(!hindi);
            if (hindi) {
              addLang("Hindi");
            } else {
              mylang = mylang.filter((mylang) => mylang !== "Hindi");
              console.log(mylang);
            }
          }}
        >
          Hindi{" "}
          {hindi === false ? (
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
            background: odia === false ? "#1565C0" : "#ffffff",
            color: odia === false ? "#ffffff" : "#000000",
          }}
          onClick={() => {
            setOdia(!odia);
            if (odia) {
              addLang("Odia");
            } else {
              mylang = mylang.filter((mylang) => mylang !== "Odia");
              console.log(mylang);
            }
          }}
        >
          Odia{" "}
          {odia === false ? (
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
      {/* Location */}
      {/* opted */}
      <div className="mb-2 mt-2">
        <label className="mb-2 block text-2xl font-medium text-[#07074D]">
          You Teach at
        </label>
        {myloc.map((element, index) => {
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
          Locations
        </label>
        <div className="flex-wrap md:flex-row gap-2">
          <button
            className="my-2 w-64 btn flex flex-row justify-between "
            style={{
              background: online === true ? "#1565C0" : "#ffffff",
              color: online === true ? "#ffffff" : "#000000",
            }}
            onClick={() => {
              setonline(!online);
              if (!online) {
                addloc("Online");
              } else {
                removeloc("Online");
                console.log(myloc);
              }
            }}
          >
            Online{" "}
            {online === true ? (
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
              background: onloc === true ? "#1565C0" : "#ffffff",
              color: onloc === true ? "#ffffff" : "#000000",
            }}
            onClick={() => {
              setonloc(!onloc);
              if (!onloc) {
                addloc("OnLocation");
              } else {
                myloc = myloc.filter((myloc) => myloc !== "OnLocation");
                console.log(myloc);
              }
            }}
          >
            OnLocation{" "}
            {onloc === true ? (
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
          {!onloc || (
            <div className="flex-col flex gap-y-2">
              <h6>Country</h6>
              <CountrySelect
                onChange={(e) => {
                  setCountryid(e.id);
                  console.log(e.name);
                }}
                placeHolder="Select Country"
              />
              <h6>State</h6>
              <StateSelect
                countryid={countryid}
                onChange={(e) => {
                  setstateid(e.id);
                  setstatename(e.name);
                }}
                placeHolder="Select State"
              />
              <h6>City</h6>
              <CitySelect
                countryid={countryid}
                stateid={stateid}
                onChange={(e) => {
                  console.log(e);
                  setcityname(e.name);
                  setLatitude(e.latitude);
                  setLongitude(e.longitude);
                }}
                placeHolder="Select City"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UpdateProfileProf;
