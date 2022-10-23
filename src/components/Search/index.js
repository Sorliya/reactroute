import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from './withRouter.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import {  Container } from 'react-bootstrap';
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
		if (e.target.value==='United States Dollor[USD]'){
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
						{label: "United States Dollor[AUD]",value: "United States Dollor[USD]"},];
		const tooptions = [{label: "To Currency",value: "To Currency"},
						{label: "United States Dollor[AUD]",value: "United States Dollor[USD]"},
						{label: "Australian Dollor[AUD]",value: "Australian Dollor[AUD]"},];
		return (
			<Container>
				<div class="h4 pb-2 mb-4 text-dark border-bottom border-primary"><h1>Quick Quote</h1></div>
				<div class="border">
                <form class="row g-3">
					<div class="col-md-6">
						<label for="inputEmail4" class="form-label" className='important'>First Name</label>
						<input type="text" placeholder="First Name" class="form-control" id="inputEmail4"/>
					</div>
					<div class="col-md-6">
						<label for="inputPassword4" class="form-label" className='important'>Last Name</label>
						<input type="text" placeholder="Last Name" class="form-control" id="inputPassword4"/>
					</div>
					<div class="col-12">
						<label for="inputEmail" class="form-label">Email</label>
						<input type="text" class="form-control" id="inputEmail" placeholder="Email"/>
					</div>
					<div><label for="inputEmail" class="form-label">Telephone / Mobile</label></div>
					<div class="input-group mb-3">
						<button type="button" class="btn btn-outline-secondary">+61</button>
						<button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
							<span class="visually-hidden">Toggle Dropdown</span>
						</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" >+61</a></li>
						</ul>
						<input type="text" class="form-control" aria-label="Text input with segmented dropdown button"/>
					</div>
					<div class="col-md-6">
						<label for="inputEmail4" class="form-label" className='important'>From Currency</label>
						<select id="inputState" class="form-select" value={this.state.fromcur} onChange={this.handlefromChange}>
								{fromoptions.map((option) => (
								<option value={option.value}>{option.label}</option>
								))}
						</select>
					</div>
					<div class="col-md-6">
						<label for="inputPassword4" class="form-label" className='important'>To Currency</label>
						<select id="inputState" class="form-select">
								{tooptions.map((option) => (
								<option value={option.value}>{option.label}</option>
								))}
						</select>
					</div>
					<div class="col-md-6">
						<label for="inputPassword4" class="form-label" className='important'>Amount</label>
						<input type="text" placeholder="$250" class="form-control" id="inputPassword4" ref={c => this.amountElement = c}/>
					</div>
				</form>
				<div></div>
				<div class="d-grid gap-2 col-6 mx-auto">
						<button class="btn btn-primary" type="button" onClick={this.search}>GET QUOTE</button>
				</div>
				</div>
			</Container>
		)
	}
}
export default withRouter(Search);
