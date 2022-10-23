import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from './withRouter.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import {  Form, Button, Col, Container, Row } from 'react-bootstrap';
import '../index.css';

class Search extends Component { 
	constructor(){
        super()
        this.search=this.search.bind(this);
		this.state = {
			fromcur: "",
			tocur:"",
			isaus:true,
		};

		this.handlefromChange = this.handlefromChange.bind(this);
		this.handletoChange = this.handletoChange.bind(this);
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
	handlefromChange(e) {
		console.log(e.target.value);
		if (e.target.value==='United States Dollor[AUD]'){
			console.log("dao")
			this.setState({ isaus: false});
			this.props.updateAppState({isaus: false})
		}else{
			this.setState({ isaus: true});
			this.props.updateAppState({isaus: true})
		}
		this.setState({ fromcur: e.target.value});
		this.props.updateAppState({fromcur:e.target.value})
	}

	handletoChange(e) {
		console.log("Selected!!");
		this.setState({ tocur: e.target.value});
		this.props.updateAppState({tocur: e.target.value})
	}
	
	
	render() {
		const fromoptions = [{label: "From Currency",value: "From Currency"},
						{label: "Australian Dollor[AUD]",value: "Australian Dollor[AUD]"},
						{label: "United States Dollor[AUD]",value: "United States Dollor[AUD]"},];
		const tooptions = [{label: "To Currency",value: "To Currency"},
						{label: "United States Dollor[AUD]",value: "United States Dollor[AUD]"},
						{label: "Australian Dollor[AUD]",value: "Australian Dollor[AUD]"},];
		return (
			<Container>
				<div class="h4 pb-2 mb-4 text-dark border-bottom border-primary"><h1>Quick Quote</h1></div>
				<div class="border">
                <form class="row g-3">
					<div class="col-md-6">
						<label for="inputEmail4" class="form-label">Email</label>
						<input type="email" class="form-control" id="inputEmail4"></div>
				</form>    

						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">From Currency</label>
							<select value={this.state.fromcur} onChange={this.handlefromChange}>
								{fromoptions.map((option) => (
								<option value={option.value}>{option.label}</option>
								))}
							</select>
						</div>
						<div className="select-container">
							<select class="selectpicker">
								{tooptions.map((option) => (
								<option value={option.value}>{option.label}</option>
								))}
							</select>
						</div>
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">Amount</label>
							<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={c => this.amountElement = c} type="text" placeholder="$250"/>&nbsp;
						</div>
						<Button variant="primary" onClick={this.search}>GET QUOTE</Button>
				</Form>
				</div>
			</Container>
		)
	}
}
export default withRouter(Search);
