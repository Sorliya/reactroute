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
		const {custrate,custratein,amount,fromcur,tocur, isaus} = this.props
		console.log(this.props)
		const ausnum=(Number(amount)*Number(custrate)).toFixed(2)
		const unsnum=(Number(amount)*Number(custratein)).toFixed(2)
		return (
			<div>
				isaus ? 
				<p className="card-text">{custrate}</p>
				<h2 style={{color:'red'}}>{amount}</h2>
				<h2 style={{color:'blue'}}>{ausnum}</h2> : <p className="card-text">{custratein}</p>
				<h2 style={{color:'red'}}>{amount}</h2>
				<h2 style={{color:'blue'}}>{unsnum}</h2>
				<button button onClick={this.list}>START NEW QUOTE</button>
			</div>
		)
	}
}
export default withRouter(List);
