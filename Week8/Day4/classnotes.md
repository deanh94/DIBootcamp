npm i knex express pg cors
npm i --save-dev nodemon
const exp = require('express);
const cors = require('cors);   //to extract info from foreign API
const knex = require('knex); 

const db = knex({
     client:'pg',
     connection: {
	 host: '127.0.0.1',
	post: ' ',
	user: 'postgres',
	password: '123456',
	database: 'dvdrental'
}
})
**names should match in hiroko and file

const app = exp();
app.use(cors());

app.get('/countries', (req,res)=>{
	getCountries()
	.then(result => {
	res.send(result)
})
.catch(err => {
	res.send([])
})
const getCountries = () => {
	return db('country')
	.select('country', 'country_id')
	.orderBy('country');
}
app.listen(4000);