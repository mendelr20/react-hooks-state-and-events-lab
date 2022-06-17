import react, { useState }from "react";

export default function Header({dark, handleDarkModeClick}){
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={handleDarkModeClick}>
            {dark ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}