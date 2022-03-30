import react from "react";
// import myImage from "../../src/images/Logo.svg"
import myImage from "../images/Logo.svg"

export default function Header() {
    return(
        <header className="header">
            <img src={myImage} /> 
            <h4 className="header--project">React Course - project3</h4>
        </header>
    )
}