import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from './withRouter.js'
import { Form } from 'react-bootstrap';

class Search extends Component { 
	constructor(){
        super()
        this.search=this.search.bind(this);
		this.state = {
			fromcur: "",
		  };
	  
		  this.handleChange = this.handleChange.bind(this);
    }

	search = ()=>{
		const {amountElement:{value:amount}} = this
		this.props.updateAppState({amount})
		console.log(amount)
		axios.get(`https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/AUD/GBP/10000?format=json`).then(
			response => {
				this.props.updateAppState({custrate:response.data.CustomerRate, custratein:response.data.CustomerRateInverse})
			},
			error => {
				console.log(error);
			}
		)
		this.props.navigate("/list")
	}
	handleChange(e) {
		console.log("Fruit Selected!!");
		this.setState({ fromcur: e.target.value });
		this.props.updateAppState({fromcur:e.target.value})
	  }
	
	
	render() {
		const options = [{label: "please",value: "please"},
						{label: "Australian Dollor[AUD]",value: "Australian Dollor[AUD]"},
						{label: "United States Dollor[AUD]",value: "United States Dollor[AUD]"},];
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">Quick Quote</h3>
				<div>
					<input ref={c => this.amountElement = c} type="text" placeholder="$250"/>&nbsp;
				</div>
				<div className="select-container">
					<select value={this.state.fromcur} onChange={this.handleChange}>
						{options.map((option) => (
						<option value={option.value}>{option.label}</option>
						))}
					</select>
				</div>
				<button onClick={this.search}>GET QUOTE</button>
			</section>
		)
	}
}
export default withRouter(Search);
