import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import { useNavigate } from "react-router-dom"
import './index.css'

export default class List extends Component {
	const navigate = useNavigate()
	state = { 
		users:[], 
		amount:'',
	} 

	componentDidMount(){
		this.token = PubSub.subscribe('atguigu',(_,stateObj)=>{
			this.setState(stateObj)
		})
	}

	componentWillUnmount(){
		PubSub.unsubscribe(this.token)
	}

	render() {
		const {users, amount} = this.state
		//const navigate = useNavigate()
		const num=(Number(amount)*Number(users)).toFixed(2)
		return (
			<div className="row">
				<p className="card-text">{users}</p>
				<h2 style={{color:'red'}}>{amount}</h2>
				<h2 style={{color:'blue'}}>{num}</h2>
				<button
					onClick={() => {
						this.navigate("/search")
					}}>START NEW QUOTE</button>
			</div>
		)
	}
}
