import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

	state = { //初始化状态
		users:[], //users初始值为数组
		//isFirst:true, //是否为第一次打开页面
		//isLoading:false,//标识是否处于加载中
		amount:'',//存储请求相关的错误信息
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
		
		return (
			<div className="row">
				<p className="card-text">{users}</p>
				<h2 style={{color:'red'}}>{amount}</h2>
				<h2 style={{color:'red'}}>{amount*1}*{users*1}</h2>
			</div>
		)
	}
}
