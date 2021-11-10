import React from 'react';
import classes from './catalogue.module.css';
import {Link} from 'react-router-dom';

class Catalogue extends React.Component {
    render () {
        return (
            <>
                <div className={classes.catalogue_holder}>
                    <div className={classes.catalogue_left} >
                        <img src={this.props.image} alt="" />
                    </div>

                    <div className={classes.catalogue_right}>
                        <h1>{this.props.name}</h1>
                        <p>{this.props.short_desc}</p>
                        <button>
                            {/* <Link to={`/dashboard/${this.props.link}`}>{this.props.cost}</Link> */}
                            <Link to={{
                                pathname:`/dashboard/${this.props.link}`,
                                state: this.props.carData
                            }} style={{ fontSize: 20, textDecoration: 'none'}}>
                                $ {this.props.cost}
                            </Link>
                        </button>

                        <p>(Click the price for more details)</p>
                    </div>
                </div>
                <hr className={classes.solid} />
            </>
        );
    }
}

export default Catalogue;