import React from 'react';
import classes from './details.module.css';

class Details extends React.Component {
    constructor(props) {
        // console.log("Details", props.location.state);
        super(props);
        this.state = {
            data: this.props.location.state,
        }
    }

    render () {
        console.log(this.state.data.image);
        return (
            <div className={classes.product_holder}>
                <div className={classes.product_upper}>
                    <img src={this.state.data.image} alt="" />
                    <div>
                        <h1>{this.state.data.name}</h1>
                        <h5>{this.state.data.short_description}</h5>
                    </div>
                </div>

                <div className={classes.product_lower}>
                    <div className={classes.info_holder}>
                        <ul>
                            {this.state.data.bullet_description.map((bullet) => (
                                <li>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className={classes.buy}>
                        <h3>Price: {this.state.data.cost}</h3>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;