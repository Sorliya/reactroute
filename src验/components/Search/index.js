import React, { Component } from 'react'
//import PubSub from 'pubsub-js'
import axios from 'axios'
//import { Navigate } from "react-router-dom"

export default class Search extends Component {
	search = ()=>{
		const {keyWordElement:{value:keyWord}} = this
		this.props.updateAppState({amount:keyWord})
		console.log(keyWord)
		axios.get(`https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/AUD/GBP/10000?format=json`).then(
			response => {
				this.props.updateAppState({users:response.data.CustomerRate})
			},
			error => {
				console.log(error);
			}
		)
	}
	
	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
					<button onClick={this.search}>GET QUOTE</button>
				</div>
			</section>
		)
	}
}
