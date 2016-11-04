import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';
import Screen3 from './Screen3.js'

const Screen1 =()=> <h1>SCREEN 1</h1>
const Screen2 =()=> <h1>SCREEN 2</h1>
const Home =(props)=> <div>
												<h1>HOME</h1>
												<Link to="/" >Home?</Link><br/>
												<Link to="/screen1" >screen1</Link><br/>
												<Link to="/screen2" >screen2</Link><br/>
												<Link to="/screen3" >screen3</Link><br/>
												{props.children}
											</div>
	


render(
	
		<Router history={browserHistory}>
			<Route path="/" component={Home} >
				<Route path="/screen1" component={Screen1} />	
				<Route path="/screen2" component={Screen2} />
				<Route path="/screen3" component={Screen3} />
			</Route>
		</Router>

	, document.getElementById('app'));