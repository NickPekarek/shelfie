import React, { Component } from 'react';
import axios from 'axios'
import noImage from '../../assets/noImage.png';
import '../../style/Form.css';

import { withRouter } from 'react-router-dom';



class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            id:'',
            name:'',
            price:0,
            img:noImage,
            edit: false
        }

        this.handleUrlChange = this.handleUrlChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.resetState = this.resetState.bind(this)
        this.handleAddToInventory = this.handleAddToInventory.bind(this)
        this.handleEditProduct = this.handleEditProduct.bind(this)
    }

   
    componentDidMount(){
     
        let { id } = this.props.match.params;
        if (id) {
            axios.get(`http://localhost:4000/api/product/${id}`)
              .then(res => {
                this.setState({ ...res.data[0], edit:true })
                console.log(res.data)
                console.log(this.state)
            })
        }
    }
    
 


    handleUrlChange(url){
        let img= new Image();
        img.onload = _ => this.setState({ img: url });
        img.onerror = _ => this.setState({ img: noImage });
        img.src = url;
      }
        

    handleNameChange(event){
        this.setState({name: event.target.value})
        console.log(this.state.name)
    }

    handlePriceChange(event){
        this.setState({price: event.target.value})
        console.log(this.state.price)
    }

    resetState(){
        this.setState({name: '', img: noImage, price:0, edit:false})
        this.props.history.push('/add');
    }

    handleAddToInventory(){
        let newProduct = {
            name: this.state.name,
            price: this.state.price,
            img: this.state.img
        }
        if(newProduct.name){
            axios.post('http://localhost:4000/api/product', newProduct)
            .then(res => {
                this.props.history.push('/');
        })
            .catch(err => console.log('there is a create error', err))
        } else {
        console.log('Product needs a name!');
        }
    }
    
    handleEditProduct(){
        let productToEdit = {
            id: this.state.id,
            name: this.state.name,
            price: this.state.price,
            img: this.state.img
        }
        if (productToEdit.name){
            axios.put(`http://localhost:4000/api/product/${productToEdit.id}`,productToEdit)
            .then(res => {this.props.history.push('/'), console.log(`product ${productToEdit.id} sucessfully edited`
        )})
        }else{
            console.log('Product needs a name!');
        }
    }    
        
    

    
    render(){ console.log(this.state)
    return(    
        <div className='form'> 

            <img className="formImage" src={this.state.img} alt={this.state.name}/> <br></br>

            <p>Image URL:</p>
            <input  onChange={e => this.handleUrlChange(e.target.value)} /><br></br>

            <p>Product Name:</p>
            <input onChange={this.handleNameChange} value={this.state.name}/><br></br>

            <p>Price:</p>
            <input onChange={this.handlePriceChange} value={this.state.price}/><br></br>
            
            <div className = 'formButtons'>
                <button onClick={this.resetState}>Cancel</button>
                {this.state.edit
                    ? <button  onClick={this.handleEditProduct}>Save Changes</button>
                    : <button onClick={this.handleAddToInventory}>Add to Inventory</button>
                } 



            </div>

        </div>
    )}
}

export default withRouter(Form);