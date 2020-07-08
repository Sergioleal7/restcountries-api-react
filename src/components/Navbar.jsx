import React from 'react';
import '../assets/styles/Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div className='Navbar'>
                <h2>Where in the world?</h2>
                <a href="/"><h5>Dark mode</h5></a>
            </div>
            </React.Fragment>
        )
    }

}

export default Navbar 