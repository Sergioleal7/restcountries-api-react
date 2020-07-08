import React from 'react';

class Cards extends React.Component {
    render() {
        return (    
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-title">Population:</p>
                <p className="card-title">Region:</p>
                <p className="card-title">Capital:</p>
            </div>
        </div>
        )
    }
}

export default Cards