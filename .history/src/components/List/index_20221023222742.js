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
		return (
			<Container>
				<div class="h4 pb-2 mb-4 text-dark border-bottom border-primary"><h1>Quick Quote</h1></div>
				<div class="text-center">
					<div class="card-body">
						<h5 class="card-title">Special title treatment</h5>
						<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
				<div>
					{isaus ? (<div>
						<p className="card-text">{custrate}</p>
						<h2 style={{color:'red'}}>{amount}</h2>
						<h2 style={{color:'blue'}}>{ausnum}</h2>
					</div>) : (<div>
							<p className="card-text">{custratein}</p>
							<h2 style={{color:'red'}}>{amount}</h2>
							<h2 style={{color:'blue'}}>{unsnum}</h2>
					</div>)}
				</div>
				<div class="d-grid gap-2 col-6 mx-auto">
						<button class="btn btn-primary" type="button" onClick={this.list}>START NEW QUOTE</button>
				</div>
			</Container>
		)
	}
}
export default withRouter(List);
