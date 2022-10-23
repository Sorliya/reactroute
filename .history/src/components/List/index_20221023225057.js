import React, { Component } from 'react'
import {withRouter} from './withRouter.js'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {  Container } from 'react-bootstrap';

 class List extends Component {
	constructor(){
        super()
        this.list=this.list.bind(this);
    }

	list(){
		this.props.navigate('/')
	}

	render(){
		const {custrate,custratein,amount,fromcur,tocur, isaus} = this.props
		console.log(this.props)
		const ausnum=(Number(amount)*Number(custrate)).toFixed(2)
		const unsnum=(Number(amount)*Number(custratein)).toFixed(2)
		const amountnum=Number(amount).toFixed(2)
		return (
			<Container>
				<div class="h4 pb-1 mb-4 text-dark border-bottom border-primary"><h1>Quick Quote</h1></div>
				<div class="border">
					<div class="text-center">
					{isaus ? (<div>
						<h4>OFX Customer Rate</h4>
						<h1 style={{color:'green'}}>{custrate}</h1>
						<h4 class="text-left">From AUD</h4>
						<h2 style={{color:'blue'}}>{amountnum}</h2>
						<h4 class="text-left">To USD</h4>
						<h2 style={{color:'blue'}}>{ausnum}</h2>
					</div>) : (<div>
						<h4>OFX CustomerRateInverse</h4>
						<h1 style={{color:'green'}}>{custratein}</h1>
						<h4 class="text-left">From AUD</h4>
						<h2 style={{color:'blue'}}>{amountnum}</h2>
						<h4 class="text-left">To USD</h4>
						<h2 style={{color:'blue'}}>{unsnum}</h2>
					</div>)}
					</div>
				<div class="d-grid gap-2 col-6 mx-auto">
						<button class="btn btn-primary" type="button" onClick={this.list}>START NEW QUOTE</button>
				</div>
				</div>
			</Container>
		)
	}
}
export default withRouter(List);
