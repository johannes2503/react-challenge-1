import React from "react"
import css from "./css/Sidebar.module.css"

function Sidebar() {
   return <div className= {css.sidebar} ><a>My Photos,</a><a> My Illustrations,</a><a> & My paintings</a></div>
}

export default Sidebar