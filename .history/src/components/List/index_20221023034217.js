import React, { Component } from 'react'
//import PubSub from 'pubsub-js'
//import { useNavigate } from "react-router-dom"
import './index.css'

export default class List extends Component {
	render(){
		const {users,amount} = this.props
		console.log(this.props)
		const num=(Number(amount)*Number(users)).toFixed(2)
		return (
			<div className="row">
				<p className="card-text">{users}</p>
				<h2 style={{color:'red'}}>{amount}</h2>
				<h2 style={{color:'blue'}}>{num}</h2>
				<button
					>START NEW QUOTE</button>
			</div>
		)
	}
}

