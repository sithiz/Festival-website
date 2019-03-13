const express = require('express')
const app = express()
const PORT = 9000
const { Client } = require('pg')
const bodyParser = require('body-parser')
const cors = require('cors')


// let errorMiddleware = function(error){
//     console.log(error.message, 'OH no you broke my cheese')
//     client.end()
// }


var whitelist = ['http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions))


const connectionString = 'postgresql://sithis@localhost:5432/festivities'

const client = new Client({
    connectionString: connectionString,
});

client.connect()

app.post('/', (request,response)=>{
	console.log(request.body.email)
	// let email = JSON.parse(request.body)
	let id = Math.floor(Math.random() * 10000003)
	client.query('INSERT INTO Email_List VALUES (($1),($2))', [id, request.body.email])
        .then((result) => {
            console.log(result)
        }).then(response.end())
})


app.listen(PORT, ()=>{
	console.log('Listening on port: ' + PORT)
})