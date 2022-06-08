const express = require('express')
const mongoose = require('mongoose')
const app = express()
//creating a app server

//mapping the user api route
app.use('/user',require('./router/user'))

//connect to db
mongoose.connect(process.env.MONGODB, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	console.log("DB connection successful!");
	const server = app.listen(port, () => {
		console.log(`App running on port ${port}`);
	});
}).catch((error) => {
	console.log(error);
});