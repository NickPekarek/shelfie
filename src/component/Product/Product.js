import '../../style/Product.css';
import React from 'react';


import { withRouter } from 'react-router-dom';

function Product( props ) {

    let {id, img, name, price } = props.selection
    return(
            
        <div className="Product">
            <div className="image">
                <img src={img} alt="product"/>
            </div>
            <div className="productInfo">
                <div className="name"><h2>{name}</h2></div>
                <div className="price"><h2>${price}</h2></div>
            </div>
            <div className='productButtons'>
                <button onClick= {()=> props.deleteProduct(id)}>Delete</button>
                <button onClick= {()=> props.history.push(`/edit/${props.selection.id}`)}>Edit</button>
            </div>
        </div>
    )
} 

export default withRouter(Product);