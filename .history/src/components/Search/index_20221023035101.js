import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from './withRouter.js'

class Search extends Component {
	constructor(){
        super()
        this.search=this.search.bind(this);
    }

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
		this.props.navigate("/list")
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
export default withRouter(Search);
