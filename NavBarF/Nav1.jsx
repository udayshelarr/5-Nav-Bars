import React from "react";
import Nav1Logo from "./Nav1Logo";
import Nav1menu from "./Nav1menu";
import Nav1Search from "./Nav1Search";

const Nav1=()=>{
    return(
        <>
        <div className="mainBlock">
        <Nav1Logo/>
        <Nav1Search/>
        <Nav1menu/>
        </div>
        </>
    )
}
export default Nav1