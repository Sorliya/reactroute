import React, { Component } from 'react'
//import { Button, Container } from 'react-bootstrap';
//引入action
import {
	createIncrementAction,
	createIncrementAsyncAction
} from '../../redux/actions/count'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

//定义UI组件
class Count extends Component {

	//加法
	increment = ()=>{
		const {value} = this.selectNumber
		this.props.jia(value*1)
	}
	//异步加
	incrementAsync = ()=>{
		const {value} = this.selectNumber
		this.props.jiaAsync(value*1,500)
	}

	render() {
		//console.log('UI组件接收到的props是',this.props);
		return (
			<div>
				<h1>OFX Customer Rate</h1>
				<h1>RATE</h1>
                <p>From</p>
                <p>AUD: {this.props.ren}</p>
                <p>To</p>
                <p>USD: {this.props.ren}*0.76</p>
				<h2>我是Count组件,下方组件总人数为:</h2>
				<h4>当前求和为：{this.props.count}</h4>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
			</div>
		)
	}
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
	
	state => ({
		count:state.he,
		ren:state.rens[0].age
	}),
	{
		jia:createIncrementAction,
		jiaAsync:createIncrementAsyncAction,
	}
)(Count)

