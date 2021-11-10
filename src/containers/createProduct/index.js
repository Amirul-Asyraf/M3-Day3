import React from 'react';
import {products} from '../../productData';
import classes from './createProduct.module.css';

class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // id: '',
            name: '',
            description: '',
            cost: 0,
        }
    }

    submitForm() {
        console.log(this.state);
        products.push(this.state);
        //if data empty -> not allowed to submit
        //array function find()
        //if id exist, not allowed
        console.log('Products', products);
    }

    render() {
        return (
            <div className={classes.form_holder}>
                <h1>Add Products</h1>
                <form action='#'>
                    {/* <label htmlFor="id">ID</label>
                    <input 
                        id="id" 
                        type="text" 
                        placeholder="ID" 
                        onChange={(idval) => {
                            this.setState({ id : idval.target.value });
                        }}
                    />
                    <br /><br /> */}

                    <label htmlFor="name">Name</label><br />
                    <input 
                        id="name" 
                        type="text" 
                        placeholder="Name"
                        onChange={(nameval) => {
                            this.setState({ name : nameval.target.value });
                        }}
                        required
                    />
                    <br /><br />

                    <label htmlFor="description">Desciption</label><br />
                    <input 
                        id="description" 
                        type="text" 
                        placeholder="Desciption"
                        onChange={(descval) => {
                            this.setState({ description : descval.target.value });
                        }}
                        required
                    />
                    <br /><br />

                    <label htmlFor="cost">Cost</label><br />
                    <input 
                        id="cost" 
                        type="text" 
                        placeholder="Cost"
                        onChange={(costval) => {
                            this.setState({ cost : costval.target.value });
                        }}
                        required
                    />
                    <br /><br />

                    <button onClick={() => {this.submitForm()}}>Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateProduct;