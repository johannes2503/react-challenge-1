import React from "react"
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         message: "Hello, guest!",
         buttonText: "Log in",
      };
   }

   handelClick() {
      this.setState((prevState, prevProps) => {
         return {
            message:
               prevState.message === "Hello, guest!" ? "Welcome back, user" : "Hello, guest!",
            buttonText: prevState.buttonText === "Log in" ? "Log out" : "Log in",
          };

      });
   
   };

   render() {
      return (
         <div  className= {css.NavBar}  >
            <h1>My Gallery</h1>
            <span onClick={() => this.handelClick()} >{this.state.message}</span>
            <button onClick={() => this.handelClick()} >{this.state.buttonText}</button>
            
         </div>
         
      );
   };
}

export default NavBarSimple