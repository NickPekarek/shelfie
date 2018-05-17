import React, { Component } from 'react';
import axios from 'axios';
import '../../style/Dashboard.css'
import Product from '../Product/Product.js';



const baseUrl = "http://localhost:4000/api/inventory/";

class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state={
          products:[],
        }
        this.deleteProduct = this.deleteProduct.bind(this);
        this.getInventory= this.getInventory.bind(this);
    }
        
    componentDidMount(){
        this.getInventory();
    }
    
    getInventory(){
        axios.get(baseUrl)
        .then( res=> this.setState({ products: res.data }, ()=> console.log(this.state.products)))
     
        console.log('api mounted')
    }

    deleteProduct(id){
        console.log("Inside component delete!");
        axios.delete("http://localhost:4000/api/product/"+id).then( (res) => {
            this.getInventory();
            console.log(res);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render(){
            return(                
                <div className="prod-container" > 
                
                    {this.state.products.map((val)=>{
                    return <Product key = {val.id} deleteProduct = {this.deleteProduct} getInventory={this.getInventory} selection={val} />
                    })}

                </div>
            )
       
           
    }
}

export default Dashboard;