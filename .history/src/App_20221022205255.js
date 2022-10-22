import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Routes, Switch} from 'react-router-dom'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/search" element={<Search/>} />
					<Route exact path="/list" element={<List/>} />
				</Switch>
			</Router>
		)
	}
}
