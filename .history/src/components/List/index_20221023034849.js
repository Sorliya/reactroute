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
		const {users,amount} = this.props
		console.log(this.props)
		const num=(Number(amount)*Number(users)).toFixed(2)
		return (
			<div className="row">
				<p className="card-text">{users}</p>
				<h2 style={{color:'red'}}>{amount}</h2>
				<h2 style={{color:'blue'}}>{num}</h2>
				<button button onClick={this.list}>START NEW QUOTE</button>
			</div>
		)
	}
}
export default withRouter(List);
