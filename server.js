'use strict'
/* 
	Fallback server for supporting browserHistory
	in your React application. 
*/


//instatiate path and express
const express = require('express')
const path = require('path')
const app = express()

//use the public folder as the static directory. 
app.use( express.static(path.join(__dirname, 'public')));

//send any route to index.html where the react app is mounted
app.get('*', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/index.html'))
})

app.listen(3000,()=>console.log('running on localhost:3000'))