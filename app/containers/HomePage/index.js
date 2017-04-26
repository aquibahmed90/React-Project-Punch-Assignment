		/*
		 * HomePage
		 *
		 * This is the first thing users see of our App, at the '/' route
		 *
		 * NOTE: while this component should technically be a stateless functional
		 * component (SFC), hot reloading does not currently support SFCs. If hot
		 * reloading is not a necessity for you then you can refactor it and remove
		 * the linting exception.
		 */

		import React, {Component} from 'react';
		import { FormattedMessage } from 'react-intl';
		import messages from './messages';

		export default class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function

		constructor(props){

			super(props)
			this.loginRequest=this.loginRequest.bind(this)
		}


		loginRequest(){


			var email=this.refs.username.value
			var password=this.refs.password.value
			var params="x-stellar-email=testuser@testes.com&x-stellar-password=testpass"

			var xhttp = new XMLHttpRequest()
		    xhttp.open("GET", "https://api.livingstellar.com/auth", false)
		    xhttp.setRequestHeader("Content-type", "application/json")
		    xhttp.setRequestHeader("x-stellar-email", email)    
			xhttp.setRequestHeader("x-stellar-admin-password", password) 
		    xhttp.send()
		    var response = JSON.parse(xhttp.response)
		   
		  

		    if (response.status =="success") {
		    	this.props.router.push('/ListPage')
		    }
		    else{
		    	alert("wrong email or password")
		    }
			}

		  render() {

		  	
		    return (
		     
		<div>
		    
		    

		  <div className="container">
		    <label><b>Username</b></label>
		    <input type="text" placeholder="Enter Username" ref="username"  required/>

		    <label><b>Password</b></label>
		    <input type="password" placeholder="Enter Password" ref="password"  required/>

		    <button type="submit" onClick={this.loginRequest}>Login</button>

		  </div>

		  <div className="container" >
		    <button type="button" className="cancelbtn">Cancel</button>
		    <span className="psw">Forgot <a href="#">password?</a></span>
		  </div>


		</div>
		    );
		  }
		}
