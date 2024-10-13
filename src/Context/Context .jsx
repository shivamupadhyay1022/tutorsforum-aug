import { createContext, useState } from "react";
let mylanguage = [];
export const TutorContext = createContext(null)

export const TutorProvider = (props) => {
    const [email,SetEmail] = useState();
    const [password,SetPassword] = useState();
    const [bio,SetBio] = useState();
    const [sub,SetSub] =useState();
    const [aboutclass,SetAboutclasss] = useState();
    const [lang,SetLang] =  useState();
    const [name,SetName] = useState();
    const [city,Setcity] = useState();
    const [states,Setstates] = useState();
    const [lat,Setlat] = useState();
    const [long,Setlong] = useState();
    const [online,Setonline] = useState();
    const [onloc,Setonloc] = useState();

    function setmylanguage(param) {
        mylanguage = param;
    }

    return (
        <TutorContext.Provider value={{
            email,SetEmail,
            password,SetPassword,
            bio,SetBio,
            sub,SetSub,
            aboutclass,SetAboutclasss,
            lang,SetLang,
            name,SetName,
            city,Setcity,
            states,Setstates,
            lat,Setlat,
            long,Setlong,
            online,Setonline,
            onloc,Setonloc,
            mylanguage,setmylanguage}}>
            {props.children}
        </TutorContext.Provider>
    )
}