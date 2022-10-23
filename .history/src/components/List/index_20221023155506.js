import React, { Component } from 'react'
import {withRouter} from './withRouter.js'
import './index.css'

 class List extends Component {
	constructor(){
        super()
        this.list=this.list.bind(this);
    }

	list(){
		this.props.navigate('/')
	}

	render(){
		const {custrate,custratein,amount,fruit} = this.props
		console.log(this.props)
		const num=(Number(amount)*Number(custrate)).toFixed(2)
		return (
			<div className="row">
				<p className="card-text">{custrate}</p>
				<h2 style={{color:'red'}}>{amount}</h2>
				<h2 style={{color:'blue'}}>{num}</h2>
				<button button onClick={this.list}>START NEW QUOTE</button>
			</div>
		)
	}
}
export default withRouter(List);
