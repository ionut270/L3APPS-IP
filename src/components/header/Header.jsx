import React from "react";
import MainComponent from "./MainComponent";
import MenuComponent from "./MenuComponent";

export default function Header(props) {
    return (
        <header>
            <MainComponent />
            <MenuComponent
                page={props.page === "/home" ? "home" : props.page.substr(1)}
            />
        </header>
    );
}
