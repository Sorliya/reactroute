import React, { Component } from 'react'
import PubSub from 'pubsub-js'
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


/*import React, { useState } from 'react'
import PubSub from 'pubsub-js'
import { useNavigate } from "react-router-dom"
import './index.css'

export default function List () {
	const navigate = useNavigate()
	const [state, setState] = useState({ users:[], amount:'',})
	PubSub.subscribe('atguigu',(_,stateObj)=>{
		setState(stateObj)	

	users = PubSub.subscribe('atguigu',(users:users)=>{setUsers(users)})
	amount = PubSub.subscribe('atguigu',(amount:amount)=>{setAmount(amount)})
	const num=(Number(amount)*Number(users)).toFixed(2)
	const handle = () => {
		localStorage.removeItem('token')
		navigate('/')
	}
		
	return (
		<div className="row">
			<p className="card-text">{users}</p>
			<h2 style={{color:'red'}}>{amount}</h2>
			<h2 style={{color:'blue'}}>{num}</h2>
			<button
				onClick={handle}>START NEW QUOTE</button>
		</div>
	)
}*/