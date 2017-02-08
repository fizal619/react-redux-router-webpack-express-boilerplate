import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';
import {Provider} from 'react-redux'
import { createStore } from 'redux';
require('./css/style.css')


import reducer from './reducers';


import Screen1 from './Screen1.jsx'
import Screen2 from './Screen2.jsx'
import Screen3 from './Screen3.jsx'

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const Home =(props)=> <div>
												<h1>HOME</h1>
												<Link to="/" >Home?</Link><br/>
												<Link to="/screen1" >screen1</Link><br/>
												<Link to="/screen2" >screen2</Link><br/>
												<Link to="/screen3" >screen3</Link><br/>
												{props.children}
											</div>
	


render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Home} >
				<Route path="/screen1" component={Screen1} />	
				<Route path="/screen2" component={Screen2} />
				<Route path="/screen3" component={Screen3} />
			</Route>
		</Router>
	</Provider>
	, document.getElementById('app'));