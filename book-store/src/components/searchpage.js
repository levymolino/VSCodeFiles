import React, { Component } from 'react';
import { findInStore } from './actions/cartActions';
import './style.css'

 class searchPage extends Component{
    constructor() {
        super();
        this.state = {
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
      }
    
      onInputchange(event) {
        this.setState({
          [event.target.book]: event.target.value
        });
      }
    
      onSubmitForm() {
        const id = parseInt(this.state)
        findInStore(id);
      }
    
      render() {
        return (
          <div>
            <div>
              <label>
                Search:
                <input
                  name="books"
                  type="text"
                  value={this.state.books}
                  onChange={this.onInputchange}
                />
              </label>
            </div>
            <div>
                <button onClick={this.onSubmitForm}>Submit</button>
            </div>
          </div>
        );
}}

export default searchPage