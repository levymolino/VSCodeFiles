import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import './style.css'

class Details extends Component{

    handleRemove = (id)=>{
        this.props.removeItem(id);
    }

    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.cover_image} alt={item.cover_image} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>Author: {item.author}</p>
                                        <p>Pages: {item.pages}</p>
                                        <p>Pages: {item.releaseDate}</p>
                                        <p><b>Price: {item.price}$</b></p>
                                        <Link to="/" className='button-86' onClick={()=>{this.handleRemove(item.id)}} >Back</Link> 
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>Details:</h5>
                    <ul className="collection">
                        {addedItems}
                        
                    </ul>
                </div>        
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Details)