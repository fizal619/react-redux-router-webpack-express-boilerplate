import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  open: () =>
    dispatch({ type: 'button/OPEN' }),
  close: () =>
    dispatch({ type: 'button/CLOSE' }),
});

const Screen1 =(props)=>{ 
	console.log(props)
	// props.open()
	return(
	<div>
		<h1>SCREEN 1</h1>
		<p>{props.isOpen ? "true" : "false"}</p>
		<button onCLick={props.open}>OPEN</button>
		<button onCLick={props.close}>CLOSE</button>
	</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen1);