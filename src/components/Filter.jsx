import React from 'react';
import '../assets/styles/Filter.css';

class Filter extends React.Component {
    render(){
        return (
        <React.Fragment>
            <div className="form-group Filter">
                <select className="form-control" id="exampleFormControlSelect1">
                    <option>Filter by Region</option>
                    <option>Africa</option>
                    <option>America</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>Oceania</option>
                </select>
            </div>
        </React.Fragment>
        )
    }
}

export default Filter