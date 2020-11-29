import React from 'react'
import "./styles.css"

export default function SocialIcons({ icon, color }) {
    return (
        <span
            style={{
                mask: `url(${icon})`,
                maskSize: "cover",
                WebkitMaskImage: `url(${icon})`,
                WebkitMaskSize: "cover",
                backgroundColor: color? color : "#000"
            }}
            className="socialIcons-component"
        />
    )
}
