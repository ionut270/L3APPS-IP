import React from "react";

//layout componet
import Header from "../header/Header";

export default function MainLayout(props) {
    return (
        <div style={{ height: "100%" }}>
            <Header page={props.location.pathname} />
            <main className="main-content">{props.children}</main>
        </div>
    );
}
