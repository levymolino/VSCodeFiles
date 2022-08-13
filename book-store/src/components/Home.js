import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from './actions/cartActions'
import './style.css'

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
    render(){
        
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.cover_image} alt={item.title}/>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                        <span className="card-title">{item.title}</span>
                            <p>{`Author : ${item.author}`}</p>
                            <p><b>Price: {item.price}$</b></p>
                            <Link to="/details" onClick={()=>{this.handleClick(item.id)}} className='button-62'>Details</Link>
                        </div>
                 </div>

            )
        })
          
        return(
            <div className="container">
                <h3 className="center">Books</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)