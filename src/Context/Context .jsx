import { createContext, useState } from "react";

export const TutorContext = createContext(null)

export const TutorProvider = (props) => {
    const [email,SetEmail] = useState();
    const [password,SetPassword] = useState();
    const [bio,SetBio] = useState();
    const [sub,SetSub] =useState();
    const [aboutclass,SetAboutclasss] = useState();
    const [lang,SetLang] =  useState();
    return (
        <TutorContext.Provider value={{
            email,SetEmail,
            password,SetPassword,
            bio,SetBio,
            sub,SetSub,
            aboutclass,SetAboutclasss,
            lang,SetLang}}>
            {props.children}
        </TutorContext.Provider>
    )
}