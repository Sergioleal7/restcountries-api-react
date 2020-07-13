import React from 'react';
import '../assets/styles/Navbar.css'

class Navbar extends React.Component {
    darkMode(){
        document.querySelector(".Navbar").style.background = " hsl(209, 23%, 22%)";
        document.querySelector(".Navbar").style.color = "white";
        document.querySelector("h5").style.color = "white";
    }
    render() {
        return (
            <React.Fragment>
            <div className='Navbar'>
                <h2>Where in the world?</h2>
                <a id='darkMode' onClick={this.darkMode}><h5>Dark mode</h5></a>
            </div>
            </React.Fragment>
        )
    }

}

export default Navbar 