import React from 'react';
import '../assets/styles/Container.css';
import Cards from '../components/Cards';
import Search from '../components/Search';
import Filter from '../components/Filter';

class Container extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Container">
                    <div className="row">
                        <div className="col" id='Container__buttons'>
                        <Search/>
                        <Filter />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <Cards />
                        </div>
                        <div className="col-md-3">
                            <Cards />
                        </div>
                        <div className="col-md-3">
                            <Cards />
                        </div>
                        <div className="col-md-3">
                            <Cards />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Container