import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import axios from 'axios'
import { addToCart } from "./actions/cartActions";
import './style.css'
import alternative from '../images/alternative.jpg'

const Books = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books",
      headers: {
        'Accept': 'application/json'
      }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
      }
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const FilteredBooks = event => {
    const value = event.target.value.toLowerCase();
    const filteredBooks = data.filter(prod => (`${prod.title}`.toLowerCase().includes(value)));
    setData(filteredBooks);
  }

  const handleClick = id =>{
        addToCart(id);
      }

  let price = 50;
  let alter = alternative;

  return (
    <div>

      <div className="search-box" ><input  onInput={FilteredBooks} placeholder="Search..."/></div>

      <div className="card-container">
      {loading && (
        <div>
          {" "}
          <h1>Loading...</h1>
        </div>
      )}
      
      {data.map((item)=> (
      <div key={item.id} >
      <div className="card">
      <div><img src={item.cover_image ? item.cover_image : alter} alt="#" width="150" height="200"/></div>
      <div className="card-description">
          <h6>{item.title}</h6>
          <h6>{`Price:${price}$`}</h6>
          <span className="button-32" to="/" onClick={()=>{handleClick(item.id)}}>Add to Cart</span>
      </div>
      </div>
     </div>
      ))}
    </div>
    </div>
  );
}
const mapStateToProps = (state)=>{
  return {
    data: state.data
  }
}
const mapDispatchToProps= (dispatch)=>{
  
  return{
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Books)