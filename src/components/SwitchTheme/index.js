import React, { useContext, useEffect } from "react"
import "./styles.css"
import icon from "../../assets/images"
import { ThemeContext } from "../../context/theme";

export default function SwitchTheme () {
    const [ theme , setTheme] = useContext(ThemeContext);

    const onDarkMode = () => {
        document.body.classList.toggle("dark")
        setTheme(!theme)
        if(document.body.classList.contains("dark")){
            localStorage.setItem("dark-mode", `${"true"}`)
        } else{
            localStorage.setItem("dark-mode", `${"false"}`)
        }
    }

    useEffect(()=>{
        if(localStorage.getItem("dark-mode")==="true"){
            setTheme(true)
            document.body.classList.add("dark")
        } else {
            setTheme(false)
            document.body.classList.remove("dark")
        }
    },[setTheme])

    return (
        <button  className={`swtchtheme-button ${theme && "swtchtheme-button__darkBG"}`} onClick={onDarkMode}>
            <span className={`switchtheme-circle ${theme && "swtchtheme-circle_darkX"}`}/>
            <span style={{backgroundImage: `url(${icon.Sun})`}} className="switchtheme-button_img"/>
            <span style={{backgroundImage: `url(${icon.Moon})`}} className="switchtheme-button_img"/>
        </button>
    )
}