import React, { Component } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
	state = { 
		custrate:[],
		custratein:[],
		fromcur: '',
	} 

	//更新App的state
	updateAppState = (stateObj)=>{
		this.setState(stateObj)
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Search updateAppState={this.updateAppState}/>} />
						<Route  path="/list" element={<List {...this.state}/>} />
					</Routes>
				</BrowserRouter>
			</div>
		)
	}
}
