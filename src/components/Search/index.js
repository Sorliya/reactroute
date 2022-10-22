import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
//import { Navigate } from "react-router-dom"

export default class Search extends Component {
	search = ()=>{
		const {keyWordElement:{value:keyWord}} = this
		PubSub.publish('atguigu',{amount:keyWord})
		axios.get(`https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/AUD/GBP/10000?format=json`).then(
			response => {
				PubSub.publish('atguigu',{users:response.data.CustomerRate})
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


/*import React, { useState} from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function Search () {
	const navigate = useNavigate()
	//获取用户的输入(连续解构赋值+重命名)
	const [amount, setAmount] = useState('')
	//const {keyWordElement:{value:keyWord}} = this
	//发送请求前通知List更新状态
	const handleAmount = (e) => {
		setAmount(e.target.value)
	}
	PubSub.publish('atguigu',{amount:amount})
	//发送网络请求
	axios.get(`https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/AUD/GBP/10000?format=json`).then(
		response => {
			//请求成功后通知List更新状态
			PubSub.publish('atguigu',{users:response.data.CustomerRate})
			//localStorage.setItem('token',response.data.token)
		},
		error => {
			console.log(error);
		}
	)
	
	return (
		<section className="jumbotron">
			<h3 className="jumbotron-heading">搜索github用户</h3>
			<div>
				<input value={amount} onChange={handleAmount} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
				<button onClick={() => navigate('list')}>GET QUOTE</button>
			</div>
		</section>
	)
}*/