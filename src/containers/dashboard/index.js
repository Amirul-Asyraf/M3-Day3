import React from 'react';
import {products} from '../../productData';
import { Link } from 'react-router-dom';
import Catalogue from '../../components/catalogue';

import classes from './dashboard.module.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    render () {
        return (
            <>
                <div className={classes.title}>
                    <h1>Car Catalogue</h1>
                    <Link to="/create" style={{textDecoration: 'none', color: 'black'}}><span>+ Create New Product</span></Link>
                    <form>
                        <input 
                            id="search"
                            type="text" 
                            placeholder="Search for keyword"
                            onChange={(searchval) => {
                                this.setState({ search : searchval.target.value });
                            }}    
                        />
                        <button>Search</button>
                    </form>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap"}}>
                    { products.map((list) => {
                        var searchTerm = new RegExp(this.state.search, 'gi');

                        if(list.name.match(searchTerm) !== null || this.state.search === '') {
                            return(
                                <Catalogue carData={list} link={list.id} name={list.name} image={list.image} short_desc={list.short_description} bullet_desc={list.bullet_description} cost={list.cost}/>     
                            )    
                        }
                    })}
                </div>
            </>
        );
    }
}

export default Dashboard;