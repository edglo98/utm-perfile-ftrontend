import React from 'react'
import "./styles.css"
import images from '../../assets/images'

function TechIcon({name, color}) {
    const icons = {
        "JavaScript": images.Javascript,
        "HTML": images.Html,
        "CSS": images.Css,
        "Python": images.Python,
        "C#": images.Csharp,
    }

    return (
        <span
            style={{
                mask: `url(${icons[name]})`,
                maskSize: "cover",
                WebkitMaskImage: `url(${icons[name]})`,
                WebkitMaskSize: "cover",
                backgroundColor: color? color : "#000"
            }}
            className="abilities-tech__item"
        />
    )
}

export default TechIcon


