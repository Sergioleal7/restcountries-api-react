import React from 'react';
import '../assets/styles/Search.css';

class Search extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="Search">
                <form className='Search__form'>
                    <div className="form-group">
                         <input type="search" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Search for a country...' />
                     </div>
                </form>
                </div>
            </React.Fragment>
        )

    }
}

export default Search