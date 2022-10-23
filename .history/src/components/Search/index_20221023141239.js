import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from './withRouter.js'

class Search extends Component {
	constructor(){
        super()
        this.search=this.search.bind(this);
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
	
	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">Quick Quote</h3>
				<div>
					<input ref={c => this.amountElement = c} type="text" placeholder="$250"/>&nbsp;
				</div>
				
				<button onClick={this.search}>GET QUOTE</button>
			</section>
		)
	}
}
export default withRouter(Search);
